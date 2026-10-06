import type { MarkdownInstance } from "astro";
import { compareDesc } from "date-fns";

export const FRONTMATTER_DATE_FORMAT = "MM-yyyy";
export const RENDERED_DATE_FORMAT = "MMM yyyy";
export const CURRENT_DATE = new Date();

type ExperienceFrontmatter = {
  company: string;
  started: string;
  ended?: string;
};
type ExperienceParsedFrontmatter = {
  company: string;
  started: Date;
  ended?: Date;
};
export type Experience = MarkdownInstance<ExperienceFrontmatter>;
export type ExperienceParsed = MarkdownInstance<ExperienceParsedFrontmatter>;
export type ExperienceRendered = {
  company: string;
  started: string;
  ended: string;
  content: string;
};

export function compareStartDates(
  a: ExperienceParsed,
  b: ExperienceParsed,
): number {
  return compareDesc(a.frontmatter.started, b.frontmatter.started);
}

export * from "./parse-experience";
export * from "./render-experience";
