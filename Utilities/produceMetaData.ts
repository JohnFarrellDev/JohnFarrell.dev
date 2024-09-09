import { Metadata } from 'next';

const siteMetadata = {
  title: 'John Farrell | Professional Software Engineer',
  description: 'My website for sharing projects and articles.',
  twitterUsername: 'JohnFarrellDev',
  image:
    'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/og-images/og-image-default-robot.png',
};

interface MetaDataInput {
  title?: string;
  description?: string;
  image?: string;
}

export function produceMetaData(input?: MetaDataInput): Metadata {
  return {
    title: input?.title ?? siteMetadata.title,
    description: input?.description ?? siteMetadata.description,
    openGraph: {
      title: input?.title ?? siteMetadata.title,
      url: 'https://john-farrell.dev/',
      type: 'website',
      description: input?.description ?? siteMetadata.description,
      images: input?.image ?? siteMetadata.image,
    },
    twitter: {
      title: input?.title ?? siteMetadata.title,
      description: input?.description ?? siteMetadata.description,
      images: input?.image ?? siteMetadata.image,
      card: 'summary_large_image',
      creator: siteMetadata.twitterUsername,
    },
  };
}
