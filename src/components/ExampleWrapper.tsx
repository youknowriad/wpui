import { ReactNode } from "react";
import {
  __experimentalVStack as VStack,
  __experimentalText as Text,
  Card,
  CardBody,
  Button,
} from "@wordpress/components";
import { Link } from "react-router-dom";
import { arrowLeft } from "@wordpress/icons";

interface ExampleWrapperProps {
  title: string;
  component: ReactNode;
}

export default function ExampleWrapper({
  title,
  component,
}: ExampleWrapperProps) {
  return (
    <VStack
      spacing={8}
      style={{ padding: "2rem 0", maxWidth: "1000px", margin: "0 auto" }}
    >
      <VStack>
        <Link to="/">
          <Button icon={arrowLeft} variant="tertiary" style={{ padding: 0 }}>
            Back to examples
          </Button>
        </Link>

        <Text size="title">{title}</Text>
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
            {component}
          </div>
        </CardBody>
      </Card>
    </VStack>
  );
}
