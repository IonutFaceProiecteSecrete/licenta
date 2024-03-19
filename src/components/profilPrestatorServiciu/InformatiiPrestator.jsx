import React from "react";

import { Stack, Typography, Divider, Grid, Box } from "@mui/material";
import FotografiePortofoliuPrestator from "./FotografiePortofoliuPrestator";

import {useTheme} from "@mui/material";

function InformatiiPrestator() {
const theme = useTheme();

  return (
    <Stack mt={2} p={2}>
      <Typography fontWeight="600" fontSize="18px" mb={2} color={theme.palette.logo.main}>
        Despre mine
      </Typography>
      <Typography fontSize="14px" mb={2} color={theme.palette.text1.main}>
        Phasellus dictum eleifend arcu, et pulvinar tellus semper sit amet. Nunc
        id lacus tristique, commodo enim a, efficitur tortor. In ut rutrum
        dolor. Aenean vitae augue eget felis ultrices hendrerit. Integer
        malesuada nibh ac felis sodales tristique eget ut ante. Nam maximus
        iaculis elementum. Quisque ac blandit lectus. In eget magna eget tellus
        auctor bibendum. Nulla quis enim eget sem vestibulum ornare quis eget
        tellus. Etiam ac sem fringilla, elementum lorem eu, molestie velit.
        Nullam id nunc augue. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus.
      </Typography>
      <Typography fontSize="14px" mb={2} color={theme.palette.text1.main}>
        Etiam pulvinar, ligula ut imperdiet vehicula, arcu nisi accumsan ligula,
        eu maximus mauris risus id nibh. In at semper turpis, eu pellentesque
        massa. Sed dignissim libero odio, quis lacinia sapien ultrices vehicula.
        Aenean ac quam ligula. Proin a magna ex. Sed pretium iaculis justo, et
        commodo odio gravida vel. Donec commodo feugiat ligula. Aenean magna ex,
        posuere at elementum id, consequat ut felis.
      </Typography>
      <Divider variant="middle" />
      <Typography mt={2} fontWeight="600" fontSize="18px" mb={2} color={theme.palette.logo.main}>
        Portofoliu
      </Typography>
      <Grid container>
        <Grid item lg={4} sm={6} xs={12}>
          <FotografiePortofoliuPrestator />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <FotografiePortofoliuPrestator />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <FotografiePortofoliuPrestator />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <FotografiePortofoliuPrestator />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <FotografiePortofoliuPrestator />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default InformatiiPrestator;
