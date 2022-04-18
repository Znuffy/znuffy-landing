import React from "react";
import { Container, Link, Box, Grid, Heading, Text, Image } from "theme-ui";
import { IoIosArrowForward } from "react-icons/io";
import SectionHeading from "components/section-heading";
import feature3 from "assets/service-3.svg";
import feature4 from "assets/service-4.svg";
import feature5 from "assets/service-5.svg";
import anjiePic from "assets/teamPics/Anjie3.jpeg";
import refitPic from "assets/teamPics/Refit.jpg";
import maxPic from "assets/teamPics/Max2.jpg";
import ximePic from "assets/teamPics/xime2.png";
import barbiePic from "assets/teamPics/barbie.png";

// Memojis
import maxMemoji from "../assets/teamPics/memojis/maxMemoji.png";
import ximeMemoji from "../assets/teamPics/memojis/ximeMemoji.png";

const PRODUCT_FEATURE = {
  sectionTitle: {
    text: `"There is nothing a group of crazy people with a common goal can't do"`,
    title: "Our beloved Team",
  },
  posts: [
    {
      icon: anjiePic,
      title: "Anjelika Angelova",
      role: "UX Designer and Strategist",
      text: "My purpose is to contribute to something impactful, something meaningful that will bring change. And working on Znuffy is the best example for that.",
    },
    {
      icon: refitPic,
      title: "Refit Refiti",
      role: "UX Designer and Strategist",
      text: "Get your info tests delivered at hoe collect a sample from the your pogress actual tests.",
    },
    {
      icon: feature3,
      title: "Nathaly Guerrero",
      role: "Marketing",
      text: "Get your info tests delivered at home collect a sample from the your pogress actual tests.",
    },
    {
      icon: barbiePic,
      title: "Barbie Cáceres",
      role: "AudioVisual Documentation",
      text: "Get your info tests delivered at home collect a sample from the your pogress actual tests.",
    },
    {
      icon: ximeMemoji,
      title: "Ximena Scura",
      role: "Graphic Communications",
      text: "Get your info tests delivered at home collect a sample from the your pogress actual tests.",
    },
    {
      icon: maxMemoji,
      title: "Max Rosales",
      role: "Project and Technological Development",
      text: "Get your info tests delivered at home collect a sample from the your pogress actual tests.",
    },
  ],
};

const Team = () => {
  const { sectionTitle, posts } = PRODUCT_FEATURE;
  return (
    <Box sx={styles.section} id="team">
      <Container>
        <SectionHeading slogan={sectionTitle.text} title={sectionTitle.title} />

        <Grid sx={styles.grid}>
          {posts.map(({ icon, title, text, role }, index) => (
            <Box key={`feature-key-${index}`} sx={styles.items}>
              <Box className="image">
                <Image src={icon} alt={title} variant="avatar" />
              </Box>
              <Box sx={styles.itemContent}>
                <Heading as="h3">{title}</Heading>
                <Heading as="p">
                  <Text as="span">{role}</Text>
                </Heading>
                <Text as="p">{text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
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
};
