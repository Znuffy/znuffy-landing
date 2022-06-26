import React, { useContext, useState, useEffect } from "react";
import { Box, Container, Flex, Heading, Text, Image } from "theme-ui";

// Context
import { LanguageContext } from "../contexts/language/language.context";

const Banner = () => {
  const [currentLanguage, setCurrentLanguage] = useState();
  const { state } = useContext(LanguageContext);

  useEffect(() => {
    if (state.currentLanguage === "ENG") {
      setCurrentLanguage(state.ENG.banner);
    } else if (state.currentLanguage === "ESP") {
      setCurrentLanguage(state.ESP.banner);
    }
  }, [state.currentLanguage]);
  return (
    <>
      {currentLanguage !== undefined && (
        <Box as="section" id="banner" sx={styles.section}>
          <Container sx={styles.container}>
            <Flex sx={styles.flex}>
              <Box sx={styles.content}>
                <Heading as="h2">{currentLanguage.title}</Heading>
                <Text as="p">{currentLanguage.text}</Text>
              </Box>
              <Box sx={styles.images}>
                <Image
                  src={currentLanguage.image}
                  width="740"
                  height="558"
                  alt="section image"
                />
              </Box>
            </Flex>
          </Container>
        </Box>
      )}
    </>
  );
};

export default Banner;

const styles = {
  section: {
    overflow: "hidden",
    backgroundColor: "#F9FBFD",
    pt: ["160px", null, null, null, "200px"],
    pb: ["70px", null, null, null, "70px"],
  },
  container: {
    maxWidth: ["100%", null, null, null, null, "1170px", "1280px"],
    position: "relative",
  },
  flex: {
    flexWrap: "wrap",
    gap: 0,
  },
  content: {
    textAlign: ["center", "left", null, "center", "left"],
    flex: ["0 0 100%", null, null, null, "0 0 50%", "0 0 40%"],
    h2: {
      fontFamily: "Bree Serif",
      color: "#02073E",
      letterSpacing: "-1px",
      fontSize: ["28px", null, "32px", null, null, "45px", "55px"],
      lineHeight: 1.45,
      maxWidth: "486px",
      mb: "10px",
      mx: ["0", null, null, "auto"],
    },
    p: {
      fontSize: ["15px", null, "16px"],
      lineHeight: [2, null, 2.62],
      color: "#02073E",
      maxWidth: "486px",
      mx: ["0", null, null, "auto"],
    },
  },
  images: {
    flex: ["0 0 100%", null, null, null, "0 0 50%", "0 0 60%"],
    position: "relative",
    left: ["auto", null, null, null, "50px", "100px"],
    mt: ["30px", null, "40px", null, "0"],
  },
};
