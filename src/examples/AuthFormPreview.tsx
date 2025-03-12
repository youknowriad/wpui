import { useState } from "react";
import {
  __experimentalVStack as VStack,
  __experimentalHStack as HStack,
  Button,
  TextControl,
} from "@wordpress/components";

export default function AuthFormPreview() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <VStack spacing={4}>
      <VStack spacing={3}>
        <TextControl
          label="Email"
          value={email}
          onChange={setEmail}
          type="email"
          __next40pxDefaultSize
          __nextHasNoMarginBottom
        />

        <TextControl
          label="Password"
          value={password}
          onChange={setPassword}
          type="password"
          __next40pxDefaultSize
          __nextHasNoMarginBottom
        />

        <HStack justify="space-between">
          <Button variant="link" __next40pxDefaultSize>
            Forgot password?
          </Button>
          <Button
            variant="primary"
            style={{ marginTop: "0.5rem" }}
            __next40pxDefaultSize
          >
            Sign In
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
}
