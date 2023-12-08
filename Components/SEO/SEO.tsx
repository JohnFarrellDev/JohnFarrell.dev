import Head from 'next/head'

const siteMetadata = {
  title: 'John Farrell | Professional Software Engineer',
  description: 'My website for sharing projects and articles.',
  twitterUsername: 'JohnFarrellDev',
  image: 'https://i.imgur.com/CoW8DSQ.png',
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
}

export const SEO = ({ title, description, image }: SEOProps) => {
  return (
    <Head>
      <title>{title || siteMetadata.title}</title>
      <meta name="description" content={description || siteMetadata.description} />

      <meta property="og:title" content={title || siteMetadata.title} />
      <meta property="og:url" content="https://john-farrell.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description || siteMetadata.description} />
      <meta property="og:image" content={image || siteMetadata.image} />

      <meta property="twitter:title" content={title || siteMetadata.title} />
      <meta property="twitter:description" content={description || siteMetadata.description} />
      <meta property="twitter:image" content={image || siteMetadata.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
    </Head>
  )
}
