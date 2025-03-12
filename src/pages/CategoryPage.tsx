import { useParams } from "react-router-dom";
import {
  __experimentalHStack as HStack,
  __experimentalText as Text,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@wordpress/components";
import { useCopyToClipboard } from "@wordpress/compose";
import {
  getExamplesByCategory,
  Example as ExampleType,
} from "../examples/index";
import { useEffect, useState } from "react";
import { check, copy, external } from "@wordpress/icons";

const getSourceFileUrl = (fileName: string): string => {
  const baseUrl = "https://github.com/youknowriad/wpui/blob/main/src/examples/";
  return `${baseUrl}${fileName}`;
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const examplesByCategory = getExamplesByCategory();
  const categoryData = examplesByCategory.find(
    (cat) => cat.category.toLowerCase().replace(/\s+/g, "-") === category
  );

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
      {categoryData.items.map((example) => (
        <Example key={example.slug} example={example} />
      ))}
    </div>
  );
}

function Example({ example }: { example: ExampleType }) {
  const [code, setCode] = useState<string>("");
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!example.sourceFile) {
      return;
    }
    const githubRawUrl = getSourceFileUrl(example.sourceFile)
      .replace("github.com", "raw.githubusercontent.com")
      .replace("/blob/", "/");
    fetch(githubRawUrl)
      .then((response) => response.text())
      .then((text) => setCode(text));
  }, [example.sourceFile]);

  // Get grid span values (default to 1)
  const colSpan = example.gridSpan?.cols || 1;
  const rowSpan = example.gridSpan?.rows || 1;
  const ref = useCopyToClipboard(code, () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  });

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
                href={getSourceFileUrl(example.sourceFile)}
                label="View Source"
                icon={external}
              />
            )}

            {example.sourceFile && (
              <Button
                ref={ref}
                variant="link"
                label="Copy Source"
                icon={copied ? check : copy}
                onClick={() => {}}
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
        <div style={{ flex: 1, overflow: "auto" }}>{example.component}</div>
      </CardBody>
    </Card>
  );
}
