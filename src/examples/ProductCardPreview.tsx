import {
  __experimentalVStack as VStack,
  __experimentalHStack as HStack,
  __experimentalText as Text,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@wordpress/components";
import { plus } from "@wordpress/icons";

export default function ProductCardPreview() {
  return (
    <Card size="small">
      <div
        style={{
          height: "120px",
          backgroundColor: "#e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text size="caption">Product Image</Text>
      </div>

      <CardBody>
        <VStack spacing={2}>
          <Text size="small">Ergonomic Keyboard</Text>
          <HStack justify="space-between" alignment="center">
            <Text
              size="title"
              style={{ fontWeight: 700, color: "#3858e9" }}
            >
              $129.99
            </Text>
            <Text
              size="small"
              style={{ textDecoration: "line-through", color: "#6b7280" }}
            >
              $149.99
            </Text>
          </HStack>
          <Text size="caption" style={{ color: "#4b5563" }}>
            Comfortable typing experience with adjustable height
          </Text>
        </VStack>
      </CardBody>

      <CardFooter>
        <Button variant="primary" icon={plus}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
