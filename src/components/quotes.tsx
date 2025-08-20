import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Quotes() {
  return (
    <Box
      sx={{
        marginY: 4,
        padding: 2,
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography
        variant='h5'
        sx={{
          fontStyle: "italic",
          fontSize: "2rem",
          fontWeight: "light",
          marginBottom: 2,
        }}
      >
        "The only limit to our realization of tomorrow will be our doubts of
        today."
      </Typography>
    </Box>
  );
}
