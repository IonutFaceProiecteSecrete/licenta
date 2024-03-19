import { Box, Button, Fab, Stack, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";

import { useTheme } from "@mui/material/styles";

import ApartmentIcon from "@mui/icons-material/Apartment";
import AssessmentIcon from "@mui/icons-material/Assessment";

import TextField from "@mui/material/TextField";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import Navbar from "../navbar/Navbar.jsx";

function HomePage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const [meniuActiv, setMeniuActiv] = useState(false);

  return (
    <div className="HomePage">
      <Navbar meniuActiv={meniuActiv} setMeniuActiv={setMeniuActiv} />
      <Stack
        height={!isSmallScreen ? "calc(100vh - 3rem)" : "calc(200vh - 3rem)"}
        onClick={() => setMeniuActiv(false)}
        direction={!isSmallScreen ? "row" : "column"}
        pt="3rem"
        // justifyContent='space-between'
      >
        <Stack
          md={12}
          xs={12}
          spacing={!isSmallScreen ? "3rem" : "6rem"}
          justifyContent="center"
          alignItems="center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://cdn-res.keymedia.com/cdn-cgi/image/f=auto/https://cdn-res.keymedia.com/cms/images/us/035/0311_638239923405594917.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        >
          <Stack
            justifyContent="space-around"
            spacing="2rem"
            alignItems="center"
            lg={6}
            md={6}
          >
            <Typography
              variant={!isSmallScreen ? "h1" : "h2"}
              fontWeight="bold"
              color="white"
            >
              anunturi.
            </Typography>
            <Typography
              variant={!isSmallScreen ? "body1" : "body2"}
              width="80%"
              color="aliceblue"
            >
              Bun venit în universul nostru de servicii remarcabile! Aici,
              fiecare clic înseamnă mai mult decât o acțiune simplă – este pasul
              tău către soluții personalizate și experiențe care contează.
              Alătură-te comunității noastre, unde eficiența și simplitatea se
              întâlnesc pentru a transforma nevoile tale în realitate cu doar un
              clic distanță. Hai să facem fiecare serviciu să conteze pentru
              tine!
            </Typography>
          </Stack>
          <Button
            variant="contained"
            size="medium"
            sx={{ width: "20ch" }}
            href="/register"
          >
            Înregistrare
          </Button>
        </Stack>
        <Stack
          md={6}
          xs={12}
          spacing="3rem"
          justifyContent="center"
          alignItems="center"
          bgcolor={theme.palette.mode === "light" ? "#d7ecff" : "#00081a"}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
          width="100%"
        >
          <Typography variant={!isSmallScreen ? "h3" : "h4"}>
            Caută serviciul potrivit
          </Typography>
          <Stack
            width="100%"
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }} width="100%">
              <AssessmentIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField label="Tip Serviciu" variant="standard" select />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }} width="100%">
              <ApartmentIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField label="Oraș" variant="standard" select />
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Fab
        size="medium"
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: "2rem", left: "2rem", zIndex: "1" }}
        onClick={() => {
          localStorage.setItem(
            "Theme",
            localStorage.getItem("Theme") === "themeLight"
              ? "themeDark"
              : "themeLight"
          );
          window.location.reload(false);
        }}
      >
        {localStorage.getItem("Theme") === "themeLight" ? (
          <DarkModeIcon />
        ) : (
          <LightModeIcon />
        )}
      </Fab>
    </div>
  );
}

export default HomePage;
