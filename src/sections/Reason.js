import React from "react";
import { Box, Container, Flex, Heading, Text, Image } from "theme-ui";
import Accordion from "components/accordion/accordion";
import image from "assets/faq-one-1.png";
import dog from "assets/img/dog2.png";
import banner from "assets/bannerForWho/bannerForWhat.jpg";

// Translations
import { IntlProvider, FormattedMessage } from "react-intl";

const FAQ_ONE_DATA = {
  sectionImage: banner,
  tagline: "... but, why?",
  EsTagline: "... pero, ¿porque?",
  title: "Only Asuncion got over +70,000 Dogs living in the streets..",
  EsTitle:
    "Sólo en Asunción hay más de +70.000 perros viviendo en las calles..",
  text: "The amount of Dogs and Cats living in the streets represent a hazard to the City and Citizens. They spread sicknesses, defecate in the streets, they are born and die in there and may even bite bypassers, but most importantly, they deserve a proper life!",
  EsText:
    "La cantidad de Perros y Gatos que viven en las calles representan un peligro para la Ciudad y los Ciudadanos. Estos, pueden contagiar enfermedades, defecan en las calles, nacen y mueren allí y pueden incluso morder a los transeúntes, pero lo más importante es que merecen una vida digna.",
  faqs: [
    {
      isExpanded: true,
      title: "Whats the current estimated amount of animals in Asuncion 2022?",
      EsTitle:
        "¿Cuál es la cantidad actual estimada de animales en Asunción 2022?",
      contents:
        "Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.",
      EsContents:
        "Actualmente, no existe ningun estudio que pueda garantizar exactamente cuantos perros y gatos viven en Asuncion, sin embargo, una de nuestras principales metas es, poder identificar la situacion actual, e idear un plan especifico para reducir la cantidad de animales abandonados.",
    },
    {
      isExpanded: false,
      title: "What are we going to do",
      EsTitle: "¿Qué planeamos hacer?",
      contents:
        "Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.",
      EsContents:
        "Znuffy nació con el objetivo de solucionar el problema de animales sin dueños en el Paraguay (comenzando por Asunción). Por esta razon, creemos que la forma mas sostenible (en un inicio), es facilitar la adopcion de animales, creando un plataforma segura y confiable, donde las personas pueden publicar animales encontrados, perdidos y animales que podrían ser adoptados. Tambien creemos, que uno de los principales problemas por lo cual las personas no adoptan más animales, es el elevado costo de manutención, por esta razon, nace ZnuffyCommerce, para proveer de productos animales a un bajo y accessible costo, sin tener que dejar el comfort de tu hogar.",
    },
    {
      isExpanded: false,
      title: "Whats the 5 year plan?",
      EsTitle: "¿Que es el plan de 5 años?",
      contents:
        "Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.",
      EsContents:
        "Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.",
    },
  ],
};
const Reason = () => {
  const {
    sectionImage,
    title,
    EsTitle,
    text,
    EsText,
    tagline,
    EsTagline,
    faqs,
  } = FAQ_ONE_DATA;
  return (
    <IntlProvider messages={FAQ_ONE_DATA} locale="es" defaultLocale="en">
      <Box as="section" sx={styles.section}>
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
                <Text as="span">
                  <FormattedMessage id={tagline} defaultMessage={EsTagline} />
                </Text>
                <Heading as="h2">
                  <FormattedMessage id={title} defaultMessage={EsTitle} />
                </Heading>
                <Text as="p">
                  <FormattedMessage id={text} defaultMessage={EsText} />
                </Text>
              </Box>
              <Accordion items={faqs} />
            </Box>
          </Flex>
        </Container>
      </Box>
    </IntlProvider>
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
