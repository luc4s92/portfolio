export interface Service {
  title: string;
  subtitle: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: "Frontend Architecture",
    subtitle:
      "Designing scalable, maintainable and performance-oriented frontend systems for modern product environments.",
    items: [
      "Component-driven architecture with reusable UI patterns",
      "Scalable project structure and feature-based organization",
      "Performance-aware rendering and asset optimization",
      "Cross-browser and cross-device reliability",
      "Long-term maintainability through clean abstractions",
    ],
  },
  {
    title: "Accessibility & Web Standards",
    subtitle:
      "Building inclusive, standards-compliant and performance-optimized digital experiences.",
    items: [
      "Semantic, standards-aligned HTML structure",
      "ARIA implementation following accessibility best practices",
      "Keyboard navigation and assistive technology support",
      "WCAG-conscious development approach",
      "Accessibility auditing and continuous improvements",
    ],
  },
  {
    title: "Product & Design System Development",
    subtitle:
      "Developing scalable product experiences aligned with business, design and performance goals.",
    items: [
      "High-traffic product detail pages (PDP) and landing experiences",
      "Design system integration and component standardization",
      "Legacy component refactoring and modernization",
      "CMS migration and structured content implementation",
      "Conversion-oriented layout and interaction patterns",
    ],
  },
];
