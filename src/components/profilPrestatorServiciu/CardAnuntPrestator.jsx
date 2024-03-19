import React from "react";

import { useTheme } from "@mui/material";
import { Stack, Typography, Rating, Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

function CardAnuntPrestator() {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const paperStilizare = {
    "&:hover": {
      background: theme.palette.background.default,
    },
  };

  return (
    <Stack mb={2}>
      <Box
        sx={{
          height: "20ch",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://cdn.shopify.com/s/files/1/0066/4574/3686/files/Abstract_LinkedIn_Background.png?v=1627912075)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
      <Stack spacing={2} padding={2} sx={paperStilizare}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Stack width="100%" spacing={1}>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                color={theme.palette.text1.main}
                fontSize={!isSmallScreen ? "16px" : "14px"}
                fontWeight="500"
              >
                username
              </Typography>
              <Typography
                sx={{ color: theme.palette.primary.main }}
                fontSize={!isSmallScreen ? "16px" : "14px"}
                fontWeight="500"
              >
                100 lei / ora
              </Typography>
            </Stack>
            <Typography
              fontWeight="bold"
              fontSize={!isSmallScreen ? "20px" : "16px"}
              color={theme.palette.logo.main}
            >
              Acesta este titlul unui anunt adaugat pe platforma.
            </Typography>
            <Stack direction={!isSmallScreen ? "row" : "column"} spacing={1}>
              <Rating
                sx={{ color: theme.palette.primary.main }}
                value={4}
                readOnly
                size="small"
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CardAnuntPrestator;
