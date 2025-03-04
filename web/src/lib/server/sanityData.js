import { env } from "$env/dynamic/private";
import { createClient } from "@sanity/client";
const client = createClient({
  projectId: env.PROJECT_ID,
  dataset: env.DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: env.API_VERSION,
  token: env.SANITY_READ_TOKEN,
});
export const data = (query) => {
  return client.fetch(query);
};
