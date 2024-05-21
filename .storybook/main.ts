import { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../**/*.stories.tsx'],

  framework: '@storybook/nextjs',

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}

export default config
