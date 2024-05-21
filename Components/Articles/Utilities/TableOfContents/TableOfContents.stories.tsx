import type { Meta, StoryObj } from '@storybook/react'
import { TableOfContents } from './TableOfContents'

export default {
  title: 'Utilities/TableOfContents',
  component: TableOfContents,
} as Meta<typeof TableOfContents>

export const NoContent: StoryObj<typeof TableOfContents> = {}

export const LinearContent: StoryObj<typeof TableOfContents> = {
  args: {
    content: [
      { display: 'Test one', url: '#test-one' },
      { display: 'Test two', url: '#test-two' },
    ],
  },
}

export const nestedContent: StoryObj<typeof TableOfContents> = {
  args: {
    content: [
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
    ],
  },
}
