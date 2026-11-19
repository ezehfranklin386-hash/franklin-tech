export const site = {
  name: "Franklin Tech",
  founder: "Franklin Eze",
  tagline: "Ideas into digital experiences.",
  description:
    "Franklin Tech is the professional brand of Franklin Eze, a full-stack web developer who builds modern websites and web applications across front end, back end and database.",
  email: "ezehfranklin386@gmail.com",
  whatsapp: {
    display: "+234 816 572 7034",
    link: "https://wa.me/2348165727034",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ] as const,
};
