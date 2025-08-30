import { Paper, Stack, Typography } from "@mui/material";

type QuoteProps = {
  quote: string;
  author: string;
};

function Quote({ quote, author }: QuoteProps) {
  return (
    <Paper
      elevation={0}
      variant='outlined'
      sx={{
        paddingX: 2,
        paddingY: 3,
        backgroundColor: "grey.50",
        position: "relative",
      }}
    >
      <Stack>
        <Typography variant='body1' sx={{ fontSize: 24 }}>
          <i>{quote}</i>
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{
            fontWeight: 800,
            marginTop: 2,
            fontSize: 24,
            textAlign: "right",
          }}
        >
          {author}
        </Typography>
      </Stack>
    </Paper>
  );
}
export default Quote;
