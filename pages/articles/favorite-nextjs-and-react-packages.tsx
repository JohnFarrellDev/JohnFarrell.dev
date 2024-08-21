import { ArticleTimeStamps } from '../../Components/Articles/Utilities/ArticleTimeStamps/ArticleTimeStamps'
import { TableOfContents } from '../../Components/Articles/Utilities/TableOfContents/TableOfContents'
import { Layout } from '../../Components/Layout/Layout'
import { SEO } from '../../Components/SEO/SEO'
import { Title } from '../../Components/Utilities/Title/Title'

function FavouriteNextJSAndReactPackages() {
  return (
    <Layout>
      <SEO
        title="Favorite Next.js and React Packages"
        description="A reminder of useful packages I have found to save me time"
        image="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/article-thumbnails/article-card-next-js-packages.png"
      />
      <section className="blog-page">
        <section className="section">
          <div className="section-center">
            <Title title="Useful Packages When Building with Next.js" />
            <ArticleTimeStamps createdAt={new Date('2024-08-21T18:24:58.869Z')} />

            <TableOfContents
              content={[
                {
                  display: 'Animations',
                  url: '#animations',
                  nestedContent: [
                    {
                      display: 'Swapy',
                      url: '#swapy',
                    },
                    {
                      display: 'React Mosaic',
                      url: '#react-mosaic',
                    },
                    {
                      display: 'dnd kit',
                      url: '#dnd-kit',
                    },
                    {
                      display: 'dockview',
                      url: '#dockview',
                    },
                  ],
                },
              ]}
            />

            <h2 id="animations">Animations</h2>
            <h3 id="swapy">Swapy</h3>
            <h3 id="react-mosaic">React Mosaic</h3>
            <h3 id="dnd-kit">dnd kit</h3>
            <h3 id="dockview">dockview</h3>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default FavouriteNextJSAndReactPackages
