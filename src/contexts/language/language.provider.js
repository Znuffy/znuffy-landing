import React, { useReducer } from "react";
import { LanguageContext } from "./language.context";

// Banner Img
import bannerImg from "assets/banner.svg";

// Mission Imgs
import dog from "assets/icons/dog.png";
import dogFood from "assets/icons/dog-bowl.png";
import image3 from "assets/features-3.svg";

// Reason
import image from "assets/faq-one-1.png";
// import reasonDog from "assets/img/dog2.png";
import banner from "assets/bannerForWho/bannerForWhat.jpg";

// Team
import feature3 from "assets/service-3.svg";
import maxMemoji from "assets/teamPics/memojis/maxMemoji.png";
import ximeMemoji from "assets/teamPics/memojis/ximePropioMemoji.png";
import refitMemoji from "assets/teamPics/memojis/refitMemoji.png";
import anjieMemoji from "assets/teamPics/memojis/anjieMemoji.png";
import barbieMemoji from "assets/teamPics/memojis/barbieMemoji.png";

// Video
import videoImage from "assets/video.png";

const initialState = {
  currentLanguage: "ENG",
  ENG: {
    banner: {
      title: "Adopting and Living with Pets made easy",
      text: "Znuffy is the first Platform in the market that provides tools to adopt Animals looking for a home, and the elements needed to maintain your new best friends stress-free.",
      image: bannerImg,
    },
    mission: {
      title: "A Pet Adoption-and-eCommerce Platform",
      text: "What exactly is Znuffy?",
      posts: [
        {
          image: dog,
          title: "Adopt Street and Home Animals easily",
          text: "Everyone deserves love, we provide a safe and easy platform to find your new best friend with a few clicks.",
        },
        {
          image: dogFood,
          title: "Get all you need to keep your pet happy",
          text: "Taking care of an animal, is not an easy task, we change that by providing accessible and deliver-to-your-door products.",
        },
      ],
    },
    reason: {
      sectionImage: banner,
      tagline: "... but, why?",
      title: "Only Asuncion got over +70,000 Dogs living in the streets..",
      text: "The amount of Dogs and Cats living in the streets represent a hazard to the City and Citizens. They spread sicknesses, defecate in the streets, they are born and die in there and may even bite bypassers, but most importantly, they deserve a proper life!",
      faqs: [
        {
          isExpanded: true,
          title:
            "Whats the current estimated amount of animals in Asuncion 2022?",
          contents:
            "Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.",
        },
        {
          isExpanded: false,
          title: "What are we going to do",
          contents:
            "Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.",
        },
        {
          isExpanded: false,
          title: "Whats the 5 year plan?",
          contents:
            "Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.",
        },
      ],
    },
    team: {
      sectionTitle: {
        text: `"There is nothing a group of crazy people with a common goal can't do"`,
        title: "Our beloved Team",
      },
      posts: [
        {
          icon: anjieMemoji,
          title: "Anjelika Angelova",
          role: "Diseñador UX",
          text: "My purpose is to contribute to something impactful, something meaningful that will bring change. And working on Znuffy is the best example for that.",
        },
        {
          icon: refitMemoji,
          title: "Refit Refiti",
          role: "Diseñador UX",
          text: "Get your info tests delivered at hoe collect a sample from the your pogress actual tests.",
        },
        {
          icon: feature3,
          title: "Alejandro Ruoti",
          role: "Office Manager",
          text: "Get your info tests delivered at home collect a sample from the your pogress actual tests.",
        },
        {
          icon: barbieMemoji,
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
    },
    faq: {
      sectionTitle: {
        title: "Frequantly asked question",
        text: "Get your question answer",
      },
      posts: [
        {
          status: false,
          title: "What exactly is Znuffy?",
          text: "Znuffy is an App for the Adoption and maintanance of animals. The adoption segment, related to the Adoption of primarly streen animals, and ",
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
    },
    video: {
      image: videoImage,
      title: ``,
      text: "Here is a quick introduction to what was said above",
      button: {
        label: "",
        link: "#",
      },
    },
  },

  ESP: {
    banner: {
      title: "Adoptar y vivir con animales nunca fue tan facil",
      text: "Znuffy es la primera plataforma del mercado que proporciona herramientas para adoptar animales que buscan un hogar, y los elementos necesarios para mantener a tus nuevos mejores amigos sin estrés.",
      image: bannerImg,
    },

    mission: {
      title: "Una plataforma de adopción y comercio electrónico de mascotas",
      text: "¿Que es Znuffy?",
      posts: [
        {
          image: dog,
          title: "Adoptá Animales de la calle y huerfanos facilmente",
          text: "Todos se merecen amor, nosotros proporcionamos una plataforma segura y fácil para encontrar a tu nuevo mejor amigo con pocos clicks.",
        },
        {
          image: dogFood,
          title:
            "Conseguí todo lo que necesitás para mantener a tu mascota feliz",
          text: "Cuidar de un animal no es una tarea fácil, nosotros cambiamos eso proporcionando productos accesibles y con entrega a domicilio.",
        },
      ],
    },

    reason: {
      sectionImage: banner,
      tagline: "... pero, ¿porque?",
      title:
        "Sólo en Asunción hay más de +70.000 perros viviendo en las calles..",
      text: "La cantidad de Perros y Gatos que viven en las calles representan un peligro para la Ciudad y los Ciudadanos. Estos, pueden contagiar enfermedades, defecan en las calles, nacen y mueren allí y pueden incluso morder a los transeúntes, pero lo más importante es que merecen una vida digna.",
      faqs: [
        {
          isExpanded: true,
          title:
            "¿Cuál es la cantidad actual estimada de animales en Asunción 2022?",
          contents:
            "Actualmente, no existe ningun estudio que pueda garantizar exactamente cuantos perros y gatos viven en Asuncion, sin embargo, una de nuestras principales metas es, poder identificar la situacion actual, e idear un plan especifico para reducir la cantidad de animales abandonados.",
        },
        {
          isExpanded: false,
          title: "¿Qué planeamos hacer?",
          contents:
            "Znuffy nació con el objetivo de solucionar el problema de animales sin dueños en el Paraguay (comenzando por Asunción). Por esta razon, creemos que la forma mas sostenible (en un inicio), es facilitar la adopcion de animales, creando un plataforma segura y confiable, donde las personas pueden publicar animales encontrados, perdidos y animales que podrían ser adoptados. Tambien creemos, que uno de los principales problemas por lo cual las personas no adoptan más animales, es el elevado costo de manutención, por esta razon, nace ZnuffyCommerce, para proveer de productos animales a un bajo y accessible costo, sin tener que dejar el comfort de tu hogar.",
        },
        {
          isExpanded: false,
          title: "¿Que es el plan de 5 años?",
          contents:
            "Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.",
        },
      ],
    },
    team: {
      sectionTitle: {
        text: `"No hay nada que un grupo de locos con un objetivo común no puedan hacer"`,
        title: "Nuestro querido Equipo",
      },
      posts: [
        {
          icon: anjieMemoji,
          title: "Anjelika Angelova",
          role: "Diseñador UX",
          text: "Mi propósito es contribuir algo impactante, algo significativo que traiga cambios. Y trabajar en Znuffy es el mejor ejemplo de ello.",
        },
        {
          icon: refitMemoji,
          title: "Refit Refiti",
          role: "Diseñador UX",
          text: "Si puedo contribuir a ayudar, inclusive, a una sola mascota a encontrar un hogar amoroso, significa que he cumplido mi misión.",
        },
        {
          icon: feature3,
          title: "Alejandro Ruoti",
          role: "Office Manager",
          text: "Get your info tests delivered at home collect a sample from the your pogress actual tests.",
        },
        {
          icon: barbieMemoji,
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
          text: "",
        },
      ],
    },
    faq: {
      sectionTitle: {
        title: "Preguntas frecuentes",
        text: "Obtén la respuesta a tu pregunta",
      },
      posts: [
        {
          status: false,
          title: "¿Qué es exactamente Znuffy?",
          text: "Znuffy is an App for the Adoption and maintanance of animals. The adoption segment, related to the Adoption of primarly streen animals, and ",
        },
        {
          status: true,
          title: "¿Qué queremos lograr?",
          text: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
        },
        {
          status: false,
          title: "¿Cuándo se va a lanzar?",
          text: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
        },
        {
          status: false,
          title: "Quiero ayudar, ¿cómo puedo hacerlo?",
          text: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
        },
        {
          status: false,
          title: "Quiero ponerme en contacto con el equipo de Znuffy",
          text: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
        },
        {
          status: false,
          title: "Quiero donar a la Znuffy ONG",
          text: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
        },
      ],
      button: {
        link: "#",
        label: "Contact us <3",
      },
    },
    video: {
      image: videoImage,
      title: ``,
      text: "Resumen de lo mencionado arriba",
      button: {
        label: "",
        link: "#",
      },
    },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ESP":
      return {
        ...state,
        currentLanguage: "ESP",
      };
    case "SET_ENG":
      return {
        ...state,
        currentLanguage: "ENG",
      };
    default:
      return state;
  }
}
export const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};
