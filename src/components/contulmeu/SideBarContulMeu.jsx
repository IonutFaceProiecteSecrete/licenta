import React from "react";

import { Stack, Link, Typography, Avatar, useTheme, Button, useMediaQuery } from "@mui/material";

import Brightness1Icon from "@mui/icons-material/Brightness1";


function SideBarContulMeu() {
    const theme = useTheme();
    const sub1200px = useMediaQuery("(max-width:1200px)");

  return (
    <Stack
      bgcolor={theme.palette.navbar.main}
      direction="column"
      minHeight={"100vh"}
      height={"100%"}
    >
      <Link href="/" underline="none">
        <Typography
          color={theme.palette.logo.main}
          fontWeight="bold"
          fontSize="16px"
          paddingLeft={4}
          paddingTop={4}
        >
          anunturi.
        </Typography>
      </Link>

      <Stack alignItems="center">
        <Stack mt={7} alignItems={"center"}>
          <Avatar sx={{ height: "100px", width: "100px", color: "black" }} />
          <Typography
            color={theme.palette.logo.main}
            fontSize={"14px"}
            fontWeight="bold"
            marginTop={2}
          >
            Nume Prenume
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" mt={1}>
            <Brightness1Icon sx={{ color: "green" }} fontSize="10px" />
            <Typography fontSize={"14px"} color={theme.palette.text1.main}>
              online
            </Typography>
          </Stack>
        </Stack>
        <Stack mt={10} spacing={2}>
          <Button sx={{ width: !sub1200px?"40ch":"30ch" }} variant="contained" size="small">
            Informații generale
          </Button>
          <Button sx={{ width: !sub1200px?"40ch":"30ch" }} variant="contained" size="small">
            Anunțuri salvate
          </Button>
          <Button
            sx={{ width: !sub1200px?"40ch":"30ch" }}
            variant="contained"
            size="small"
            disabled
          >
            Statistici
          </Button>
        </Stack>
        <Stack marginTop={15}>
          <Button
            sx={{ width: !sub1200px?"40ch":"30ch" }}
            color="error"
            variant="contained"
            size="small"
          >
            Deconectare
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SideBarContulMeu;
