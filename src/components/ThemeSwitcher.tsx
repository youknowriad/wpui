import {
  DropdownMenu,
  MenuGroup,
  MenuItem,
  __experimentalHStack as HStack,
} from "@wordpress/components";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../utils/themes";

export function ThemeSwitcher() {
  const { currentTheme, setTheme } = useTheme();

  // Group themes by their group
  const coreThemes = themes.filter((theme) => theme.group === "core");
  const productThemes = themes.filter((theme) => theme.group === "products");

  return (
    <DropdownMenu
      label="Select theme"
      icon={
        <div
          style={{
            backgroundColor: "var(--wp-admin-theme-color)",
            width: 20,
            height: 20,
            borderRadius: 10,
          }}
        />
      }
    >
      {({ onClose }) => (
        <>
          <MenuGroup label="WordPress Color Schemes">
            {coreThemes.map((theme) => (
              <MenuItem
                key={theme.slug}
                onClick={() => {
                  setTheme(theme);
                  onClose();
                }}
                isSelected={currentTheme.slug === theme.slug}
              >
                <HStack
                  justify="flex-start"
                  className={`admin-color-${theme.slug}`}
                >
                  <div
                    style={{
                      backgroundColor: "var(--wp-admin-theme-color)",
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                    }}
                  />
                  <div>{theme.name}</div>
                </HStack>
              </MenuItem>
            ))}
          </MenuGroup>
          <MenuGroup label="Product Themes">
            {productThemes.map((theme) => (
              <MenuItem
                key={theme.slug}
                onClick={() => {
                  setTheme(theme);
                  onClose();
                }}
                isSelected={currentTheme.slug === theme.slug}
              >
                <HStack
                  justify="flex-start"
                  className={`admin-color-${theme.slug}`}
                >
                  <div
                    style={{
                      backgroundColor: "var(--wp-admin-theme-color)",
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                    }}
                  />
                  <div>{theme.name}</div>
                </HStack>
              </MenuItem>
            ))}
          </MenuGroup>
        </>
      )}
    </DropdownMenu>
  );
}
