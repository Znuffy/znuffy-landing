/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading, Box, Text, Container } from "theme-ui";
import { Link } from "components/link";
import Logo from "components/logo";
export default function Footer() {
  return (
    <footer
      sx={{
        variant: "layout.footer",
      }}
    >
      <Container
        sx={{
          variant: "layout.toolbar",
          flexDirection: ["column", null, null, null, "row"],
          py: "40px",
        }}
      >
        <Logo />
        <Text sx={styles.copyright}>
          &copy; Copyright by {new Date().getFullYear()} Znuffy LTD
        </Text>
        <Box sx={styles.bottomMenu}>
          <Link path="/" label="Home" />
          <Link path="/" label="Mission" />
          <Link path="/" label="Team" />
          <Link path="/" label="Newsletter" />
          <Link path="/" label="Got Recomendations?" />
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  title: {
    color: "#0F2137",
    fontSize: "18px",
    fontWeight: 500,
    letterSpacing: "-0.5px",
    mb: "0",
  },
  link: {
    color: "#02073E",
    fontSize: "14px",
    lineHeight: 2.5,
    display: "block",
    opacity: 0.8,
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 1,
    },
  },
  copyright: {
    color: "#0F2137",
    opacity: 0.6,
    fontSize: "14px",
    ml: ["10px"],
  },
  bottomMenu: {
    display: "flex",
    marginLeft: [0, null, null, null, "auto"],
    mt: ["10px", null, null, null, 0],
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    a: {
      color: "#02073E",
      fontSize: "15px",
      "+a": {
        ml: ["10px", "30px"],
      },
    },
  },
};
