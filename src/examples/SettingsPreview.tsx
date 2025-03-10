import {
  Card,
  CardBody,
  CardHeader,
  __experimentalVStack as VStack,
  __experimentalText as Text,
  ToggleControl,
  SelectControl,
} from "@wordpress/components";

export default function SettingsPreview() {
  return (
    <Card size="small">
      <CardHeader>
        <Text>Account Settings</Text>
      </CardHeader>

      <CardBody>
        <VStack spacing={3}>
          <ToggleControl
            label="Email notifications"
            help="Receive email notifications about activity"
            checked={true}
            onChange={() => {}}
          />

          <ToggleControl
            label="Two-factor authentication"
            help="Increase account security with 2FA"
            checked={false}
            onChange={() => {}}
          />

          <SelectControl
            label="Theme"
            value="light"
            options={[
              { label: "Light", value: "light" },
              { label: "Dark", value: "dark" },
              { label: "System", value: "system" },
            ]}
            onChange={() => {}}
          />
        </VStack>
      </CardBody>
    </Card>
  );
}
