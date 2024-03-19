import React from "react";
import { useState } from "react";

import {
  Modal,
  Box,
  Typography,
  Stack,
  Rating,
  Button,
  useTheme,
  TextField,
} from "@mui/material";

import {useMediaQuery} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";


function ModalRecenzie(props) {
  const theme = useTheme();
  const sub600px = useMediaQuery("(max-width: 600px)");

  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Box
        bgcolor={theme.palette.navbar.main}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: !sub600px?"50ch":"35ch",
          minHeight: "80vh",
          padding: 3,
        }}
        borderRadius={3}
      >
        <Typography fontSize="26px" fontWeight="bold" color={theme.palette.logo.main}>
          Părerea ta
        </Typography>
        <Typography fontSize="14px" color={theme.palette.text1.main}>
          Adresa de email nu o să fie publică. Câmpurile cu * sunt obligatorii.
        </Typography>
        <Stack spacing={2} mt={6}>
          <TextField required id="numeRecenzie" label="Nume" size="small" />
          <TextField
            required
            id="emailRecenzie"
            type="email"
            label="Email"
            size="small"
          />
        </Stack>

        <Stack mt={6} spacing={2}>
          <Stack direction="row" spacing={2}>
            <Typography color={theme.palette.text1.main}>Nivel mulțumire * </Typography>
            <Rating sx={{ color: theme.palette.primary.main }} />
          </Stack>
          <TextField
            required
            id="titluRecenzie"
            label="Titlu"
            size="small"
            sx={{ width: !sub600px?"50ch":"35ch" }}
          />
          <TextField
            placeholder="Descrie experiența ta folosind serviciul..."
            multiline
            sx={{ width: !sub600px?"50ch":"35ch" }}
            rows={4}
            maxRows={4}
          />
        </Stack>
        <Stack direction="row" justifyContent="center" mt={4}>
          <Button
            startIcon={<SendIcon />}
            href="/login"
            sx={{ height: "2rem", width: "30ch" }}
            variant="contained"
          >
            Contactează
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ModalRecenzie;
