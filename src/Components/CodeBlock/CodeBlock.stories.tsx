import type { Meta, StoryObj } from '@storybook/react';

import { CodeBlock } from './CodeBlock';

export default {
  title: 'CodeBlock',
  component: CodeBlock,
} as Meta<typeof CodeBlock>;

const sampleCode = `function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const message = greet('World');`;

export const Basic: StoryObj<typeof CodeBlock> = {
  args: {
    canHide: false,
    children: sampleCode,
  },
};

export const WithHide: StoryObj<typeof CodeBlock> = {
  args: {
    canHide: true,
    children: sampleCode,
  },
};

export const WithFileNameAndGitHub: StoryObj<typeof CodeBlock> = {
  args: {
    canHide: true,
    fileName: 'greet.ts',
    githubLink: 'https://github.com',
    children: sampleCode,
  },
};
