import {
  __experimentalHeading as Heading,
  __experimentalVStack as VStack,
  __experimentalHStack as HStack,
  __experimentalText as Text,
  TextareaControl,
  Button,
  ToggleControl,
} from "@wordpress/components";
import { DataForm, Field } from "@wordpress/dataviews";

interface Issue {
  title: string;
  description: string;
  category: string;
  priority: string;
  reproduce: boolean;
}

const ReportIssuePreview = () => {
  const data: Issue = {
    title: "",
    description: "",
    category: "",
    priority: "medium",
    reproduce: false,
  };

  const fields: Field<Issue>[] = [
    {
      type: "text",
      id: "title",
      label: "Title",
      description: "Brief summary of the issue",
      placeholder: "Enter issue title",
    },
    {
      id: "category",
      type: "text",
      label: "Category",
      description: "What type of issue are you reporting?",
      Edit: "select",
      elements: [
        { label: "Select a category", value: "" },
        { label: "Bug", value: "bug" },
        { label: "Feature Request", value: "feature" },
        { label: "UI/UX", value: "ui" },
        { label: "Documentation", value: "docs" },
        { label: "Performance", value: "performance" },
        { label: "Security", value: "security" },
      ],
    },
    {
      id: "priority",
      label: "Priority",
      description: "How urgent is this issue?",
      type: "text",
      Edit: "select",
      elements: [
        { label: "Low", value: "low" },
        { label: "Medium", value: "medium" },
        { label: "High", value: "high" },
        { label: "Critical", value: "critical" },
      ],
    },
    {
      type: "text",
      id: "description",
      label: "Description",
      description: "Detailed explanation of the issue",
      Edit: ({ data, onChange }) => (
        <TextareaControl
          label="Description"
          placeholder="Provide details about the issue..."
          value={data.description}
          onChange={(updated) => onChange({ description: updated })}
          __nextHasNoMarginBottom
        />
      ),
    },
    {
      id: "reproduce",
      label: "Reproducible",
      Edit: ({ data, onChange }) => (
        <ToggleControl
          label="Reproducible"
          checked={data.reproduce}
          onChange={(updated) => onChange({ reproduce: updated })}
          __nextHasNoMarginBottom
        />
      ),
      description: "Can you consistently reproduce this issue?",
    },
  ];

  return (
    <VStack spacing={4}>
      <VStack spacing={2}>
        <Heading level={2} size="title">
          Report an Issue
        </Heading>
        <Text>What area are you having problems with? (Using DataForm)</Text>
      </VStack>

      <DataForm
        form={{
          fields: ["title", "description", "category", "priority", "reproduce"],
        }}
        fields={fields}
        data={data}
        onChange={() => {}}
      />

      <HStack justify="space-between">
        <Button variant="secondary" __next40pxDefaultSize>
          Cancel
        </Button>
        <Button variant="primary" __next40pxDefaultSize>
          Submit
        </Button>
      </HStack>
    </VStack>
  );
};

export default ReportIssuePreview;
