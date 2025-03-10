import {
  Card,
  CardBody,
  __experimentalVStack as VStack,
  __experimentalHStack as HStack,
  __experimentalText as Text,
  Button,
} from "@wordpress/components";
import { chartBar, update, pages } from "@wordpress/icons";


export default function DashboardPreview() {
  return (
    <Card size="small">
      <CardBody>
        <HStack spacing={3} justify="center">
          {[
            {
              title: "Total Posts",
              value: "125",
              icon: pages,
              color: "#3858e9",
            },
            { title: "Views", value: "8.2K", icon: chartBar, color: "#008a20" },
            { title: "Updates", value: "3", icon: update, color: "#e36207" },
          ].map((stat, index) => (
            <Card
              key={index}
              style={{
                minWidth: "100px",
                padding: "0.5rem",
                backgroundColor: "#f9fafb",
              }}
            >
              <VStack spacing={1} alignment="center">
                <HStack alignment="center" spacing={1}>
                  <span style={{ color: stat.color }}>{stat.icon}</span>
                  <Text size="small">{stat.value}</Text>
                </HStack>
                <Text size="caption" style={{ color: "#4b5563" }}>
                  {stat.title}
                </Text>
              </VStack>
            </Card>
          ))}
        </HStack>

        <VStack style={{ marginTop: "1rem" }}>
          <Button variant="secondary" style={{ width: "100%" }}>
            View Dashboard
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
}
