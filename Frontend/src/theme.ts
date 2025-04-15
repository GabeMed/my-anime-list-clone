import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        gray: {
          "50": { value: "#f9f9f9" },
          "100": { value: "#e9e9ec" },
          "200": { value: "#d4d4d9" },
          "300": { value: "#bdbdc7" },
          "400": { value: "#a6a6b0" },
          "500": { value: "#8f8f9a" },
          "600": { value: "#6f6f7b" },
          "700": { value: "#50505c" },
          "800": { value: "#3b3b46" },
          "900": { value: "#2b2b34" },
        },
      },
      fonts: {
        body: { value: "'Open Sans', sans-serif" },
        heading: { value: "'Poppins', sans-serif" },
      },
      fontSizes: {
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.25rem" },
        "2xl": { value: "1.5rem" },
      },
      radii: {
        sm: { value: "0.125rem" },
        md: { value: "0.375rem" },
        lg: { value: "0.5rem" },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          default: { value: "{colors.gray.500}" },
          _dark: { value: "{colors.gray.400}" },
        },
        "primary.hover": {
          default: { value: "{colors.gray.600}" },
          _dark: { value: "{colors.gray.300}" },
        },
        background: {
          default: { value: "{colors.gray.50}" },
          _dark: { value: "{colors.gray.900}" },
        },
        text: {
          default: { value: "gray.800" },
          _dark: { value: "gray.100" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
