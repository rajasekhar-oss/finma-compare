import {createClient} from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2026-07-22',
  useCdn: import.meta.env.PROD,
  perspective: 'published',
})

const builder = createImageUrlBuilder(sanityClient)

export const urlFor = (source: unknown) => builder.image(source)
