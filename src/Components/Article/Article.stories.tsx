import type { Meta, StoryObj } from '@storybook/react';

import { ArticleStyles } from './Article';

export default {
  title: 'Article/ArticleStyles',
  component: ArticleStyles,
} as Meta<typeof ArticleStyles>;

export const Default: StoryObj<typeof ArticleStyles> = {
  args: {
    children: (
      <>
        <h2>Introduction</h2>
        <p>
          This is an example article paragraph. The ArticleStyles component applies consistent typography to article
          content including headings, paragraphs, and lists.
        </p>
        <h3>A Subsection</h3>
        <p>Another paragraph with more content. Notice the spacing and font sizes applied automatically.</p>
        <ul>
          <li>First list item</li>
          <li>Second list item</li>
          <li>Third list item with a longer description to show wrapping behavior</li>
        </ul>
        <h2>Conclusion</h2>
        <p>The final paragraph wrapping up the article content.</p>
      </>
    ),
  },
};
