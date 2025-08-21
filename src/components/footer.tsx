import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        paddingX: 10,
        paddingY: 5,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "row",
          gap: 3,
          paddingRight: 2,
        }}
      >
        <img src={logo} alt='Logo' style={{ width: 80 }} />
        <Box>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 700,
              lineHeight: 1,
              textTransform: "uppercase",
              color: "white",
              borderBottom: "5px solid",
              paddingBottom: 1,
              marginBottom: 1,
            }}
          >
            Mark Gormley
          </Typography>
          <Typography
            sx={{
              color: "secondary.main",
              letterSpacing: 1,
              marginBottom: 1,
            }}
            variant='body1'
          >
            For Thornton City Council - Ward 3
          </Typography>
          <Typography
            variant='h6'
            sx={{ color: "secondary.main", marginTop: 5 }}
          >
            Donate by Mail
          </Typography>
          <Typography sx={{ color: "white" }}>
            Mark Gormley <br />
            Ash Cir, Thornton,
            <br /> CO 80602
          </Typography>
        </Box>
      </Box>
      <Box sx={{ flex: 1 }}></Box>
    </Box>
  );
}

export default Footer;
