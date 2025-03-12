import { ReactNode } from "react";
import AuthFormPreview from "./AuthFormPreview";
import SettingsPreview from "./SettingsPreview";
import TeamMembersPreview from "./TeamMembersPreview";
import ChatPreview from "./ChatPreview";
import PaymentsPreview from "./PaymentsPreview";
import ReportIssuePreview from "./ReportIssuePreview";
import CalendarPreview from "./CalendarPreview";
import ShareDocumentPreview from "./ShareDocumentPreview";
import EmailPreview from "./EmailPreview";
import DashboardPreview from "./DashboardPreview";

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

// Define all examples
export const examples: Example[] = [
  
  // Widgets
  {
    name: "Calendar",
    slug: "calendar",
    component: <CalendarPreview />,
    category: "Widgets",
    gridSpan: {
      cols: 1,
      rows: 1
    },
  },
  {
    name: "Authentication Form",
    slug: "authentication-form",
    component: <AuthFormPreview />,
    category: "Widgets",
    gridSpan: {
      cols: 1,
      rows: 1
    },
  },
  {
    name: "Settings Page",
    slug: "settings-page",
    component: <SettingsPreview />,
    category: "Widgets",
    gridSpan: {
      cols: 1,
      rows: 1
    },
  },
  {
    name: "Team Members",
    slug: "team-members",
    component: <TeamMembersPreview />,
    category: "Widgets",
    gridSpan: {
      cols: 1,
      rows: 2
    },
  },
  {
    name: "Chat",
    slug: "chat",
    component: <ChatPreview />,
    category: "Widgets",
    gridSpan: {
      cols: 1,
      rows: 3
    },
  },
  {
    name: "Payments",
    slug: "payments",
    component: <PaymentsPreview />,
    category: "Widgets",
    gridSpan: {
      cols: 2,
      rows: 1
    },
  },
  {
    name: "Report Issue",
    slug: "report-issue",
    component: <ReportIssuePreview />,
    category: "Widgets",
    gridSpan: {
      cols: 1,
      rows: 2
    },
  },
  {
    name: "Share Document",
    slug: "share-document",
    component: <ShareDocumentPreview />,
    category: "Widgets",
    gridSpan: {
      cols: 2,
      rows: 2
    },
  },

  // Email
  {
    name: "Email Client",
    slug: "email-client",
    component: <EmailPreview />,
    category: "Email",
    gridSpan: {
      cols: 4,
      rows: 4
    },
  },

  // Dashboard
  {
    name: "Admin Dashboard",
    slug: "admin-dashboard",
    component: <DashboardPreview />,
    category: "Dashboard",
    gridSpan: {
      cols: 3,
      rows: 4
    },
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
