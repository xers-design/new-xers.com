"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { schema } from "./studio/schema";

export default defineConfig({
  basePath: "/studio",
  projectId: "xldz1sfy", // dont forget to change this
  dataset: "production",
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: "2024-05-31" })],
});
