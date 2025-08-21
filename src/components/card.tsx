import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type IssueCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  onButtonClick: () => void;
};

export default function IssueCard({
  title,
  imageUrl,
  onButtonClick,
  description,
}: IssueCardProps) {
  return (
    <Card variant='outlined' sx={{ flex: 1 }} onClick={onButtonClick}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={imageUrl}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h6' color='primary' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
