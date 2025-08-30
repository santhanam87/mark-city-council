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
import MarkWork from "../components/mark-work";

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
          Meet Mark | Just As Much Of An American Dream As Any
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
          father and adopted by a very loving couple in Brooklyn, NY. The family
          moved to New Jersey where Mark grew up. Mark graduated from Georgetown
          University, majoring in International Economics, spending some time in
          Quito, Ecuador. Mark has lived in California, New York, Rhode Island,
          North Carolina, and Florida. Mark’s home has been in Thornton since
          1997. <br />
          <br />
          Mark worked for a number of Colorado businesses over the years,
          obtained a certificate from Denver Paralegal Institute, and has taken
          multiple courses at Front Range Community College to further develop
          particular skills and knowledge, while primarily working in IT
          Training and Technical Writing. Mark also served on the Thornton
          Assistance Funds Committee several times, as well as volunteered for
          organizations such as Habitat for Humanity and Rebuilding Metro
          Denver, and helped with the Eastlake Street Fair.
          <br />
          Mark’s life, education, and work experience bring varied perspectives
          to understand issues and make decisions on City Council to serve
          Thornton.
        </Typography>
        <MarkWork />
        <Typography
          variant={isTabletAndOver ? "h5" : "h6"}
          sx={{ lineHeight: "1.7" }}
        >
          Mark’s family includes two daughters who were both born and raised in
          Thornton. Both daughters graduated from Horizon High School, while
          Mark’s older daughter then attended and graduated from Regis
          University in Denver, and his younger daughter attended and graduated
          from Seattle University in Washington state. (Generics used for
          privacy.)
        </Typography>

        <Typography
          variant={isTabletAndOver ? "h5" : "h6"}
          sx={{ lineHeight: "1.7" }}
        >
          Since you are here, read a little bit of Thornton’s story too:{" "}
          <a
            target='_blank'
            href='https://cogenweb.org/adams/forgotten_past/volume1/thornton_colorado.html'
          >
            FORGOTTEN PAST OF ADAMS COUNTY, VOL. I
          </a>
        </Typography>
      </Box>
    </Container>
  );
}
export default AboutMarkPage;
