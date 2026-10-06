import type { MarkdownInstance } from "astro";
import { compareDesc } from "date-fns";

export const FRONTMATTER_DATE_FORMAT = "MM-yyyy";
export const RENDERED_DATE_FORMAT = "MMM yyyy";
export const CURRENT_DATE = new Date();

type ExperienceMetadataBase = {
  company: string;
  url?: string;
  job_title: string;
};

type ExperienceFrontmatter = ExperienceMetadataBase & {
  started: string;
  ended?: string;
};
type ExperienceParsedFrontmatter = ExperienceMetadataBase & {
  started: Date;
  ended?: Date;
};
export type Experience = MarkdownInstance<ExperienceFrontmatter>;
export type ExperienceParsed = MarkdownInstance<ExperienceParsedFrontmatter>;
export type ExperienceRendered = ExperienceMetadataBase & {
  started: string;
  ended: string;
  content: string;
  address?: string;
};

export function compareStartDates(
  a: ExperienceParsed,
  b: ExperienceParsed,
): number {
  return compareDesc(a.frontmatter.started, b.frontmatter.started);
}

export * from "./parse-experience";
export * from "./render-experience";
