import { useParams } from "react-router-dom";
import {
  __experimentalHStack as HStack,
  __experimentalText as Text,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@wordpress/components";
import { getExamplesByCategory } from "../examples/index";
import { copySourceToClipboard, getSourceFileUrl } from "../utils/copy-source";
import { useState } from "react";
import { copy, external } from "@wordpress/icons";

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const examplesByCategory = getExamplesByCategory();
  const categoryData = examplesByCategory.find(
    (cat) => cat.category.toLowerCase().replace(/\s+/g, "-") === category
  );
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const handleCopySource = async (sourceFile: string, slug: string) => {
    if (sourceFile) {
      const success = await copySourceToClipboard(sourceFile);
      if (success) {
        setCopiedStates({ ...copiedStates, [slug]: true });
        // Reset after 2 seconds
        setTimeout(() => {
          setCopiedStates((prev) => ({ ...prev, [slug]: false }));
        }, 2000);
      }
    }
  };

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1.5rem",
        width: "100%",
        alignItems: "start",
      }}
    >
      {categoryData.items.map((example) => {
        // Get grid span values (default to 1)
        const colSpan = example.gridSpan?.cols || 1;
        const rowSpan = example.gridSpan?.rows || 1;

        return (
          <Card
            key={example.name}
            style={{
              gridColumn: `span ${colSpan}`,
              gridRow: `span ${rowSpan}`,
            }}
          >
            <CardHeader>
              <HStack spacing={2}>
                <HStack>
                  <Text>{example.name}</Text>
                </HStack>

                <HStack justify="flex-end">
                  {example.sourceFile && (
                    <Button
                      variant="link"
                      onClick={() => {
                        window.open(
                          getSourceFileUrl(example.sourceFile!),
                          "_blank"
                        );
                      }}
                      style={{ display: "inline-block" }}
                      label="View Source"
                      icon={external}
                    />
                  )}

                  {example.sourceFile && (
                    <Button
                      variant="link"
                      onClick={() =>
                        handleCopySource(example.sourceFile!, example.slug)
                      }
                      style={{ display: "inline-block" }}
                      label={
                        copiedStates[example.slug] ? "Copied!" : "Copy Source"
                      }
                      icon={copy}
                    />
                  )}
                </HStack>
              </HStack>
            </CardHeader>

            <CardBody
              style={{
                padding: example.hasPadding !== false ? "1rem" : 0,
                backgroundColor: "#f9fafb",
                height: rowSpan > 1 ? "100%" : "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ flex: 1, overflow: "auto" }}>
                {example.component}
              </div>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
