import React, { useContext, useState, useEffect } from "react";
import { Container, Box, Grid, Heading, Text, Image } from "theme-ui";
import SectionHeading from "components/section-heading";

// Context
import { LanguageContext } from "../contexts/language/language.context";

const Team = () => {
  const [currentLanguage, setCurrentLanguage] = useState();
  const { state } = useContext(LanguageContext);

  useEffect(() => {
    if (state.currentLanguage === "ENG") {
      setCurrentLanguage(state.ENG.team);
    } else if (state.currentLanguage === "ESP") {
      setCurrentLanguage(state.ESP.team);
    }
  }, [state.currentLanguage]);

  return (
    <>
      {currentLanguage !== undefined && (
        <Box sx={styles.section} id="team">
          <Container>
            <SectionHeading
              slogan={currentLanguage.text}
              title={currentLanguage.title}
            />

            <Grid sx={styles.grid}>
              {currentLanguage.posts.map(
                ({ icon, title, text, role, smIcon, linkedIn }, index) => (
                  <Box key={`feature-key-${index}`} sx={styles.items}>
                    <Box className="image">
                      <Image src={icon} alt={title} variant="avatar" />
                    </Box>
                    <Box sx={styles.itemContent}>
                      <Box>
                        <Heading as="h3">{title}</Heading>
                        {/* <Image src={icon} alt={title} variant="avatar" /> */}
                      </Box>
                      <Heading as="p">
                        <Text as="span">{role}</Text>
                        <a href={`${linkedIn}`} target="_blank">
                          <Image
                            src={smIcon}
                            alt={title}
                            variant="avatar"
                            sx={styles.smIcon}
                          />
                        </a>
                      </Heading>
                      <Text as="p">{text}</Text>
                    </Box>
                  </Box>
                )
              )}
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};

export default Team;

const styles = {
  section: {
    pt: ["70px", null, null, null, "100px", null, "150px"],
    pb: ["40px", null, null, null, "70px", null, "90px"],
    backgroundColor: "#F9FAFC",
  },
  grid: {
    gridColumnGap: "30px",
    gridTemplateColumns: ["1fr", null, "1fr 1fr", null, "1fr 1fr 1fr"],
  },
  items: {
    display: "flex",
    mb: ["30px", null, null, null, null, null, "60px"],
    ".image": {
      flexShrink: "0",
      mr: ["20px", null, null, "30px"],
    },
  },
  itemContent: {
    h3: {
      fontSize: ["17px", null, null, null, "18px"],
      color: "#0F2137",
      fontWeight: 700,
      lineHeight: 1,
      alignItems: "center",
      display: "inline-flex",
      flexWrap: "wrap",
      span: {
        backgroundColor: "#28A5FF",
        fontSize: "13px",
        color: "#fff",
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        lineHeight: "26px",
        borderRadius: "30px",
        letterSpacing: "-0.5px",
        px: "10px",
        ml: ["10px", null, "10px", "10px"],
        mt: ["0", null, "5px", "0"],
      },
    },
    p: {
      color: "#343D48",
      fontSize: ["14px", null, null, "16px"],
      lineHeight: 1.87,
      mt: "5px",
      mb: "10px",
    },
    a: {
      display: "inline-flex",
      alignItems: "center",
      fontSize: "15px",
      color: "#3183FF",
      fontWeight: 500,
      transition: "all 500ms ease",
      "&:hover": {
        color: "black",
      },
      svg: {
        fontSize: "17px",
        ml: "5px",
      },
    },
  },
  smIcon: {
    width: "100%",
    height: "2vh",
    borderRadius: "0",
    paddingLeft: "0.5vw",
    "@media screen and (max-width: 600px)": {
      display: "flex",
      marginLeft: "2vw",
    },
  },
};
