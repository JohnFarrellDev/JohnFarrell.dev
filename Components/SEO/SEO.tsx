import Head from 'next/head'
import React from 'react'
import { siteMetadata } from '../../Constants/siteMetadata'

interface SEOProps {
  title?: string
  description?: string
}

export const SEO = ({ title, description }: SEOProps) => {
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
        content="John Farrell's website for sharing of software projects and articles."
      />
      <meta
        property="og:image"
        content="https://cdn.sanity.io/images/o0o2tn5x/production/19481241cf39bd91ac94c0eb18013256613018df-1200x652.png"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
    </Head>
  )
}
