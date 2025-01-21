import type { Site, Page, Links, Socials, Sections } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Landing Page",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// NavItems

export const NAVLINKS: Links = [
  { 
    TEXT: "Submit a request", 
    HREF: "/#", 
  },
  { 
    TEXT: "Sign in", 
    HREF: "/#", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "andres2004_cj@outlook.com",
    HREF: "mailto:andres2004_cj@outlook.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "CastDev-j",
    HREF: "https://github.com/CastDev-j"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "andres-castillo-jimenez",
    HREF: "https://www.linkedin.com/in/andres-castillo-jimenez-249210292/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "CastDev_J",
    HREF: "https://x.com/CastDev_J",
  },
]

// Sections
export const SECTIONS: Sections = [
  { 
    TITLE: "Using Abstract",
    DESCRIPTION: "Abstract lets you manage, version, and document your designs in one place.",
    IMAGE_NAME: "icon-versions", 
    HREF: "/#", 
  },
  { 
    TITLE: "Manage your account",
    DESCRIPTION: "Configure your account settings, such as your email, profile details, and password.",
    IMAGE_NAME: "icon-account", 
    HREF: "/#", 
  },
  { 
    TITLE: "Manage organizations, teams, and projects",
    DESCRIPTION: "Use Abstract organizations, teams, and projects to organize your people and your work.", 
    IMAGE_NAME: "icon-organizations",
    HREF: "/#", 
  },
  { 
    TITLE: "Manage billing",
    DESCRIPTION: "Change subscriptions and payment details.",
    IMAGE_NAME: "icon-billing", 
    HREF: "/#", 
  },
  { 
    TITLE: "Authenticate to Abstract",
    DESCRIPTION: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.", 
    IMAGE_NAME: "icon-authenticate",
    HREF: "/#", 
  },
  { 
    TITLE: "Abstract support",
    DESCRIPTION: "Get in touch with a human.",
    IMAGE_NAME: "icon-comment", 
    HREF: "/#", 
  },

]