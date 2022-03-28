import React from "react";
import Image from "next/image";
import { Box, Container, Flex, Heading, Text } from "theme-ui";
import Accordion from "components/accordion/accordion";
import image from "assets/faq-one-1.png";
import dog from "assets/img/dog2.png";
import banner from "assets/bannerForWho/bannerForWhat.jpg";

const FAQ_ONE_DATA = {
  sectionImage: banner,
  tagline: "... but, why?",
  title: "Only Asuncion got over +70,000 Dogs living in the streets..",
  text: "The amount of Dogs and Cats living in the streets represent a hazard to the City and Citizens. They spread sicknesses, defecate in the streets, they are born and die in there and may even bite bypassers, but most importantly, they deserve a proper life!",
  faqs: [
    {
      isExpanded: true,
      title: "Whats the current estimated amount of animals in Asuncion 2022?",
      contents: (
        <div>
          Since 2006, there has been over +70.000 DOGS in the streets, not even
          counting any cats or......
        </div>
      ),
    },
    {
      isExpanded: false,
      title: "What are we going to do",
      contents: (
        <div>
          Get your website ads tests delivered at let collect sample from the
          victory of the managments that supplies best design system which
          guidelines ever with multiple features.
        </div>
      ),
    },
    {
      isExpanded: false,
      title: "Whats the 5 year plan?",
      contents: (
        <div>
          Get your website ads tests delivered at let collect sample from the
          victory of the managments that supplies best design system which
          guidelines ever with multiple features.
        </div>
      ),
    },
  ],
};
const Reason = () => {
  const { sectionImage, title, text, tagline, faqs } = FAQ_ONE_DATA;
  return (
    <Box as="section" id="team" sx={styles.section}>
      <Box sx={styles.sectionImage}>
        <Image
          src={sectionImage}
          width="1011"
          height="830"
          alt="sectionImage"
        />
      </Box>
      <Container sx={styles.container}>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Box sx={styles.sectionTitle}>
              <Text as="span">{tagline}</Text>
              <Heading as="h2">{title}</Heading>
              <Text as="p">{text}</Text>
            </Box>
            <Accordion items={faqs} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Reason;

const styles = {
  section: {
    position: "relative",
  },
  container: {
    maxWidth: ["100%", null, null, null, null, "1170px", "1280px"],
    position: "relative",
  },
  sectionImage: {
    display: ["none", null, null, null, "block"],
    position: ["relative", null, null, null, "absolute"],
    top: 0,
    top: "10%",
    left: [0, null, null, null, "-35%", "-15%", "0%"],
    maxWidth: ["20%", null, null, "94%", null, "100%"],
    mx: ["auto", null, null, null, 0],
    "@media(min-width: 1240px)": {
      left: "-20%",
    },
    "@media(min-width: 1440px)": {
      left: "-17%",
    },
    "@media(min-width: 1650px)": {
      left: "-10%",
    },
    "@media(min-width: 1850px)": {
      left: "0%",
    },
  },
  flex: {
    display: "flex",
    gap: 0,
    justifyContent: ["flex-start", null, null, null, "flex-end"],
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 60%", "0 0 45%"],
    pl: ["0", null, null, null, "80px"],
    pt: ["60px", null, null, null, "80px"],
    pb: ["50px", null, null, "70px", null, null, "90px"],
  },
  sectionTitle: {
    mb: "30px",
    textAlign: ["left", null, "center", null, "left"],
    h2: {
      color: "#0F2137",
      fontWeight: 500,
      fontSize: ["22px", null, null, "28px", "32px", "36px", "40px"],
      lineHeight: 1.5,
      letterSpacing: "-1.5px",
      mt: "10px",
      maxWidth: ["100%", "300px", "400px", null, "100%"],
      mx: ["0", null, "auto", null, "0"],
    },
    span: {
      color: "secondary",
      fontSize: ["15px", "16px"],
      lineHeight: 1.87,
      display: "block",
    },
    p: {
      color: "#0F2137",
      fontSize: "16px",
      lineHeight: 2.19,
      maxWidth: ["100%", "340px", "400px", null, "100%"],
      mx: ["0", null, "auto", null, "0"],
      mt: ["15px", null, null, "25px"],
    },
  },
};
