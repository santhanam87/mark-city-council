import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import useBreakPoint from "../hooks/useBreakPoint";
import React from "react";

const endorsements = [
  {
    name: "Lynne Fox",
    subTitle: "former Thornton City Council Member",
    initial: "LF",
  },
  {
    name: "Marty Wisniewski",
    subTitle:
      " former Thornton City Council Member and former Adams County Democratic Party Chairperson",
    initial: "MW",
  },
  {
    name: "Kristi Douglas",
    subTitle: "Commerce City Council Member",
    initial: "KD",
  },
  { name: "Steve Douglas", subTitle: "Commerce City Mayor", initial: "SD" },
];

function Endorsement() {
  const isTabletAndOver = useBreakPoint("md");
  return (
    <Box sx={{ marginY: 4 }}>
      <Typography
        variant={isTabletAndOver ? "h4" : "h6"}
        sx={{
          fontWeight: 700,
          textTransform: "uppercase",
          borderLeft: "5px solid",
          paddingLeft: 2,
        }}
        color='primary'
      >
        Endorsements
      </Typography>
      <List>
        {endorsements.map((item, itemIndex) => (
          <ListItem alignItems='flex-start' key={itemIndex}>
            <ListItemAvatar>
              <Avatar
                sx={{ backgroundColor: "primary.dark", color: "common.white" }}
              >
                {item.initial}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component='span'
                    variant='body2'
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    {item.subTitle}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Endorsement;
