import React, { useContext } from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Mission from "sections/Mission";
import Reason from "sections/Reason";
import Faq from "sections/Faq";
import Video from "sections/video";
import Team from "../sections/Team";

import { LanguageProvider } from "../contexts/language/language.provider";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <StickyProvider>
          <Layout>
            <SEO
              title="Znuffy Landing"
              description="Landing page for the Znuffy App"
            />
            <Banner />
            <Mission />
            <Reason />
            <Video />
            <Team />
            <Faq />
          </Layout>
        </StickyProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
