// Your profile pic
import picture from "../assets/images/pic.jpg";

// Workplace pics
import tortuga from "../assets/images/tortuga.png";
import vesalio from "../assets/images/vesalio.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  personalData: {
    pic: picture,
    firstName: "Aridio",
    lastName: "Santana",
    email: "aridio89@gmail.com",
    phone: {
      number: "+1(809) 403-8995",
      whatsapp: true
    },
  },
  aboutMe: [
    // p:<p> / b:<strong>
    {p: "UI designer y UI developer con más de 10 años de experiencia y capacitado en diversas áreas del diseño, desde el branding hasta el diseño web. Mias habilidades me permiten solucionar problemas de manera rápida y eficiente, tanto para concebir conceptos creativos como para generar interfaces de usuario funcionales."},
    {b: "Diariamente he podido afinar mis habilidades con:"},
    {p: "HTML, CSS, Sass, BEM, NPM, JS, jQuery, Bootstrap, Material Design, Style Guides, Wordpress, Elementor, CSS animations & transitions, ReactJS."},
    {b: "Manejo y configuración de servidores:"},
    {p: "cPanel, WHM, Name servers, DNS."},
    {b: "Software y diseño gráfico:"},
    {p: "Photoshop, Illustrator, Figma, Keynote, Branding, RRSS design, PSD to HTML."},
    {b: "Paquetes, repositorios y control de versiones:"},
    {p: "Jira, Microsoft Teams, Trello Pingy-cli, Grunt, Gulp, Git, Github, Gitlab, Azure. "}
  ],
  socialMedias: [
    "https://www.linkedin.com/in/aridio-santana",
    "https://codepen.io/Aridio"
  ],
  positions: [
    "UI designer",
    "UI developer"
  ],
  workExperience: [
    {
      workplace: "Tortuga Enterprise",
      logo: tortuga,
      mdality: "Full-time",
      description: "Encargado del diseño gráfico y creación de los sitios web del grupo de empresas.",
      positions: [
        "General graph designer"
      ],
      timeWorked: {
        from: {
          month: "Mar",
          year: "2021"
        },
        to: null
      }
    },
    {
      workplace: "Vesalio Cloud Group",
      logo: vesalio,
      mdality: "Full-time",
      description: "Responsable de la creación de experiencia de usuario, interfaz de usuario y codificación del front-end.",
      positions: [
        "UI designer",
        "Senior front-end developer"
      ],
      timeWorked: {
        from: {
          month: "Oct",
          year: "2018"
        },
        to: {
          month: "Mar",
          year: "2021"
        }
      }
    }
  ],
  skills: [
    {skill: "Bootstrap 4+",
    level: 5},
    {skill: "Photoshop",
    level: 4},
    {skill: "Javascript",
    level: 2},
    {skill: "Figma",
    level: 3},
    {skill: "Git",
    level: 2},
  ]
};