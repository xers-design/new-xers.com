import groq from 'groq';

export const aboutPageQuery = groq`
*[_type == "aboutPage" && isActive == true][0] {
    ...,
    bros[] {
        ...,
        "image": {
            "url": image.image.asset->url,
            "lqip": image.image.asset->metadata.lqip,
            "caption": image.caption,
            "aspectRatio": image.image.asset->metadata.dimensions.aspectRatio
        }
    },
    "imagesDesktop": {
        "url": imagesDesktop.image.asset->url,
        "lqip": imagesDesktop.image.asset->metadata.lqip,
        "caption": imagesDesktop.caption,
        "aspectRatio": imagesDesktop.image.asset->metadata.dimensions.aspectRatio
    },
    "imagesMobile": imagesMobile[] {
        "url": image.asset->url,
        "lqip": image.asset->metadata.lqip,
        "caption": caption,
        "aspectRatio": image.asset->metadata.dimensions.aspectRatio
    },
    "video": {
        "caption": video.caption,
        "url": video.video.asset->url,
        "thumbnail": {
            "url": video.thumbnail.image.asset->url,
            "lqip": video.thumbnail.image.asset->metadata.lqip,
            "caption": video.thumbnail.caption,
            "aspectRatio": video.thumbnail.image.asset->metadata.dimensions.aspectRatio
        },
    }
}
`;
