import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/blockContent';
import bro from './schemaTypes/bro';
import video from './schemaTypes/video';
import customImage from './schemaTypes/customImage';
import platform from './schemaTypes/platform';
import highlight from './schemaTypes/highlight';
import challenge from './schemaTypes/challenge';
import testimonial from './schemaTypes/testimonial';
import pageHome from './schemaTypes/pageHome';
import pageAbout from './schemaTypes/pageAbout';
import project from './schemaTypes/project';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    bro,
    video,
    customImage,
    platform,
    highlight,
    challenge,
    testimonial,
    pageHome,
    pageAbout,
    project,
  ],
};
