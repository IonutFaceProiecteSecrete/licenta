import {
  Avatar,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
  Badge,
  IconButton,
  Tooltip,
  Fab,
  Input,
  Link,
} from "@mui/material";
import React from "react";

import { styled } from "@mui/material/styles";

import { useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ReportIcon from "@mui/icons-material/Report";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import HomeIcon from "@mui/icons-material/Home";
import MoodIcon from "@mui/icons-material/Mood";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

import AddIcon from "@mui/icons-material/Add";
import ButonTema from "../diverse/ButonTema";

function PaginaMesagerie() {
  const theme = useTheme();

  const raspunsStilizare = {
    "&:hover": {
      background: theme.palette.primary.main,
    },
  };

  const mesajStilizare = {
    "&:hover": {
      background: theme.palette.background.default,
    },
  };

  const BadgePersonalizat = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <Box>
      <Grid container>
        <Grid
          item
          lg={4}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          bgcolor={theme.palette.navbar.main}
          sx={{ height: "100vh" }}
          p={4}
          overflow={"hidden"}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography
              color={theme.palette.logo.main}
              fontWeight={"bold"}
              fontSize={"16px"}
            >
              MESAJE
            </Typography>
            <Stack direction="row" spacing={1}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  height: "30px",
                }}
              >
                <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />

                <TextField
                  id="cautaMesagerie"
                  label="Caută"
                  variant="standard"
                  sx={{ width: "15ch" }}
                />
              </Box>
              <Button
                startIcon={<FilterAltIcon />}
                variant="contained"
                sx={{ height: "30px" }}
              >
                Filtre
              </Button>
            </Stack>
          </Stack>
          <Stack>
            <Typography fontSize={"16px"} color={theme.palette.text1.main}>
              Conversații sugerate
            </Typography>
            <List sx={{ maxHeight: "65vh", overflow: "auto" }}>
              <ListItem key={1}>
                <Stack
                  direction={"row"}
                  spacing={2}
                  p={1}
                  alignItems={"center"}
                  sx={mesajStilizare}
                >
                  <Avatar />
                  <Stack>
                    <Typography
                      fontSize={"16px"}
                      fontWeight="bold"
                      color={theme.palette.logo.main}
                    >
                      Nume Prenume
                    </Typography>
                    <Typography
                      fontSize={"14px"}
                      color={theme.palette.text1.main}
                    >
                      acesta este ultimul mesaj primit si vor...
                    </Typography>
                  </Stack>
                </Stack>
              </ListItem>
              <ListItem key={2}>
                <Stack
                  direction={"row"}
                  spacing={2}
                  p={1}
                  alignItems={"center"}
                  sx={mesajStilizare}
                >
                  <Avatar />
                  <Stack>
                    <Typography
                      fontSize={"16px"}
                      fontWeight="bold"
                      color={theme.palette.logo.main}
                    >
                      Nume Prenume
                    </Typography>
                    <Typography
                      fontSize={"14px"}
                      color={theme.palette.text1.main}
                    >
                      acesta este ultimul mesaj primit si vor...
                    </Typography>
                  </Stack>
                </Stack>
              </ListItem>
              <ListItem key={3}>
                <Stack
                  direction={"row"}
                  spacing={2}
                  p={1}
                  alignItems={"center"}
                  sx={mesajStilizare}
                >
                  <Avatar />
                  <Stack>
                    <Typography
                      fontSize={"16px"}
                      fontWeight="bold"
                      color={theme.palette.logo.main}
                    >
                      Nume Prenume
                    </Typography>
                    <Typography
                      fontSize={"14px"}
                      color={theme.palette.text1.main}
                    >
                      acesta este ultimul mesaj primit si vor...
                    </Typography>
                  </Stack>
                </Stack>
              </ListItem>
              <ListItem key={4}>
                <Stack
                  direction={"row"}
                  spacing={2}
                  p={1}
                  alignItems={"center"}
                  sx={mesajStilizare}
                >
                  <Avatar />
                  <Stack>
                    <Typography
                      fontSize={"16px"}
                      fontWeight="bold"
                      color={theme.palette.logo.main}
                    >
                      Nume Prenume
                    </Typography>
                    <Typography
                      fontSize={"14px"}
                      color={theme.palette.text1.main}
                    >
                      acesta este ultimul mesaj primit si vor...
                    </Typography>
                  </Stack>
                </Stack>
              </ListItem>
              <ListItem key={5}>
                <Stack
                  direction={"row"}
                  spacing={2}
                  p={1}
                  alignItems={"center"}
                >
                  <Avatar />
                  <Stack>
                    <Typography
                      fontSize={"16px"}
                      fontWeight="bold"
                      color={theme.palette.logo.main}
                    >
                      Nume Prenume
                    </Typography>
                    <Typography
                      fontSize={"14px"}
                      color={theme.palette.text1.main}
                    >
                      acesta este ultimul mesaj primit si vor...
                    </Typography>
                  </Stack>
                </Stack>
              </ListItem>
              <ListItem key={6}>
                <Stack
                  direction={"row"}
                  spacing={2}
                  p={1}
                  alignItems={"center"}
                >
                  <Avatar />
                  <Stack>
                    <Typography
                      fontSize={"16px"}
                      fontWeight="bold"
                      color={theme.palette.logo.main}
                    >
                      Nume Prenume
                    </Typography>
                    <Typography
                      fontSize={"14px"}
                      color={theme.palette.text1.main}
                    >
                      acesta este ultimul mesaj primit si vor...
                    </Typography>
                  </Stack>
                </Stack>
              </ListItem>
              <ListItem key={7}>
                <Stack
                  direction={"row"}
                  spacing={2}
                  p={1}
                  alignItems={"center"}
                >
                  <Avatar />
                  <Stack>
                    <Typography
                      fontSize={"16px"}
                      fontWeight="bold"
                      color={theme.palette.logo.main}
                    >
                      Nume Prenume
                    </Typography>
                    <Typography
                      fontSize={"14px"}
                      color={theme.palette.text1.main}
                    >
                      acesta este ultimul mesaj primit si vor...
                    </Typography>
                  </Stack>
                </Stack>
              </ListItem>
            </List>
            <Stack direction={"row"} justifyContent={"center"} mt={1}>
              <Fab size="small" color="primary">
                <AddIcon />
              </Fab>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          p={2}
          lg={4}
          bgcolor={theme.palette.background.default}
          sx={{ height: "100vh" }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"} spacing={1}>
              <Box>
                <BadgePersonalizat
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar sx={{ width: "40px", height: "40px" }} />
                </BadgePersonalizat>
              </Box>
              <Stack>
                <Typography
                  fontSize={"14px"}
                  fontWeight={"bold"}
                  color={theme.palette.logo.main}
                >
                  Nume Prenume
                </Typography>
                <Typography fontSize={"12px"} color={theme.palette.text1.main}>
                  online
                </Typography>
              </Stack>
            </Stack>
            <Tooltip title="Raportați utilizatorul">
              <IconButton>
                <ReportIcon sx={{ color: theme.palette.logo.main }} />
              </IconButton>
            </Tooltip>
          </Stack>
          <List
            sx={{
              maxHeight: "70vh",
              overflow: "auto",
            }}
          >
            <ListItem>
              <Stack direction={"row"} justifyContent={"left"}>
                <Stack
                  maxWidth={"50%"}
                  bgcolor={theme.palette.navbar.main}
                  p={1}
                  borderRadius={3}
                  sx={{
                    background: "linear-gradient(to top left, transparent 50%",
                  }}
                >
                  <Typography
                    fontSize={"14px"}
                    pl={1}
                    pt={1}
                    color={theme.palette.text1.main}
                  >
                    Acesta este un mesaj mai lung primi de catre utilizator asa
                    ca trebuie cumva procesat la la la la.
                  </Typography>
                  <Typography
                    fontSize={"12px"}
                    color={theme.palette.text1.main}
                    textAlign={"right"}
                  >
                    Primit la 20:00
                  </Typography>
                </Stack>
              </Stack>
            </ListItem>
            <ListItem>
              <Stack direction={"row"} justifyContent={"right"}>
                <Stack
                  maxWidth={"50%"}
                  bgcolor={theme.palette.navbar.main}
                  p={1}
                  borderRadius={3}
                  sx={{
                    background: "linear-gradient(to top left, transparent 50%",
                  }}
                >
                  <Typography
                    fontSize={"14px"}
                    pl={1}
                    pt={1}
                    color={theme.palette.text1.main}
                  >
                    Acesta este un mesaj mai lung primi de catre utilizator asa
                    ca trebuie cumva procesat la la la la.
                  </Typography>
                  <Typography
                    fontSize={"12px"}
                    color={theme.palette.text1.main}
                    textAlign={"right"}
                  >
                    Primit la 20:00
                  </Typography>
                </Stack>
              </Stack>
            </ListItem>
            <ListItem>
              <Stack direction={"row"} justifyContent={"left"}>
                <Stack
                  maxWidth={"50%"}
                  bgcolor={theme.palette.navbar.main}
                  p={1}
                  borderRadius={3}
                  sx={{
                    background: "linear-gradient(to top left, transparent 50%",
                  }}
                >
                  <Typography
                    fontSize={"14px"}
                    pl={1}
                    pt={1}
                    color={theme.palette.text1.main}
                  >
                    Acesta este un mesaj mai lung primi de catre utilizator asa
                    ca trebuie cumva procesat la la la la.
                  </Typography>
                  <Typography
                    fontSize={"12px"}
                    color={theme.palette.text1.main}
                    textAlign={"right"}
                  >
                    Primit la 20:00
                  </Typography>
                </Stack>
              </Stack>
            </ListItem>
            <ListItem>
              <Stack direction={"row"} justifyContent={"right"}>
                <Stack
                  maxWidth={"50%"}
                  bgcolor={theme.palette.navbar.main}
                  p={1}
                  borderRadius={3}
                  sx={{
                    background: "linear-gradient(to top left, transparent 50%",
                  }}
                >
                  <Typography
                    fontSize={"14px"}
                    pl={1}
                    pt={1}
                    color={theme.palette.text1.main}
                  >
                    Acesta este un mesaj mai lung primi de catre utilizator asa
                    ca trebuie cumva procesat la la la la.
                  </Typography>
                  <Typography
                    fontSize={"12px"}
                    color={theme.palette.text1.main}
                    textAlign={"right"}
                  >
                    Primit la 20:00
                  </Typography>
                </Stack>
              </Stack>
            </ListItem>
            <ListItem>
              <Stack direction={"row"} justifyContent={"left"}>
                <Stack
                  maxWidth={"50%"}
                  bgcolor={theme.palette.navbar.main}
                  p={1}
                  borderRadius={3}
                  sx={{
                    background: "linear-gradient(to top left, transparent 50%",
                  }}
                >
                  <Typography
                    fontSize={"14px"}
                    pl={1}
                    pt={1}
                    color={theme.palette.text1.main}
                  >
                    Acesta este un mesaj mai lung primi de catre utilizator asa
                    ca trebuie cumva procesat la la la la.
                  </Typography>
                  <Typography
                    fontSize={"12px"}
                    color={theme.palette.text1.main}
                    textAlign={"right"}
                  >
                    Primit la 20:00
                  </Typography>
                </Stack>
              </Stack>
            </ListItem>
            <ListItem>
              <Stack direction={"row"} justifyContent={"right"}>
                <Stack
                  maxWidth={"50%"}
                  bgcolor={theme.palette.navbar.main}
                  p={1}
                  borderRadius={3}
                  sx={{
                    background: "linear-gradient(to top left, transparent 50%",
                  }}
                >
                  <Typography
                    fontSize={"14px"}
                    pl={1}
                    pt={1}
                    color={theme.palette.text1.main}
                  >
                    Acesta este un mesaj mai lung primi de catre utilizator asa
                    ca trebuie cumva procesat la la la la.
                  </Typography>
                  <Typography
                    fontSize={"12px"}
                    color={theme.palette.text1.main}
                    textAlign={"right"}
                  >
                    Primit la 20:00
                  </Typography>
                </Stack>
              </Stack>
            </ListItem>
          </List>
          <Stack direction={"row"} justifyContent="center">
            <TextField label="Scrie ceva..." size="small" fullWidth />
            <Button variant="contained" sx={{ width: "20ch" }} size="small">
              Trimite
            </Button>
          </Stack>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          bgcolor={theme.palette.navbar.main}
          sx={{ height: "100vh" }}
          lg={4}
          p={4}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={2}
          >
            <IconButton href="/contulmeu">
              <HomeIcon />
            </IconButton>
            <Link href="/" underline="none">
              <Typography
                fontSize={"16px"}
                color={theme.palette.logo.main}
                fontWeight={"bold"}
                textAlign={"right"}
              >
                anunturi.
              </Typography>
            </Link>
          </Stack>
          <Stack direction={"row"} spacing={1} color={theme.palette.logo.main}>
            <MoodIcon />
            <Typography>Asistentul tău AI este aici să te ajute.</Typography>
          </Stack>
          <Stack
            bgcolor={theme.palette.background.default}
            p={2}
            borderRadius={3}
          >
            <Typography
              fontSize={"16px"}
              color={theme.palette.logo.main}
              mb={1}
            >
              Rezumat conversație:
            </Typography>
            <Typography fontSize={"14px"} color={theme.palette.text1.main}>
              Prețul a fost stabilit la 150 Ron.
            </Typography>
            <Typography fontSize={"14px"} color={theme.palette.text1.main}>
              Prețul a fost stabilit la 150 Ron.
            </Typography>
            <Typography fontSize={"14px"} color={theme.palette.text1.main}>
              Prețul a fost stabilit la 150 Ron.
            </Typography>
          </Stack>
          <Stack direction={"row"} mb={1} spacing={1}>
            <VolumeUpIcon sx={{ color: theme.palette.logo.main }} />
            <Typography fontSize={"16px"} color={theme.palette.logo.main}>
              Conversația încă nu a început. Poți începe să vorbești prin ...
            </Typography>
          </Stack>
          <Stack spacing={1} mb={2}>
            <Stack
              bgcolor={theme.palette.background.default}
              p={2}
              borderRadius={3}
              sx={raspunsStilizare}
            >
              <Typography fontSize={"14px"} color={theme.palette.logo.main}>
                Salut! Am dat peste anunțul tău pe anunturi. și serviciile tale
                mi-au stârnit interesul. Te deranjează să-mi spui mai multe
                despre ce anume te ocupi?
              </Typography>
            </Stack>
            <Stack
              bgcolor={theme.palette.background.default}
              p={2}
              borderRadius={3}
              sx={raspunsStilizare}
            >
              <Typography fontSize={"14px"} color={theme.palette.logo.main}>
                Salut! Am dat peste anunțul tău pe anuturi. și mi-a trezit
                curiozitatea. Ce oferi mai exact?
              </Typography>
            </Stack>
            <Stack
              bgcolor={theme.palette.background.default}
              p={2}
              borderRadius={3}
              sx={raspunsStilizare}
            >
              <Typography fontSize={"14px"} color={theme.palette.logo.main} >
                Hei! Anunțul tău de pe anunturi. pare tare interesant. Te ocupi
                cu ceva anume? Cu ce te ocupi, de fapt?
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            <Button variant="contained">Doresc o înțelegere</Button>
          </Stack>
        </Grid>
      </Grid>
      <ButonTema />
    </Box>
  );
}

export default PaginaMesagerie;
