import React from "react";
import { useState } from "react";

import {
  Box,
  Grid,
} from "@mui/material";


import { useTheme } from "@mui/material";
import Navbar from "../navbar/Navbar";
import ButonTema from "../diverse/ButonTema";

import { useMediaQuery } from "@mui/material";
import RecenziiAnunt from "./RecenziiAnunt";
import CarouselImagini from "./CarouselImagini";
import CardInformatii from "./CardInformatii";
import CardAnunt from "./CardAnunt";

function AnuntPagina() {
  const [meniuActiv, setMeniuActiv] = useState(false);
 
  const theme = useTheme();

  const sub1000px = useMediaQuery("(max-width: 1000px)");

  return (
    <Box bgcolor={theme.palette.background.default}>
      <Navbar meniuActiv={meniuActiv} setMeniuActiv={setMeniuActiv} />
      <Grid container marginLeft="5%" marginRight="5%" width="90%" pt="5rem">
        <Grid
          item
          lg={8}
          sm={!sub1000px ? 8 : 12}
          xs={12}
          marginRight={!sub1000px ? 2 : 0}
          marginBottom={2}
          minHeight="80vh"
        >
          <CarouselImagini />
        </Grid>
        <Grid item lg sm marginBottom={2}>
          <CardInformatii />
        </Grid>
        <Grid item lg={12} mb={2}>
          <CardAnunt />
        </Grid>
        <Grid item lg={12} mb={2}>
          <Box bgcolor={theme.palette.navbar.main} borderRadius={3}>
            <RecenziiAnunt />
          </Box>
        </Grid>
      </Grid>
      <ButonTema />
    </Box>
  );
}

export default AnuntPagina;
