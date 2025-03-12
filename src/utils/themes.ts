/**
 * WordPress admin color schemes
 * Based on the default WordPress admin color schemes
 */

export interface Theme {
  name: string;
  slug: string;
}

export const themes: Theme[] = [
  {
    name: "Default",
    slug: "default",
  },
  {
    name: "Modern",
    slug: "modern",
  },
  {
    name: "Blue",
    slug: "blue",
  },
  {
    name: "Coffee",
    slug: "coffee",
  },
  {
    name: "Ectoplasm",
    slug: "ectoplasm",
  },
  {
    name: "Midnight",
    slug: "midnight",
  },
  {
    name: "Ocean",
    slug: "ocean",
  },
  {
    name: "Sunrise",
    slug: "sunrise",
  },
];

export function getThemeBySlug(slug: string): Theme | undefined {
  return themes.find((theme) => theme.slug === slug);
}

export function applyTheme(theme: Theme): void {
  document.body.className = document.body.className.replace(/\badmin-color-\S+/g, "");
  document.body.classList.add(`admin-color-${theme.slug}`);
}
