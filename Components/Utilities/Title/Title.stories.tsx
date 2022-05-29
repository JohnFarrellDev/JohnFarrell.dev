import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Title } from './Title'

export default {
  title: 'Utilities/Title',
  component: Title,
} as ComponentMeta<typeof Title>

export const Default: ComponentStory<typeof Title> = () => (
  <Title title="template title" />
)
