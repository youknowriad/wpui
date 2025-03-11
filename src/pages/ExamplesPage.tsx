import { Link } from "react-router-dom";
import {
  __experimentalVStack as VStack,
  __experimentalHStack as HStack,
  __experimentalText as Text,
  Card,
  CardBody,
  CardHeader,
  SearchControl,
  Button,
} from "@wordpress/components";
import { useState } from "react";

// Import examples
import { getExamplesByCategory } from "../examples/index";

export default function ExamplesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Get examples by category
  const examplesByCategory = getExamplesByCategory();

  // Filter examples based on search term
  const filteredExamples = examplesByCategory
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <VStack spacing={8} style={{ padding: "2rem 0" }}>
      <VStack spacing={4}>
        <Text size="title">WordPress UI Components</Text>
        <Text>
          Ready-to-use UI examples built with @wordpress/components. Explore the
          examples below.
        </Text>

        <SearchControl
          onChange={setSearchTerm}
          value={searchTerm}
          label="Search examples"
          placeholder="Search examples..."
          style={{ maxWidth: "400px" }}
        />
      </VStack>

      {filteredExamples.length > 0 ? (
        filteredExamples.map((category, index) => (
          <VStack key={index} spacing={4}>
            <Text>{category.category}</Text>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
                width: "100%",
                alignItems: "start",
              }}
            >
              {category.items.map((example) => {
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
                        <Text>{example.name}</Text>

                        <Link
                          to={`/examples/${example.slug}`}
                          style={{ display: "inline-block" }}
                        >
                          <Button variant="link">View Example</Button>
                        </Link>
                      </HStack>
                    </CardHeader>

                    <CardBody
                      style={{
                        padding: "1rem",
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
          </VStack>
        ))
      ) : (
        <VStack spacing={4} style={{ padding: "2rem", textAlign: "center" }}>
          <Text>No examples found matching "{searchTerm}"</Text>
          <Button variant="secondary" onClick={() => setSearchTerm("")}>
            Clear Search
          </Button>
        </VStack>
      )}
    </VStack>
  );
}
