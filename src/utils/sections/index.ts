import type { MarkdownInstance } from "astro";

type SectionFrontmatter = { title: string; order: number };
type Section = MarkdownInstance<SectionFrontmatter>;
type SectionRendered = {
  title: string;
  content: string;
};

export type { Section, SectionRendered, SectionFrontmatter };

export * from "./order-sections";
export * from "./render-sections";
