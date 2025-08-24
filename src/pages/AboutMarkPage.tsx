import Container from "@mui/material/Container";
import {
  Box,
  Typography,
  Divider,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { srcset } from "../util/srcset";
import image1 from "../assets/4.jpg";
import image2 from "../assets/15.jpg";
import image3 from "../assets/7.jpeg";
import useBreakPoint from "../hooks/useBreakPoint";

const desktopImages = [
  {
    img: image2,
    cols: 3,
    rows: 4,
  },
  {
    img: image1,
    cols: 2,
    rows: 4,
  },
  {
    img: image3,
    cols: 3,
    rows: 4,
  },
];

const mobileImages = [
  {
    img: image3,
    cols: 8,
    rows: 3,
  },
];

function AboutMarkPage() {
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
          Who is Mark Gormley?
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <ImageList
          sx={{
            width: "100%",
            height: isTabletAndOver ? 500 : 380,
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
          variant={isTabletAndOver ? "h5" : "h6"}
          sx={{ lineHeight: "1.7" }}
        >
          Mark was born in Bronx, NY to a 15-year-old mother and 17-year-old
          father and was given up for adoption. Adopted by a very loving couple
          in Brooklyn, NY (the second of their two adoptions), the family moved
          to New Jersey where Mark grew up. Mark attended college at Georgetown
          University in Washington, DC, majoring in International Economics, and
          moved to California after graduation -- following his parents and
          wider family who all moved to California. Due to family matters and
          other life events, Mark followed most of the family back to the East
          Coast living briefly in a number of places including: Long Island,
          Rhode Island, Raleigh, NC, Lake Worth, FL, and New Jersey again before
          moving back out to California. After marriage in California, Mark and
          his wife moved to Colorado -- living longer in Colorado than anywhere
          else. Mark has lived in Thornton since 1997 (28 years now).
          <br />
          Mark values his earlier nomadic life because it has given him a wide
          array of experiences across the country to incorporate into his
          perspectives and understanding of what the United States as a whole is
          and has the potential to be in the future. Mark values the cultural
          differences between the regions of the United States. Mark has also
          spent time studying in Quito, Ecuador during college, and seeing much
          of Ecuador in that time to understand more about the native origins of
          South America. Brief travel to Spain also adds to that inter-cultural
          understanding.
          <br />
          Mark has worked for a number of Colorado-birthed businesses over the
          years. To bolster his work output and industry understanding, Mark
          also attended and received a certificate from Denver Paralegal
          Institute upon entry to Colorado, and he has taken multiple courses at
          Front Range Community College to further develop particular skills and
          knowledge applicable to various workplaces at times. See the listing
          of Mark’s extensive life and workplace experiences that bring a broad
          array of perspectives applicable to the understanding and
          decision-making that would be valuable as City Council Member and help
          to serve Thornton well.
          <br />
          Mark’s family includes two daughters who were both born and raised in
          Thornton. Both daughters graduated from Horizon High School, while his
          older daughter then attended and graduated from Regis University in
          Denver, and his younger daughter attended and graduated from Seattle
          University in Washington state. (Generics used for privacy.)
        </Typography>
      </Box>
    </Container>
  );
}
export default AboutMarkPage;
