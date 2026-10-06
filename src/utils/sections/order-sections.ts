import type { MarkdownInstance } from "astro";

type SortableSection<T extends { order: number }> = MarkdownInstance<T>;

export function sortSections<T extends { order: number }>(
  a: SortableSection<T>,
  b: SortableSection<T>,
): number {
  return a.frontmatter.order - b.frontmatter.order;
}
