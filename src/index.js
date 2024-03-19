import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const themeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0268fa",
      // main: "#000000",
    },
    secondary: {
      main: "#9c27b0",
      dark: "#9348a0",
    },
    background: {
      default: "#ccd2db",
    },
    text1: {
      main: "#5F5F5F",
    },
    navbar: {
      main: "#EEF5FF",
      text: "black",
      backgroundSmall: "#eeeff7",
      textSmall: "black",
    },
    logo: {
      main: "black",
    },
    elementeDeContur: {
      main: "#a8acb3",
    }
  },
});

const themeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0268fa",
    },
    secondary: {
      main: "#9c27b0",
      dark: "#9348a0",
    },
    background: {
      default: "#0a0b0f",
    },
    text1: {
      main: "#a4add3",
    },
    navbar: {
      main: "#15161e",
      text: "white",
      backgroundSmall: "#101323",
      textSmall: "white"
    },
    logo: {
      main: "white",
    },
    elementeDeContur: {
      main: "#DCDCDC",
    }
  },
});

root.render(
    <ThemeProvider
      theme={
        localStorage.getItem("Theme") === "themeLight" ? themeLight : themeDark
      }
    >
      <App />
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
