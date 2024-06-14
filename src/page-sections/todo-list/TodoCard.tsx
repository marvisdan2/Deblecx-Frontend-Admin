import { Draggable } from "react-beautiful-dnd";
// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AvatarGroup from "@mui/material/AvatarGroup";
import LinearProgress from "@mui/material/LinearProgress";
// MUI ICON COMPONENT
import MoreHoriz from "@mui/icons-material/MoreHoriz";
// CUSTOM COMPONENTS
import { H6, Paragraph } from "@/components/typography";
import { FlexBetween, FlexBox } from "@/components/flexbox";

// ==============================================================
interface TodoCardProps {
  id: string;
  title: string;
  index: number;
  date: string | Date;
  description: string;
  statusColor: string;
  author: { name: string; image: string };
}
// ==============================================================

export default function TodoCard({
  id,
  date,
  index,
  title,
  author,
  description,
  statusColor,
}: TodoCardProps) {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => {
        return (
          <Card
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            sx={{ ...provided.draggableProps.style, p: 2, mb: 3 }}
          >
            <FlexBetween>
              <Paragraph fontWeight={600}>July 2, 2020</Paragraph>

              <IconButton sx={{ backgroundColor: "action.selected" }}>
                <MoreHoriz fontSize="small" />
              </IconButton>
            </FlexBetween>

            <Box textAlign="center" pt={6} pb={4}>
              <H6 fontSize={18}>Web Designing</H6>
              <Paragraph mt={0.5}>Prototyping</Paragraph>
            </Box>

            <FlexBetween py={1}>
              <Paragraph fontWeight={600}>Project Progress</Paragraph>
              <Paragraph fontWeight={600}>32%</Paragraph>
            </FlexBetween>

            <LinearProgress
              value={32}
              variant="determinate"
              sx={{
                "& .MuiLinearProgress-bar": { backgroundColor: statusColor },
              }}
            />

            <FlexBetween pt="1.5rem">
              <FlexBox alignItems="center" gap={1}>
                <AvatarGroup max={3}>
                  <Avatar alt="Remy" src="/static/user/user-11.png" />
                  <Avatar alt="Travis" src="/static/user/user-11.png" />
                  <Avatar alt="Travis" src="/static/user/user-11.png" />
                  <Avatar alt="Travis" src="/static/user/user-11.png" />
                </AvatarGroup>
              </FlexBox>

              <Chip label="3 Weeks Left" color="secondary" />
            </FlexBetween>
          </Card>
        );
      }}
    </Draggable>
  );
}
