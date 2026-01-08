import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "B. Hamza",
  EMAIL: "bashirhamza05@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_SPEAKING_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

// SEO Configuration
export const SEO = {
  AUTHOR: "Bashir Hamza",
  SITE_URL: "https://bhamza.dev",
  LOCALE: "en_US",
  LANGUAGE: "en",
  TWITTER_HANDLE: "@bamoohaa",
  KEYWORDS: [
    "Bashir Hamza",
    "Software Craftsman",
    "Frontend Engineer",
    "Web Developer",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Tech Speaker",
    "Nigeria Developer",
  ],
  OG_IMAGE: "/og-image.png",
  THEME_COLOR: "#000000",
  THEME_COLOR_LIGHT: "#ffffff",
};

export const HOME: Metadata = {
  TITLE: "Bashir Hamza - Software Craftsman",
  DESCRIPTION: "Software Craftsman with close to a decade of experience building digital products. I treat software as a craft—building things that are clear, resilient, and designed to last.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SPEAKING: Metadata = {
  TITLE: "Speaking",
  DESCRIPTION: "Talks and presentations I have given at events and conferences.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/bashirhamza"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/bashirhamza",
  },
  { 
    NAME: "twitter-x",
    HREF: "https://x.com/bamoohaa",
  }
];
