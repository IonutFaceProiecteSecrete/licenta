import React from "react";

import {
  Grid,
  Box,
  useMediaQuery,
  Typography,
  Stack,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

function RecuperareParolaForm() {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const [arataParola, setArataParola] = useState(false);

  const theme = useTheme();

  const handleClickArataParola = () =>
    setArataParola((arataParola) => !arataParola);

  return (
    <Grid
      item
      md={5}
      xs={12}
      height="100%"
      // bgcolor="white"
      display="flex"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width={isSmallScreen ? "35ch" : "40ch"}
        // bgcolor="yellow"
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: theme.palette.logo.main }}
          // bgcolor="red"
          marginBottom="1rem"
          textAlign="center"
        >
          Găseșteți contul
        </Typography>
        <Typography variant="body2" mb="1rem" textAlign="center" color={theme.palette.navbar.text}>
          Te rog introdu adresa de email pentru a căuta datele contului
          asociat.
        </Typography>
        <FormControl variant="outlined" sx={{ marginBottom: "2rem" }}>
          <TextField
            id="email_user"
            label="Email"
            variant="outlined"
            size="small"
          />
        </FormControl>

        <Stack direction='row' justifyContent='center' spacing={2}>
          <Button variant="contained" sx={{width: "15ch"}} color='error' href="/login">
            Anulează
          </Button>
          <Button variant="contained" sx={{width: "15ch"}}>
            Caută
          </Button>
        </Stack>
      </Box>
      {/* <Box bgcolor='red' textAlign='center'>Login</Box> */}
    </Grid>
  );
}

export default RecuperareParolaForm;
