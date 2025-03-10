import { Link, NavLink } from "react-router-dom";
import {
  __experimentalHStack as HStack,
  Button,
  VisuallyHidden,
} from "@wordpress/components";
import { Icon, wordpress } from "@wordpress/icons";

export default function SiteHeader() {
  return (
    <header
      style={{
        borderBottom: "1px solid #e5e7eb",
        padding: "1rem 0",
      }}
    >
      <HStack
        spacing={10}
        style={{
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            color: "inherit",
            flexShrink: 0,
          }}
        >
          <Icon icon={wordpress} />
          <span style={{ fontWeight: 700 }}>WordPress UI</span>
        </Link>

        <HStack as="nav" alignment="left" spacing={4} style={{ flexGrow: 1 }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? 600 : 400,
              textDecoration: "none",
              color: "inherit",
            })}
          >
            Examples
          </NavLink>
          <a
            href="https://developer.wordpress.org/block-editor/reference-guides/components/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: 400,
            }}
          >
            WordPress Components
          </a>
        </HStack>

        <HStack spacing={4} alignment="right">
          <Button
            variant="tertiary"
            href="https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 0C3.36 0 0 3.36 0 7.5C0 10.82 2.15 13.65 5.15 14.65C5.52 14.72 5.66 14.5 5.66 14.31C5.66 14.14 5.65 13.61 5.65 12.98C3.55 13.45 3.12 12.09 3.12 12.09C2.78 11.21 2.28 10.99 2.28 10.99C1.6 10.52 2.33 10.53 2.33 10.53C3.08 10.58 3.48 11.3 3.48 11.3C4.15 12.46 5.23 12.12 5.68 11.94C5.75 11.45 5.94 11.12 6.15 10.92C4.48 10.73 2.72 10.08 2.72 7.18C2.72 6.35 3.01 5.68 3.49 5.15C3.4 4.95 3.15 4.18 3.56 3.14C3.56 3.14 4.19 2.94 5.64 3.91C6.25 3.75 6.9 3.66 7.55 3.66C8.2 3.66 8.85 3.75 9.46 3.91C10.91 2.94 11.54 3.14 11.54 3.14C11.95 4.18 11.7 4.95 11.62 5.15C12.1 5.68 12.39 6.35 12.39 7.18C12.39 10.09 10.63 10.73 8.95 10.92C9.22 11.16 9.45 11.63 9.45 12.36C9.45 13.39 9.44 14.07 9.44 14.31C9.44 14.5 9.58 14.73 9.96 14.65C12.96 13.65 15.11 10.82 15.11 7.5C15 3.36 11.64 0 7.5 0Z"
                fill="currentColor"
              />
            </svg>
            <VisuallyHidden>GitHub</VisuallyHidden>
          </Button>
          <Button variant="primary">Get Started</Button>
        </HStack>
      </HStack>
    </header>
  );
}
