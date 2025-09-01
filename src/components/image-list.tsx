import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import image3 from "../assets/3.jpg";
import image5 from "../assets/5.jpg";
import image8 from "../assets/8.jpg";
import image9 from "../assets/9.jpg";
import image11 from "../assets/11.jpg";
import image13 from "../assets/13.jpg";
import image14 from "../assets/14.jpg";
import useBreakPoint from "../hooks/useBreakPoint";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const mobileImages = [
  {
    img: image3,
    cols: 2,
    rows: 2,
  },
  {
    img: image14,
    cols: 2,
    rows: 2,
  },
  {
    img: image11,
    cols: 2,
    rows: 2,
  },

  {
    img: image8,
    rows: 2,
    cols: 2,
  },
];
const desktopImages = [
  {
    img: image14,
    rows: 2,
  },
  {
    img: image11,
    rows: 2,
  },
  {
    img: image8,
    rows: 2,
  },
  {
    img: image13,
    rows: 2,
  },

  {
    img: image5,
    rows: 2,
  },
  {
    img: image9,
    rows: 2,
  },
];

export default function QuiltedImageList() {
  const isTabletAndOver = useBreakPoint("md");
  const rowHeight = isTabletAndOver ? 120 : 60;
  const cols = isTabletAndOver ? 6 : 4;
  const images = isTabletAndOver ? desktopImages : mobileImages;
  const imageListHeight = 246;
  return (
    <ImageList
      sx={{ width: "100%", height: imageListHeight, margin: 0 }}
      variant='quilted'
      cols={cols}
      rowHeight={rowHeight}
    >
      {images.map((item) => (
        <ImageListItem key={item.img} rows={item.rows || 1}>
          <img {...srcset(item.img, rowHeight, item.rows)} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
