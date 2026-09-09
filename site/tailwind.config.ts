import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        muted: "var(--muted)",
        soft: "var(--soft)",
        line: "var(--line)",
        primary: "var(--primary)",
        accent: "var(--accent)"
      },
      boxShadow: {
        soft: "0 20px 50px rgba(20, 35, 55, 0.08)"
      }
    }
  }
};

export default config;
