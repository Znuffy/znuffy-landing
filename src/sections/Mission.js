import React, { useContext, useState, useEffect } from "react";
import { Box, Container, Flex, Heading, Text, Image } from "theme-ui";
import { LanguageContext } from "../contexts/language/language.context";

const Mission = () => {
  const [currentLanguage, setCurrentLanguage] = useState();
  const { state } = useContext(LanguageContext);

  useEffect(() => {
    if (state.currentLanguage === "ENG") {
      setCurrentLanguage(state.ENG.mission);
    } else if (state.currentLanguage === "ESP") {
      setCurrentLanguage(state.ESP.mission);
    }
  }, [state.currentLanguage]);

  return (
    <>
      {currentLanguage !== undefined && (
        <Box as="section" id="mission" sx={styles.section}>
          <Container sx={styles.container}>
            <Box sx={styles.sectionTitle}>
              <Text as="p">{currentLanguage.title}</Text>
              <Heading as="h2">{currentLanguage.text}</Heading>
            </Box>
            <Flex sx={styles.flex}>
              {currentLanguage.posts.map(({ image, title, text }, index) => (
                <Box sx={styles.post} key={`feature-post-key-${index}`}>
                  <Box className="image">
                    <Image width="70" height="70" src={image} alt={title} />
                  </Box>
                  <Box sx={styles.postContent}>
                    <Heading as="h3">{title}</Heading>
                    <Text as="p">{text}</Text>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Container>
        </Box>
      )}
    </>
  );
};

export default Mission;

const styles = {
  section: {
    overflow: "hidden",
  },
  container: {},
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  sectionTitle: {
    textAlign: "center",
    mb: ["40px", null, null, "70px"],
    h2: {
      color: "#0F2137",
      fontWeight: 500,
      fontSize: ["22px", null, null, "24px"],
      lineHeight: 1,
      letterSpacing: "-0.5px",
      mt: "15px",
    },
    p: {
      color: "secondary",
      fontSize: "16px",
      lineHeight: 1.87,
    },
  },
  post: {
    mb: "30px",
    mx: ["0", null, null, null, null, "15px"],
    display: "flex",
    flex: ["0 0 100%", null, null, "0 0 calc(33.333% - 30px)"],
    flexDirection: ["column", null, null, null, "row"],
    justifyContent: ["center", null, "flex-start"],
    textAlign: ["center", null, null, "left"],
    ">.image": {
      flexShrink: 0,
      width: "70px",
      height: "70px",
      mx: ["auto", null, null, "0"],
    },
  },
  postContent: {
    ml: ["0", null, null, null, "30px"],
    mt: ["20px", null, null, null, "0"],
    h3: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: 1,
      color: "#0F2137",
      mb: "15px",
    },
    p: {
      color: "#343D48",
      lineHeight: 1.87,
      fontSize: ["14px", null, null, "16px"],
      maxWidth: ["100%", "300px", null, "100%"],
      mx: [null, "auto", null],
    },
  },
};
