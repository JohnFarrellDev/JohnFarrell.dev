import Image from 'next/image';

import { ArticleStyles } from '@/Components/Article/Article';
import { ArticleBanner } from '@/Components/ArticleBanner';
import { Banner } from '@/Components/Banner';
import { PageContentContainer } from '@/Components/Layout/PageContent';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer';
import { SectionTitle } from '@/Components/SectionTitle';
import { TableOfContents } from '@/Components/TableOfContents';
import { produceMetaData } from '@/Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Optimizing Youtube | John Farrell',
  description: 'Utilising Extensions to Improve the YouTube Experience',
  image:
    'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/article-thumbnails/optimizing-youtube.png',
});

export default function OptimizingYoutube() {
  return (
    <PageWidthContainer as="article">
      <ArticleBanner title="Optimizing YouTube" createdAt={new Date('2024-06-19T19:35:38.114Z')} />
      <PageContentContainer>
        <ArticleStyles>
          <Banner
            type="information"
            message="Google are actively weakening the effectiveness of extensions on Chrome, try FireFox."
          />

          <p>
            For about 15 years, I have been an avid YouTube user, integrating the platform into my daily routine.
            YouTube provides me with free entertainment and access to excellent educational resources. Whether I’m
            watching highlights of my favorite gaming streamers, football matches, or exploring tutorials on software
            engineering and business, YouTube offers a rich variety of content that matches my personal interests. To
            enhance my experience further, I use various browser extensions that improve the platform's functionality.
            These tools allow me to tailor my YouTube journey to my unique needs and preferences, transforming my time
            on YouTube into a more productive, enjoyable, and personalized experience. As a result, YouTube has become
            an even more invaluable resource in my daily life.
          </p>

          <TableOfContents
            content={[
              {
                display: 'uBlock Origin',
                url: '#ublock-origin',
              },
              {
                display: 'Sponsor Block',
                url: '#sponsor-block',
              },
              {
                display: 'BlockTube',
                url: '#blocktube',
              },
              {
                display: 'Return YouTube Dislikes',
                url: '#return-youtube-dislikes',
              },
              {
                display: 'Clickbait Remover for YouTube',
                url: '#clickbait-remover-for-youtube',
              },
              {
                display: 'DeArrow',
                url: '#dearrow',
              },
              {
                display: 'Google Gemini',
                url: '#google-gemini',
              },
            ]}
          />

          <SectionTitle
            id="ublock-origin"
            className="font-semibold underline decoration-blue-400 decoration-wavy decoration-2"
          >
            uBlock Origin
          </SectionTitle>
          <div className="flex flex-col">
            <a href="https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en-GB">
              Chrome Extension
            </a>
            <a href="https://addons.mozilla.org/en-GB/firefox/addon/ublock-origin/">Firefox Add-On</a>
            <a href="https://ublockorigin.com/">uBlock Website</a>
          </div>
          <p>
            For me, this is the most essential extension to have installed. It blocks all adverts across websites you
            visit, making your browsing experience smoother and less intrusive. Recently, YouTube has become more
            aggressive in attempting to counter ad blockers, but for now, uBlock appears to be prevailing. Personally, I
            don&apos;t feel guilty for using an ad blocker because, without it, YouTube often shows me ads for financial
            scams or misleading phone games. These ads are neither relevant nor accurately represented, making uBlock
            Origin a crucial tool in avoiding such content.
          </p>

          <SectionTitle
            id="sponsor-block"
            className="font-semibold underline decoration-blue-400 decoration-wavy decoration-2"
          >
            Sponsor Block
          </SectionTitle>
          <div className="flex flex-col">
            <a href="https://chromewebstore.google.com/detail/sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone">
              Chrome Extension
            </a>
            <a href="https://addons.mozilla.org/en-GB/firefox/addon/sponsorblock/">Firefox Add-On</a>
            <a href="https://github.com/ajayyy/SponsorBlock">GitHub Repo</a>
          </div>
          <p>
            While uBlock Origin effectively blocks ads served by YouTube, there are also ads integrated directly into
            the content by creators. Sponsor Block is a community-driven extension that automatically skips these
            sponsored segments, as well as pre-rolls, intros, and outros, in YouTube videos. It relies on crowdsourced
            data to identify and skip sponsorships, ads, and product placements, providing a seamless viewing
            experience.
          </p>
          <p>
            Sponsor Block is highly customizable, allowing you to adjust skip settings based on your preferences. It
            conveniently tracks the time you save by using the extension, and in my case, I've saved almost 1 day and 16
            hours.
          </p>
          <Image
            src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/sponsor-block-time-saved.png"
            alt="time saved by Sponsor Block, 1 day 16 hours"
            width={343}
            height={591}
          />

          <SectionTitle
            id="blocktube"
            className="font-semibold underline decoration-blue-400 decoration-wavy decoration-2"
          >
            BlockTube
          </SectionTitle>
          <div className="flex flex-col">
            <a href="https://chromewebstore.google.com/detail/blocktube/bbeaicapbccfllodepmimpkgecanonai">
              Chrome Extension
            </a>
            <a href="https://addons.mozilla.org/en-GB/firefox/addon/blocktube/">Firefox Add-On</a>
            <a href="https://github.com/amitbl/blocktube">GitHub Repo</a>
          </div>
          <p>
            BlockTube is my favorite YouTube extension. I discovered it after realizing that YouTube's "Not interested
            in this video" button was largely ineffective; disliked videos and videos selected as not intersting to me
            would still clutter my feed. Subscribed to hundreds of channels, many posting daily, I found it increasingly
            difficult to locate the 5% of videos I actually care about. BlockTube solves this problem by allowing me to
            block specific videos or entire channels from appearing anywhere on YouTube with just a couple of clicks.
          </p>
          <p>My subscription feed without blocktube with 4 rows of content goes back only 6 hours.</p>
          <Image
            src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/blocktube-before.jpg"
            width={1613}
            height={1218}
            alt="subscription feed without blocktube"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <p>
            With BlockTube enabled I can see content from 8 days ago and a small scroll would show content from 3 months
            ago!
          </p>
          <Image
            src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/blocktube-after.jpg"
            width={1610}
            height={1186}
            alt="subscription feed with blocktube"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <p>
            BlockTube also features an advanced mode that allows you to programmatically block content by writing custom
            code. This mode provides access to video and channel objects, enabling precise filtering based on your
            specific criteria.
          </p>
          <p>
            Using this I am able to block all livestream videos and videos that are set to premier in the future. I also
            have written code that allows me to block certain keywords in general or for a specific channel, for example
            if the UFC channel posts a video with string 'ufc unfiltered' (a podcast I don't care about that they post
            every week) in the title I will never see that video. Over time I have built quite an advanced custom filter
            which automatically blocks videos I don't care about.
          </p>

          <SectionTitle
            id="return-youtube-dislikes"
            className="font-semibold underline decoration-blue-400 decoration-wavy decoration-2"
          >
            Return YouTube Dislikes
          </SectionTitle>
          <div className="flex flex-col">
            <a href="https://chromewebstore.google.com/detail/return-youtube-dislike/gebbhagfogifgggkldgodflihgfeippi?hl=en">
              Chrome Extension
            </a>
            <a href="https://addons.mozilla.org/en-GB/firefox/addon/return-youtube-dislikes/">Firefox Add-On</a>
            <a href="https://returnyoutubedislike.com/">Return YouTube Dislikes website</a>
          </div>
          <p>
            YouTube, in an effort to appease large corporations, removed the visible dislike count on videos.
            Unfortunately, seeing dislikes is a valuable tool for viewers to quickly gauge the quality of a video. For
            example, if I'm watching a tech tutorial or a handyman's guide with a high dislike count, I can quickly
            determine that the video may not be worth my time. This extension simply restores an estimated dislike count
            to videos, allowing viewers to make more informed decisions.
          </p>

          <p>Based on the below image YouTube rewind 2018 was a great success and received 3.1 million likes...</p>
          <Image
            src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/return-youtube-dislike-turned-off.png"
            alt="youtube rewind 2018 with a like count of 3.1 million"
            width={911}
            height={349}
            style={{ maxWidth: '100%', height: 'auto' }}
          />

          <p>
            However with the extension Return YouTube Dislikes turned on we can see the dislike count is at 20M for
            YouTube a dislike % of ~85%.
          </p>
          <Image
            src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/return-youtube-dislike.png"
            alt="youtube dislike count still on a youtube video"
            width={914}
            height={350}
            style={{ maxWidth: '100%', height: 'auto' }}
          />

          <SectionTitle
            id="clickbait-remover-for-youtube"
            className="font-semibold underline decoration-blue-400 decoration-wavy decoration-2"
          >
            Clickbait Remover for YouTube
          </SectionTitle>
          <div className="flex flex-col">
            <a href="https://chromewebstore.google.com/detail/clickbait-remover-for-you/omoinegiohhgbikclijaniebjpkeopip?hl=en">
              Chrome Extension
            </a>
            <a href="https://addons.mozilla.org/en-US/firefox/addon/clickbait-remover-for-youtube/">Firefox Add-On</a>
            <a href="https://github.com/pietervanheijningen/clickbait-remover-for-youtube">GitHub Repo</a>
          </div>
          <p>
            This simple extension helps reduce the annoying clickbait often seen on YouTube. It allows me to choose a
            specific section of the video (start, middle, or end) to use as the thumbnail, rather than relying on the
            often misleading default thumbnail. Additionally, I can adjust the casing of video titles, converting{' '}
            <span className="uppercase">all caps</span> titles into more readable Title Case Text.
          </p>
          <p>The below</p>
          <Image
            src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/clickbait-remover-before.png"
            alt="examples of annoying youtube clickbait before the extension"
            width={1320}
            height={804}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <p>Becomes</p>
          <Image
            src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/clickbait-remover-after.png"
            alt="examples of youtube thumbnails and titles after the extension reduces the clickbait"
            width={1306}
            height={824}
            style={{ maxWidth: '100%', height: 'auto' }}
          />

          <SectionTitle
            id="dearrow"
            className="font-semibold underline decoration-blue-400 decoration-wavy decoration-2"
          >
            DeArrow
          </SectionTitle>
          <div className="flex flex-col">
            <a href="https://chromewebstore.google.com/detail/dearrow-better-titles-and/enamippconapkdmgfgjchkhakpfinmaj">
              Chrome Extension
            </a>
            <a href="https://addons.mozilla.org/en-GB/firefox/addon/dearrow/">Firefox Add-On</a>
            <a href="https://dearrow.ajay.app/">DeArrow Website</a>
          </div>
          <p>
            DeArrow operates similarly to Clickbait Remover for YouTube, eliminating clickbait thumbnails and titles.
            Instead of using algorithmically selected sections, DeArrow relies on community-submitted thumbnails and
            titles to replace the misleading ones. Although I prefer using Clickbait Remover due to its straightforward
            approach, DeArrow shows promise and is worth keeping an eye on as its community grows.
          </p>

          <SectionTitle
            id="google-gemini"
            className="font-semibold underline decoration-blue-400 decoration-wavy decoration-2"
          >
            Google Gemini
          </SectionTitle>
          <div className="flex flex-col">
            <a href="https://gemini.google.com/">Google Gemini</a>
          </div>
          <p>
            Unlike the other tools mentioned, Google Gemini is not a browser extension. It's Google's AI chat service,
            similar to ChatGPT, and integrates seamlessly with YouTube due to Google's ownership of both. I use Gemini
            to quickly summarize videos I'm unsure about watching. For instance, if a 20-minute video by Tim Corey is
            irrelevant to me based on the Gemini summary, I can promptly use BlockTube to block the video and remove it
            from my subscription feed.
          </p>
          <Image
            src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/gemini-video-to-summarise.png"
            alt="20 minute video by Tim Corey"
            width={329}
            height={294}
            style={{ maxWidth: '100%', height: 'auto', display: 'block', marginBottom: 10 }}
          />
          <Image
            src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/gemini-summary.png"
            alt="Gemini summary of the video"
            width={779}
            height={1077}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          />
        </ArticleStyles>
      </PageContentContainer>
    </PageWidthContainer>
  );
}
