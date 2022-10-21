import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

function About() {
  return (
    <div>
      <Box
        maxWidth="1"
        sx={{
          backgroundColor: "white",
          height: "28 0px",
        }}
      >
        <Typography variant="h2" sx={{ fontStyle: "italic", padding: "30px" }}>
          ABOUT US
        </Typography>
        <Container
          marginLeft={"200px"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" sx={{ color: "black", fontStyle: "italic" }}>
            We are maximisers. We're out on our own journeys to maximise - be
            the best at what we choose and care about the most - whether it be
            our impact, voice, potential, ideas, influence, well-being or more.
            Because when we maximise ourselves in our inclusive teams, Flipkart
            is able to deliver the best imaginable value for our customers,
            stakeholders and the planet!
          </Typography>
        </Container>
      </Box>
    </div>
  );
}

export default About;
