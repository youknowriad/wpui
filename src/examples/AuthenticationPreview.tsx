import { useState } from "react";
import {
  __experimentalVStack as VStack,
  __experimentalHStack as HStack,
  __experimentalText as Text,
  Button,
  CheckboxControl,
  TextControl,
} from "@wordpress/components";
import { Icon, wordpress } from "@wordpress/icons";

const AuthenticationPreview = () => {
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <HStack spacing={0} alignment="stretch" style={{ minHeight: "600px" }}>
      <VStack
        spacing={4}
        alignment="left"
        style={{
          width: "50%",
          backgroundColor: "var(--wp-admin-theme-color, #3858e9)",
          color: "white",
          padding: "32px",
        }}
        justify="space-between"
      >
        <HStack justify="flex-start" style={{ marginBottom: "16px" }}>
          <div>
            <Icon icon={wordpress} size={36} style={{ fill: "white" }} />
          </div>
          <Text size="title" color="white">
            WPUI
          </Text>
        </HStack>
        <Text size="subheading" style={{ color: "white" }}>
          WordPress Components for the modern web, built with React.
        </Text>
      </VStack>

      <VStack
        spacing={4}
        style={{
          width: "50%",
          padding: "32px",
        }}
        alignment="center"
      >
        <div style={{ maxWidth: "300px", margin: "0 auto" }}>
          <VStack spacing={4} style={{ marginBottom: "16px" }}>
            <Text size="title">Create an account</Text>
            <Text>Enter your information to create your account</Text>
          </VStack>

          <VStack spacing={4} style={{ width: "100%" }}>
            <TextControl
              label="Email"
              value={email}
              onChange={setEmail}
              type="email"
              placeholder="email@example.com"
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              hideLabelFromVision
            />

            <CheckboxControl
              // @ts-expect-error The label prop can render React elements;
              label={
                <Text>
                  I agree to the{" "}
                  <Button
                    variant="link"
                    __next40pxDefaultSize
                    style={{ padding: 0 }}
                  >
                    Terms of Service
                  </Button>{" "}
                  and{" "}
                  <Button
                    variant="link"
                    __next40pxDefaultSize
                    style={{ padding: 0 }}
                  >
                    Privacy Policy
                  </Button>
                </Text>
              }
              checked={rememberMe}
              onChange={setRememberMe}
              __nextHasNoMarginBottom
            />

            <Button
              variant="primary"
              style={{ justifyContent: "center" }}
              __next40pxDefaultSize
            >
              Create account
            </Button>

            {/* Social Login */}
            <VStack spacing={4}>
              <HStack
                style={{
                  position: "relative",
                  width: "100%",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "#e5e7eb",
                    width: "100%",
                  }}
                />
                <Text
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#f9fafb",
                    padding: "0 8px",
                    color: "#6b7280",
                    textTransform: "uppercase",
                  }}
                >
                  or continue with
                </Text>
              </HStack>

              <Button variant="secondary" __next40pxDefaultSize>
                <HStack alignment="center">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>Github</span>
                </HStack>
              </Button>
            </VStack>

            <HStack justify="center" spacing={1}>
              <Text style={{ color: "#6b7280" }}>Already have an account?</Text>
              <Button
                variant="link"
                __next40pxDefaultSize
                style={{ padding: 0 }}
              >
                Login
              </Button>
            </HStack>
          </VStack>
        </div>
      </VStack>
    </HStack>
  );
};

export default AuthenticationPreview;
