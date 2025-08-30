import Box from "@mui/material/Box";
import Logo from "./logo";
import Stack from "@mui/material/Stack";
import { RouteLink } from "./route-link";

import { useMediaQuery, useTheme } from "@mui/material";

function Footer() {
  const theme = useTheme();
  const isTabletAndOver = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        paddingX: 2,
        paddingY: 5,
        display: "flex",
        alignItems: "center",
      }}
    >
      {isTabletAndOver && (
        <>
          <Stack
            direction='row'
            sx={{ alignItems: "center", color: "secondary.main" }}
          >
            <RouteLink
              label='HOME'
              to='/'
              sx={{ color: "common.white", fontSize: "1.2rem" }}
            />
            <RouteLink
              label='MEET MARK GORMLEY'
              to='/about'
              sx={{ color: "common.white", fontSize: "1.2rem" }}
            />
            <RouteLink
              label='WHY MARK GORMLEY'
              to='/why-mark'
              sx={{ color: "common.white", fontSize: "1.2rem" }}
            />
          </Stack>
          <Box sx={{ flex: 1 }}></Box>
        </>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: !isTabletAndOver ? "center" : "flext-end",
          flexDirection: "column",
          paddingRight: 2,
          gap: 10,
          flex: 1,
        }}
      >
        <Logo />
      </Box>
    </Box>
  );
}

export default Footer;
