import type { Meta, StoryObj } from '@storybook/react'
import { VideoContainer } from './VideoContainer'

export default {
  title: 'Utilities/VideoContainer',
  component: VideoContainer,
} as Meta<typeof VideoContainer>

export const Default: StoryObj<typeof VideoContainer> = {
  args: {
    children: <iframe src="https://www.youtube.com/embed/6TnKvlQ2h7s" title="Copy from End of Section Quiz" />,
  },
}
