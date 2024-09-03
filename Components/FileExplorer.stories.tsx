import type { Meta, StoryObj } from '@storybook/react'
import { FileExplorer } from '../../../FileExplorer'

const meta = {
  title: 'Articles/Utilities/FileExplorer',
  component: FileExplorer,
} as Meta<typeof FileExplorer>
export default meta

export const Primary: StoryObj<typeof FileExplorer> = {
  args: {
    content: [
      'File one',
      'File two',
      'File three',
      'File four',
      {
        folderName: 'folder one',
        content: ['folder file one'],
      },
    ],
  },
}
