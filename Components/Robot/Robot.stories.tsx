import type { Meta, StoryObj } from '@storybook/react'
import { Robot } from './Robot'

export default {
  title: 'Robot',
  component: Robot,
} as Meta<typeof Robot>

export const Primary: StoryObj<typeof Robot> = {
  args: {},
}
