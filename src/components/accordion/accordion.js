import React, { Fragment } from "react";
import { Image } from "theme-ui";
import { BaseAccordion } from "./base-accordion";
import accordionIconClose from "assets/faq-one-plus.svg";
import accordionIconOpen from "assets/faq-one-minus.svg";
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
  preventClose,
  combineReducers,
} from "./shared";

// Translations
import { IntlProvider, FormattedMessage } from "react-intl";

export default function Accordion({ items, ...props }) {
  const openIcon = <Image src={accordionIconOpen} alt="open icon" />;
  const closeIcon = <Image src={accordionIconClose} alt="close icon" />;
  return (
    <IntlProvider messages={items} locale="es" defaultLocale="en">
      <BaseAccordion
        stateReducer={combineReducers(single, preventClose)}
        {...props}
      >
        {({ openIndexes, handleItemClick }) => (
          <Fragment>
            {items.map((item, index) => (
              <AccordionItem
                key={item.title}
                isOpen={openIndexes.includes(index)}
              >
                <AccordionButton onClick={() => handleItemClick(index)}>
                  <span>
                    {openIndexes.includes(index) ? openIcon : closeIcon}
                  </span>
                  <FormattedMessage
                    id={item.title}
                    defaultMessage={item.EsTitle}
                  />
                </AccordionButton>
                <AccordionContents isOpen={openIndexes.includes(index)}>
                  <FormattedMessage
                    id={item.contents}
                    defaultMessage={item.EsContents}
                  />
                </AccordionContents>
              </AccordionItem>
            ))}
          </Fragment>
        )}
      </BaseAccordion>
    </IntlProvider>
  );
}
