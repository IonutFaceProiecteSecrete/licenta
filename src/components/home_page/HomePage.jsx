import React from "react";
import Navbar from "../navbar/Navbar";
import { useTheme } from "@mui/material/styles";
import {
  Typography,
  useMediaQuery,
  Box,
  Grid,
} from "@mui/material";
import { useState } from "react";


import SearchArea from "./SearchArea.jsx";
import SidebarHomePage from "./SidebarHomePage.jsx";
import PrestatoriNoiGrid from "./PrestatoriNoiGrid.jsx";
import ButonTema from "../diverse/ButonTema.jsx";

function HomePage2() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const [meniuActiv, setMeniuActiv] = useState(false);

  return (
    <div className="HomePage">
      <Navbar meniuActiv={meniuActiv} setMeniuActiv={setMeniuActiv} /> 
      <Box
        bgcolor={theme.palette.background.default}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        onClick={() => setMeniuActiv(false)}
      >
        <Grid container spacing={0} marginTop="5rem" width="90%">
          <Grid item md={6} xs={12} mb={4}>
            <SearchArea />
          </Grid>
          <Grid item md={6} xs={0} mb={4}>
            <Box
              sx={{
                height: "100%",
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://adbz.cz/wp-content/uploads/2022/08/stavbyvedouci-usmev.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
          <Grid
            item
            bgcolor={theme.palette.navbar.main}
            // paddingLeft={2}
            // paddingTop={2}
            mr={4}
            mb={4}
            lg={3}
            display={isSmallScreen ? "none" : ""}
            borderRadius="1rem"
          >
            <SidebarHomePage />
          </Grid>
          <Grid
            item
            md
            sm={12}
            xs={12}
            bgcolor={theme.palette.navbar.main}
            mb={4}
            borderRadius="1rem"
          >
            <Typography
              fontSize="20px"
              fontWeight="700"
              textAlign="left"
              color={theme.palette.logo.main}
              mt={4}
              mb={4}
              ml="5%"
            >
              PRESTATORI NOI DE SERVICII PE PLATFORMĂ
            </Typography>
            <PrestatoriNoiGrid />
          </Grid>
        </Grid>
      </Box>
      <ButonTema />
    </div>
  );
}

export default HomePage2;
