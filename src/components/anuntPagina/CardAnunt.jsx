import React from "react";

import { Stack, Box, Typography, Chip } from "@mui/material";
import { useTheme } from "@mui/material";
import {useMediaQuery} from "@mui/material";

function CardAnunt() {
  const theme = useTheme();
  const sub600px = useMediaQuery("(max-width: 600px)");

  return (
    <Stack
      bgcolor={theme.palette.navbar.main}
      borderRadius={3}
      overflow="hidden"
      direction="column"
    >
      <Box m={sub600px ? 1 : 2} p={sub600px ? 1 : 2}>
        <Typography fontSize="14px" color={theme.palette.text1.main} mb={4}>
          Postat astăzi la 16:45
        </Typography>
        <Typography fontSize="32px" color={theme.palette.logo.main}>
          Acesta este titlul unui anunt postat pe platforma.
        </Typography>
        <Typography fontSize="20px" color={theme.palette.logo.main}>
          <span style={{ fontWeight: "bold", fontSize: "32px" }}>150 lei</span>{" "}
          - Prețul este negociabil
        </Typography>
        <Stack mt={2} direction="row" spacing={sub600px ? 1 : 2}>
          <Chip
            label="Serviciu de sănătate"
            variant="outlined"
            sx={{
              width: !sub600px ? "20ch" : "20ch",
              fontSize: sub600px ? "9px" : "14px",
            }}
          />
          <Chip
            label="Reducere"
            variant="outlined"
            sx={{
              width: !sub600px ? "20ch" : "20ch",
              fontSize: sub600px ? "9px" : "14px",
            }}
          />
          <Chip
            label="Oraș"
            variant="outlined"
            sx={{
              width: !sub600px ? "20ch" : "20ch",
              fontSize: sub600px ? "9px" : "14px",
            }}
          />
        </Stack>
        <Typography color={theme.palette.logo.main} fontSize="20px" fontWeight="bold" mt={4}>
          DESCRIERE
        </Typography>
        <Typography fontSize="14px" color={theme.palette.text1.main} mt={2}>
          Phasellus dictum eleifend arcu, et pulvinar tellus semper sit amet.
          Nunc id lacus tristique, commodo enim a, efficitur tortor. In ut
          rutrum dolor. Aenean vitae augue eget felis ultrices hendrerit.
          Integer malesuada nibh ac felis sodales tristique eget ut ante. Nam
          maximus iaculis elementum. Quisque ac blandit lectus. In eget magna
          eget tellus auctor bibendum. Nulla quis enim eget sem vestibulum
          ornare quis eget tellus. Etiam ac sem fringilla, elementum lorem eu,
          molestie velit. Nullam id nunc augue. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus.
        </Typography>
        <Typography fontSize="14px" color={theme.palette.text1.main} mt={2}>
          Phasellus dictum eleifend arcu, et pulvinar tellus semper sit amet.
          Nunc id lacus tristique, commodo enim a, efficitur tortor. In ut
          rutrum dolor. Aenean vitae augue eget felis ultrices hendrerit.
          Integer malesuada nibh ac felis sodales tristique eget ut ante. Nam
          maximus iaculis elementum. Quisque ac blandit lectus. In eget magna
          eget tellus auctor bibendum. Nulla quis enim eget sem vestibulum
          ornare quis eget tellus. Etiam ac sem fringilla, elementum lorem eu,
          molestie velit. Nullam id nunc augue. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus.
        </Typography>
      </Box>
    </Stack>
  );
}

export default CardAnunt;
