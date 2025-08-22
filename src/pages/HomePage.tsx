import SpotLight from "../components/spotlight";
import QuiltedImageList from "../components/image-list";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import IssueCard from "../components/card";
import Typography from "@mui/material/Typography";
import whoIsMarkImage from "../assets/10.jpg";
import whyVoteMarkImage from "../assets/3.jpg";
import qaulityOfLifeImage from "../assets/9.jpg";
import waterConservation from "../assets/17.jpg";
import cityOfThornton from "../assets/19.jpg";
import metroDistrict from "../assets/20.jpg";

function HomePage() {
  return (
    <>
      <QuiltedImageList />
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
            and not for patronage purposes. I am not a career politician. I’m a
            Civil Servant. I want to help steer the city into the future by
            serving as a conduit for what citizens want, as a guide to effect
            policies best-suited to provide what is wanted, and as a buffer to
            protect the city from the “national trickle down” impacts as they
            filter down to the municipal level passing through state-level
            government.
          </>
        }
        onButtonClick={() => console.log("Button clicked")}
      />
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
        What I Support and What I Care About
      </Typography>
      <Divider sx={{ marginY: 2 }} />
      <Stack direction='row' spacing={2} sx={{ marginBottom: 4 }}>
        <IssueCard
          title='Quality Life | People Over Profits'
          imageUrl={qaulityOfLifeImage}
          onButtonClick={() => console.log("Button clicked")}
          description='Water conservation might be the most compelling requirement of the future. Many authorities foresee that wars in
the future will be fought over access to water – unlike wars in the past over gold and other precious resources.'
        />
        <IssueCard
          title='City-Wide and Ward 3'
          imageUrl={metroDistrict}
          onButtonClick={() => console.log("Button clicked")}
          description='While each City Council Member is elected to represent the people of their individual Ward, most policies and
decisions affect us all – the city as a whole – and deference to the needs of others sometimes must be given for the long-term benefit of the whole. We are all one.'
        />
        <IssueCard
          title='Metro Districts Granting and Oversight'
          imageUrl={cityOfThornton}
          onButtonClick={() => console.log("Button clicked")}
          description='Better oversight over the terms granted to Residential Metro District Development to better protect/promote the
financial interests of homeowner taxpayers over developers and corporations.'
        />
        <IssueCard
          title='Water conservation'
          imageUrl={waterConservation}
          onButtonClick={() => console.log("Button clicked")}
          description='Water conservation might be the most compelling requirement of the future. Many authorities foresee that wars in
the future will be fought over access to water – unlike wars in the past over gold and other precious resources.'
        />
      </Stack>
    </>
  );
}

export default HomePage;
