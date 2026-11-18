export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  liveLabel?: string;
  githubUrl: string;
  logo: string;
};

export type SkillGroup = "Interfaces" | "Backend" | "Mobile" | "Tools";

export type Skill = {
  name: string;
  group: SkillGroup;
};

export type Social = {
  label: string;
  url: string;
};

export type Content = {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  lede: string;
  about: string[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  email: string;
  location: string;
};

export const content: Content = {
  name: "Ny Fatratra RAFANOMEZANTSOA",
  shortName: "Fatratra",
  role: "Backend and mobile developer",
  tagline: "Like thunder gonna shake the ground!",
  lede: "I build the backend, then the mobile app you actually touch. Quiet systems, loud interfaces.",

  about: [
    "I'm Ny Fatratra, a backend and mobile developer in Antananarivo. I started with interfaces — the details people feel but never name. Then I moved into backend, because I wanted those interfaces to hold up under real use.",
    "These days I work across React, React Native, Java/Spring and PostgreSQL. I like APIs that stay boring and screens that don't.",
  ],

  skills: [
    { name: "TypeScript", group: "Interfaces" },
    { name: "React", group: "Interfaces" },
    { name: "Next.js", group: "Interfaces" },
    { name: "Java", group: "Backend" },
    { name: "Spring Boot", group: "Backend" },
    { name: "Express", group: "Backend" },
    { name: "REST APIs", group: "Backend" },
    { name: "PostgreSQL", group: "Backend" },
    { name: "Supabase", group: "Backend" },
    { name: "React Native", group: "Mobile" },
    { name: "Kotlin", group: "Mobile" },
    { name: "Dart", group: "Mobile" },
    { name: "Git", group: "Tools" },
    { name: "GitHub", group: "Tools" },
    { name: "Vercel", group: "Tools" },
  ],

  projects: [
    {
      id: 1,
      title: "HEI STDhub",
      description:
        "A student platform built by HEI students, for HEI students — one shared home for campus life and its community.",
      tags: ["React", "JavaScript", "Tailwind", "Express", "PostgreSQL"],
      liveUrl: "",
      githubUrl: "https://github.com/hei-tech-dev-team/hei-stdhub",
      logo: "/assets/hei-stdhub.png",
    },
    {
      id: 2,
      title: "Irery",
      description:
        "A deliberately minimal night-session companion. Launch it, connect any Bluetooth device and enjoy being irery — alone on your own terms.",
      tags: ["React Native", "TypeScript"],
      liveUrl: "",
      githubUrl: "https://github.com/fatratra-png/irery",
      logo: "/assets/irery.png",
    },
    {
      id: 3,
      title: "Haven API",
      description:
        "A Spring Boot API for Haven: daily quotes, mood journal entries and short rest sessions, served to the mobile app.",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      liveUrl: "https://haven-api-lz01.onrender.com/api/quotes/today",
      liveLabel: "Live API",
      githubUrl: "https://github.com/fatratra-png/haven-api",
      logo: "",
    },
    {
      id: 4,
      title: "Erakdago",
      description:
        "An interactive way to discover Madagascar — explore destinations, plan trips and connect with the local tourism ecosystem.",
      tags: [
        "React Native",
        "Google Maps API",
        "Expo Location",
        "Java",
        "Spring Boot",
        "PostgreSQL",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/erakdago/erakdago-api",
      logo: "/assets/erakdago.png",
    },
    {
      id: 5,
      title: "Zahavan'ia",
      description:
        "A Next.js experience that placed top 6 at the 2026 FANILO Hackathon (IFM).",
      tags: ["Next.js", "TypeScript", "OpenRouter", "Supabase", "Zod"],
      liveUrl: "https://zahavania.vercel.app/",
      liveLabel: "Visit site",
      githubUrl: "https://github.com/orbyte-1024/zahavania",
      logo: "/assets/zahavania.png",
    },
    {
      id: 6,
      title: "Feo",
      description:
        "A music player built on the YouTube catalogue, with an AI that keeps the music going: endless radio, playlists from a sentence and mixes that learn your taste.",
      tags: ["React", "Expo", "TypeScript", "PostgreSQL", "OpenRouter"],
      liveUrl: "https://feo-swart.vercel.app",
      liveLabel: "Visit site",
      githubUrl: "https://github.com/fatratra-png/feo",
      logo: "/assets/feo.png",
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
