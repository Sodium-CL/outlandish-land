import { building } from "$app/environment";
import { data } from "$lib/server/sanityData.js";
const query =
  '*[_type == "event"]{name,tagline,"brief":brief[].children[].text,"imageUrl": image.asset->url,startDate,endDate,registrationLink}';

export async function load() {
  var events = [];
  if (!building) {
    events = await data(query);
  }
  return {
    body: {
      events,
    },
  };
}
