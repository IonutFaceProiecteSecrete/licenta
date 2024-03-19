import React from "react";

import { Stack, Box, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, Button, useMediaQuery } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from "@mui/material/styles";

function SearchArea() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  return (
    <Stack
      bgcolor={theme.palette.navbar.main}
      flexDirection="row"
      justifyContent="center"
      borderRadius="1rem"
      sx={{ scale: isSmallScreen ? "1.00" : "1.03" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        padding={5}
        alignItems="center"
      >
        <Typography
          variant="body1"
          color={theme.palette.logo.main}
          mb={3}
          textAlign="center"
          fontWeight="700"
        >
          Caută serviciul potrivit
        </Typography>
        <FormControl sx={{ mb: 3, width: "40ch" }}>
          <InputLabel htmlFor="outlined-adornment-search">Caută</InputLabel>
          <OutlinedInput
            size="small"
            id="outlined-adornment-search"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon></SearchIcon>
              </InputAdornment>
            }
            label="Amount"
          />
        </FormControl>
        <Button variant="contained" size="small" sx={{ width: "30ch" }}>
          Caută
        </Button>
      </Box>
      <Box></Box>
    </Stack>
  );
}

export default SearchArea;
