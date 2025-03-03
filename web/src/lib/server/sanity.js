import { createClient } from "@sanity/client";
import { env } from "$env/dynamic/private";

export async function fetchEventDetails(query) {
  const client = createClient({
    projectId: env.PROJECT_ID,
    dataset: env.DATASET,
    useCdn: true,
    apiVersion: env.API_VERSION,
    token: env.SANITY_READ_TOKEN,
  });
  return await client.fetch(query);
}
