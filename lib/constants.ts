export const siteConfig = {
  name: "Sharun",
  title: "Software Engineer",
  email: "sharun.naicker12@gmail.com",
  location: "Dallas, TX",
  github: "https://github.com/sharunnaicker",
  linkedin: "https://linkedin.com/in/sharunnaicker",
  resume: "/resume.pdf",
} as const;

export const navItems = [
  { label: "About", href: "#about", number: "01" },
  { label: "Experience", href: "#experience", number: "02" },
  { label: "Projects", href: "#projects", number: "03" },
  { label: "Contact", href: "#contact", number: "04" },
] as const;
