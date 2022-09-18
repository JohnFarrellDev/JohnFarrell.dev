import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Robot } from './Robot'

export default {
  title: 'Robot',
  component: Robot,
} as ComponentMeta<typeof Robot>

export const Default: ComponentStory<typeof Robot> = () => <Robot />
