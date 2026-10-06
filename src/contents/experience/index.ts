import {
  type Experience,
  parseExperience,
  renderExperience,
  compareStartDates,
} from "@/utils/experience";

export function getExperience() {
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
