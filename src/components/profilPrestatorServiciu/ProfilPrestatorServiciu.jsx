import {
  Typography,
  Box,
  Stack,
  Grid,
  Tabs,
  Tab,
  Rating,
  Link,
} from "@mui/material";

import React from "react";
import Navbar from "../navbar/Navbar";

import { useMediaQuery } from "@mui/material";

import { useState } from "react";
import { useTheme } from "@mui/material";
import ButonTema from "../diverse/ButonTema";

import ProfilBarPrestatorServiciu from "./ProfilBarPrestatorServiciu";
import InformatiiPrestator from "./InformatiiPrestator";
import RecenziiPrestator from "./RecenziiPrestator";
import CardAnuntPrestator from "./CardAnuntPrestator";

function ProfilPrestatorServiciu() {
  const [meniuActiv, setMeniuActiv] = useState(false);
  const theme = useTheme();

  const [valoareTab, setValoareTab] = React.useState("unu");

  const realizeazaSchimbarea = (event, valoareNoua) => {
    setValoareTab(valoareNoua);
  };

  const isSmallScreen = useMediaQuery("(max-width:900px)");

  

  const sub1200px = useMediaQuery("(max-width:1200px)");

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor={theme.palette.background.default}
    >
      <Navbar meniuActiv={meniuActiv} setMeniuActiv={setMeniuActiv} />
      <ProfilBarPrestatorServiciu />
      <Grid container width="90%" mt="1rem" mb="1rem">
        <Grid
          item
          lg={8}
          sm={12}
          p={2}
          bgcolor={theme.palette.navbar.main}
          borderRadius={3}
          marginRight={!sub1200px ? "1rem" : "0rem"}
          marginBottom={sub1200px ? "1rem" : "0rem"}
        >
          <Tabs
            value={valoareTab}
            onChange={realizeazaSchimbarea}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab value="unu" label="Informații" />
            <Tab value="doi" label="Recenzii" />
          </Tabs>
          {valoareTab === "unu" && <InformatiiPrestator />}
          {valoareTab === "doi" && <RecenziiPrestator />}
        </Grid>
        <Grid
          item
          lg
          sm={12}
          p={4}
          bgcolor={theme.palette.navbar.main}
          borderRadius={3}
        >
          <Typography color={theme.palette.logo.main} fontWeight="600" fontSize="18px" mb={2}>
            Anunțuri active
          </Typography>
          <Grid item lg={12}>
            <Link underline="none" href="/pagina_anunt">
              <CardAnuntPrestator />
            </Link>
          </Grid>
          <Grid item lg={12}>
            <Link underline="none" href="/pagina_anunt">
              <CardAnuntPrestator />
            </Link>
          </Grid>
          <Grid item lg={12}>
            <Link underline="none" href="/pagina_anunt">
              <CardAnuntPrestator />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <ButonTema />
    </Box>
  );
}

export default ProfilPrestatorServiciu;
