import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "B. Hamza",
  EMAIL: "bashirhamza05@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_SPEAKING_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Technology enthusiast interested in making an impact in the world of tech. Ambitious problem solver with a passion for growing businesses.",
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
