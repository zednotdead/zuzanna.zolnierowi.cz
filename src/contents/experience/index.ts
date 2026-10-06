import {
  type Experience,
  parseExperience,
  renderExperience,
  compareStartDates,
  type ExperienceRendered,
} from "@/utils/experience";

export function getExperience(): Promise<ExperienceRendered[]> {
  return Promise.all(
    Object.values(
      import.meta.glob<Experience>("./*.md", {
        eager: true,
      }),
    )
      .map(parseExperience)
      .toSorted(compareStartDates)
      .map(renderExperience),
  );
}
