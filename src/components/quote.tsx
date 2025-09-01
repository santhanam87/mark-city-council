import { Box, Divider, Stack, Typography } from "@mui/material";

type QuoteProps = {
  quote: string;
  author: string;
};

function Quote({ quote, author }: QuoteProps) {
  return (
    <>
      <Typography
        variant='h4'
        sx={{
          fontWeight: 700,
          textTransform: "uppercase",
          borderLeft: "5px solid",
          paddingLeft: 2,
          marginTop: 5,
        }}
        color='primary'
      >
        Some of my favorite quotes...
      </Typography>
      <Divider sx={{ marginY: 1 }} />
      <Box
        sx={{
          paddingY: 1,
          minHeight: "150px",
        }}
      >
        <Stack>
          <Typography variant='body1' sx={{ fontSize: 32, fontWeight: 100 }}>
            {quote}
          </Typography>
          <Typography
            variant='subtitle1'
            sx={{
              fontWeight: 100,
              marginTop: 2,
              fontSize: 28,
              textAlign: "right",
              color: "grey.400",
            }}
          >
            - {author}
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
export default Quote;
