import React from 'react'
import { SocialLinks } from '../../SocialLinks/SocialLinks'

export const Footer = () => {
  return (
    <footer className="grid h-36 place-items-center bg-gray-900 text-center">
      <div>
        <SocialLinks className="mx-auto mb-4 mt-0" styleLinks="text-white" />
        <p className="mt-2 font-normal uppercase text-white">
          copyright&copy;2020-{new Date().getFullYear()}
          <span className="text-primary-500">John Farrell</span> all rights reserved
        </p>
      </div>
    </footer>
  )
}
