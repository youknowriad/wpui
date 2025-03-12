import {
  __experimentalVStack as VStack,
  ToggleControl,
  SelectControl,
} from "@wordpress/components";

export default function SettingsPreview() {
  return (
    <VStack spacing={3}>
      <ToggleControl
        label="Email notifications"
        help="Receive email notifications about activity"
        checked={true}
        onChange={() => {}}
        __nextHasNoMarginBottom
      />

      <ToggleControl
        label="Two-factor authentication"
        help="Increase account security with 2FA"
        checked={false}
        onChange={() => {}}
        __nextHasNoMarginBottom
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
        __next40pxDefaultSize
        __nextHasNoMarginBottom
      />
    </VStack>
  );
}
