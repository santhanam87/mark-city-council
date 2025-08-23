import { Typography, Divider, Stack } from "@mui/material";
import { TextHighlightThumbnail } from "./text-highlight-thumnail";

function WhatISupport() {
  return (
    <>
      <Typography
        variant='h4'
        sx={{
          fontWeight: 700,
          fontSize: "2rem",
          textTransform: "uppercase",
          borderLeft: "5px solid",
          paddingLeft: 2,
        }}
        color='primary'
      >
        What I Support and What I Care About
      </Typography>
      <Divider sx={{ marginY: 2, marginBottom: 4 }} />
      <Stack
        direction='row'
        spacing={2}
        sx={{
          marginBottom: 2,
        }}
      >
        <TextHighlightThumbnail title='Quality Life | People Over Profits' />
        <TextHighlightThumbnail title='City-Wide and Ward 3' />
      </Stack>
      <Stack direction='row' spacing={2} sx={{ marginBottom: 4 }}>
        <TextHighlightThumbnail title='Metro Districts Granting and Oversight' />
        <TextHighlightThumbnail title='Water conservation' />
      </Stack>
    </>
  );
}

export default WhatISupport;
