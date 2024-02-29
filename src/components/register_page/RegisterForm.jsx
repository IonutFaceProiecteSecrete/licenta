import React from "react";

import {
  Grid,
  Box,
  useMediaQuery,
  Typography,
  Link,
  FormControl,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
  Stack,
  Alert,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

function RegisterForm() {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const [paroleCoincid, setParoleCoincid] = useState(true);

  const theme = useTheme();

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
          sx={{ color: theme.palette.text1.main }}
          // bgcolor="red"
          // marginBottom="0.5rem"
        >
          Înregistrare
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            // backgroundColor: "red",
            marginBottom: "2rem",
          }}
        >
          <Typography
            variant={isSmallScreen ? "caption" : "body2"}
            marginRight="1rem"
            color={theme.palette.mode === "light" ? "grey" : "#DCDCDC"}
          >
            Ești deja membru al comunității noastre?
          </Typography>
          <Link href="/">
            <Typography
              variant={isSmallScreen ? "caption" : "body2"}
              fontWeight="bold"
              sx={{ color: theme.palette.mode.primary }}
            >
              Conectare
            </Typography>
          </Link>
        </Box>
        <Stack direction="row" spacing={1} marginBottom="1rem">
          <TextField
            id="nume_user"
            label="Nume"
            variant="outlined"
            size="small"
            required
          />
          <TextField
            id="prenume_user"
            label="Prenume"
            variant="outlined"
            size="small"
            required
          />
        </Stack>
        <FormControl variant="outlined" sx={{ marginBottom: "1rem" }}>
          <TextField
            id="email_user"
            label="Email"
            variant="outlined"
            size="small"
            required
          />
        </FormControl>
        <Stack direction="row" spacing={1} marginBottom="1rem">
          <TextField
            id="parola_user"
            label="Parola"
            variant="outlined"
            size="small"
            type="password"
            helperText="minim 8 caractere"
            required
          />
          <TextField
            id="confirmare_parola_user"
            label="Confirmare parola"
            variant="outlined"
            size="small"
            type="password"
            required
          />
        </Stack>

        {!paroleCoincid && (
          <Alert
            severity="error"
            variant="filled"
            sx={{ marginBottom: "1rem" }}
          >
            Cele două parole nu coincid.
          </Alert>
        )}
        {paroleCoincid && (
          <Alert
            severity="success"
            variant="filled"
            sx={{ marginBottom: "1rem" }}
          >
            Cele două parole coincid.
          </Alert>
        )}

        <FormControlLabel control={<Checkbox defaultChecked />} label={
            <Typography variant="body2">Sunt de acord cu <Link href="/">termenii și condițiile</Link>.</Typography>
        } sx={{color: theme.palette.text1.main}}/>

        <Box
          // bgcolor="red"
          display="flex"
          justifyContent="center"
          marginBottom="1rem"
        >
          <Button variant="contained" sx={{ width: "30ch" }}>
            Înregistrare
          </Button>
        </Box>

        <Divider sx={{ marginBottom: "1rem", color: theme.palette.text1.main }}>
          SAU
        </Divider>
        <Box
          // bgcolor="red"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginBottom="1rem"
        >
          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            sx={{ width: "35ch", marginBottom: "1rem" }}
            color="error"
          >
            Înregistrare Google
          </Button>
          <Button
            variant="contained"
            startIcon={<FacebookIcon />}
            sx={{ width: "35ch" }}
            color="info"
          >
            Înregistrare Facebook
          </Button>
        </Box>
      </Box>
      {/* <Box bgcolor='red' textAlign='center'>Login</Box> */}
    </Grid>
  );
}

export default RegisterForm;
