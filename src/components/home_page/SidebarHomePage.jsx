import React from "react";

import ApartmentIcon from "@mui/icons-material/Apartment";
import AssessmentIcon from "@mui/icons-material/Assessment";

import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";

import { Box, Typography, List, ListItem, Divider, Stack, MenuItem, Button } from "@mui/material";
import {useTheme} from "@mui/material";

function SidebarHomePage() {
  const theme = useTheme();

  const locatii = [
    {
      value: "București",
    },
    {
      value: "Timișoara",
    },
    {
      value: "Cluj",
    },
  ];

  const tipuriServiciu = [
    {
      value: "Servicii de transport și logistică",
    },
    {
      value: "Servicii creative",
    },
    {
      value: "Servicii de sănătate",
    },
    {
      value: "Servicii educaționale",
    },
    {
      value: "Servicii și consultanță IT",
    },
    {
      value: "Servicii auxiliare",
    },
  ];

  return (
    <Box>
      <Typography
        fontSize="16px"
        mb="1rem"
        fontWeight="700"
        color={theme.palette.logo.main}
        pl={4}
        pt={4}
      >
        Tipuri de servicii:
      </Typography>
      <List sx={{ paddingLeft: 5 }}>
        <ListItem sx={{ marginBottom: "1rem" }}>
          <Link underline="none">
            <Typography fontSize="14px" color={theme.palette.navbar.text}>
              Servicii de transport și logistică
            </Typography>
          </Link>
        </ListItem>
        <ListItem sx={{ marginBottom: "1rem" }}>
          <Link underline="none">
            <Typography fontSize="14px" color={theme.palette.navbar.text}>
              Servicii creative
            </Typography>
          </Link>
        </ListItem>
        <ListItem sx={{ marginBottom: "1rem" }}>
          <Link underline="none">
            <Typography fontSize="14px" color={theme.palette.navbar.text}>
              Servicii de sănătate
            </Typography>
          </Link>
        </ListItem>
        <ListItem sx={{ marginBottom: "1rem" }}>
          <Link underline="none">
            <Typography fontSize="14px" color={theme.palette.navbar.text}>
              Servicii educaționale
            </Typography>
          </Link>
        </ListItem>
        <ListItem sx={{ marginBottom: "1rem" }}>
          <Link underline="none">
            <Typography fontSize="14px" color={theme.palette.navbar.text}>
              Servicii și consultanță IT
            </Typography>
          </Link>
        </ListItem>
        <ListItem sx={{ marginBottom: "1rem" }}>
          <Link underline="none">
            <Typography fontSize="14px" color={theme.palette.navbar.text}>
              Servicii auxiliare
            </Typography>
          </Link>
        </ListItem>
      </List>
      <Divider variant="middle"></Divider>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: theme.palette.logo.main,
            marginTop: "1rem",
          }}
        >
          anunturi.
        </Typography>
        <Typography variant="body1" color={theme.palette.text1.main}>
          Caută serviciul potrivit
        </Typography>
        <Stack direction="column" spacing={2} mb="1rem" alignItems="center">
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AssessmentIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              label="Tip Serviciu"
              variant="standard"
              select
              sx={{ width: "20ch" }}
            >
              {tipuriServiciu.map((el) => (
                <MenuItem key={el.value} value={el.value}>
                  {el.value}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <ApartmentIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              label="Oraș"
              variant="standard"
              select
              sx={{ width: "20ch" }}
            >
              {locatii.map((el) => (
                <MenuItem key={el.value} value={el.value}>
                  {el.value}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Button variant="contained" size="small" sx={{ width: "20ch" }}>
            Caută
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default SidebarHomePage;
