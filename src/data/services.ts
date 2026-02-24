export interface Service {
  title: string;
  subtitle: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: "Frontend Engineering",
    subtitle:
      "Designing scalable and maintainable frontend architectures for production environments.",
    items: [
      "Component-based architecture",
      "Structured and readable code",
      "Responsive, cross-browser interfaces",
      "Consistent CSS organization",
      "Collaboration within cross-functional teams",
    ],
  },
  {
    title: "Accessibility & Web Standards",
    subtitle:
      "Building inclusive, standards-compliant and performance-aware user experiences.",
    items: [
      "Semantic HTML structure",
      "ARIA roles and accessibility best practices",
      "Keyboard navigation support",
      "Performance-conscious implementation",
    ],
  },
  {
    title: "Product & System Development",
    subtitle:
      "Developing product detail pages, landing experiences and evolving UI systems.",
    items: [
      "Pixel-accurate design implementation",
      "Design system integration",
      "Legacy component refactoring",
      "CMS migration support",
      "Conversion-aware layout structure",
    ],
  },
];
