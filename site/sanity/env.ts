export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Placeholder until a real Sanity project is created (keeps `next build` green).
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";
