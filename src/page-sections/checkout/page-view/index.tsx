// MUI
import Grid from "@mui/material/Grid";
// CUSTOM COMPONENTS
import Summery from "../summery";
import CheckoutForm from "../checkout-form";
import { Paragraph } from "@/components/typography";
import SectionTitle from "@/components/section-title";
import HeaderEffect from "@/layouts/root/HeaderEffect";
// STYLED COMPONENTS
import { Heading, StyledContainer } from "./styles";
import { Fragment, useState } from "react";

export default function CheckoutPageView() {
  const [selectedPayment, setSelectedPayment] = useState("card");
  console.log("sisi");

  const activeMethod = (method: string) => selectedPayment === method;
  const handleSelectedPayment = (method: string) => setSelectedPayment(method);

  return (
    <Fragment>
      {/* PAGE HEADING SECTION */}
      <HeaderEffect>
        <Heading>
          <SectionTitle centered title="Checkout" />
          <Paragraph fontSize={18}>
            Complete Your Transaction in Just a Few Clicks.
          </Paragraph>
        </Heading>
      </HeaderEffect>

      <StyledContainer maxWidth="lg">
        <Grid container spacing={3}>
          {/* CHECKOUT FORM SECTION */}
          <Grid item lg={8} md={7} xs={12}>
            <CheckoutForm
              activeMethod={activeMethod}
              handleSelectedPayment={handleSelectedPayment}
            />
          </Grid>

          {/* CHECKOUT SUMMERY SECTION */}
          <Grid item lg={4} md={5} xs={12}>
            <Summery />
          </Grid>
        </Grid>
      </StyledContainer>
    </Fragment>
  );
}
