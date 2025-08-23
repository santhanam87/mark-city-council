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

const itemData = [
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

function WhyMarkPage() {
  return (
    <Container maxWidth='lg'>
      <Box sx={{ flex: 1, p: 2 }}>
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
          Why I Am A Candidate for Thornton City Council Ward 3
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <ImageList
          sx={{ width: "100%", height: 500, marginY: 2 }}
          variant='quilted'
          cols={8}
          rowHeight={121}
        >
          {itemData.map((item) => (
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
            lineHeight: 2,
            p: 2,
            backgroundColor: "grey.100",
            m: 2,
          }}
        >
          Lobby-Free and Corporate-Influence-Free Servant who will serve on City
          Council solely for the benefit of the City of Thornton and its
          citizens.
        </Typography>
        <Typography variant='h5' sx={{ lineHeight: "1.7" }}>
          I see serving on City Council as Public Service -- not “political” and
          not for patronage purposes. I am not a career politician. I’m a Civil
          Servant.
          <br /> I want to help steer the city into the future by serving as a
          conduit for what citizens want, as a guide to effect policies
          best-suited to provide what is wanted, and as a buffer to protect the
          city from the “national trickle down” impacts as they filter down to
          the municipal level passing through state-level government.
          <br /> I don’t have a cache of money set aside to buy the position for
          which I offer myself as servant. I am not swallowing donations or
          hording contributions to spend on deceptive self-gratuitous
          advertising or political propaganda. I am “thrifty”. My largest funds
          account are my feet for canvassing to visit citizens like you and say
          hello. <br />I want to help put the PUBLIC back into Public Service
          and promote civic health. The corporate and the private can contribute
          but cannot take over and cannot “drive the car”.
          <br /> I personally will not take credit for something I did not
          accomplish or do, and I will contribute as much as possible to our
          joint success.
        </Typography>
      </Box>
    </Container>
  );
}
export default WhyMarkPage;
