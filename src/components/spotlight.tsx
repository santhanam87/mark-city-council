import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

type SpotLightProps = {
  title: string;
  description: React.ReactNode;
  imageUrl: string;
  onButtonClick?: () => void;
};

export default function SpotLight(props: SpotLightProps) {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "grey.200",
        padding: 2,
        borderRadius: 2,
        marginY: 4,
      }}
    >
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
          {props.title}
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "flex-start",
          }}
        >
          <Box>
            <img
              src={props.imageUrl}
              alt='Spotlight'
              style={{
                borderRadius: 8,
                width: 300,
                objectFit: "cover",
              }}
            />
          </Box>
          <Box>
            <Typography variant='h5' sx={{ lineHeight: 1.5 }}>
              {props.description}
            </Typography>
            {props.onButtonClick && (
              <Box textAlign={"right"}>
                <Button
                  sx={{ marginTop: 2, fontSize: "1.2rem" }}
                  variant='contained'
                  color='primary'
                  onClick={props.onButtonClick}
                >
                  Learn More
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
