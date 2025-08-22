import Box from "@mui/material/Box";
import logo from "../assets/logo.svg";
import Typography from "@mui/material/Typography";

function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Box>
        <img src={logo} alt='Logo' style={{ width: 80 }} />
      </Box>
      <Box>
        <Typography
          variant='h4'
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
            color: "common.white",
            borderBottom: "5px solid",
            paddingBottom: 0.5,
            letterSpacing: 1.5,
            lineHeight: 1,
          }}
        >
          Mark Gormley
        </Typography>
        <Typography
          sx={{
            color: "secondary.main",
            lineHeight: 1,
            paddingTop: 1,
            borderColor: "common.white",
          }}
          variant='body1'
        >
          For Thornton City Council - Ward 3
        </Typography>
      </Box>
    </Box>
  );
}
export default Logo;
