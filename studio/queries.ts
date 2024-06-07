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

export const projectsQuery = groq`
*[_type == "project" && defined(slug.current)] | order(_createdAt desc) {
    name,
    slug,
    description,
    "cardImage": {
        "url": cardImage.image.asset->url,
        "lqip": cardImage.image.asset->metadata.lqip,
        "caption": cardImage.caption,
        "aspectRatio": cardImage.image.asset->metadata.dimensions.aspectRatio
    },
}  
`;

export const projectDetailQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
    ...,
    "logo": {
        "url": logo.image.asset->url,
        "lqip": logo.image.asset->metadata.lqip,
        "caption": logo.caption,
        "aspectRatio": logo.image.asset->metadata.dimensions.aspectRatio
    },
    "featuredImage": {
        "url": featuredImage.image.asset->url,
        "lqip": featuredImage.image.asset->metadata.lqip,
        "caption": featuredImage.caption,
        "aspectRatio": featuredImage.image.asset->metadata.dimensions.aspectRatio
    },
    "featuredImageMobile": {
        "url": featuredImageMobile.image.asset->url,
        "lqip": featuredImageMobile.image.asset->metadata.lqip,
        "caption": featuredImageMobile.caption,
        "aspectRatio": featuredImageMobile.image.asset->metadata.dimensions.aspectRatio
    },
    "platforms": platforms[] {
        ...,
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
      }
    },
    testimonials[] {
        ...,
        "image": {
            "url": image.image.asset->url,
            "lqip": image.image.asset->metadata.lqip,
            "caption": image.caption,
            "aspectRatio": image.image.asset->metadata.dimensions.aspectRatio
      }
    },
    "challengeImage": {
        "url": challengeImage.image.asset->url,
        "lqip": challengeImage.image.asset->metadata.lqip,
        "caption": challengeImage.caption,
        "aspectRatio": challengeImage.image.asset->metadata.dimensions.aspectRatio
    },
    "outroImage": {
        "url": outroImage.image.asset->url,
        "lqip": outroImage.image.asset->metadata.lqip,
        "caption": outroImage.caption,
        "aspectRatio": outroImage.image.asset->metadata.dimensions.aspectRatio
    },
    "previousProject": *[_type == "project" && _createdAt < ^._createdAt] | order(_createdAt desc)[0] {
        name,
        slug,
    },
    "nextProject": *[_type == "project" && _createdAt > ^._createdAt] | order(_createdAt asc)[0] {
        name,
        slug,
    },
    "firstProject": *[_type == "project"] | order(_createdAt asc)[0] {
        name,
        slug,
    }
}  
`;
