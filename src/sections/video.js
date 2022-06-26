import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../contexts/language/language.context";
import { Box, Container, Heading, Text, Link, Image } from "theme-ui";
import ModalVideo from "react-modal-video";

const Video = () => {
  const [currentLanguage, setCurrentLanguage] = useState();
  const { state } = useContext(LanguageContext);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };

  useEffect(() => {
    if (state.currentLanguage === "ENG") {
      setCurrentLanguage(state.ENG.video);
    } else if (state.currentLanguage === "ESP") {
      setCurrentLanguage(state.ESP.video);
    }
  }, [state.currentLanguage]);
  return (
    <>
      {currentLanguage !== undefined && (
        <Box sx={styles.section}>
          <Container>
            <Box sx={styles.content}>
              <Heading as="h3">{currentLanguage.title}</Heading>
              <Text as="p">{currentLanguage.text}</Text>
            </Box>
            <Box onClick={handleClick} sx={styles.image}>
              <Image
                width="1075"
                height="650"
                src={currentLanguage.image}
                alt="video image"
              />
            </Box>
          </Container>
          <ModalVideo
            channel="youtube"
            isOpen={videoOpen}
            videoId="Qwok8si3bz4"
            onClose={() => setVideoOpen(false)}
          />
        </Box>
      )}
    </>
  );
};

export default Video;

const styles = {
  section: {
    pt: ["0px", null, null, "70px", "10%"],
  },
  image: {
    display: "block",
    mx: "auto",
    cursor: "pointer",
  },
  content: {
    textAlign: "center",
    mb: "20px",
    h3: {
      fontSize: ["22px", null, null, "24px", null, "30px"],
      fontWeight: 500,
      color: "#0F2137",
      letterSpacing: "-0.5px",
      mb: "20px",
      maxWidth: ["300px", null, null, "100%"],
      mx: ["auto", null, null, "0"],
      lineHeight: [1.5, null, null, null, null, "auto"],
    },
    p: {
      mx: "auto",
      fontSize: ["15px", null, null, "16px"],
      color: "#0F2137",
      lineHeight: [1.87, null, null, 2.19],
      maxWidth: "625px",
      mb: "20px",
    },
    a: {
      display: "inline-flex",
      alignItems: "center",
      color: "#4F96FF",
      fontSize: "16px",
      fontWeight: 700,
      transition: "all 500ms ease",
      "&:hover": {
        color: "black",
      },
      svg: {
        ml: "5px",
      },
    },
  },
};
