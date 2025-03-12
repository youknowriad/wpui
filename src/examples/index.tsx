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
import MusicPlayerPreview from "./MusicPlayerPreview";
import AuthenticationPreview from "./AuthenticationPreview";

// Define example interface
export interface Example {
  name: string;
  slug: string;
  component: ReactNode;
  category: string;
  hasPadding?: boolean;
  gridSpan?: {
    cols?: number;
    rows?: number;
  };
  sourceFile?: string;
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
    sourceFile: "CalendarPreview.tsx",
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
    sourceFile: "AuthFormPreview.tsx",
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
    sourceFile: "SettingsPreview.tsx",
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
    sourceFile: "TeamMembersPreview.tsx",
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
    sourceFile: "ChatPreview.tsx",
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
    sourceFile: "PaymentsPreview.tsx",
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
    sourceFile: "ReportIssuePreview.tsx",
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
    sourceFile: "ShareDocumentPreview.tsx",
  },

  // Email
  {
    name: "Email Client",
    slug: "email-client",
    component: <EmailPreview />,
    category: "Email",
    hasPadding: false,
    gridSpan: {
      cols: 4,
      rows: 4
    },
    sourceFile: "EmailPreview.tsx",
  },

  // Dashboard
  {
    name: "Admin Dashboard",
    slug: "admin-dashboard",
    component: <DashboardPreview />,
    category: "Dashboard",
    hasPadding: false,
    gridSpan: {
      cols: 3,
      rows: 4
    },
    sourceFile: "DashboardPreview.tsx",
  },

  // Media
  {
    name: "Music Player",
    slug: "music-player",
    component: <MusicPlayerPreview />,
    category: "Media",
    hasPadding: false,
    gridSpan: {
      cols: 3,
      rows: 3
    },
    sourceFile: "MusicPlayerPreview.tsx",
  },

  // Auth
  {
    name: "Authentication",
    slug: "authentication",
    component: <AuthenticationPreview />,
    category: "Auth",
    hasPadding: false,
    gridSpan: {
      cols: 1,
      rows: 2
    },
    sourceFile: "AuthenticationPreview.tsx",
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
