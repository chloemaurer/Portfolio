export interface Project {
  title: string;
  description: string;
  tech: string;
  link: string;
  cover: string;
  date: string;
}

// Projets par catégorie

export const devProjects: Project[] = [
  {
    title: "Jeu Unity",
    description: "Développement d’un jeu 3D avec thèmes évolutifs par niveau.",
    tech: "Unity / C# / Blender",
    link: "/unity",
    cover: "src/assets/unity/coverjeuunity.jpg",
    date: "mars 2025",
  },
  {
    title: "Musée des années 70",
    description:
      "Site immersif retraçant la culture et le design des années 1970.",
    tech: "JS / HTML / Tailwind / Unity",
    link: "/musee",
    cover: "src/assets/Musee70/cover.webp",
    date: "septembre 2025",
  },
  {
    title: "Decrypt’eau",
    description:
      "Création d'un jeu web pour la maison d'Alsace et de la nature",
    tech: "Symfony / PHP / HTML / CSS / JS / Bootstrap",
    link: "/decrypteau",
    cover: "/src/assets/projects/decrypteau.jpg",
    date: "mars 2025",
  },
  {
    title: "Projet CUEJ",
    description:
      "Site interactif pour le Centre Universitaire d’Enseignement du Journalisme.",
    tech: "PHP / Twig / HTML / SCSS / JS / Bootstrap",
    link: "/cuej",
    cover: "src/assets/CUEJ/cover.png",
    date: "Décembre 2024",
  },
  {
    title: "Festival du Haha",
    description:
      "Identité visuelle complète et mini-site pour un festival fictif.",
    tech: "Illustrator / Figma / HTML / CSS",
    link: "/festival",
    cover: "src/assets/FestivalHaHa/cover.jpeg",
    date: "Aout 2025",
  },
  {
    title: "Web Jam",
    description:
      "Jeu coder en 24h",
    tech: "JS / html / CSS",
    link: "",
    cover: "",
    date: "Octobre 2025",
  },
  {
    title: "Borne interactive - Sainte Félicité",
    description: "Borne interactive pour accès à infos locales.",
    tech: "En cours",
    link: "",
    cover: "/src/assets/projects/borne.jpg",
    date: "Pour décembre 2025",
  },
  {
    title: "Escape Game Inca",
    description:
      "Jeu vidéo Unity basé sur un Escape Game dans un univers Inca.",
    tech: "Unity / C# / Blender",
    link: "",
    cover: "src/assets/Escapegame.png",
    date: "Pour décembre 2025",
  },
];

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

export const graphicProjects: Project[] = [
  {
    title: "Charte graphique Alsace Nautile Club",
    description: "Logo, charte graphique et supports audiovisuels.",
    tech: "Illustrator / Figma / Photoshop",
    link: "/alsace-nautile",
    cover: "src/assets/AlsaceNautile/cover.png",
    date: "Octobre 2024",
  },
  {
    title: "Site sobriété énergétique",
    description: "Site interactif de sensibilisation.",
    tech: "Motion Design / Design web",
    link: "/sobriete-energetique",
    cover: "src/assets/SobEnergetique/cover.png",
    date: "Janvier 2025",
  },
  {
    title: "CinéStar",
    description: "Refonte identité visuelle et supports marketing.",
    tech: "Illustrator / Figma",
    link: "/cine",
    cover: "src/assets/cineStar/cover.jpeg",
    date: "Juin 2024",
  },
  {
    title: "Escape Bredele",
    description: "Concept mêlant escape game et atelier cuisine.",
    tech: "Illustrator / Photoshop / Figma / Wordpress",
    link: "/bredla",
    cover: "src/assets/Butterbredla/cover.webp",
    date: "Juin 2024",
  },
  {
    title: "Festival Au Bonheur des Mômes",
    description: "Conception d’un flyer pour un événement culturel.",
    tech: "Illustrator / Photoshop",
    link: "/flyer",
    cover: "src/assets/Flyer/flyer.png",
    date: "Janvier 2024",
  },
  {
    title: "Infographie sur l'Espace",
    description: "Infographie éducative sur l’exploration spatiale.",
    tech: "Illustrator",
    link: "/infographie",
    cover: "src/assets/infographie/coveretoile.webp",
    date: "Novembre 2024",
  },
];

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

export const marketingProjects: Project[] = [
  {
    title: "STR’A Donuts",
    description:
      "Création d’un commerce fictif et communication sur les réseaux sociaux.",
    tech: "Communication / Réseaux / Branding",
    link: "/douxnuts",
    cover: "src/assets/DouxNuts/cover.jpeg",
    date: "Octobre 2024",
  },
];
