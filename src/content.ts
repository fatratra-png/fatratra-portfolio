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
    { name: "HTML", color: "#e34c26" },
    { name: "CSS", color: "#563d7c" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "React", color: "#61dafb" },
    { name: "Tailwind CSS", color: "#38b2ac" },
    { name: "Java", color: "#007396" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Git", color: "#f05032" },
  ],

  projects: [
    {
      id: 1,
      title: "HEI STDhub",
      description:
        "A web application for managing HEI students campus life,kinda intern social media, built with React and JavaScript.",
      tags: ["React", "JavaScript", "Tailwind", "ExpressJS", "PostgreSQL"],
      liveUrl: "https://hei-stdhub.vercel.app",
      githubUrl: "https://github.com/hei-tech-dev-team/hei-stdhub",
      logo: "/assets/hei-stdhub.png",
    },
    {
      id: 2,
      title: "irery",
      description: "Built with React Native",
      tags: ["React Native", "TypeScript", ""],
      liveUrl: "still in progress",
      githubUrl: "https://github.com/fatratra-png/irery",
      logo: "/assets/irery.png",
    },
    {
      id: 3,
      title: "The 404th Floor",
      description: "Vertical 404floors Escape game built in Typescript",
      tags: ["React", "TypeScript", "Tailwind"],
      liveUrl: "still in progress",
      githubUrl: "https://github.com/fatratra-png/the-404th-floor-project",
      logo: "/assets/404th-floor.png",
    },
  ],

  socials: [{ label: "GitHub", url: "https://github.com/fatratra-png" }],

  email: "fatratra.rafanomezantsoa@gmail.com",
  location: "Antananarivo, Madagascar",
};
