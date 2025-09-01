import Container from "@mui/material/Container";
import {
  Box,
  Typography,
  Divider,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { srcset } from "../util/srcset";
import image1 from "../assets/3.jpg";
import image2 from "../assets/11.jpg";
import image3 from "../assets/14.jpg";
import useBreakPoint from "../hooks/useBreakPoint";

const desktopImages = [
  {
    img: image2,
    cols: 4,
    rows: 4,
  },
  {
    img: image1,
    cols: 4,
    rows: 2,
  },
  {
    img: image3,
    cols: 4,
    rows: 2,
  },
];

const mobileImages = [
  {
    img: image3,
    cols: 8,
    rows: 3,
  },
];

function WhyMarkPage() {
  const isTabletAndOver = useBreakPoint("md");
  const images = isTabletAndOver ? desktopImages : mobileImages;
  return (
    <Container maxWidth='lg'>
      <Box sx={{ flex: 1, p: 2 }}>
        <Typography
          variant='h4'
          sx={{
            fontWeight: 700,
            fontSize: isTabletAndOver ? 32 : 20,
            textTransform: "uppercase",
            borderLeft: "5px solid",
            paddingLeft: 2,
          }}
          color='primary'
        >
          Why I Am A Candidate for Thornton City Council Ward 3
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <ImageList
          sx={{
            width: "100%",
            height: isTabletAndOver ? 500 : 370,
            marginY: 2,
          }}
          variant='quilted'
          cols={8}
          rowHeight={121}
        >
          {images.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img {...srcset(item.img, 121, item.rows, item.cols)} />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography
          variant='h5'
          sx={{
            fontStyle: "italic",
            lineHeight: isTabletAndOver ? 2 : 1.5,
            p: isTabletAndOver ? 2 : 1,
            backgroundColor: "grey.100",
            marginBottom: 2,
            textAlign: "center",
          }}
        >
          Corporate-Influence-Lobby-Free Civil Servant who will serve on City
          Council solely for the benefit of the City of Thornton and its
          citizens.
        </Typography>
        <Typography
          variant={isTabletAndOver ? "h5" : "h6"}
          sx={{ lineHeight: "1.7" }}
        >
          I see serving on City Council as Public Service -- not “political” and
          not for patronage purposes. I am not a career politician. I’m a Civil
          Servant.
          <br /> I want to:
          <ul style={{ margin: 0 }}>
            <li>be a public servant, not a politician</li>
            <li>serve Ward 3 residents’ needs, not special interests</li>
            <li>
              steer the city into the future by communicating with Ward 3
              residents
            </li>
            <li>
              advocate to effect policies that meet Ward 3 residents needs
            </li>
            <li>
              help protect City of Thornton from the negative impact of
              regional, state or national decisions
            </li>
          </ul>
        </Typography>
        <Typography
          variant='h5'
          sx={{
            fontStyle: "italic",
            lineHeight: isTabletAndOver ? 2 : 1.5,
            p: isTabletAndOver ? 2 : 1,
            backgroundColor: "grey.100",
            marginY: 2,
            textAlign: "center",
          }}
        >
          Civic Duty | Civic Health | Civic Self-Respect | Public Service | Not
          Politics
        </Typography>
      </Box>
    </Container>
  );
}
export default WhyMarkPage;
