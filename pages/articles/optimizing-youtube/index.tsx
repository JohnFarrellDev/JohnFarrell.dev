import { ArticleTimeStamps } from '../../../Components/Articles/Utilities/ArticleTimeStamps/ArticleTimeStamps'
import { Paragraph } from '../../../Components/Articles/Utilities/Paragraph/Paragraph'
import { TableOfContents } from '../../../Components/Articles/Utilities/TableOfContents/TableOfContents'
import { Banner } from '../../../Components/Banner'
import { Layout } from '../../../Components/Layout/Layout'
import { SEO } from '../../../Components/SEO/SEO'
import { Title } from '../../../Components/Utilities/Title/Title'
import Image from 'next/image'

function OptimizingYoutube() {
  return (
    <Layout>
      <SEO
        title="Optimizing Youtube | John Farrell"
        description="Utilising Extensions to Improve the YouTube Experience"
        image="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/article-thumbnails/optimizing-youtube.png"
      />

      <section className="blog-page">
        <section className="section">
          <div className="section-center">
            <Title title="Optimizing YouTube" />
            <ArticleTimeStamps createdAt={new Date('2024-06-19T19:35:38.114Z')} />
            <Banner
              type="information"
              heading="Google are actively weakening the effectiveness of extensions on Chrome."
              description="YouTube and Google are on the offensive against ad blockers and extensions. The release of Manifest V3 on Chrome
        and forcing all extensions to upgrade has reduced the extensions effectiveness. I would recommend using Firefox
        as your browser of choice."
            />
            <Paragraph>
              For about 15 years I have been an avid user of YouTube and YouTube has become part of my daily routine,
              providing me with free entertainment and access to brilliant educational resources. Whether I'm watching
              highlights of my favourite gaming streamers, football matches or delving into tutorials on software
              engineering and business, YouTube offers a rich tapestry of content that caters to my personal interests.
              To enhance this experience further, I've turned to a variety of browser extensions that elevate the
              platform&apos;s functionality, allowing me to tailor my YouTube journey to my unique needs and
              preferences. These tools have transformed my time on YouTube into a more productive, enjoyable, and
              customized experience, making it an even more invaluable resource in my daily life.
            </Paragraph>

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

            <h2 id="ublock-origin">uBlock Origin</h2>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
              <a href="https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en-GB">
                Chrome Extension
              </a>
              <a href="https://addons.mozilla.org/en-GB/firefox/addon/ublock-origin/">Firefox Add-On</a>
              <a href="https://ublockorigin.com/">uBlock Website</a>
            </div>
            <Paragraph>
              For me this is the most obvious extension to have installed, simply block all adverts across all websites
              you visit. The YouTube team have got more aggressive recently at trying to block the ad blockers but for
              now uBlock appears to be winning. Personally I don't feel guilty for using an adblock as without it
              YouTube are happy to serve me ads that are financial scams or terrible phone games that aren't accurately
              represented by the ad.
            </Paragraph>

            <h2 id="sponsor-block">Sponsor Block</h2>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
              <a href="https://chromewebstore.google.com/detail/sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone">
                Chrome Extension
              </a>
              <a href="https://addons.mozilla.org/en-GB/firefox/addon/sponsorblock/">Firefox Add-On</a>
              <a href="https://github.com/ajayyy/SponsorBlock">GitHub Repo</a>
            </div>
            <Paragraph>
              While the above extension in uBlock was happy to block ads being served by YouTube there are also ads
              integrated into the content made by the creators. Sponsor Block is a community-driven extension that
              automatically skips sponsored segments (plus annoying pre-rolls, intros, outros etc.) in YouTube videos.
              This extension relies on crowdsourced data to identify sponsored content, allowing you to skip ads,
              sponsorships, and product placements seamlessly. Sponsor Block is highly customizable, enabling you to
              adjust the skip settings based on your preferences and skip sponsored segments with ease.
            </Paragraph>
            <Paragraph>
              Sponsor block conveniently shows you how much time you have saved by using the extension. In my case I
              have saved almost 1 day and 16 hours.
            </Paragraph>
            <Image
              src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/sponsor-block-time-saved.png"
              alt="time saved by Sponsor Block, 1 day 16 hours"
              width={343}
              height={591}
            />

            <h2 id="blocktube">BlockTube</h2>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
              <a href="https://chromewebstore.google.com/detail/blocktube/bbeaicapbccfllodepmimpkgecanonai">
                Chrome Extension
              </a>
              <a href="https://addons.mozilla.org/en-GB/firefox/addon/blocktube/">Firefox Add-On</a>
              <a href="https://github.com/amitbl/blocktube">GitHub Repo</a>
            </div>
            <Paragraph>
              Blocktube is my favourite extension when it comes to YouTube. I discovered it after first finding out the
              YouTube button "I am not interested in this video" did very little, for instance the video would remain in
              my subscription feed. I am subbed to 100s of channels many that put out videos daily but I probably only
              care about 5% of those videos posted. It was becoming a mess to find the videos I care. BlockTube allows
              me to block videos or whole channels from ever appearing anywhere on YouTube with just a couple of clicks.
              My subscription feed without blocktube with 4 rows of content goes back only 6 hours.
            </Paragraph>
            <Image
              src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/blocktube-before.jpg"
              width={1613}
              height={1218}
              alt="subscription feed without blocktube"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <Paragraph>
              With BlockTube enabled I can see content from 8 days ago and a small scroll would show content from 3
              months ago!
            </Paragraph>
            <Image
              src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/blocktube-after.jpg"
              width={1610}
              height={1186}
              alt="subscription feed with blocktube"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <Paragraph>
              Not only does BlockTube allow blocking of channels and videos you get to hook into an advanced mode which
              lets you programmatically block content by writing code and providing you with access to a video object
              and channel object.
            </Paragraph>
            <Paragraph>
              Using this I am able to block all livestream videos and videos that are set to premier in the future. I
              also have written code that allows me to block certain keywords in general or for a specific channel, for
              example if the UFC channel posts a video with string 'ufc unfiltered' (a podcast I don't care about that
              they post every week) in the title I will never see that video.
            </Paragraph>

            <h2 id="return-youtube-dislikes">Return YouTube Dislikes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
              <a href="https://chromewebstore.google.com/detail/return-youtube-dislike/gebbhagfogifgggkldgodflihgfeippi?hl=en">
                Chrome Extension
              </a>
              <a href="https://addons.mozilla.org/en-GB/firefox/addon/return-youtube-dislikes/">Firefox Add-On</a>
              <a href="https://returnyoutubedislike.com/">Return YouTube Dislikes website</a>
            </div>
            <Paragraph>
              Youtube in an effort to make big corporations happier removed the dislike count shown on videos.
              Unfortunately seeing dislikes is a valuable tool for the viewer to quickly gauge the quality of the video,
              for example if I am watching a tech tutorial or a handyman's guide and the video has a high dislike count
              I can quickly see that the video is not worth watching. This extension simply returns an estimated dislike
              count to the video.
            </Paragraph>

            <Paragraph>
              Based on the below image YouTube rewind 2018 was a great success and received 3.1 million likes...
            </Paragraph>
            <Image
              src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/return-youtube-dislike-turned-off.png"
              alt="youtube rewind 2018 with a like count of 3.1 million"
              width={911}
              height={349}
              style={{ maxWidth: '100%', height: 'auto' }}
            />

            <Paragraph>
              However with the extension Return YouTube Dislikes turned on we can see the dislike count is at 20M for
              YouTube a dislike % of ~85%.
            </Paragraph>
            <Image
              src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/return-youtube-dislike.png"
              alt="youtube dislike count still on a youtube video"
              width={914}
              height={350}
              style={{ maxWidth: '100%', height: 'auto' }}
            />

            <h2 id="clickbait-remover-for-youtube">Clickbait Remover for YouTube</h2>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
              <a href="https://chromewebstore.google.com/detail/clickbait-remover-for-you/omoinegiohhgbikclijaniebjpkeopip?hl=en">
                Chrome Extension
              </a>
              <a href="https://addons.mozilla.org/en-US/firefox/addon/clickbait-remover-for-youtube/">Firefox Add-On</a>
              <a href="https://github.com/pietervanheijningen/clickbait-remover-for-youtube">GitHub Repo</a>
            </div>
            <Paragraph>
              A simple extension that reduces the annoying clickbait I see on Youtube. First I get to choose a section
              of the video (start, middle, end) to be the thumbnail and I also get to choose the casing for the video
              title, so instead of <span style={{ textTransform: 'uppercase' }}>all caps</span> I simply see title cased
              text.
            </Paragraph>
            <Paragraph>The below</Paragraph>
            <Image
              src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/clickbait-remover-before.png"
              alt="examples of annoying youtube clickbait before the extension"
              width={1320}
              height={804}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <Paragraph>Becomes</Paragraph>
            <Image
              src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/optimizing-youtube/clickbait-remover-after.png"
              alt="examples of youtube thumbnails and titles after the extension reduces the clickbait"
              width={1306}
              height={824}
              style={{ maxWidth: '100%', height: 'auto' }}
            />

            <h2 id="dearrow">DeArrow</h2>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
              <a href="https://chromewebstore.google.com/detail/dearrow-better-titles-and/enamippconapkdmgfgjchkhakpfinmaj">
                Chrome Extension
              </a>
              <a href="https://addons.mozilla.org/en-GB/firefox/addon/dearrow/">Firefox Add-On</a>
              <a href="https://dearrow.ajay.app/">DeArrow Website</a>
            </div>
            <Paragraph>
              DeArrow is very much in the same vein as Clickbait Remover for YouTube. It removes annoying clickbait
              thumbnails and titles but uses community submitted thumbnails and titles instead. However I don't use this
              and opt for clickbait remover instead as I don't think the community is big enough yet but it is worth
              keeping an eye on.
            </Paragraph>

            <h2 id="google-gemini">Google Gemini</h2>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
              <a href="https://gemini.google.com/">Google Gemini</a>
            </div>
            <Paragraph>
              Unlike everything else mentioned Google Gemini is not an extension, Gemini is Google's public AI chat GPT
              offering. As Google own both Gemini and YouTube they integrate exceptionally well, I utilize Gemini to
              quickly summarise videos I am not sure about watching. For example the below 20 minute video by Tim Corey
              is not relevant to me based on the Gemini summary. So then I quickly use BlockTube to block the video and
              remove it from my subscription feed.
            </Paragraph>
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
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default OptimizingYoutube
