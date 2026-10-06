import { format } from "date-fns";
import {
  type ExperienceParsed,
  type ExperienceRendered,
  RENDERED_DATE_FORMAT,
} from ".";

export async function renderExperience(
  input: ExperienceParsed,
): Promise<ExperienceRendered> {
  const company = input.frontmatter.company;
  const started = format(input.frontmatter.started, RENDERED_DATE_FORMAT);
  const ended = input.frontmatter.ended
    ? format(input.frontmatter.ended, RENDERED_DATE_FORMAT)
    : "";
  const content = await input.compiledContent();

  return {
    company,
    started,
    ended,
    content,
  };
}
