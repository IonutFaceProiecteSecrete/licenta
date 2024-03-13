import React from "react";

import LoginForm from "./Login_form";
import LoginPromo from "./Login_promo";

import { Grid, Typography, useMediaQuery, Link } from "@mui/material";
import {useTheme} from "@mui/material/styles";

function LoginPage() {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  // const [theme, setTheme] = useState("light");
  const theme = useTheme();

  return (
    <div className="LoginPage">
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
        <LoginForm />
        {!isSmallScreen && <LoginPromo />}
      </Grid>
    </div>
  );
}

export default LoginPage;
