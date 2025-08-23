import React from "react";
import { Typography, IconButton, Paper } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type TextHighlightThumbnailProps = {
  title: string;
  onClick?: () => void;
};

export const TextHighlightThumbnail: React.FC<TextHighlightThumbnailProps> = ({
  title,
  onClick,
}) => (
  <Paper
    elevation={0}
    sx={{
      display: "flex",
      paddingX: 4,
      paddingY: 3,
      flex: 1,
      fontSize: "1.3rem",
      border: "1px solid",
      borderColor: "divider",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "primary.main",
        color: "white",
      },
      "&:hover .MuiSvgIcon-root": {
        color: "white",
      },
    }}
    onClick={onClick}
  >
    <Typography sx={{ flex: 1 }} fontWeight={500} fontSize={24} color='inherit'>
      {title}
    </Typography>
    <IconButton edge='end' size='small' disableRipple sx={{ ml: 1 }}>
      <ArrowForwardIosIcon />
    </IconButton>
  </Paper>
);
