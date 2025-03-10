import {
  __experimentalHStack as HStack,
  __experimentalVStack as VStack,
  __experimentalText as Text,
} from "@wordpress/components";
import { Icon, wordpress } from "@wordpress/icons";

export default function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e7eb",
        padding: "2rem",
        backgroundColor: "#f9fafb",
      }}
    >
      <VStack
        spacing={4}
      >
        <HStack justify="space-between">
          <HStack spacing={2} alignment="left" style={{ width: "auto" }}>
            <Icon icon={wordpress} />
            <Text size="title">WordPress UI</Text>
          </HStack>
          <Text size="body">
            Built with{" "}
            <a
              href="https://developer.wordpress.org/block-editor/reference-guides/components/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              @wordpress/components
            </a>
            . A showcase of reusable UI examples.
          </Text>
        </HStack>
      </VStack>
    </footer>
  );
}
