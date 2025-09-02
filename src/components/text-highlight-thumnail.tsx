import React from "react";
import { Typography, IconButton, Paper } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useBreakPoint from "../hooks/useBreakPoint";

type TextHighlightThumbnailProps = {
  title: string;
  onClick?: () => void;
};

export const TextHighlightThumbnail: React.FC<TextHighlightThumbnailProps> = ({
  title,
  onClick,
}) => {
  const isTabletAndOver = useBreakPoint("md");

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        paddingX: 4,
        paddingY: 3,
        fontSize: "1.3rem",
        borderBottom: "1px solid",
        borderColor: "divider",
        margin: 0,
        cursor: "pointer",
        "&:last-child": {
          borderBottom: "none",
        },
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
      <Typography
        sx={{ flex: 1 }}
        fontWeight={500}
        fontSize={isTabletAndOver ? 24 : 20}
        color='inherit'
      >
        {title}
      </Typography>
      <IconButton edge='end' size='small' disableRipple sx={{ ml: 1 }}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Paper>
  );
};
