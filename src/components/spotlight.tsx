import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function SpotLight() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2, marginY: 2 }}>
      <Box
        sx={{
          flexGrow: 1,
          marginY: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
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
          Who is Mark Gormley?
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant='h5' sx={{ lineHeight: 1.5 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
          exercitationem ipsam adipisci porro impedit voluptatibus iste aut id
          aliquid doloribus eveniet dolorum accusamus quaerat voluptatem numquam
          aspernatur quas, sit consequuntur. Nesciunt delectus quod illum dolore
          asperiores voluptas beatae, velit laudantium nisi dolores voluptatibus
          nam quisquam minima laboriosam excepturi optio magni exercitationem
          doloribus voluptatum deserunt odit.
        </Typography>

        <Box textAlign={"right"}>
          <Button
            sx={{ marginTop: 2, fontSize: "1.2rem" }}
            variant='contained'
            color='primary'
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
