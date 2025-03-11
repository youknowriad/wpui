import {
  __experimentalText as Text,
  __experimentalHStack as HStack,
  __experimentalVStack as VStack,
  Button,
  TextControl,
  CustomSelectControl,
  SelectControl,
} from "@wordpress/components";
import { close } from "@wordpress/icons";

const ShareDocumentPreview = () => {
  const sharedWith = [
    {
      id: 1,
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatar: "https://i.pravatar.cc/150?img=1",
      access: "edit" as const,
    },
    {
      id: 2,
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      avatar: "https://i.pravatar.cc/150?img=2",
      access: "view" as const,
    },
    {
      id: 3,
      name: "Isabella Nguyen",
      email: "",
      avatar: "https://i.pravatar.cc/150?img=3",
      access: "edit" as const,
    },
  ];

  return (
    <VStack spacing={4}>
      <VStack spacing={1}>
        <Text size="large">Share this document</Text>
        <Text size="small" style={{ color: "#6b7280" }}>
          Anyone with the link can view and edit.
        </Text>
      </VStack>

      <HStack
        spacing={3}
        style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: "16px" }}
      >
        <VStack style={{ flexGrow: 1 }}>
          <TextControl
            value="http://example.com/link/to/document"
            onChange={() => {}}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
          />
        </VStack>

        <Button variant="primary" onClick={() => {}} __next40pxDefaultSize>
          Copy Link
        </Button>
      </HStack>

      <VStack spacing={4} style={{ width: "100%" }}>
        <Text style={{ color: "#6b7280" }}>People with access</Text>

        {sharedWith.map((user) => (
          <HStack
            key={user.id}
            justify="flex-start"
            alignment="center"
            spacing={4}
          >
            <img
              src={user.avatar}
              alt={user.name}
              style={{
                borderRadius: "50%",
                width: 40,
              }}
            />

            <VStack spacing={0} style={{ flexGrow: 1 }}>
              <Text>{user.name}</Text>
              <Text size="small" style={{ color: "#6b7280" }}>
                {user.email}
              </Text>
            </VStack>
            <SelectControl
              value={user.access}
              options={[
                { value: "edit", label: "Edit" },
                { value: "view", label: "View" },
                { value: "admin", label: "Admin" },
              ]}
              onChange={() => {}}
              __nextHasNoMarginBottom
              size="compact"
            />

            <Button
              variant="tertiary"
              icon={close}
              label="Remove"
              size="compact"
            />
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default ShareDocumentPreview;
