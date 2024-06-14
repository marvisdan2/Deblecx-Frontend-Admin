import { useState } from "react";
// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useTheme from "@mui/material/styles/useTheme";
// MUI ICON COMPONENT
import Search from "@mui/icons-material/Search";
// CUSTOM DEFINED HOOK
import useNavigate from "@/hooks/useNavigate";
// CUSTOM COMPONENTS
import TabButton from "../TabButton";
import { H6 } from "@/components/typography";
import { FlexBetween, FlexBox } from "@/components/flexbox";
// CUSTOM PAGE SECTION COMPONENTS
import Faq from "../Faq";
import Tickets from "../Tickets";
import Contact from "../Contact";
import Overview from "../Overview";
// CUSTOM UTILS METHOD
import { isDark } from "@/utils/constants";
import { ActiveTab } from "../types";

export default function SupportPageView() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [active, setActive] = useState<ActiveTab>("OVERVIEW");

  const handleChange = (value: ActiveTab) => () => setActive(value);

  return (
    <Box py={3}>
      <Card sx={{ p: 3, mb: 3 }}>
        {/* HEADING AREA */}
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5} lg={4}>
            <Box textAlign="center" minHeight={200}>
              <img src="/static/illustration/support.svg" alt="support" />
            </Box>
          </Grid>

          <Grid item xs={12} md={5} lg={4}>
            <div>
              <H6 mb={2} fontSize={20}>
                How Can We Help You?
              </H6>

              <TextField
                fullWidth
                placeholder="Ask your questions"
                InputProps={{ startAdornment: <Search /> }}
              />
            </div>
          </Grid>
        </Grid>

        {/* TAB BUTTON LIST */}
        <FlexBetween
          p={2}
          mt={4}
          gap={2}
          flexWrap="wrap"
          borderRadius={4}
          bgcolor={isDark(theme) ? "grey.700" : "grey.100"}
        >
          <FlexBox flexWrap="wrap" rowGap={2} columnGap={8}>
            <TabButton
              title="OVERVIEW"
              active={active}
              handleChange={handleChange}
            />
            <TabButton
              title="TICKETS"
              active={active}
              handleChange={handleChange}
            />
            <TabButton
              title="FAQ"
              active={active}
              handleChange={handleChange}
            />
            <TabButton
              title="CONTACT"
              active={active}
              handleChange={handleChange}
            />
          </FlexBox>

          <Button
            size="small"
            onClick={() => navigate("/dashboard/create-ticket")}
          >
            Create Ticket
          </Button>
        </FlexBetween>
      </Card>

      {/* BODY CONTENTS  */}
      {active === "OVERVIEW" && <Overview />}
      {active === "TICKETS" && <Tickets />}
      {active === "FAQ" && <Faq />}
      {active === "CONTACT" && <Contact />}
    </Box>
  );
}
