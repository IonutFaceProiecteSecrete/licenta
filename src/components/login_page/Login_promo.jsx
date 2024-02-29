import React from "react";

import { Grid, Box, Stack, Link} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

function LoginPromo() {
  return (
    <Grid item md={7} height="100%">
      <Box
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          paddingRight="2rem"
          marginBottom="1rem"
        >
          <Link href="https://www.instagram.com/">
            <InstagramIcon sx={{ color: "white", zIndex: "1" }} />
          </Link>
          <Link onClick={() => {
            localStorage.setItem('Theme', localStorage.getItem('Theme') === 'themeLight'?'themeDark':'themeLight');
            window.location.reload(false);
          }}>
            <XIcon sx={{ color: "white", zIndex: "1" }} />
          </Link>
        </Stack>
      </Box>
    </Grid>
  );
}

export default LoginPromo;
