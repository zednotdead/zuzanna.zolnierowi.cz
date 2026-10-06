import { format } from "date-fns";
import {
  type ExperienceParsed,
  type ExperienceRendered,
  RENDERED_DATE_FORMAT,
} from ".";

function extractAddress(address: string | undefined): string | undefined {
  if (!address) return undefined;
  
  const addr = new URL(address);

  return addr.hostname;
}

export async function renderExperience(
  input: ExperienceParsed,
): Promise<ExperienceRendered> {
  const company = input.frontmatter.company;
  const started = format(input.frontmatter.started, RENDERED_DATE_FORMAT);
  const ended = input.frontmatter.ended
    ? format(input.frontmatter.ended, RENDERED_DATE_FORMAT)
    : "";
  const content = await input.compiledContent();
  const job_title = input.frontmatter.job_title;
  const url = input.frontmatter.url;
  const address = extractAddress(url);

  return {
    company,
    started,
    ended,
    content,
    job_title,
    url,
    address,
  };
}
