import { createClient } from 'next-sanity';

import { apiVersion, useCdn } from '../env';

export const sanityClient = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID as string,
  dataset: process.env.SANITY_STUDIO_DATASET as string,
  apiVersion,
  useCdn,
  perspective: 'published',
});
