import { parse } from "date-fns";
import {
  type Experience,
  type ExperienceParsed,
  FRONTMATTER_DATE_FORMAT,
  CURRENT_DATE,
} from ".";

export function parseExperience(input: Experience): ExperienceParsed {
  const started = parse(
    input.frontmatter.started,
    FRONTMATTER_DATE_FORMAT,
    CURRENT_DATE,
  );
  const ended = input.frontmatter.ended
    ? parse(input.frontmatter.ended, FRONTMATTER_DATE_FORMAT, CURRENT_DATE)
    : undefined;

  return {
    ...input,
    frontmatter: {
      ...input.frontmatter,
      started,
      ended,
    },
  };
}
