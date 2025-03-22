import { building } from "$app/environment";
import { data } from "$lib/server/sanityData.js";
const query = `
  *[_type == "event"]{
  name,
  place,
  "slug": slug.current,
  registrationLink,
  eventpriceTagline,
  "priceList":Price[]
  }
  `;

export async function load({ params }) {
  var events = [];
  if (!building) {
    events = await data(query);
  }
  console.log(JSON.stringify(params));
  return {
    body: {
      events,
    },
    slug: params.slug,
  };
}
