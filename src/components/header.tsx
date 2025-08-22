import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "./logo";
import Stack from "@mui/material/Stack";
import { RouteLink } from "./route-link";

export default function Header() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 1.5,
        padding: 1,
        paddingTop: 1.5,
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* <Box>
        <IconButton size='large' sx={{ color: "white", fontSize: "3rem" }}>
          <Menu fontSize='inherit' />
        </IconButton>
      </Box> */}
      <Logo />
      <Box sx={{ flexGrow: 1 }}>
        <Stack
          direction={"row"}
          sx={{
            color: "common.white",
            justifyContent: "flex-start",
            paddingLeft: 10,
          }}
          spacing={2}
        >
          <RouteLink
            label='HOME'
            to='/'
            sx={{ fontSize: "1.5rem", fontWeight: 700, color: "inherit" }}
          />
          <RouteLink
            label='ABOUT MARK GORMLEY'
            to='/about'
            sx={{ fontSize: "1.5rem", fontWeight: 700, color: "inherit" }}
          />

          <RouteLink
            label='WHY MARK GORMLEY'
            to='/why-mark'
            sx={{ fontSize: "1.5rem", fontWeight: 700, color: "inherit" }}
          />
        </Stack>
      </Box>
      <Box>
        <Button
          variant='contained'
          size='large'
          color='secondary'
          sx={{ fontSize: "1.2rem", fontWeight: 700 }}
        >
          Donate
        </Button>
      </Box>
    </Box>
  );
}
