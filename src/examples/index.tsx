import { ReactNode } from "react";
import {
  __experimentalVStack as VStack,
  __experimentalText as Text,
} from "@wordpress/components";

import AuthFormPreview from "./AuthFormPreview";
import SettingsPreview from "./SettingsPreview";
import HeroSectionPreview from "./HeroSectionPreview";
import ProductCardPreview from "./ProductCardPreview";
import TeamMembersPreview from "./TeamMembersPreview";
import ChatPreview from "./ChatPreview";
import PaymentsPreview from "./PaymentsPreview";
import ReportIssuePreview from "./ReportIssuePreview";

// Define example interface
export interface Example {
  name: string;
  slug: string;
  component: ReactNode;
  category: string;
  gridSpan?: {
    cols?: number;
    rows?: number;
  };
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
    gridSpan: {
      cols: 1,
      rows: 1
    },
  },
  {
    name: "Settings Page",
    slug: "settings-page",
    component: <SettingsPreview />,
    category: "Application UI",
    gridSpan: {
      cols: 1,
      rows: 1
    },
  },
  {
    name: "Team Members",
    slug: "team-members",
    component: <TeamMembersPreview />,
    category: "Application UI",
    gridSpan: {
      cols: 1,
      rows: 2
    },
  },
  {
    name: "Chat",
    slug: "chat",
    component: <ChatPreview />,
    category: "Application UI",
    gridSpan: {
      cols: 1,
      rows: 3
    },
  },
  {
    name: "Payments",
    slug: "payments",
    component: <PaymentsPreview />,
    category: "Application UI",
    gridSpan: {
      cols: 2,
      rows: 1
    },
  },
  {
    name: "Report Issue",
    slug: "report-issue",
    component: <ReportIssuePreview />,
    category: "Application UI",
    gridSpan: {
      cols: 1,
      rows: 2
    },
  },

  // Marketing
  {
    name: "Hero Section",
    slug: "hero-section",
    component: <HeroSectionPreview />,
    category: "Marketing",
    gridSpan: {
      cols: 2,
      rows: 1
    },
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
