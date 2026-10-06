import {
  renderSections,
  sortSections,
  type Section,
  type SectionRendered,
} from "@/utils/sections";

export async function getSections(): Promise<SectionRendered[]> {
  return Promise.all(
    Object.values(import.meta.glob<Section>("./*.md", { eager: true }))
      .toSorted(sortSections)
      .map(renderSections),
  );
}
