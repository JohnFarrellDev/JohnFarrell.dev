import Head from 'next/head'
import React from 'react'
import { siteMetadata } from '../../Constants/siteMetadata'

interface SEOProps {
  title?: string
  description?: string
  image?: string
}

export const SEO = ({ title, description, image }: SEOProps) => {
  return (
    <Head>
      <title>{title || siteMetadata.title}</title>
      <meta
        name="description"
        content={description || siteMetadata.description}
      />

      <meta property="og:title" content={title || siteMetadata.title} />
      <meta property="og:url" content="https://john-farrell.dev/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={description || siteMetadata.description}
      />
      <meta property="og:image" content={image || siteMetadata.image} />

      <meta property="twitter:title" content={title || siteMetadata.title} />
      <meta
        property="twitter:description"
        content={description || siteMetadata.description}
      />
      <meta property="twitter:image" content={image || siteMetadata.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
    </Head>
  )
}
