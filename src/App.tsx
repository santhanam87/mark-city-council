import Box from "@mui/material/Box";
import Header from "./components/header";
import Container from "@mui/material/Container";
import SpotLight from "./components/spotlight";
import QuiltedImageList from "./components/image-list";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import IssueCard from "./components/card";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Box>
      <Header />
      <Container maxWidth='lg'>
        <QuiltedImageList />
        <SpotLight />

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
          Issues
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Stack direction='row' spacing={2} sx={{ overflow: "hidden" }}>
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
        </Stack>
        <Divider sx={{ marginY: 4 }} />
      </Container>
    </Box>
  );
}

export default App;
