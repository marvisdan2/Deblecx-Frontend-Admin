import TrendingUp from "@mui/icons-material/TrendingUp";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import useTheme from "@mui/material/styles/useTheme";
import styled from "@mui/material/styles/styled";
import { alpha } from "@mui/system/colorManipulator";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
// CUSTOM COMPONENTS
import FlexBox from "@/components/flexbox/FlexBox";
import { H6, Paragraph } from "@/components/typography";

// STYLED COMPONENTS
const StyledRoot = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingInline: theme.spacing(3),

  "& .avatar": {
    width: 30,
    height: 30,
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}));

// ==============================================================
interface Props {
  card: {
    id: number;
    title: string;
    trend: number;
    amount: number;
    progress: number;
  };
}
// ==============================================================

export default function CommonCard({ card }: Props) {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    colors: [theme.palette.primary.main],
    chart: { background: "none" },
    plotOptions: {
      radialBar: {
        hollow: { size: "55%" },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 8,
            fontSize: "18px",
            fontWeight: 600,
            formatter: (value) => `+${value}%`,
            color: theme.palette.primary.main,
            fontFamily: theme.typography.fontFamily,
          },
        },
        track: { strokeWidth: "100%", background: theme.palette.primary[100] },
      },
    },
    states: {
      normal: { filter: { type: "none" } },
      hover: { filter: { type: "none" } },
      active: { filter: { type: "none" } },
    },
    stroke: { curve: "smooth", lineCap: "round" },
    theme: { mode: theme.palette.mode },
  };

  return (
    <StyledRoot>
      <div>
        <Paragraph fontWeight={500} color="text.secondary">
          {card.title}
        </Paragraph>

        <H6 fontSize={24}>{card.amount}</H6>

        <FlexBox gap={1} alignItems="center" mt={1}>
          <Avatar className="avatar">
            <TrendingUp fontSize="small" color="inherit" />
          </Avatar>

          <Paragraph fontWeight={500}>+{card.trend}% Inc</Paragraph>
        </FlexBox>
      </div>

      <Chart
        width={120}
        height={150}
        type="radialBar"
        options={chartOptions}
        series={[card.progress]}
      />
    </StyledRoot>
  );
}
