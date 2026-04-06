import type { Meta, StoryObj } from '@storybook/react';

import { SectionTitle } from './SectionTitle';

export default {
  title: 'SectionTitle',
  component: SectionTitle,
} as Meta<typeof SectionTitle>;

export const Default: StoryObj<typeof SectionTitle> = {
  args: {
    children: 'About Me',
  },
};

export const AsH1: StoryObj<typeof SectionTitle> = {
  args: {
    children: 'Page Title',
    as: 'h1',
  },
};

export const AsH3: StoryObj<typeof SectionTitle> = {
  args: {
    children: 'Subsection Title',
    as: 'h3',
  },
};
