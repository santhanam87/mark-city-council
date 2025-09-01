import SpotLight from "../components/spotlight";
import whoIsMarkImage from "../assets/10.jpg";
import whyVoteMarkImage from "../assets/3.jpg";
import QuiltedImageList from "../components/image-list";
import Container from "@mui/material/Container";
import { useNavigate } from "@tanstack/react-router";

import WhatISupport from "../components/what-i-support";
import Endorsement from "../components/endorsement";
import Quote from "../components/quote";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";

/**
 * 
 * 
 *
{quote:“Treat the earth well: it was not given to you by your parents; it was loaned to you by your children. We do not inherit
the Earth from our Ancestors; we borrow it from our Children.", author:"Native American Proverb"},
{quote:“The only thing we have to fear is fear itself.” –- Franklin Delano Roosevelt
{quote:“The secret of genius is to carry the spirit of the child into old age, which means never losing your enthusiasm.” –-
Aldous Huxley
{quote:“Our lives begin to end the day we become silent about things that matter.” -– Martin Luther King, Jr.
{quote:“If you are depressed, you are living in the past. If you are anxious, you are living in the future. If you are at peace, you
are living in the present.” –- Lao Tzu
{quote:“The Possible’s slow fuse is lit by the imagination.” -– Emily Dickinson
 */

const quotes = [
  {
    quote:
      "For in the true nature of things, if we rightly consider, every green tree is far more glorious than if it were made of gold and silver.",
    author: "Martin Luther",
  },
  {
    quote: "The world reveals itself to those who travel on foot.",
    author: "Werner Herzog",
  },
  {
    quote:
      "The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.",
    author: "Rachel Carson",
  },
  {
    quote:
      "Treat the earth well: it was not given to you by your parents; it was loaned to you by your children. We do not inherit the Earth from our Ancestors; we borrow it from our Children.",
    author: "Native American Proverb",
  },
  {
    quote:
      "Treat the earth well: it was not given to you by your parents; it was loaned to you by your children. We do not inherit the Earth from our Ancestors; we borrow it from our Children.",
    author: "Native American Proverb",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin Delano Roosevelt",
  },
  {
    quote:
      "The secret of genius is to carry the spirit of the child into old age, which means never losing your enthusiasm.",
    author: "Aldous Huxley",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King, Jr",
  },
  {
    quote:
      "If you are depressed, you are living in the past. If you are anxious, you are living in the future. If you are at peace, you are living in the present.",
    author: "Lao Tzu",
  },
  {
    quote: "The Possible’s slow fuse is lit by the imagination.",
    author: "Emily Dickinson",
  },
];

function getRandomArbitrary(max: number) {
  const index = Math.floor(Math.random() * max + 1);
  return index >= max ? max - 1 : index;
}

function HomePage() {
  const navigate = useNavigate({ from: "/" });
  const [quoteIndex, updateQuoteIndex] = useState(0);

  useEffect(() => {
    const qinterval = setInterval(() => {
      updateQuoteIndex(getRandomArbitrary(quotes.length));
    }, 5000);
    return () => {
      clearInterval(qinterval);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "common.black",
          borderBottom: "2px solid",
          borderColor: "common.white",
        }}
      >
        <Container
          maxWidth='lg'
          sx={{
            paddingY: 3,
          }}
        >
          <Typography
            variant='h3'
            sx={{
              color: "secondary.main",
              fontWeight: 700,
              fontSize: 40,
              textAlign: "center",
            }}
          >
            <Star sx={{ color: "error.main" }} />
            <Star sx={{ color: "common.white" }} />
            <Star sx={{ color: "primary.light" }} />
            &nbsp;&nbsp; Vote &nbsp;
            <Box component={"span"} sx={{ color: "common.white" }}>
              Mark Gormley
            </Box>
            &nbsp; Thornton City Council Ward 3&nbsp;&nbsp;
            <Star sx={{ color: "error.main" }} />
            <Star sx={{ color: "common.white" }} />
            <Star sx={{ color: "primary.light" }} />
          </Typography>
        </Container>
      </Box>
      <QuiltedImageList />
      <Box
        sx={{
          backgroundColor: "common.black",
          borderBottom: "5px solid",
          borderColor: "secondary.light",
        }}
      >
        <Container
          maxWidth='lg'
          sx={{
            paddingY: 3,
          }}
        >
          <Typography
            variant='h3'
            sx={{
              color: "common.white",
              fontWeight: 700,
              fontSize: 40,
              textAlign: "center",
            }}
          >
            <Star sx={{ color: "error.main" }} />
            <Star sx={{ color: "common.white" }} />
            <Star sx={{ color: "primary.light" }} />
            &nbsp;&nbsp; Honest &nbsp;&nbsp;
            <Star sx={{ color: "error.main" }} />
            <Star sx={{ color: "common.white" }} />
            <Star sx={{ color: "primary.light" }} />
            &nbsp;&nbsp;
            <Box component={"span"} sx={{ color: "secondary.main" }}>
              Thoughtful
            </Box>{" "}
            &nbsp;&nbsp;
            <Star sx={{ color: "error.main" }} />
            <Star sx={{ color: "common.white" }} />
            <Star sx={{ color: "primary.light" }} />
            &nbsp;&nbsp; Inquisitive &nbsp;&nbsp;
            <Star sx={{ color: "error.main" }} />
            <Star sx={{ color: "common.white" }} />
            <Star sx={{ color: "primary.light" }} />
          </Typography>
        </Container>
      </Box>
      <Container maxWidth='lg'>
        <SpotLight
          imageUrl={whyVoteMarkImage}
          title='Why I Am A Candidate for Thornton City Council Ward 3'
          description={
            <>
              I want to:
              <ul style={{ margin: 0 }}>
                <li>be a public servant, not a politician</li>
                <li>serve Ward 3 residents’ needs, not special interests</li>
                <li>
                  steer the city into the future by communicating with Ward 3
                  residents
                </li>
                <li>
                  advocate to effect policies that meet Ward 3 residents needs
                </li>
                <li>
                  help protect City of Thornton from the negative impact of
                  regional, state or national decisions
                </li>
              </ul>
            </>
          }
          onButtonClick={() => {
            navigate({ to: "/why-mark" });
          }}
        />
        <Quote {...quotes[quoteIndex]} />
        <SpotLight
          imageUrl={whoIsMarkImage}
          title='MEET MARK GORMLEY'
          description='Mark was born in Bronx, NY to a 15-year-old mother and 17-year-old
          father and adopted by a very loving couple in Brooklyn, NY. The family
          moved to New Jersey where Mark grew up. Mark graduated from Georgetown
          University, majoring in International Economics, spending some time in
          Quito, Ecuador. Mark has lived in California, New York, Rhode Island,
          North Carolina, and Florida. Mark’s home has been in Thornton since
          1997.'
          onButtonClick={() => {
            navigate({ to: "/about" });
          }}
        />

        <WhatISupport />
        <Endorsement />
      </Container>
    </>
  );
}

export default HomePage;
