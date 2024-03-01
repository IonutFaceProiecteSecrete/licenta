import React from "react";

import { Stack, IconButton, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
      bgcolor={theme.palette.background.default}
      justifyContent={!isSmallScreen ? "space-between" : "flex-start"}
      alignItems="center"
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
          bgcolor: theme.palette.mode === "light" ? "#d7ecff" : "#00081a",
        }}
      >
        <Button style={{ color: theme.palette.text1.main }} href="/login">
          Conectare
        </Button>
        <Button style={{ color: theme.palette.text1.main }}>
          Caută ajutor
        </Button>
        <Button style={{ color: theme.palette.text1.main }}>
          Misiune și Valori
        </Button>
        <Button style={{ color: theme.palette.text1.main }}>Despre noi</Button>
      </Stack>
      <Link
        href="/"
        style={{
          textDecoration: "none",
          marginLeft: !isSmallScreen ? "2rem" : "0rem",
        }}
      >
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: theme.palette.text1.main,
          }}
        >
          anunturi.
        </Typography>
      </Link>

      <Stack direction="row" spacing={4} display={isSmallScreen ? "none" : ""}>
        <Button style={{ color: theme.palette.text1.main }}>
          Caută ajutor
        </Button>
        <Button style={{ color: theme.palette.text1.main }}>
          Misiune și Valori
        </Button>
        <Button style={{ color: theme.palette.text1.main }}>Despre noi</Button>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        marginRight="2rem"
        display={isSmallScreen ? "none" : ""}
      >
        <Button
          startIcon={<PersonIcon />}
          href="/login"
          sx={{ height: "2rem", color: theme.palette.primary.main }}
        >
          Conectare
        </Button>
        <Button
          startIcon={<AddIcon />}
          sx={{ height: "2rem", color: theme.palette.primary.main }}
          href="/register"
        >
          Înregistrare
        </Button>
      </Stack>
    </Stack>
  );
}

export default Navbar;
