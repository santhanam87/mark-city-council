import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "./logo";
import Stack from "@mui/material/Stack";
import { RouteLink } from "./route-link";
import {
  Divider,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import { useState } from "react";
import { Close } from "@mui/icons-material";
export default function Header() {
  const theme = useTheme();
  const isTabletAndOver = useMediaQuery(theme.breakpoints.up("md"));
  const [showMenu, setMenuVisibility] = useState(false);

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 1,
        paddingY: 3,
        paddingX: 2,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "5px solid",
        borderColor: "secondary.light",
      }}
    >
      {!isTabletAndOver && (
        <Box>
          <IconButton
            onClick={() => {
              setMenuVisibility(true);
            }}
            size='large'
            sx={{ color: "white", fontSize: "2rem" }}
          >
            <Menu fontSize='inherit' />
          </IconButton>
        </Box>
      )}
      <Logo />
      {isTabletAndOver && (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Stack
              direction={"row"}
              sx={{
                color: "common.white",
                justifyContent: "flex-start",
                paddingLeft: 10,
                alignItems: "center",
              }}
              spacing={2}
            >
              <RouteLink
                label='HOME'
                to='/'
                sx={{ fontSize: "1.5rem", fontWeight: 700, color: "inherit" }}
              />
              <Typography
                sx={{ fontSize: "2rem", fontWeight: 700, color: "inherit" }}
              >
                |
              </Typography>
              <RouteLink
                label='MEET MARK GORMLEY'
                to='/meet-mark'
                sx={{ fontSize: "1.5rem", fontWeight: 700, color: "inherit" }}
              />
              <Typography
                sx={{ fontSize: "2rem", fontWeight: 700, color: "inherit" }}
              >
                |
              </Typography>
              <RouteLink
                label='WHY MARK GORMLEY'
                to='/why-mark'
                sx={{ fontSize: "1.5rem", fontWeight: 700, color: "inherit" }}
              />
            </Stack>
          </Box>
          <Stack direction={"row"} gap={2}>
            <Box
              sx={{
                paddingX: 4,
                paddingY: 1,
                border: "5px solid",
                borderColor: "secondary.main",
                color: "secondary.main",
                borderRadius: 30,
                textTransform: "uppercase",
              }}
            >
              <Typography variant='h5' sx={{ fontWeight: 700 }}>
                Election Day: November 4th 2025
              </Typography>
            </Box>
            <Button
              variant='contained'
              size='large'
              color='secondary'
              sx={{ fontSize: "1.2rem", fontWeight: 700 }}
              href='https://secure.actblue.com/donate/gormley4thornton-1'
              target='_blank'
            >
              Donate
            </Button>
          </Stack>
        </>
      )}

      <Drawer
        open={showMenu}
        onClose={() => {
          setMenuVisibility(false);
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            width: "100vw",
            flex: 1,
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 20, right: 20 }}
            size='large'
            color='primary'
            onClick={() => {
              setMenuVisibility(false);
            }}
          >
            <Close />
          </IconButton>
          <Stack
            direction={"column"}
            sx={{
              color: "primary.main",
              justifyContent: "flex-start",
              paddingX: 3,
            }}
            gap={3}
          >
            <Divider />
            <RouteLink
              label='HOME'
              to='/'
              sx={{ fontSize: "1.3rem", fontWeight: 700, color: "inherit" }}
              variant='text'
              onClick={() => {
                setMenuVisibility(false);
              }}
            />
            <Divider />
            <RouteLink
              label='MEET MARK GORMLEY'
              to='/meet-mark'
              sx={{ fontSize: "1.3rem", fontWeight: 700, color: "inherit" }}
              variant='text'
              onClick={() => {
                setMenuVisibility(false);
              }}
            />
            <Divider />
            <RouteLink
              label='WHY MARK GORMLEY'
              to='/why-mark'
              sx={{ fontSize: "1.3rem", fontWeight: 700, color: "inherit" }}
              variant='text'
              onClick={() => {
                setMenuVisibility(false);
              }}
            />
            <Divider />
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
}
