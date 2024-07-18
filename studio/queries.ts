import groq from "groq";

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
    "nextProject": {
        "slug": nextProject->slug,
        "featuredImage": {
            "url": nextProject->featuredImage.image.asset->url,
            "lqip": nextProject->featuredImage.image.asset->metadata.lqip,
            "caption": nextProject->featuredImage.caption,
            "aspectRatio": nextProject->featuredImage.image.asset->metadata.dimensions.aspectRatio
        },
        "featuredImageMobile": {
            "url": nextProject->featuredImageMobile.image.asset->url,
            "lqip": nextProject->featuredImageMobile.image.asset->metadata.lqip,
            "caption": nextProject->featuredImageMobile.caption,
            "aspectRatio": nextProject->featuredImageMobile.image.asset->metadata.dimensions.aspectRatio
        }
    }
}  
`;

export const homePageQuery = groq`
*[_type == "pageHome" && isActive == true][0] {
    ...,
    logos[] {
      "url": image.asset->url,
      "lqip": image.asset->metadata.lqip,
      "caption": caption,
      "aspectRatio": image.asset->metadata.dimensions.aspectRatio
    },
    "videoOne": {
      "caption": videoOne.caption,
      "url": videoOne.video.asset->url,
      "thumbnail": {
        "url": videoOne.thumbnail.image.asset->url,
        "lqip": videoOne.thumbnail.image.asset->metadata.lqip,
        "caption": videoOne.thumbnail.caption,
        "aspectRatio": videoOne.thumbnail.image.asset->metadata.dimensions.aspectRatio
      }
    },
    projects[]->{
      name,
      slug,
      description,
      "homeCardImage": {
        "url": homeCardImage.image.asset->url,
        "lqip": homeCardImage.image.asset->metadata.lqip,
        "caption": homeCardImage.caption,
        "aspectRatio": homeCardImage.image.asset->metadata.dimensions.aspectRatio
      }
    },
    services[]{
      title,
      description,
      scopes,
      "desktopImage": {
        "url": desktopImage.image.asset->url,
        "lqip": desktopImage.image.asset->metadata.lqip,
        "caption": desktopImage.caption,
        "aspectRatio": desktopImage.image.asset->metadata.dimensions.aspectRatio
      },
      "mobileImage": {
        "url": mobileImage.image.asset->url,
        "lqip": mobileImage.image.asset->metadata.lqip,
        "caption": mobileImage.caption,
        "aspectRatio": mobileImage.image.asset->metadata.dimensions.aspectRatio
      }
    },
    "videoTwo": {
      "caption": videoTwo.caption,
      "url": videoTwo.video.asset->url,
      "thumbnail": {
        "url": videoTwo.thumbnail.image.asset->url,
        "lqip": videoTwo.thumbnail.image.asset->metadata.lqip,
        "caption": videoTwo.thumbnail.caption,
        "aspectRatio": videoTwo.thumbnail.image.asset->metadata.dimensions.aspectRatio
      }
    }
  }  
`;

export const generalQuery = groq`
*[_type == "general" && isActive == true][0] {
  title,
  "navbarImage": {
    "url": navbarImage.image.asset->url,
    "lqip": navbarImage.image.asset->metadata.lqip,
    "aspectRatio": navbarImage.image.asset->metadata.dimensions.aspectRatio,
    "caption": navbarImage.caption
  },
  socialLinks[] {
    label,
    to,
    "icon": {
      "url": icon.asset->url,
      "lqip": icon.asset->metadata.lqip
    }
  }
}
`;
