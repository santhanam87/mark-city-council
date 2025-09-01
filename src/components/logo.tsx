import Box from "@mui/material/Box";
import logo from "../assets/logo.svg";
import Typography from "@mui/material/Typography";
import useBreakPoint from "../hooks/useBreakPoint";
function Logo() {
  const isTabletAndOver = useBreakPoint("md");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      {isTabletAndOver && (
        <Box>
          <img src={logo} alt='Logo' style={{ width: 60 }} />
        </Box>
      )}

      <Box>
        <Typography
          variant='h5'
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
            color: "common.white",
            borderBottom: "2px dashed",
            paddingBottom: 1,
            letterSpacing: 1.5,
            lineHeight: 1,
            textAlign: "center",
            fontSize: 32,
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
            textAlign: "center",
            fontSize: 20,
            fontWeight: 700,
          }}
          variant='body1'
        >
          For Thornton City Council Ward 3
        </Typography>
      </Box>
    </Box>
  );
}
export default Logo;
