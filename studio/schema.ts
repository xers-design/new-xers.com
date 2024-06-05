import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/blockContent';
import bro from './schemaTypes/bro';
import video from './schemaTypes/video';
import customImage from './schemaTypes/customImage';
import pageAbout from './schemaTypes/pageAbout';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, bro, video, customImage, pageAbout],
};
