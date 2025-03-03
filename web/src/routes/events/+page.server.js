import {client} from "$lib/server/sanity.js";

export async function load() {
    const events = await client.fetch('*[_type == "event"]')
    return {
        events: {
          events,
        },
      };
}