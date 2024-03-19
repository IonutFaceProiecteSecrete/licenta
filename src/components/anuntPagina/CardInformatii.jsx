import React from "react";

import { Stack, Typography, Link, Avatar, Rating, Button } from "@mui/material";

import { useTheme } from "@mui/material";
import {useMediaQuery} from "@mui/material";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";

function CardInformatii() {
  const theme = useTheme();

  const sub1000px = useMediaQuery("(max-width: 1000px)");

  const paperStilizare = {
    "&:hover": {
      background: theme.palette.background.default,
    },
  };

  return (
    <Stack
      bgcolor={theme.palette.navbar.main}
      borderRadius={3}
      padding={2}
      minHeight={!sub1000px ? "80vh" : "0vh"}
    >
      <Stack direction="row" spacing={1} mb={2}>
        <Typography fontSize="16px" fontWeight="bold" color={theme.palette.logo.main}>
          PFA
        </Typography>
        <VerifiedUserIcon sx={{ color: theme.palette.primary.main }} />
      </Stack>
      <Link href="/prestator_serviciu" underline="none">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          padding={1}
          sx={paperStilizare}
        >
          <Avatar
            sx={{
              bgcolor: theme.palette.primary.main,
              height: "50px",
              width: "50px",
            }}
          >
            I
          </Avatar>
          <Stack direction="column">
            <Typography
              fontSize="16px"
              fontWeight="bold"
              color={theme.palette.logo.main}
            >
              username
            </Typography>
            <Typography fontSize="14px" color={theme.palette.text1.main}>
              Pe <span style={{ fontWeight: "bold" }}>anunturi.</span> din
              martie 2024
            </Typography>
            <Typography fontSize="14px" color={theme.palette.text1.main}>
              Activ pe 13 martie 2024
            </Typography>
          </Stack>
        </Stack>
      </Link>
      <Stack direction="row" justifyContent="space-between" mt={2}>
        <Typography fontSize="16px" color={theme.palette.text1.main}>
          Excelent
        </Typography>
        <Rating
          value={5}
          sx={{ color: theme.palette.primary.main }}
          size="small"
          readOnly
        />
      </Stack>
      <Stack
        direction="column"
        bgcolor={theme.palette.background.default}
        padding={2}
        marginTop={"2rem"}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <AccountCircleIcon
            sx={{
              color: theme.palette.text1.main,
              height: "50px",
              width: "50px",
            }}
          />
          <Typography fontSize="14px" color={theme.palette.logo.main}>
            Intră în contul tău anunt. sau crează un cont nou pentru a lua
            legătura cu acest prestator de servicii.
          </Typography>
        </Stack>
        <Link
          href="/conectare"
          sx={{
            color: theme.palette.logo.main,
            textDecoration: "underline",
            textUnderlineOffset: "5px",
          }}
          underline="none"
          mt={2}
        >
          <Typography textAlign="center">Intră în cont / Cont nou</Typography>
        </Link>
      </Stack>
      <Button
        startIcon={<SendIcon />}
        href="/login"
        sx={{ marginTop: "2rem" }}
        size="medium"
        variant="contained"
        disabled
      >
        Contactează
      </Button>
      <Link
        href="/prestator_serviciu"
        underline="none"
        display={sub1000px ? "none" : ""}
      >
        <Typography
          fontSize="14px"
          color={theme.palette.logo.main}
          mt={4}
          textAlign="center"
        >
          Mai multe informații despre prestator
        </Typography>
      </Link>
    </Stack>
  );
}

export default CardInformatii;
