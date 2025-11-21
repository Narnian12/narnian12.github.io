import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import "./index.css";
import {
  BACKGROUND_COLOR,
  TEXT_PRIMARY_COLOR,
  TEXT_SECONDARY_COLOR,
} from "./utils/constants/css";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: BACKGROUND_COLOR,
    },
    text: {
      primary: TEXT_PRIMARY_COLOR,
      secondary: TEXT_SECONDARY_COLOR,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
