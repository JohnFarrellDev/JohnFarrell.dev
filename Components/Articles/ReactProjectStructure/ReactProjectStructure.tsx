import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Layout } from '../../Layout'
import { SEO } from '../../SEO'
import { Title } from '../../Utilities/Title'
import { FileExplorer } from '../Utilities/FileExplorer'
import { Paragraph } from '../Utilities/Paragraph'
import { SectionTitle } from '../Utilities/SectionTitle'
import { SubSectionTitle } from '../Utilities/SubSectionTitle'
import { TableOfContents } from '../Utilities/TableOfContents'
import styles from './ReactProjectStructure.module.css'
import { CodeBlock } from '../Utilities/CodeBlock'

export const ReactProjectStructure = () => {
  return (
    <Layout>
      <SEO title="React Project Structure | John Farrell" />
      <section className="blog-page">
        <section className="section">
          <div className="section-center">
            <Title
              title="How I Like to Organise my React Projects"
              extraStyles={styles.title}
            />

            <Paragraph>
              React is an un-opinionated library which leaves a lot of choice to
              the developer. I believe this has benefited the React ecosystem
              but it also means there are many ways to achieve the same goal.
              One choice up to developers is how to structure your codebase. I
              have my personal opinion written down here but am also open to
              different ways of organising a React codebase.
            </Paragraph>

            <Paragraph>
              The React official docs has it's own un-opinionated advice{' '}
              <Link href="https://reactjs.org/docs/faq-structure.html">
                here
              </Link>
              .
            </Paragraph>

            <TableOfContents
              content={[
                { display: 'How I like to do it', url: '#how-i-like-to-do-it' },
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

            <SectionTitle id="how-i-like-to-do-it">
              How I Like to do it
            </SectionTitle>

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
                          content: [
                            'Footer.module.css',
                            'Footer.tsx',
                            'index.ts',
                          ],
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
                          content: [
                            'Button.module.css',
                            'Button.stories.tsx',
                            'Button.tsx',
                            'index.ts',
                          ],
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
                          content: [
                            'index.ts',
                            'ReactProjectStructure.module.css',
                            'ReactProjectStructure.tsx',
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  folderName: 'Constant/',
                  content: ['siteMetadata.ts'],
                },
                {
                  folderName: 'Utilities/',
                  content: ['fetchData.ts', 'transformData.ts'],
                },
              ]}
            />

            <SubSectionTitle>Folder Structure</SubSectionTitle>
            <Paragraph>
              The layout of the folders use a hybrid of page based organisation
              and feature based for my components.
            </Paragraph>

            <Paragraph>
              The goal of this layout is to make it easy to find components by
              using a predictable set of repeatable practices.
            </Paragraph>

            <Paragraph>
              I consider a component to be a utility components when it is used
              in many places AND is customisable. For example the Layout
              component is used on every page of this website, however it always
              looks and behaves the same, for this reason it is not a utility
              component. The Button component however has a default styling
              applied but the text displayed is passed in as a child prop and
              the styling can be overridden via props too.
            </Paragraph>

            <SubSectionTitle>File Co-location</SubSectionTitle>
            <Paragraph>
              Co-location of files is important to me. When I am looking at a
              component I want to be able see its associated styling (CSS),
              tests and storybook fils next to it. This makes it quicker to find
              associated files when working on a component. Going to a separate
              Tests/ folder with an identical tree structure is fairly annoying.
            </Paragraph>
            <Paragraph>
              I also find that by co-locating the tests with the component it
              makes it very obvious when a component is untested. This can help
              ensure good testing habits are implemented within a team.
            </Paragraph>

            <SubSectionTitle>
              Alternative Option - Group by File Type
            </SubSectionTitle>

            <SubSectionTitle>
              Alternative Option - Group by Route
            </SubSectionTitle>

            <SectionTitle id="index-ts">
              What is that index.ts file about?
            </SectionTitle>

            <SubSectionTitle id="index-ts-cleaner-imports">
              Cleaner Imports
            </SubSectionTitle>

            <Paragraph>
              The index.ts file is incredibly simple, all it does it import the
              relevant component and then export it again.
            </Paragraph>

            <CodeBlock
              canHide={false}
              fileName="/Components/Articles/TableOfContents/index.ts"
            >
              {`export {TableOfContents} from './TableOfContents'`}
            </CodeBlock>

            <Paragraph>
              So if it is not really doing anything why do I have it? The
              index.ts file allows my imports to look "clean". Without the
              index.ts file importing the TableOfContents component would have
              to look like.
            </Paragraph>

            <CodeBlock canHide={false}>
              {`import { TableOfContents } from '../Utilities/TableOfContents/TableOfContents'`}
            </CodeBlock>

            <Paragraph>
              While it is fairly minute to care about I dislike the double
              TableOfContents in the import.
              ("/TableOfContents/TableOfContents"). Exporting from the index.ts
              removes this and allows my import to look like.
            </Paragraph>

            <CodeBlock canHide={false}>
              {`import { TableOfContents } from '../Utilities/TableOfContents'`}
            </CodeBlock>

            <SubSectionTitle id="index-ts-meaningful-file-names">
              Meaningful File Names
            </SubSectionTitle>

            <Paragraph>
              Some of you might be saying that's fine but if you just changed
              the name of TableOfContents.tsx to index.tsx the imports would
              still be "clean" and you could remove the index.ts file. Removing
              the index.ts file could be nice as you might see it as unnecessary
              boilerplate.
            </Paragraph>

            <Paragraph>
              My issue with this approach is that you end up with hundreds of
              components that are not accurately represented by their filename,
              worse they all share the exact same filename index.tsx. This can
              make searching by file name a less smooth experience.
            </Paragraph>

            <Paragraph>
              Below is a screenshot from VS Code on a previous project I worked
              on before I came up with this system (whoops). I want to quickly
              go to a component called Location, it should be shown as the first
              choice. Because the filename is index.tsx it is hidden below our
              CSS and StoryBook files. This project was also small so the only
              index.tsx file being displayed is the correct file for the
              component we want.
            </Paragraph>

            <Image
              src="https://i.imgur.com/hS5mm0v.png"
              alt="Image showing vs code search not very effectively finding the right file from component name"
              width={598}
              height={145}
            />

            <Paragraph>
              As projects grow larger your IDE will find many potential files
              all called index.tsx. I personally want to be able type the
              component name, hit enter and the code is there, I don't want to
              be scanning through the file list, looking at the whole path to
              figure out which one is correct. The screenshot below shows that
              when the file name represents the actual component it is the first
              choice shown to the user.
            </Paragraph>

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
