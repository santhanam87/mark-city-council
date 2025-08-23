import SpotLight from "../components/spotlight";
import whoIsMarkImage from "../assets/10.jpg";
import whyVoteMarkImage from "../assets/3.jpg";
import QuiltedImageList from "../components/image-list";
import Container from "@mui/material/Container";

import WhatISupport from "../components/what-i-support";
function HomePage() {
  return (
    <>
      <QuiltedImageList />
      <Container maxWidth='lg'>
        <SpotLight
          imageUrl={whoIsMarkImage}
          title='Who is Mark Gormley?'
          description='Mark was born in Bronx, NY to a 15-year-old mother and 17-year-old father and was given up for adoption. Adopted by a very loving couple in Brooklyn, NY (the second of their two adoptions), the family moved to New Jersey where Mark grew up. Mark attended college at Georgetown University in Washington, DC, majoring in International Economics, and moved to California after graduation -- following his parents and wider family who all moved to California.'
          onButtonClick={() => console.log("Button clicked")}
        />
        <SpotLight
          imageUrl={whyVoteMarkImage}
          title='Why I Am Asking for Your Vote?'
          description={
            <>
              I see serving on City Council as Public Service -- not “political”
              and not for patronage purposes. I am not a career politician. I’m
              a Civil Servant. I want to help steer the city into the future by
              serving as a conduit for what citizens want, as a guide to effect
              policies best-suited to provide what is wanted, and as a buffer to
              protect the city from the “national trickle down” impacts as they
              filter down to the municipal level passing through state-level
              government.
            </>
          }
          onButtonClick={() => console.log("Button clicked")}
        />
        <WhatISupport />
      </Container>
    </>
  );
}

export default HomePage;
