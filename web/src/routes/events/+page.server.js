import { building } from '$app/environment';
import {client} from "$lib/server/sanity.js";

if (!building) {
    const events = client.fetch('*[_type == "event"]')
}

export async function load() {
    return {
        events: {
          events,
        },
      };
}