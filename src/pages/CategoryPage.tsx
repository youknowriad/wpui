import { useParams } from "react-router-dom";
import {
  __experimentalHStack as HStack,
  __experimentalVStack as VStack,
  __experimentalText as Text,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@wordpress/components";
import { Link } from "react-router-dom";
import { getExamplesByCategory } from "../examples/index";

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
    <VStack spacing={4}>
      <Text size="title">{categoryData.category}</Text>
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
  );
}
