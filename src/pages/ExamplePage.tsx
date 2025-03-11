import {
  __experimentalVStack as VStack,
  __experimentalText as Text,
  Card,
  CardBody,
  Button,
} from "@wordpress/components";
import { Link, useParams } from "react-router-dom";
import { arrowLeft } from "@wordpress/icons";
import { getExampleBySlug } from "../examples/index";

export default function ExamplePage() {
  const { slug } = useParams<{ slug: string }>();
  const example = slug ? getExampleBySlug(slug) : null;

  // If example not found, redirect to first category
  if (!example) {
    return <div>Example not found</div>;
  }

  const categorySlug = example.category.toLowerCase().replace(/\s+/g, "-");

  return (
    <VStack
      spacing={8}
      style={{ padding: "2rem 0", maxWidth: "1000px", margin: "0 auto" }}
    >
      <VStack>
        <Link to={`/category/${categorySlug}`}>
          <Button icon={arrowLeft} variant="tertiary" style={{ padding: 0 }}>
            Back to {example.category}
          </Button>
        </Link>

        <Text size="title">{example.name}</Text>
      </VStack>

      <Card>
        <CardBody style={{ padding: "2rem" }}>
          <div
            style={{
              backgroundColor: "#f9fafb",
              borderRadius: "0.375rem",
              padding: "2rem",
            }}
          >
            {example.component}
          </div>
        </CardBody>
      </Card>
    </VStack>
  );
}
