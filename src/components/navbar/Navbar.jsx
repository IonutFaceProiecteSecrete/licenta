import React from "react";

import { Stack, IconButton, Button, Typography } from "@mui/material";
import Link from "@mui/material/Link";

import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";

import MenuIcon from "@mui/icons-material/Menu";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function Navbar(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  return (
    <Stack
      direction="row"
      height="3rem"
      bgcolor={theme.palette.navbar.main}
      justifyContent={!isSmallScreen ? "space-between" : "flex-start"}
      alignItems="center"
      position='fixed'
      top='0'
      left='0'
      width="100%"
      zIndex= {100}
      style={{boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)"}}
    >
      <IconButton
        style={{
          display: isSmallScreen ? "" : "none",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
        onClick={() => props.setMeniuActiv(!props.meniuActiv)}
      >
        <MenuIcon color={theme.palette.text1.main} />
      </IconButton>
      <Stack
        display={isSmallScreen && props.meniuActiv ? undefined : "none"}
        direction="column"
        position="absolute"
        top="3rem"
        left="0"
        width="100%"
        sx={{
          bgcolor: theme.palette.navbar.backgroundSmall,
        }}
      >
        <Button style={{ color: theme.palette.navbar.textSmall }} href="/login">
          Conectare
        </Button>
        <Button style={{ color: theme.palette.navbar.textSmall }}>
          Înregistrare
        </Button>
      </Stack>
      <Link href="/"
        style={{
          textDecoration: "none",
          marginLeft: !isSmallScreen ? "2rem" : "0rem",
        }}
      >
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: theme.palette.logo.main,
          }}
        >
          anunturi.
        </Typography>
      </Link>

      <Stack
        direction="row"
        spacing={1}
        marginRight="2rem"
        display={isSmallScreen ? "none" : ""}
      >
        <Button
          startIcon={<PersonIcon />}
          href="/login"
          sx={{ height: "2rem"}}
          variant="contained"
        >
          Conectare
        </Button>
        <Button
          startIcon={<AddIcon />}
          sx={{ height: "2rem"}}
          variant="contained"
          href="/register"
        >
          Înregistrare
        </Button>
      </Stack>
    </Stack>
  );
}

export default Navbar;
