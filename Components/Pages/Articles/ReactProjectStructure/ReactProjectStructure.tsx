import Link from 'next/link'
import React from 'react'
import { Layout } from '../../../Layout'
import { SEO } from '../../../SEO'
import { Title } from '../../../Utilities/Title'
import { FileExplorer } from '../Utilities/FileExplorer'
import { Paragraph } from '../Utilities/Paragraph'
import { SectionTitle } from '../Utilities/SectionTitle'
import { SubSectionTitle } from '../Utilities/SubSectionTitle'
import { TableOfContents } from '../Utilities/TableOfContents'
import styles from './ReactProjectStructure.module.css'

export const ReactProjectStructure = () => {
  return (
    <Layout>
      <SEO />
      <section className="blog-page">
        <section className="section">
          <div className="section-center">
            <Title
              title="How I Like to Organise my React Projects"
              extraStyles={styles.title}
            />

            <Paragraph>
              React is an un-opinionated library which leaves a lot of choice to
              the developer. I really like this it has benefited the React
              ecosystem but it also means there are many ways to achieve the
              same goal. One choice up to developers is how to structure your
              codebase. I have my personal opinion written down here but am also
              open to different ways of organising a React codebase.
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
                  url: '#why-index.ts',
                  nestedContent: [
                    {
                      display: 'Alternative - get rid of it',
                      url: '#why-index.ts-get-rid-of-it',
                    },
                    {
                      display: 'Alternative - index.tsx',
                      url: '#why-index.ts-use-index.tsx',
                    },
                  ],
                },
              ]}
            />

            <SectionTitle>How I Like to do it</SectionTitle>

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
                      folderName: 'Pages/',
                      content: [
                        {
                          folderName: 'Articles/',
                          content: [
                            {
                              folderName: 'Utilities/',
                              content: [
                                {
                                  folderName: 'ArticleTimeStamps/',
                                  content: [
                                    'ArticleTimeStamps.module.css',
                                    'ArticleTimeStamps.stories.tsx',
                                    'ArticleTimeStamps.test.tsx',
                                    'ArticleTimeStamps.tsx',
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

            <Paragraph>
              The layout of the folders use a hybrid of page based organisation
              and feature based for my components.
            </Paragraph>

            <Paragraph>
              The goal of this layout is to make it easy to find components by
              using a predictable set of repeatable practices. Finding a
              components means be able to quickly search for the file if I
              already know it's name. When I do not know the name a predictable
              pattern should be followed which makes it easy to find the
              component anyway.
            </Paragraph>

            <Paragraph>
              I consider a component to be a utility components when it is used
              in many places AND is customisable. For example the Layout
              component is used on every page of this website, however it always
              looks and behaves the same, for this reason it is not a utility
              component. The Button component however has a default styling
              applied but the text displayed is passed in as a children prop and
              the styling can be overridden via props too.
            </Paragraph>

            <Paragraph>
              Co-location of files is important to me. When I am looking at a
              component I want to be able see its associated styling (CSS),
              tests and storybook fils next to it. This makes it quicker to find
              associated files when working on a component. Going to a separate
              Tests/ folder with an identical tree structure is mildly annoying.
            </Paragraph>
            <Paragraph>
              I also find that by co-locating the tests with the component it
              makes it very obvious when a component is untested. This can help
              ensure good testing habits are implemented within a team.
            </Paragraph>
            <Paragraph>
              The ExampleComponent itself could exist in a further nested folder
              structure. For example if the application has a feature for user
              profiles and the ExampleComponent was only utilised within that
              section of the web app it would make sense to be nested. This is
              called organising by feature. The alternative is to organise your
              files based on their file type or by their route.
            </Paragraph>

            <SubSectionTitle>What is that index.ts file about?</SubSectionTitle>

            <SectionTitle>Alternative Option - Group by File Type</SectionTitle>

            <SectionTitle>Alternative Option - Group by Route</SectionTitle>
          </div>
        </section>
      </section>
    </Layout>
  )
}
