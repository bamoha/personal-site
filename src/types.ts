export type Site = {
  NAME: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_SPEAKING_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type SEOConfig = {
  AUTHOR: string;
  SITE_URL: string;
  LOCALE: string;
  LANGUAGE: string;
  TWITTER_HANDLE: string;
  KEYWORDS: string[];
  OG_IMAGE: string;
  THEME_COLOR: string;
  THEME_COLOR_LIGHT: string;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];
