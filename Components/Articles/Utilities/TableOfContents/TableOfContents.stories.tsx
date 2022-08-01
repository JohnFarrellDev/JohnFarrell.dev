import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TableOfContents } from './TableOfContents'

export default {
  title: 'Utilities/TableOfContents',
  component: TableOfContents,
} as ComponentMeta<typeof TableOfContents>

export const NoContent: ComponentStory<typeof TableOfContents> = () => (
  <TableOfContents content={[]} />
)

export const LinearContent: ComponentStory<typeof TableOfContents> = () => (
  <TableOfContents
    content={[
      { display: 'Test one', url: '#test-one' },
      { display: 'Test two', url: '#test-two' },
    ]}
  />
)

export const nestedContent: ComponentStory<typeof TableOfContents> = () => (
  <TableOfContents
    content={[
      { display: 'test-one', url: '#test-one' },
      {
        display: 'test-two',
        url: '#test-two',
        nestedContent: [
          {
            display: 'test-two-one',
            url: '#test-two-one',
            nestedContent: [
              {
                display: 'test-two-one-one',
                url: '#test-two-one-one',
              },
              {
                display: 'test-two-one-two',
                url: '#test-two-one-two',
                nestedContent: [
                  {
                    display: 'test-two-one-two-one',
                    url: '#test-two-one-two-one',
                  },
                ],
              },
            ],
          },
        ],
      },
    ]}
  />
)
