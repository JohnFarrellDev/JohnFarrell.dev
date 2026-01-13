import type { Meta, StoryObj } from '@storybook/react';

import { YoutubeVideo } from './YoutubeVideo';

export default {
  title: 'Utilities/VideoContainer',
  component: YoutubeVideo,
} as Meta<typeof YoutubeVideo>;

export const Default: StoryObj<typeof YoutubeVideo> = {
  args: {
    videoId: '6TnKvlQ2h7s',
    title: 'Copy from End of Section Quiz',
  },
};
