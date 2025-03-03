
import {createClient} from '@sanity/client'
import { PROJECT_ID,DATASET,API_VERSION,SANITY_READ_TOKEN } from '$env/dynamic/private';
export const client = createClient({
    projectId:PROJECT_ID,
    dataset: DATASET,
    useCdn: true,
    apiVersion: API_VERSION,
    token: SANITY_READ_TOKEN
})
