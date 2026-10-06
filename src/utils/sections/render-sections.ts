import type { Section, SectionRendered } from ".";

export const renderSections = async (
  section: Section,
): Promise<SectionRendered> => {
  return {
    title: section.frontmatter.title,
    content: await section.compiledContent(),
  };
};
