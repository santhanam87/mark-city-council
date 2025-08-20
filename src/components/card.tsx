import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import image14 from "../assets/14.jpg";

export default function IssueCard() {
  return (
    <Card variant='outlined'>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={image14}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Thornton Council Faces Public Outcry Over Conduct and Governance
            Issues
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Know More
        </Button>
      </CardActions>
    </Card>
  );
}
