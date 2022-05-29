import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Underline } from './Underline'

export default {
  title: 'Utilities/Underline',
  component: Underline,
} as ComponentMeta<typeof Underline>

export const Default: ComponentStory<typeof Underline> = () => <Underline />
