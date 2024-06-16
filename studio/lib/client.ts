import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PLUBIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PLUBIC_SANITY_DATASET as string,
  apiVersion: "2024-05-31",
  useCdn: true,
  perspective: "published",
});
