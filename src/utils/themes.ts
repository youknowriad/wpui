/**
 * WordPress admin color schemes
 * Based on the default WordPress admin color schemes
 */

export interface Theme {
  name: string;
  slug: string;
  group?: string;
}

export const themes: Theme[] = [
  {
    name: "Default",
    slug: "default",
    group: "core",
  },
  {
    name: "Modern",
    slug: "modern",
    group: "core",
  },
  {
    name: "Blue",
    slug: "blue",
    group: "core",
  },
  {
    name: "Coffee",
    slug: "coffee",
    group: "core",
  },
  {
    name: "Ectoplasm",
    slug: "ectoplasm",
    group: "core",
  },
  {
    name: "Midnight",
    slug: "midnight",
    group: "core",
  },
  {
    name: "Ocean",
    slug: "ocean",
    group: "core",
  },
  {
    name: "Sunrise",
    slug: "sunrise",
    group: "core",
  },
  {
    name: "Jetpack",
    slug: "jetpack",
    group: "products",
  },
  {
    name: "WooCommerce",
    slug: "woocommerce",
    group: "products",
  },
];

export function getThemeBySlug(slug: string): Theme | undefined {
  return themes.find((theme) => theme.slug === slug);
}

export function applyTheme(theme: Theme): void {
  document.body.className = document.body.className.replace(
    /\badmin-color-\S+/g,
    ""
  );
  document.body.classList.add(`admin-color-${theme.slug}`);
}
