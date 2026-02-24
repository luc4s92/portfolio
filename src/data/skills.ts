export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skills: SkillGroup[] = [
  {
    title: "Core Engineering",
    description: "JavaScript (ES6+) · TypeScript · React",
    skills: [
      {
        name: "JavaScript",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
      },
      {
        name: "TypeScript",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      },
      {
        name: "React",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
    ],
  },
  {
    title: "Modern Frameworks",
    description: "Next.js · Astro · SSR / SSG fundamentals · Vite",
    skills: [
      {
        name: "Next.js",
        icon: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
      },
      { name: "Astro", icon: "Astro.svg" },
      {
        name: "Vite",
        icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
      },
    ],
  },
  {
    title: "Architecture & Practices",
    description:
      "Component Architecture · Design Systems · Accessibility · Performance Optimization",
    skills: [],
  },
  {
    title: "UI & Creative",
    description:
      "Responsive Design · Tailwind CSS · Figma · Visual Consistency",
    skills: [
      { name: "Tailwind CSS", icon: "/tailwind-logo.png" },
      { name: "Figma", icon: "https://www.svgrepo.com/show/452202/figma.svg" },
    ],
  },
];
