import React from "react";

import { Grid, Box, useMediaQuery, Typography, Link, FormControl, TextField, InputLabel, OutlinedInput, InputAdornment, IconButton, FormControlLabel, Checkbox, Button, Divider} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

function LoginForm() {
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
          sx={{color: theme.palette.logo.main}}
          // bgcolor="red"
          // marginBottom="0.5rem"
        >
          Conectare
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
            color= {theme.palette.mode === 'light' ? 'grey' : '#DCDCDC'}
          >
            Îți dorești un cont pe platforma noastră?
          </Typography>
          <Link href="/register" sx={{textDecoration: "none"}}>
            <Typography
              variant={isSmallScreen ? "caption" : "body2"}
              fontWeight="bold"
              sx={{color: theme.palette.primary.main }}
            >
              Cont nou
            </Typography>
          </Link>
        </Box>
        <FormControl variant="outlined" sx={{ marginBottom: "1rem" }}>
          <TextField
            id="email_user"
            label="Email"
            variant="outlined"
            size="small"
          />
        </FormControl>
        <FormControl variant="outlined" sx={{ marginBottom: "1rem" }}>
          <InputLabel htmlFor="parola_user" size="small">
            Parola
          </InputLabel>
          <OutlinedInput
            id="parola_user"
            type={arataParola ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickArataParola}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {arataParola ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            size="small"
            label="Parola"
          />
        </FormControl>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            // backgroundColor: "red",
            marginBottom: "1rem",
            justifyContent: "space-around",
          }}
        >
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={
              <Typography variant={isSmallScreen ? "caption" : "body2"} sx={{color: theme.palette.text1.main}}>
                Ține-mă conectat
              </Typography>
            }
            sx={{color: theme.palette.primary.main}}
          />
          <Link href="/lostpassword" display="flex" alignItems="center" sx={{textDecoration: "none"}}>
            <Typography
              variant={isSmallScreen ? "caption" : "body2"}
              fontWeight="bold"
              sx={{color: theme.palette.primary.main }}
            >
              Ai uitat parola?
            </Typography>
          </Link>
        </Box>
        <Box
          // bgcolor="red"
          display="flex"
          justifyContent="center"
          marginBottom="1rem"
        >
          <Button variant="contained" sx={{ width: "30ch" }}>
            Conectare
          </Button>
        </Box>

        <Divider sx={{ marginBottom: "1rem", color: theme.palette.text1.main }}>SAU</Divider>
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
            Autentificare Google
          </Button>
          <Button
            variant="contained"
            startIcon={<FacebookIcon />}
            sx={{ width: "35ch" }}
            color="info"
          >
            Autentificare Facebook
          </Button>
        </Box>
      </Box>
      {/* <Box bgcolor='red' textAlign='center'>Login</Box> */}
    </Grid>
  );
}

export default LoginForm;
