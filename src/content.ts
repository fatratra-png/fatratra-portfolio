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
      title: "Backend Enthusiast | UXUI Designer | Aspiring Mobile developer | Aspiring DevOps",
      tagline: "Like thunder gonna shake the ground !",
      avatar: "",
      about: "I am a passionate aspiring developer with a keen eye for design and a love for creating intuitive user experiences. With a strong foundation in web technologies and a drive to continuously learn, I strive to build applications that are not only functional but also visually appealing. My goal is to contribute to projects that make a positive impact and to grow as a developer in the ever-evolving tech landscape.",

      resumeUrl: "",
      skills: [
            { name: "HTML5", color: "#e34c26" },
            { name: "CSS3", color: "#563d7c" },
            { name: "SCSS", color: "" },
            { name: "JavaScript", color: "#f7df1e" },
            { name: "TypeScript", color: "#3178c6" },
            { name: "Express", color: "" },
            { name: "React", color: "#61dafb" },
            { name: "React Native", color: "#61dafb" },
            { name: "Tailwind CSS", color: "#38b2ac" },
            { name: "Java", color: "#007396" },
            { name: "Spring", color: "" },
            { name: "Kotlin", color: "" },
            { name: "Dart", color: "" },
            { name: "OpenAPI", color: "" },
            { name: "PostgreSQL", color: "#336791" },
            { name: "Git", color: "#f05032" },
            { name: "GitHub", color: "" },
            { name: "Vercel", color: "#000000" },
            { name: "Figma", color: "#f24e1e" },
      ],

      projects: [
            {
                  id: 1,
                  title: "HEI STDhub",
                  description:
                        "STDhub. student platform made by HEI students for HEI students",
                  tags: [
                        "React",
                        "JavaScript",
                        "Tailwind",
                        "ExpressJS",
                        "PostgreSQL",
                  ],
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
                  title: "Haven API",
                  description:
                        "Spring Boot backend for Haven -- serves daily quotes, mood journal entries and small rest sessions consumed by frontend mobile app version",
                  tags: ["Java", "Spring", "PostgreSQL"],
                  liveUrl: "https://haven-api-lz01.onrender.com/api/quotes/today",
                  githubUrl: "https://github.com/fatratra-png/haven-api",
                  logo: "",
            },
            {
                  id: 4,
                  title: "Erakdago",
                  description: "",
                  tags: ["React Native", "Java", "Spring", "PostgreSQL"],
                  liveUrl: "still in progress",
                  githubUrl: "",
                  logo: "",
            },
      ],

      socials: [
            {
                  label: "GitHub",
                  url: "https://github.com/fatratra-png",
            },
            {
                  label: "LinkedIn",
                  url: "https://www.linkedin.com/in/ny-fatratra-rafanomezantsoa-87799b3a9/",
            },
      ],

      email: "fatratra.rafanomezantsoa@gmail.com",
      location: "Antananarivo, Madagascar",
};
