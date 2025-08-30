import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const endorsements = [
  {
    name: "Safety Patrol Officer in 3rd and 4th grades, Safety Patrol Captain in 5th grade",
  },
  {
    name: "Self-employment: lawn mowing; contract technical writer; contract carpentry",
  },
  {
    name: "President of CYO (Catholic Youth Organization) Senior Year in High School",
  },
  { name: "Fast Food" },
  { name: "Retail" },
  { name: "Small business (including not-for-profit)" },
  { name: "Startups" },
  { name: "Solar panel owner (2 homes; 15+ years)" },
  { name: "Nuclear, fossil, and solar power generation (EPC) industries" },
  { name: "Home construction" },
  { name: "IT training" },
  { name: "Manufacturing" },
  { name: "Investor relations management" },
  { name: "Retirement investment customer service" },
  { name: "Landscaping" },
  { name: "Banking" },
  { name: "Software testing/review" },
  { name: "Procedures/process documentation writing/review/maintenance" },
  { name: "Website creation and corporate document management" },
  { name: "Telecom/rail (private-public partnership)" },
];

function MarkWork() {
  return (
    <Accordion sx={{ marginY: 2 }} elevation={0} variant='outlined'>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant='h6' component='span'>
          Broader listing of Mark’s life and workplace experiences.
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction={"row"} flexWrap={"wrap"} gap={1}>
          {endorsements.map((item, itemIndex) => (
            <Chip label={item.name} key={itemIndex} />
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default MarkWork;
