import { ComponentMeta, ComponentStory } from '@storybook/react'
import { VideoContainer } from './VideoContainer'

export default {
  title: 'Utilities/VideoContainer',
  component: VideoContainer,
} as ComponentMeta<typeof VideoContainer>

export const Default: ComponentStory<typeof VideoContainer> = () => (
  <VideoContainer>
    <iframe
      src="https://www.youtube.com/embed/6TnKvlQ2h7s"
      title="Copy from End of Section Quiz"
    />
  </VideoContainer>
)
