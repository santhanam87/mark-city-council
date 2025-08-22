import Container from "@mui/material/Container";
import whoIsMarkImage from "../assets/10.jpg";
import SpotLight from "../components/spotlight";

function AboutMarkPage() {
  return (
    <Container maxWidth='lg'>
      <SpotLight
        imageUrl={whoIsMarkImage}
        title='Who is Mark Gormley?'
        description='Mark was born in Bronx, NY to a 15-year-old mother and 17-year-old father and was given up for adoption. Adopted by a very loving couple in Brooklyn, NY (the second of their two adoptions), the family moved to New Jersey where Mark grew up. Mark attended college at Georgetown University in Washington, DC, majoring in International Economics, and moved to California after graduation -- following his parents and wider family who all moved to California.'
        onButtonClick={() => console.log("Button clicked")}
      />
    </Container>
  );
}
export default AboutMarkPage;
