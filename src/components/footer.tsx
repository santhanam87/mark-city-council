import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { RouteLink } from "./route-link";

import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Mail } from "@mui/icons-material";

function Footer() {
  const theme = useTheme();
  const isTabletAndOver = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        paddingY: 3,
        paddingX: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      {isTabletAndOver && (
        <>
          <Stack
            direction='row'
            sx={{ alignItems: "center", color: "common.white" }}
            gap={2}
          >
            <RouteLink
              label='HOME'
              to='/'
              sx={{ color: "common.white", fontSize: "1.2rem" }}
            />
            <Typography
              sx={{ fontSize: "1rem", fontWeight: 700, color: "inherit" }}
            >
              |
            </Typography>
            <RouteLink
              label='MEET MARK GORMLEY'
              to='/about'
              sx={{ color: "common.white", fontSize: "1.2rem" }}
            />
            <Typography
              sx={{ fontSize: "1rem", fontWeight: 700, color: "inherit" }}
            >
              |
            </Typography>
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
          paddingX: 4,
          paddingY: 1,
          border: "5px solid",
          borderColor: "secondary.main",
          color: "secondary.main",
          borderRadius: 30,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Mail />
        <Typography variant='h5' sx={{ fontWeight: 700 }}>
          gormley4thornton@yahoo.com
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
