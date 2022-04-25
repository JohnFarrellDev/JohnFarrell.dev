import Head from 'next/head'
import React from 'react'
import { siteMetadata } from '../Constants/siteMetadata'

interface SEOProps {
  title?: string
  description?: string
}

export const SEO = ({ title, description }: SEOProps) => {
  return (
    <Head>
      <title>{title || siteMetadata.title}</title>
      <meta
        property="og:title"
        content={title || siteMetadata.title}
        key="title"
      />
      <meta
        name="description"
        content={description || siteMetadata.description}
      />
      {/* <meta name="image" content={image} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
      <meta name="twitter:title" content={title || siteMetadata.title} />
      <meta
        name="twitter:description"
        content={description || siteMetadata.description}
      />
      {/* <meta name="twitter:image" content={`${siteUrl}${image}`} /> */}

      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon.ico"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}
