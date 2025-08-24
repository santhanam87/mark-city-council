import {
  Typography,
  Divider,
  Stack,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TextHighlightThumbnail } from "./text-highlight-thumnail";
import { useState, type ReactNode } from "react";
import PublicIssues from "./public-issues";
import QualityOfLife from "./quality-of-life";
import CityWideWard from "./city-wide-ward";
import MetroDistricts from "./metro-district";
import MunicipalConcern from "./municipal-concern";
import SafetySecurity from "./safety-security";
import PublicEducation from "./public-education";
import GloablMatters from "./global-matters";
import FreeSpeachPlatform from "./free-speach-platform";
import FreshNewPerspective from "./fresh-new-perspective";
import useBreakPoint from "../hooks/useBreakPoint";

const issues: Record<string, { title: string; body: ReactNode }> = {
  publicIssues: {
    title: "Top Priorities/Advocacy, What I Support and What I Care About",
    body: <PublicIssues />,
  },
  qualityOfLife: {
    title: "Quality Life | People Over Profits",
    body: <QualityOfLife />,
  },
  cityWideWard: {
    title: "City-Wide and Ward 3",
    body: <CityWideWard />,
  },
  metroDistricts: {
    title:
      "Metro Districts Granting and Oversight | Mark’s Metro District Explainer | 5 New-Build Experiences",
    body: <MetroDistricts />,
  },
  municipalConcern: {
    title: "Municipal Concerns",
    body: <MunicipalConcern />,
  },
  safetySecurity: {
    title: "Safety & Security",
    body: <SafetySecurity />,
  },
  publicEducation: {
    title: "Maintaining Local Ties to Public Education",
    body: <PublicEducation />,
  },
  globalMatters: {
    title: "Global Matters to Which the City of Thornton Can Contribute",
    body: <GloablMatters />,
  },
  freeSpeach: {
    title: "Free Speech Platform",
    body: <FreeSpeachPlatform />,
  },
  freshNewPerspective: {
    title: "Fresh New Perspectives | The Better Bird of Choice",
    body: <FreshNewPerspective />,
  },
};

function WhatISupport() {
  const isTabletAndOver = useBreakPoint("md");
  const [selectedIssue, updateSelectedIssue] = useState<string>("");
  const handleClose = () => {
    updateSelectedIssue("");
  };
  return (
    <>
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
        Top Priorities/Advocacy
      </Typography>
      <Divider sx={{ marginY: 2, marginBottom: 2 }} />
      <Stack
        direction='column'
        sx={{
          marginBottom: 2,
        }}
      >
        {Object.keys(issues).map((key) => (
          <TextHighlightThumbnail
            onClick={() => {
              updateSelectedIssue(key);
            }}
            title={issues[key].title}
          />
        ))}
      </Stack>

      <Dialog
        open={selectedIssue !== ""}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        maxWidth='md'
      >
        <DialogTitle
          id='alert-dialog-title'
          sx={{
            fontSize: isTabletAndOver ? 24 : 20,
            fontWeight: 700,
            backgroundColor: "primary.dark",
            color: "common.white",
            paddingRight: 8,
          }}
        >
          {selectedIssue != "" && issues[selectedIssue].title}
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            color: "common.white",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <DialogContentText sx={{ color: "primary.dark" }}>
            {selectedIssue != "" && issues[selectedIssue].body}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default WhatISupport;
