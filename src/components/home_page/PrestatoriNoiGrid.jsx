import React from "react";

import CardAnunt from "./CardAnunt";
import { Grid } from "@mui/material";

function PrestatoriNoiGrid() {
  return (
    <Grid
      container
      marginLeft="5%"
      marginRight="5%"
      width="90%"
      justifyContent="space-around"
      mb={2}
      direction="column"
    >
      <Grid item lg={12} sm={12} xs={12}>
        <CardAnunt />
      </Grid>
      <Grid item lg={12} sm={12} xs={12}>
        <CardAnunt />
      </Grid>
      <Grid item lg={12} sm={12} xs={12}>
        <CardAnunt />
      </Grid>
      <Grid item lg={12} sm={12} xs={12}>
        <CardAnunt />
      </Grid>
      <Grid item lg={12} sm={12} xs={12}>
        <CardAnunt />
      </Grid>
    </Grid>
  );
}

export default PrestatoriNoiGrid;
