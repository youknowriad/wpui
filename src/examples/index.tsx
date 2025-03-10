import { ReactNode } from "react";
import {
  __experimentalVStack as VStack,
  __experimentalText as Text,
} from "@wordpress/components";

import AuthFormPreview from "./AuthFormPreview";
import DashboardPreview from "./DashboardPreview";
import SettingsPreview from "./SettingsPreview";
import HeroSectionPreview from "./HeroSectionPreview";
import ProductCardPreview from "./ProductCardPreview";

// Define example interface
export interface Example {
  name: string;
  slug: string;
  component: ReactNode;
  category: string;
}

// Create a coming soon component
const ComingSoonExample = () => (
  <VStack spacing={3}>
    <Text size="small" style={{ textAlign: "center" }}>
      Coming Soon
    </Text>
    <Text size="caption" style={{ textAlign: "center" }}>
      This example is under development
    </Text>
  </VStack>
);

// Define all examples
export const examples: Example[] = [
  // Application UI
  {
    name: "Authentication Form",
    slug: "authentication-form",
    component: <AuthFormPreview />,
    category: "Application UI",
  },
  {
    name: "Dashboard",
    slug: "dashboard",
    component: <DashboardPreview />,
    category: "Application UI",
  },
  {
    name: "Settings Page",
    slug: "settings-page",
    component: <SettingsPreview />,
    category: "Application UI",
  },

  // Marketing
  {
    name: "Hero Section",
    slug: "hero-section",
    component: <HeroSectionPreview />,
    category: "Marketing",
  },
  {
    name: "Feature Grid",
    slug: "feature-grid",
    component: <ComingSoonExample />,
    category: "Marketing",
  },
  {
    name: "Pricing Table",
    slug: "pricing-table",
    component: <ComingSoonExample />,
    category: "Marketing",
  },

  // Ecommerce
  {
    name: "Product Card",
    slug: "product-card",
    component: <ProductCardPreview />,
    category: "Ecommerce",
  },
  {
    name: "Shopping Cart",
    slug: "shopping-cart",
    component: <ComingSoonExample />,
    category: "Ecommerce",
  },
  {
    name: "Product Filters",
    slug: "product-filters",
    component: <ComingSoonExample />,
    category: "Ecommerce",
  },
];

// Helper function to get examples by category
export const getExamplesByCategory = () => {
  const categories = [...new Set(examples.map((example) => example.category))];

  return categories.map((category) => ({
    category,
    items: examples.filter((example) => example.category === category),
  }));
};

// Helper function to find an example by slug
export const getExampleBySlug = (slug: string) => {
  return examples.find((example) => example.slug === slug);
};
