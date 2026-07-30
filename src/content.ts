export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  logo: string;
};

export type Skill = {
  name: string;
  color: string;
};

export type Social = {
  label: string;
  url: string;
};

export type Content = {
  name: string;
  title: string;
  tagline: string;
  avatar: string;
  about: string;
  resumeUrl: string;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  email: string;
  location: string;
};

export const content: Content = {
  name: "Ny Fatratra RAFANOMEZANTSOA",
  title:
    "Frontend developer | UI Designer | Aspiring Mobile developer | Aspiring DevOps",
  tagline: "",
  avatar: "",
  about:
    "I am a passionate frontend developer with a keen eye for design and a love for creating intuitive user experiences. With a strong foundation in web technologies and a drive to continuously learn, I strive to build applications that are not only functional but also visually appealing. My goal is to contribute to projects that make a positive impact and to grow as a developer in the ever-evolving tech landscape.",

  resumeUrl: "",
  skills: [
    { name: "HTML5", color: "#e34c26" },
    { name: "CSS3", color: "#563d7c" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "React", color: "#61dafb" },
    { name: "React Native", color: "#61dafb" },
    { name: "Tailwind CSS", color: "#38b2ac" },
    { name: "Java", color: "#007396" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Git", color: "#f05032" },
    { name: "Vercel", color: "#000000" },
    { name: "Figma", color: "#f24e1e" },
  ],

  projects: [
    {
      id: 1,
      title: "HEI STDhub",
      description:
        "STDhub. student platform made by HEI students for HEI students",
      tags: ["React", "JavaScript", "Tailwind", "ExpressJS", "PostgreSQL"],
      liveUrl: "https://hei-stdhub.vercel.app",
      githubUrl: "https://github.com/hei-tech-dev-team/hei-stdhub",
      logo: "/assets/hei-stdhub.png",
    },
    {
      id: 2,
      title: "Irery",
      description:
        'Did you ever wanted to be "irery" (alone) during night work sessions, Try "Irery" , designed to have the most simple UI ever , just launch on your phone , connect to any bluetooth device and ENJOY BEING IRERY',
      tags: ["React Native", "TypeScript", ""],
      liveUrl: "still in progress",
      githubUrl: "https://github.com/fatratra-png/irery",
      logo: "/assets/irery.png",
    },
    {
      id: 3,
      title: "The 404th Floor",
      description:
        "A vertical escape room in React & Tailwind, the user is trapped in a glitched elevator. To escape, they must repair each floor by solving barely fun puzzles",
      tags: ["React", "TypeScript", "Tailwind"],
      liveUrl: "still in progress",
      githubUrl: "https://github.com/fatratra-png/the-404th-floor-project",
      logo: "/assets/404th-floor.png",
    },
    {
      id: 4,
      title: "Feo",
      description:
        "Fetching Youtube content using yt-dlp then integrating it in a frontend app using simple UX based on a simple search bar that returns the most matching content",
      tags: ["React", "React Native", "TypeScript", "Tailwind"],
      liveUrl: "still in progress",
      githubUrl: "https://github.com/fatratra-png/feo",
      logo: "/assets/feo.png",
    },
    {
      id: 5,
      title: "Tsinjo",
      description:
        "Coded the frontend part of an project called Tsinjo where i did improve the UX and bring a new UI | Main Owner: Itokiana Rakotoarivelo",
      tags: ["React", "TypeScript", "Tailwind"],
      liveUrl: "https://anti-gaspillage.vercel.app",
      githubUrl: "https://github.com/fatratra-png/itokiana-tsinjo-front",
      logo: "/assets/",
    },
    {
      id: 6,
      title: "Noana",
      description:
        '"Noana" (hungry) ? What if we could feast on fast foot dishes but with a pinch of originality ...',
      tags: ["React", "JavaScript", "SvelteKit", "Tailwind"],
      liveUrl: "still in progress",
      githubUrl: "https://github.com/fatratra-png/noana",
      logo: "/assets/",
    },
  ],

  socials: [{ label: "GitHub", url: "https://github.com/fatratra-png" }],

  email: "fatratra.rafanomezantsoa@gmail.com",
  location: "Antananarivo, Madagascar",
};
