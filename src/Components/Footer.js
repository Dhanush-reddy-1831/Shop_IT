import React from "react";
import { Grid, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContactPageIcon from "@mui/icons-material/ContactPage";
function Footer() {
  return (
    <>
      <Grid container sx={{ padding: "20px" }}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h5" sx={{ fontStyle: "italic" }}>
            Copyright &copy; 2022 All Rights Reserved by Shop_IT
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ display: "flex" }}>
          <Grid item xs={12} sm={12} md={2}>
            <GoogleIcon />
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <FacebookIcon />
          </Grid>
          <Grid item  xs={12} sm={12} md={2}>
            <InstagramIcon />
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <TwitterIcon />
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <ContactPageIcon />
          </Grid>
          {/* <Grid item md={2}></></Grid> */}
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
