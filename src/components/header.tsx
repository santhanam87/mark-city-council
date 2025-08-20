import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import logo from "../assets/logo.svg";
import { Menu } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

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
      }}
    >
      <Box>
        <IconButton size='large' sx={{ color: "white", fontSize: "3rem" }}>
          <Menu fontSize='inherit' />
        </IconButton>
      </Box>
      <Box>
        <img src={logo} alt='Logo' style={{ width: 60 }} />
      </Box>
      <Box
        sx={{
          color: "white",
          borderLeft: "5px solid ",
          borderColor: "primary.dark",
          paddingLeft: 2,
        }}
      >
        <Typography variant='h4' sx={{ fontWeight: 700, lineHeight: 0.9 }}>
          MARK GORMELY
        </Typography>
        <Typography
          sx={{ color: "secondary.main", letterSpacing: 1 }}
          variant='body1'
        >
          Thornton City Council
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}></Box>
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
