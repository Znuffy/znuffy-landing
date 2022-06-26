import React, { useContext, useState, useEffect } from "react";
import { Box, Container, Flex, Heading, Text, Image } from "theme-ui";
import Accordion from "components/accordion/accordion";
import { LanguageContext } from "../contexts/language/language.context";
// import dog_with_computer from "../assets/img/dog_with_computer.png";

const Reason = () => {
  const [currentLanguage, setCurrentLanguage] = useState();
  const { state } = useContext(LanguageContext);

  useEffect(() => {
    if (state.currentLanguage === "ENG") {
      setCurrentLanguage(state.ENG.reason);
    } else if (state.currentLanguage === "ESP") {
      setCurrentLanguage(state.ESP.reason);
    }
  }, [state.currentLanguage]);

  return (
    <>
      {currentLanguage !== undefined && (
        <Box as="section" sx={styles.section}>
          <Box sx={styles.sectionImage}>
            <Image
              src={currentLanguage.sectionImage}
              width="1011"
              height="830"
              alt="sectionImage"
            />
          </Box>
          <Container sx={styles.container}>
            <Flex sx={styles.flex}>
              <Box sx={styles.content}>
                <Box sx={styles.sectionTitle}>
                  <Text as="span">{currentLanguage.tagline}</Text>
                  <Heading as="h2">{currentLanguage.title}</Heading>
                  <Text as="p">{currentLanguage.text}</Text>
                </Box>
                <Accordion items={currentLanguage.faqs} />
              </Box>
            </Flex>
          </Container>
        </Box>
      )}
    </>
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
