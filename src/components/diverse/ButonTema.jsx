import React from "react";

import { Fab } from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {useTheme} from "@mui/material";

function ButonTema() {
  const theme = useTheme();
  return (
    <Fab
      size="medium"
      aria-label="add"
      color="primary"
      sx={{ position: "fixed", bottom: "2rem", left: "2rem", zIndex: "1"}}
      onClick={() => {
        localStorage.setItem(
          "Theme",
          localStorage.getItem("Theme") === "themeLight"
            ? "themeDark"
            : "themeLight"
        );
        window.location.reload(false);
      }}
    >
      {localStorage.getItem("Theme") === "themeLight" ? (
        <DarkModeIcon />
      ) : (
        <LightModeIcon />
      )}
    </Fab>
  );
}

export default ButonTema;
