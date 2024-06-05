// import createImageUrlBuilder from '@sanity/image-url';
// import { useNextSanityImage } from 'next-sanity-image';
// import { sanityClient } from './client';
// import type { Image } from 'sanity';

// import { dataset, projectId } from '../env';

// const imageBuilder = createImageUrlBuilder({
//   projectId: projectId || '',
//   dataset: dataset || '',
// });

// export const urlForImage = (source: Image) => {
//   return imageBuilder?.image(source).auto('format').fit('max').url();
// };

// export const getImageProps = (source: Image) => {
//   return useNextSanityImage(sanityClient, source);
// };
