import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import image1 from "../assets/1.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image9 from "../assets/9.jpg";
import image11 from "../assets/11.jpg";
import image13 from "../assets/13.jpg";
import image14 from "../assets/14.jpg";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: "100%", height: 500 }}
      variant='quilted'
      cols={4}
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
  );
}

const itemData = [
  {
    img: image14,
    rows: 2,
    cols: 2,
  },
  {
    img: image11,
    rows: 2,
  },
  {
    img: image4,
    rows: 2,
  },

  {
    img: image1,
  },
  {
    img: image13,
  },
  {
    img: image3,
    rows: 2,
    cols: 2,
  },
  {
    img: image5,
  },
  {
    img: image9,
  },
];
