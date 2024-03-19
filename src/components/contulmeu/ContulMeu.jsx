import React from "react";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Navbar from "../navbar/Navbar";

import { styled } from "@mui/material/styles";

import { useState } from "react";
import ButonTema from "../diverse/ButonTema";

import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";

import CreateIcon from "@mui/icons-material/Create";

import { useTheme } from "@mui/material";

import SideBarContulMeu from "./SideBarContulMeu";

import {useMediaQuery} from "@mui/material";

function ContulMeu() {
  const [meniuActiv, setMeniuActiv] = useState(false);
  const theme = useTheme();

  const sub1200px = useMediaQuery("(max-width:1200px)");
  const sub900px = useMediaQuery("(max-width: 900px)");

  const StilizareBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <Box bgcolor={theme.palette.background.default}>
      {/* <Navbar meniuActiv={meniuActiv} setMeniuActiv={setMeniuActiv} /> */}
      <Grid container lg={12} sm={12}>
        <Grid item lg={3} sm={sub900px?12:3} xs={12}>
          <SideBarContulMeu />
        </Grid>
        <Grid item lg={9} sm={sub900px?12:9} xs={12}>
          <Grid
            container
            lg={12}
            bgcolor={theme.palette.background.default}
            minHeight={"100vh"}
          >
            <Grid item lg={12} sm={12} xs={12}>
              <Stack
                direction="row"
                mt={4}
                pl={5}
                pr={5}
                justifyContent="space-between"
              >
                <Stack direction="row" spacing={1}>
                  <IconButton href="/mesagerie">
                    <StilizareBadge badgeContent={4} color="primary">
                      <MailIcon sx={{ color: theme.palette.logo.main }} />
                    </StilizareBadge>
                  </IconButton>

                  <IconButton>
                    <StilizareBadge badgeContent={4} color="primary">
                      <NotificationsIcon
                        sx={{ color: theme.palette.logo.main }}
                      />
                    </StilizareBadge>
                  </IconButton>
                </Stack>
                <IconButton href="/">
                  <HomeIcon sx={{ color: theme.palette.logo.main }} />
                </IconButton>
              </Stack>
            </Grid>
            <Grid item lg={12} ml={5} sm={12} xs={12} mr={5} mt={2}>
              <Stack
                bgcolor={theme.palette.navbar.main}
                borderRadius={3}
                overflow={"hidden"}
                p={2}
              >
                <Stack
                  direction={"row"}
                  alignItems="center"
                  justifyContent={"space-between"}
                  mb={5}
                >
                  <Typography
                    fontSize={"18px"}
                    fontWeight={"bold"}
                    color={theme.palette.logo.main}
                  >
                    Date Personale
                  </Typography>
                  <Button
                    startIcon={<CreateIcon />}
                    variant="contained"
                    size="small"
                  >
                    Editează
                  </Button>
                </Stack>
                <Stack>
                  <Typography color={theme.palette.logo.main}>
                    Nume:{" "}
                    <span style={{ color: theme.palette.text1.main }}>
                      nume
                    </span>
                  </Typography>
                  <Typography color={theme.palette.logo.main}>
                    Prenume:{" "}
                    <span style={{ color: theme.palette.text1.main }}>
                      prenume
                    </span>
                  </Typography>
                  <Typography color={theme.palette.logo.main}>
                    Email:{" "}
                    <span style={{ color: theme.palette.text1.main }}>
                      email
                    </span>
                  </Typography>
                  <Typography color={theme.palette.logo.main}>
                    Locație:{" "}
                    <span style={{ color: theme.palette.text1.main }}>
                      București
                    </span>
                  </Typography>
                </Stack>
                <Stack mt={2}>
                  <Typography color={theme.palette.logo.main}>
                    Formulă adresare:{" "}
                    <span style={{ color: theme.palette.text1.main }}>
                      Domnul
                    </span>
                  </Typography>
                  <Typography color={theme.palette.logo.main}>
                    Afișează tot numele:{" "}
                    <span style={{ color: theme.palette.text1.main }}>Da</span>
                  </Typography>
                  <Typography color={theme.palette.logo.main}>
                    Status:{" "}
                    <span style={{ color: theme.palette.text1.main }}>
                      client
                    </span>
                  </Typography>
                </Stack>
                <Stack spacing={2} mt={4}>
                  <Button variant="contained" size="small">
                    Vreau să devin prestator de servicii
                  </Button>
                  <Button variant="contained" size="small">
                    Obține toate informațiile despre mine
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item lg={12} sm={12} xs={12} ml={5} mr={5} mt={3}>
              <Stack
                bgcolor={theme.palette.navbar.main}
                borderRadius={3}
                overflow={"hidden"}
                p={2}
              >
                <Stack
                  direction={"row"}
                  alignItems="center"
                  justifyContent={"space-between"}
                  mb={5}
                >
                  <Typography
                    fontSize={"18px"}
                    fontWeight={"bold"}
                    color={theme.palette.logo.main}
                  >
                    Date Prestator Servicii
                  </Typography>
                  <Button
                    startIcon={<CreateIcon />}
                    variant="contained"
                    size="small"
                  >
                    Editează
                  </Button>
                </Stack>
                <Stack>
                  <Typography color={theme.palette.logo.main}>
                    Formă de organizare:{" "}
                    <span style={{ color: theme.palette.text1.main }}>PFA</span>
                  </Typography>
                  <Typography color={theme.palette.logo.main}>
                    Categorie de servicii prestate:{" "}
                    <span style={{ color: theme.palette.text1.main }}>
                      Sănătate
                    </span>
                  </Typography>
                  <Typography color={theme.palette.logo.main}>
                    Companie la care lucrez:{" "}
                    <span style={{ color: theme.palette.text1.main }}>-</span>
                  </Typography>
                  <Typography color={theme.palette.logo.main}>
                    Poziție ocupată în companie:{" "}
                    <span style={{ color: theme.palette.text1.main }}>-</span>
                  </Typography>
                </Stack>
                <Stack mt={2}>
                  <Typography color={theme.palette.logo.main}>
                    Adresă:{" "}
                    <span style={{ color: theme.palette.text1.main }}>Strada x, Bloc x, Apartament x, Nr x</span>
                  </Typography>
                </Stack>
                <Stack mt={2}>
                  <Typography color={theme.palette.logo.main}>
                    Număr anunțuri active:{" "}
                    <span style={{ color: theme.palette.text1.main }}>2</span>
                  </Typography>
                </Stack>
                <Stack spacing={2} mt={4}>
                  <Button variant="contained" size="small">
                    Gestionează anunțuri
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item lg={12} sm={12} xs={12} ml={5} mr={5} mt={3} mb={3}>
              <Stack direction={"row"} spacing={3} justifyContent={"center"}>
                <Button>Schimbă parola</Button>
                <Button variant="contained" color="error">
                  Șterge cont
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ButonTema />
    </Box>
  );
}

export default ContulMeu;
