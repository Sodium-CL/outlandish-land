import { building } from '$app/environment';
import {fetchEventDetails} from "$lib/server/sanity.js";
var events = null
if (!building) {
    events = fetchEventDetails()
}

export async function load() {
    return {
        events: {
          events,
        },
      };
}