import { building } from "$app/environment";
import { fetchEventDetails } from "$lib/server/sanity.js";
var events = [];
var query =
  '*[_type == "event"]{name,tagline,"brief":brief[].children[].text,"imageUrl": image.asset->url,startDate,endDate,registrationLink}';
if (!building) {
  events = await fetchEventDetails(query);
}
export async function load() {
  return {
    body: {
      events,
    },
  };
}
