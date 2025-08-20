import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#122a7d",
    },

    secondary: {
      main: "#E3AC14",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
