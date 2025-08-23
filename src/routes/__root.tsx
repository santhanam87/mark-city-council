import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Footer from "../components/footer";
import Header from "../components/header";

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

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Header />
        <Outlet />
        <Footer />
      </Box>
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
});
