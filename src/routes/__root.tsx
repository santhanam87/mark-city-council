import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Footer from "../components/footer";
import Header from "../components/header";
import { HeadContent } from "@tanstack/react-router";
import { Fab } from "@mui/material";
import useBreakPoint from "../hooks/useBreakPoint";

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

function RootComponent() {
  const isTabletAndOver = useBreakPoint("md");
  return (
    <ThemeProvider theme={theme}>
      <HeadContent />
      <CssBaseline />
      <Box>
        <Header />
        <Outlet />
        <Footer />
      </Box>
      {!isTabletAndOver && (
        <Fab
          variant='extended'
          href='https://secure.actblue.com/donate/gormley4thornton-1'
          target='_blank'
          color='secondary'
          size='large'
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          Donate
        </Fab>
      )}
    </ThemeProvider>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
