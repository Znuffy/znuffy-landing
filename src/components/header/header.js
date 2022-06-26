/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/logo";
import { DrawerProvider } from "contexts/drawer/drawer.provider";
import { LanguageContext } from "contexts/language/language.context";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import Flag from "../UI/Flag";
import React, { useCallback, useState, useEffect, useContext } from "react";

export default function Header({ className, onPickLanguage }) {
  const { state, dispatch } = useContext(LanguageContext);
  const setESP = useCallback(() => dispatch({ type: "SET_ESP" }), [dispatch]);
  const setENG = useCallback(() => dispatch({ type: "SET_ENG" }), [dispatch]);

  const languagePicker = (e) => {
    if (e === "ENG") {
      setENG();
    } else if (e === "ESP") {
      setESP();
    } else {
      console.log("ni uno :(");
    }
  };

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label, offset }, i) => (
              <ScrollLink
                activeClass="active"
                sx={styles.nav.navLink}
                to={path}
                spy={true}
                smooth={true}
                offset={offset}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
            <div sx={styles.languages}>
              <Flag language="ESP" onPickLanguage={languagePicker} />
              <Flag language="ENG" onPickLanguage={languagePicker} />
            </div>
          </Flex>
          <MobileDrawer langPicker={languagePicker} />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  header: {
    color: "text_white",
    fontWeight: "normal",
    py: "20px",
    width: "100%",
    backgroundColor: "#fff",
    transition: "all 0.4s ease",
    borderBottom: "1px solid #E9EDF5",
    position: "fixed",
    top: 0,
    left: 0,

    "&.sticky": {
      backgroundColor: "background",
      color: "text",
      py: "15px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: ["100%", null, null, null, null, "1170px", "1280px"],
  },
  nav: {
    ml: "50px",
    "@media screen and (max-width: 960px)": {
      display: "none",
    },
    navLink: {
      fontSize: "16px",
      color: "#02073E",
      fontWeight: "400",
      cursor: "pointer",
      lineHeight: "1.2",
      mr: "48px",
      transition: "500ms",
      "@media(max-width:1024px)": {
        mr: "30px",
      },
      ":last-child": {
        mr: "0",
      },
      "&:hover, &.active": {
        color: "#3AABF5",
      },
    },
  },
  languages: {
    display: "flex",
    flexDirection: "row",
  },
};
