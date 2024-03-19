import React from "react";

import { Typography, Grid, Stack, Rating } from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";

import { useTheme } from "@mui/material";

function ReviewPrestator() {
  const theme = useTheme();

  const paperStilizare = {
    "&:hover": {
      background: theme.palette.background.default,
    },
  };

  return (
    <Grid container sx={paperStilizare} padding={2}>
      <Grid item lg={3}>
        <Stack direction="column">
          <Typography fontSize="14px" fontWeight="bold" color={theme.palette.logo.main}>
            username
          </Typography>
          <Typography fontSize="14px" color={theme.palette.text1.main} mb={0.5}>
            13.03.2024 la 12:23
          </Typography>
          <Stack direction="row" spacing={1}>
            <VerifiedIcon
              sx={{
                fontSize: "20px",
                color: theme.palette.primary.main,
              }}
            />
            <Typography fontSize="14px" color={theme.palette.text1.main}>Recenzie verificată</Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item lg={9}>
        <Stack spacing={2}>
          <Rating value={5} sx={{color: theme.palette.primary.main}} readOnly />
          <Typography color={theme.palette.logo.main} fontSize="14px" fontWeight="bold">
            Titlu review
          </Typography>
          <Typography fontSize="13px" color={theme.palette.text1.main}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales
            volutpat sodales. Ut commodo ornare tortor, quis dignissim dolor
            ullamcorper ac. Maecenas faucibus a quam quis molestie. Quisque
            semper massa id justo dictum, vehicula mollis turpis iaculis. Nunc
            turpis urna, malesuada ac consequat ac, pretium sed nisl...
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ReviewPrestator;
