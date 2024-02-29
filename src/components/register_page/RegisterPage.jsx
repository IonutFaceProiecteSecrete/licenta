import { useTheme } from "@mui/material/styles";
import { Link, Typography, useMediaQuery, Grid } from "@mui/material";
import RegisterForm from "../register_page/RegisterForm.jsx";
import LoginPromo from "../login_page/Login_promo";
import React from "react";

function RegisterPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  return (
    <div className="RegisterPage">
      <Link href="/">
        <Typography
          style={{
            fontSize: "16px",
            position: "absolute",
            top: "1rem",
            left: "2rem",
            fontWeight: "bold",
            color: theme.palette.text1.main,
          }}
        >
          anunturi.
        </Typography>
      </Link>
      <Grid
        container
        sx={{
          height: "100vh",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <RegisterForm />
        {!isSmallScreen && <LoginPromo />}
      </Grid>
    </div>
  );
}

export default RegisterPage;
