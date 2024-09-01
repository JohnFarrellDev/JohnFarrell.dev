import Link from 'next/link'
import Image from 'next/image'
import { Layout } from '../../Layout/Layout'
import { SEO } from '../../SEO/SEO'
import { Title } from '../../Utilities/Title/Title'
import { FileExplorer } from '../Utilities/FileExplorer/FileExplorer'
import { SectionTitle } from '../Utilities/SectionTitle/SectionTitle'
import { SubSectionTitle } from '../Utilities/SubSectionTitle/SubSectionTitle'
import { TableOfContents } from '../Utilities/TableOfContents/TableOfContents'
import { CodeBlock } from '../Utilities/CodeBlock/CodeBlock'
import { ArticleTimeStamps } from '../Utilities/ArticleTimeStamps/ArticleTimeStamps'

export const ReactProjectStructure = () => {
  return (
    <Layout>
      <SEO
        title="React Project Structure | John Farrell"
        description="How I like to set up a React project for the best developer experience."
        image="https://i.imgur.com/3fy0xbC.png"
      />
      <section className="blog-page">
        <section className="section">
          <div className="section-center">
            <Title title="How I Like to Organise my React Projects" />

            <ArticleTimeStamps createdAt={new Date('2022-08-01T14:15:28.433Z')} />

            <p>
              React is an un-opinionated library which leaves a lot of choice to the developer. I believe this has
              benefited the React ecosystem but it also means there are many ways to achieve the same goal. One choice
              up to developers is how to structure your codebase. I have my personal opinion written down here but I am
              also open to different ways of organising a React codebase. (if you disagree with me I can still work for
              you 🤣)
            </p>

            <p>
              The React official docs has it's own un-opinionated advice{' '}
              <Link href="https://reactjs.org/docs/faq-structure.html">here</Link>.
            </p>

            <TableOfContents
              content={[
                {
                  display: 'How I like to do it',
                  url: '#how-i-like-to-do-it',
                  nestedContent: [
                    {
                      display: 'Folder Structure',
                      url: '#folder-structure',
                    },
                    {
                      display: 'Feature Based Organisation',
                      url: '#feature-based-organisation',
                    },
                    {
                      display: 'Utility Components',
                      url: '#utility-components',
                    },
                    {
                      display: 'File Co-location',
                      url: '#file-co-location',
                    },
                  ],
                },
                {
                  display: 'Why the index.ts file?',
                  url: '#index-ts',
                  nestedContent: [
                    {
                      display: 'Cleaner Imports',
                      url: '#index-ts-cleaner-imports',
                    },
                    {
                      display: 'Meaningful File Names',
                      url: '#index-ts-meaningful-file-names',
                    },
                  ],
                },
              ]}
            />

            <SectionTitle id="how-i-like-to-do-it">How I Like to do it</SectionTitle>

            <FileExplorer
              content={[
                {
                  folderName: 'Components/',
                  content: [
                    {
                      folderName: 'Layout/',
                      content: [
                        {
                          folderName: 'Footer/',
                          content: ['Footer.module.css', 'Footer.tsx', 'index.ts'],
                          collapsed: true,
                        },
                        'Layout.tsx',
                        'index.ts',
                      ],
                    },
                    {
                      folderName: 'Utilities/',
                      content: [
                        {
                          folderName: 'Button/',
                          content: ['Button.module.css', 'Button.stories.tsx', 'Button.tsx', 'index.ts'],
                        },
                      ],
                    },
                    {
                      folderName: 'Articles/',
                      content: [
                        {
                          folderName: 'Utilities/',
                          content: [
                            {
                              folderName: 'TableOfContents/',
                              content: [
                                'TableOfContents.module.css',
                                'TableOfContents.stories.tsx',
                                'TableOfContents.test.tsx',
                                'TableOfContents.tsx',
                                'index.ts',
                              ],
                            },
                          ],
                        },
                        {
                          folderName: 'ReactProjectStructure/',
                          content: ['index.ts', 'ReactProjectStructure.module.css', 'ReactProjectStructure.tsx'],
                        },
                      ],
                    },
                  ],
                },
                {
                  folderName: 'Utilities/',
                  content: ['fetchData.ts', 'transformData.ts'],
                },
              ]}
            />

            <SubSectionTitle id="folder-structure">Folder Structure</SubSectionTitle>

            <p>
              The layout of the folders uses a hybrid of page based and feature based organisation for my components.
            </p>

            <p>
              The goal of this layout is to make it easy to find components by using a predictable set of repeatable
              practices.
            </p>

            <p>
              The structure of the folders matches the routes of the website, for example,
              Components/Articles/ReactProjectStructure. The ReactProjectStructure.tsx file then has all the code found
              on this page. This is page based organisation, any React developer should be able to look at the page
              route and in turn, find the relevant component quickly.
            </p>

            <SubSectionTitle id="feature-based-organisation">Feature Based Organisation</SubSectionTitle>

            <p>[When I have a good example if this on my website I'll update here to write about it]</p>

            <SubSectionTitle id="utility-components">Utility Components</SubSectionTitle>

            <p>
              Even though all the code for this page exists in the ReactProjectStructure component there are a couple of
              reusable components implemented within the page. These are the FileExplorer component and the
              TableOfContents component. As both of these components are used in multiple places it doesn't make sense
              for them to be located in Components/Articles/ReactProjectStructure.
            </p>

            <p>
              For this reason, these components are stored within a Utilities folder, to avoid having a single Utilities
              folder that grows massive components are put in the earliest possible parental utilities folder. Or to be
              clearer in this case the TableOfContents is only used within Articles, therefore, the code is found at
              Components/Articles/Utilities. Something like the Button component which is used everywhere is found in
              Components/Utilities.
            </p>

            <SubSectionTitle id="file-co-location">File Co-location</SubSectionTitle>

            <p>
              Co-location of files is important to me. When I am looking at a component I want to be able see its
              associated styling (CSS), tests and storybook files next to it. This makes it quicker to find associated
              files when working on a component.
            </p>

            <p>
              I also find that co-locating the tests with the component makes it very obvious when a component is
              untested. This can help ensure good testing habits are implemented within a team. Some people still like
              to think in a clear "separation of concerns" model and have a separate mirrored folder structure for tests
              and CSS etc. This is also commonly seen in Java and C# projects by default. I dislike this way of
              organising the code. When working on a component I want everything relevant to that component right next
              to it, for me, this is a much better developer experience.
            </p>

            <SectionTitle id="index-ts">What is that index.ts file about?</SectionTitle>

            <SubSectionTitle id="index-ts-cleaner-imports">Cleaner Imports</SubSectionTitle>

            <p>
              The index.ts file is incredibly simple, all it does is import the relevant component and then export it
              again.
            </p>

            <CodeBlock canHide={false} fileName="/Components/Articles/TableOfContents/index.ts">
              {`export {TableOfContents} from './TableOfContents'`}
            </CodeBlock>

            <p>
              So if it is not doing anything why do I have it? The index.ts file allows my imports to look "clean".
              Without the index.ts file importing the TableOfContents component would have to look like this.
            </p>

            <CodeBlock canHide={false}>
              {`import { TableOfContents } from '../Utilities/TableOfContents/TableOfContents'`}
            </CodeBlock>

            <p>
              While it is fairly minute to care about I dislike the double TableOfContents in the import.
              ("/TableOfContents/TableOfContents"). Exporting from the index.ts removes this and allows my import to
              look like.
            </p>

            <CodeBlock canHide={false}>{`import { TableOfContents } from '../Utilities/TableOfContents'`}</CodeBlock>

            <SubSectionTitle id="index-ts-meaningful-file-names">Meaningful File Names</SubSectionTitle>

            <p>
              Some of you might be saying that's fine but if you just changed the name of TableOfContents.tsx to
              index.tsx the imports would still be "clean" and you could remove the index.ts file. Removing the index.ts
              file could be nice as you might see it as unnecessary boilerplate.
            </p>

            <p>
              My issue with this approach is that you end up with hundreds of components that are not accurately
              represented by their filename, worse they all share the same filename index.tsx. This can make searching
              by file name a less smooth experience.
            </p>

            <p>
              Below is a screenshot from VS Code on a previous project I worked on before I came up with this system
              (whoops). I want to quickly go to a component called Location, it should be shown as the first choice.
              Because the filename is index.tsx it is hidden below our CSS and StoryBook files. This project was also
              small so the only index.tsx file being displayed is the correct file for the component we want.
            </p>

            <Image
              src="https://i.imgur.com/hS5mm0v.png"
              alt="Image showing vs code search not very effectively finding the right file from component name"
              width={598}
              height={145}
            />

            <p>
              As projects grow larger your IDE will find many potential files all called index.tsx. I want to be able to
              type the component name, hit enter and the code is there, I don't want to be scanning through the file
              list, looking at the whole path to figure out which one is correct. The screenshot below shows that when
              the file name represents the actual component it is the first choice shown to the user.
            </p>

            <Image
              src="https://i.imgur.com/QjQCDlg.png"
              alt="Image showing vs code search effectively finding the right file from component name"
              width={601}
              height={189}
            />
          </div>
        </section>
      </section>
    </Layout>
  )
}
