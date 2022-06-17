import { createClient } from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: proces.env.NEXT_PUBLIC_PROJECT_ID,
  apiversion: "2021-04-25",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);
