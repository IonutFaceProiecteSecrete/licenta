import React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";


import { Stack, Box, Avatar, Typography, Button, Divider } from "@mui/material";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material";

import { useMediaQuery } from "@mui/material";

function ProfilBarPrestatorServiciu() {
  const theme = useTheme();

  const sub1200px = useMediaQuery("(max-width:1200px)");

  return (
    <Stack width="90%" mt="5rem" borderRadius={3} overflow="hidden">
      <Box
        height="10ch"
        sx={{
          height: "10ch",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://cdn.shopify.com/s/files/1/0066/4574/3686/files/Abstract_LinkedIn_Background.png?v=1627912075)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
      <Stack
        bgcolor={theme.palette.navbar.main}
        direction={sub1200px ? "column" : "row"}
        justifyContent="space-around"
        padding={1}
        alignItems={sub1200px?"center":""}
      >
        <Stack direction="row" spacing={sub1200px?2:4}>
          <Avatar
            sx={{
              bgcolor: theme.palette.primary.main,
              height: "150px",
              width: "150px",
              position: "relative",
              top: "-5ch",
              borderWidth: "10px",
              borderStyle: "solid",
              borderColor: theme.palette.navbar.main,
            }}
          >
            I
          </Avatar>
          <Stack>
            <Typography
              fontSize="20px"
              fontWeight="700"
              color={theme.palette.logo.main}
            >
              Nume Prenume
            </Typography>
            <Typography fontSize="14px" mb={2} color={theme.palette.text1.main}>
              nume job @nume_companie
            </Typography>
            <Stack
              borderRadius={1}
              spacing={1}
              direction="row"
              mb={2}
              bgcolor={theme.palette.primary.main}
              height="30px"
              alignItems="center"
              justifyContent="center"
            >
              <LocationOnIcon fontSize="small" sx={{ color: "white" }} />
              <Typography fontSize="14px" textAlign="center" color="white">
                Locatie, România
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Link href="/">
                <MailIcon sx={{ color: theme.palette.text1.main }} />
              </Link>
              <Link href="/">
                <FacebookIcon sx={{ color: theme.palette.text1.main }} />
              </Link>
              <Link href="/">
                <InstagramIcon sx={{ color: theme.palette.text1.main }} />
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={4} alignItems="center" pb={sub1200px?"1rem":"0rem"}>
          {!sub1200px && (
            <Stack
              direction="row"
              bgcolor={theme.palette.navbar.main}
              height="40px"
              padding={2}
              spacing={2}
              borderRadius={3}
              sx={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: theme.palette.elementeDeContur.main,
              }}
            >
              <Stack>
                <Typography
                  fontSize="14px"
                  fontWeight="600"
                  color={theme.palette.logo.main}
                >
                  Adresă
                </Typography>
                <Typography fontSize="14px" color={theme.palette.text1.main}>
                  Strada Nume, Număr xx
                </Typography>
              </Stack>
              <Divider orientation="vertical"></Divider>
              <Stack>
                <Typography
                  fontSize="14px"
                  fontWeight="600"
                  color={theme.palette.logo.main}
                >
                  Tip prestator servicii
                </Typography>
                <Typography fontSize="14px" color={theme.palette.text1.main}>
                  Persoană fizică autorizată
                </Typography>
              </Stack>
            </Stack>
          )}
          <Button
            startIcon={<SendIcon />}
            href="/login"
            sx={{ height: "2rem"}}
            variant="contained"
          >
            Contactează
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ProfilBarPrestatorServiciu;
