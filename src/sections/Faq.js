import React, { useState } from "react";
import { keyframes } from "@emotion/core";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
// Form
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Button,
  Flex,
} from "theme-ui";

import { Box, Container, Heading, Text, Link } from "theme-ui";
const FAQ_TWO_DATA = {
  sectionTitle: {
    title: "Frequantly asked question",
    text: "Get your question answer",
  },
  posts: [
    {
      status: false,
      title: "What exactly is Znuffy?",
      text: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
    },
    {
      status: true,
      title: "What do you want to accomplish?",
      text: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
    },
    {
      status: false,
      title: "When is it going to be launched?",
      text: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
    },
    {
      status: false,
      title: "I want to help, how can i do it?",
      text: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
    },
    {
      status: false,
      title: "I want to get in touch with the Znuffy Team",
      text: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
    },
    {
      status: false,
      title: "I want to donate to the Znuffy NGO",
      text: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
    },
  ],
  button: {
    link: "#",
    label: "Contact us <3",
  },
};
const FaqItem = ({ title, text, status, index }) => {
  const [active, setActive] = useState(status);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Box
      sx={styles.item}
      className={`${active === true ? "active" : " "}`}
      onClick={handleClick}
    >
      <Heading as="h3">
        <span>0{index + 1}.</span>
        {title}
      </Heading>
      {active === false ? <Text as="p">{text.slice(0, 65)} ...</Text> : null}
      {active === true ? <Text as="p">{text}</Text> : null}
      <Box sx={styles.icon}>
        {active === false ? <IoIosAdd /> : null}
        {active === true ? <IoIosRemove /> : null}
      </Box>
    </Box>
  );
};
const Faq = () => {
  const { sectionTitle, posts, button } = FAQ_TWO_DATA;
  const [openForm, setOpenForm] = useState(false);

  const buttonHandler = () => {
    setOpenForm(!openForm);
    console.log(openForm);
  };

  const Form = () => {
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [topic, setTopic] = useState();
    const [message, setMessage] = useState();

    const [thanksMessage, setThanksMessage] = useState();

    return (
      <>
        {!thanksMessage && (
          <form
            as="form"
            sx={{ marginTop: "5%" }}
            onSubmit={(e) => {
              e.preventDefault();
              const getData = async () => {
                try {
                  const response = await fetch(
                    "https://api.pumble.com/workspaces/622a80b0f1f3750071e7e29e/incomingWebhooks/postMessage/6231158a96bc223fec8457a0/4HSr6YxYjg2AbEHxVdjK7dRi",
                    {
                      method: "POST",
                      body: JSON.stringify({
                        text: `Name: ${name}, \nLastname: ${lastname}, \nPhone: ${phone}, \nEmail: ${email}, \nTopic: ${topic}, \nMessage: ${message}`,
                      }),
                    }
                  );
                  setName("");
                  setLastname("");
                  setEmail("");
                  setPhone("");
                  setTopic("");
                  setMessage("");
                  setThanksMessage("Thank you for your message");
                } catch {
                  console.log(err);
                }
              };

              getData();
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: ["auto", "1fr 50%"],
              }}
            >
              <Box p={2}>
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  id="name"
                  mb={3}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <Label htmlFor="tel">Tel (optional)</Label>
                <Input
                  name="tel"
                  id="tel"
                  mb={3}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Box>

              <Box p={2}>
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  name="lastname"
                  id="lastname"
                  mb={3}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <Label htmlFor="e-mail">E-mail</Label>
                <Input
                  type="email"
                  name="e-mail"
                  id="e-mail"
                  mb={3}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
            </Box>

            <Label htmlFor="topic">Topic</Label>
            <Input
              name="Topic"
              id="topic"
              mb={3}
              onChange={(e) => setTopic(e.target.value)}
            />
            <Label htmlFor="comment">Comment</Label>
            <Textarea
              name="comment"
              id="comment"
              rows={6}
              mb={3}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button>Submit</Button>
          </form>
        )}
        {thanksMessage !== "" && (
          <h2 sx={styles.finalMessage}>{thanksMessage}</h2>
        )}
      </>
    );
  };

  return (
    <Box sx={styles.section}>
      <Container>
        <Box sx={styles.sectionTitle}>
          <Text as="p">{sectionTitle.text}</Text>
          <Heading as="h3">{sectionTitle.title}</Heading>
        </Box>
        <Box>
          {posts.map(({ title, text, status }, index) => (
            <FaqItem
              key={`faq-key-${index}`}
              title={title}
              text={text}
              index={index}
              status={status}
            />
          ))}
        </Box>
        <Box id="gotRecomendations?" sx={styles.buttonWrap}>
          <Link onClick={buttonHandler}>{button.label}</Link>
        </Box>
        {openForm && <Form />}
      </Container>
    </Box>
  );
};

export default Faq;

const faqAnim = keyframes`
    from {
        opacity: 0;
        transform: translateY(20%);
    }
    to {
        opacity: 1;
        transform: translateY(0%);
    }
`;

const styles = {
  section: {
    pb: ["70px", null, null, null, "100px", null, "150px"],
    pt: ["40px", null, null, null, "75px"],
  },
  sectionTitle: {
    mb: ["0", null, null, null, "40px"],
    textAlign: "center",
    p: {
      color: "#00A99D",
      fontSize: "16px",
    },
    h3: {
      color: "#0F2137",
      letterSpacing: "-0.5px",
      fontSize: "24px",
      fontWeight: 500,
    },
  },
  item: {
    display: "flex",
    flexWrap: "wrap",
    borderBottom: "1px solid #E5E5E5",
    px: ["15px", "40px"],
    py: "40px",
    cursor: "pointer",
    transition: "all 500ms ease",
    position: "relative",
    "&.active": {
      borderColor: "#0F2137",
    },
    h3: {
      flex: ["0 0 100%", null, null, null, "0 0 50%"],
      color: "#0F2137",
      fontSize: ["16px", null, null, "18px", null, "20px"],
      fontWeight: 500,
      letterSpacing: "-0.5px",
      position: "relative",
      pl: ["0", null, null, null, "35px"],
      lineHeight: 1.67,
      whiteSpace: ["normal", null, null, null, "pre-line"],
      mb: ["10px", null, null, null, "0"],
      span: {
        position: ["relative", null, null, null, "absolute"],
        top: 0,
        left: 0,
        mr: ["10px", null, null, null, "0"],
      },
    },
    p: {
      flex: ["0 0 100%", null, null, null, "0 0 50%"],
      color: "#343D48",
      fontSize: ["15px", null, null, "16px"],
      lineHeight: [1.87, 2],
      animation: `${faqAnim} .8s linear`,
    },
  },
  buttonWrap: {
    textAlign: "center",
    mt: "40px",
    a: {
      display: "inline-flex",
      backgroundColor: "#ECF2F7",
      borderRadius: "5px",
      color: "#738295",
      fontSize: "16px",
      fontWeight: 700,
      padding: "10px 22px",
      transition: "all 500ms ease",
      "&:hover": {
        backgroundColor: "#4F96FF",
        color: "#fff",
      },
    },
  },
  icon: {
    position: "absolute",
    top: "45px",
    right: 0,
    svg: {
      fontSize: "24px",
      color: "#B1B8C0",
    },
  },
  finalMessage: {
    display: "flex",
    justifyContent: "space-around",
  },
};
