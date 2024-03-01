import { Box, Button, Fab, Stack, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";

import { useTheme } from "@mui/material/styles";

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
        height="calc(100vh - 3rem)"
        onClick={() => setMeniuActiv(false)}
        direction={!isSmallScreen ? "row" : "column"}
        // justifyContent='space-between'
      >
        <Stack
          md={12}
          xs={12}
          spacing="3rem"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 3rem)"
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
            md={12}
          >
            <Typography variant="h1" fontWeight="bold" color='white'>
              anunturi.
            </Typography>
            <Typography variant="body1" width="80%" color='aliceblue'>
              Bun venit în universul nostru de servicii remarcabile! Aici,
              fiecare clic înseamnă mai mult decât o acțiune simplă – este pasul
              tău către soluții personalizate și experiențe care contează.
              Alătură-te comunității noastre, unde eficiența și simplitatea se
              întâlnesc pentru a transforma nevoile tale în realitate cu doar un
              clic distanță. Hai să facem fiecare serviciu să conteze pentru
              tine!
            </Typography>
          </Stack>
          <Button variant="contained" size="medium" sx={{ width: "20ch" }}>
            Înregistrare
          </Button>
        </Stack>
        <Stack
          md={12}
          xs={12}
          spacing="3rem"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 3rem)"
          bgcolor="red"
        >
          <Stack
            justifyContent="space-around"
            spacing="2rem"
            alignItems="center"
            lg={6}
            md={12}
          >
            <Typography variant="h1" fontWeight="bold" textAlign="center">
              Anunturi.
            </Typography>
            <Typography variant="body1" width="70%">
              Bun venit în universul nostru de servicii remarcabile! Aici,
              fiecare clic înseamnă mai mult decât o acțiune simplă – este pasul
              tău către soluții personalizate și experiențe care contează.
              Alătură-te comunității noastre, unde eficiența și simplitatea se
              întâlnesc pentru a transforma nevoile tale în realitate cu doar un
              clic distanță. Hai să facem fiecare serviciu să conteze pentru
              tine!
            </Typography>
          </Stack>
          <Button variant="contained" size="medium" sx={{ width: "20ch" }}>
            Înregistrare
          </Button>
        </Stack>
      </Stack>
      <Fab
        size="medium"
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", bottom: "2rem", left: "2rem" }}
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
