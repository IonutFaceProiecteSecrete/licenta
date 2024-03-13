import React from "react";

import RecuperareParolaForm from "./RecuperareParolaForm.jsx";
import LoginPromo from "../login_page/Login_promo.jsx";

import { Grid, Typography, useMediaQuery, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function RecuperareParola() {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const theme = useTheme();

  return (
    <div className="RecuperareParola">
      <Link href="/">
        <Typography
          style={{
            fontSize: "16px",
            position: "absolute",
            top: "1rem",
            left: "2rem",
            fontWeight: "bold",
            color: theme.palette.logo.main,
          }}
        >
          anunturi.
        </Typography>
      </Link>
      <Grid
        container
        sx={{
          height: "100vh",
          backgroundColor: theme.palette.navbar.main,
        }}
      >
        <RecuperareParolaForm />
        {!isSmallScreen && <LoginPromo />}
      </Grid>
    </div>
  );
}

export default RecuperareParola;
