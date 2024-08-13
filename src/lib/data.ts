import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import digitalentImg from "/public/digitalent.png";
import diployImg from "/public/diploy.png";
import moviesappImg from "/public/moviesapp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Internship Onlne Academy at PT. GITS Indonesia",
    location: "Yogyakarta, ID",
    description:
      "I worked as a full-stack developer intern for 3 months. I built a web app for a client using Laravel.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2021 - Feb 2022",
  },
  {
    title: "Front-End Developer at PT. Javan Cipta Solusi",
    location: "Yogyakarta, ID",
    description:
      "I worked as a front-end developer for 6 months. I built a web app for a client using React and TypeScript.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Feb 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Movies App",
    description:
      "Personal project. It's a web app to search for movies using TMDB API. It has features like search, filter, sort and pagination.",
    tags: ["React", "Scss", "TMDB Api"],
    imageUrl: moviesappImg,
  },
  {
    title: "Digitalent Showcase & Portfolio",
    description:
      "Contribute PT.Javan Cipta Solusi Team's, build a web app to showcase and portfolio for Digitalent's students.",
    tags: ["React", "TypeScript", "Tailwind", "Flowbite"],
    imageUrl: digitalentImg,
  },
  {
    title: "Diploy",
    description:
      "Contribute PT. Javan Cipta Solusi Team's to build a web app for their client. It's a web app to help people to find a job.",
    tags: ["Laravel", "Livewire"],
    imageUrl: diployImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Php",
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Nest.js",
  "Express",
  "Node.js",
  "Laravel",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "React Query",
  "Zustand",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
