
import {createClient} from '@sanity/client'
import {env} from '$env/dynamic/private';
const client = createClient({
    projectId: env.PROJECT_ID,
    dataset: env.DATASET,
    useCdn: true,
    apiVersion: env.API_VERSION,
    token: env.SANITY_READ_TOKEN
})
export async function fetchEventDetails()  {
    await client.fetch('*[_type == "event"]')
}

