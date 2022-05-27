import Link from 'next/link'
import React from 'react'
import { Paragraph } from '../../../Utilities/Paragraph'

export const Introduction = () => {
  return (
    <>
      <Paragraph>
        First I need to mention how much I love UserScripts. As the end-user
        when visiting a website you are in control of your personal view and how
        you interact with the website. Userscripts are a way to inject your own
        client-side JavaScript into any website. This allows you to edit the
        HTML, add new functionality, interact with APIs etc. Anything you can do
        with client-side JavaScript you can do in your UserScript.
      </Paragraph>

      <Paragraph>
        On Firefox I utilise an{' '}
        <Link href="https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/">
          add on called Tampermonkey
        </Link>{' '}
        to inject my UserScripts. Tampermonkey is also{' '}
        <Link href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo">
          available as an extension on Chrome
        </Link>{' '}
        and most{' '}
        <Link href="https://www.tampermonkey.net/">
          other popular browsers.
        </Link>
      </Paragraph>

      <Paragraph>
        You can also utilise other people's UserScripts without writing your
        own, <Link href="https://www.userscript.zone/">userscript.zone</Link>{' '}
        allows you to search for scripts by website name,{' '}
        <Link href="https://greasyfork.org">Greasy Fork</Link>
        is an online host of UserScripts that can easily be installed. When
        installing someone else's code it is your responsibility to understand
        what you are installing.
      </Paragraph>
    </>
  )
}
