import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Utilities/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = () => (
  <Button>
    <span>Story Text</span>
  </Button>
)
