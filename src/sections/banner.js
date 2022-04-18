import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Label,
  Input,
  Button,
  Link,
  Image,
} from "theme-ui";

import bannerImg from "assets/banner.svg";

// Translations
import { IntlProvider, FormattedMessage } from "react-intl";

const BANNER_DATA = {
  title: "Adopting and Living with Pets made easy",
  EsTitle: "Adoptar y vivir con animales nunca fue tan facil",
  text: "Znuffy is the first Platform in the market that provides tools to adopt Animals looking for a home, and the elements needed to maintain your new best friends stress-free.",
  EsText:
    "Znuffy es la primera plataforma del mercado que proporciona herramientas para adoptar animales que buscan un hogar, y los elementos necesarios para mantener a tus nuevos mejores amigos sin estrés.",
  image: bannerImg,
};
const Banner = () => {
  const { title, EsTitle, text, EsText, image } = BANNER_DATA;
  return (
    <IntlProvider messages={BANNER_DATA} locale="es" defaultLocale="en">
      <Box as="section" id="banner" sx={styles.section}>
        <Container sx={styles.container}>
          <Flex sx={styles.flex}>
            <Box sx={styles.content}>
              <Heading as="h2">
                <FormattedMessage id={title} defaultMessage={EsTitle} />
              </Heading>
              <Text as="p">
                <FormattedMessage id={text} defaultMessage={EsText} />
              </Text>
            </Box>
            <Box sx={styles.images}>
              <Image src={image} width="740" height="558" alt="section image" />
            </Box>
          </Flex>
        </Container>
      </Box>
    </IntlProvider>
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
