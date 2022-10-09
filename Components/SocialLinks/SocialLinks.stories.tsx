import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SocialLinks } from './SocialLinks'

export default {
  title: 'SocialLinks',
  component: SocialLinks,
} as ComponentMeta<typeof SocialLinks>

export const Default: ComponentStory<typeof SocialLinks> = () => <SocialLinks />
