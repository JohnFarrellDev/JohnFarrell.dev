import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FileExplorer } from './FileExplorer'

export default {
  title: 'Articles/Utilities/FileExplorer',
  component: FileExplorer,
} as ComponentMeta<typeof FileExplorer>

export const Default: ComponentStory<typeof FileExplorer> = () => (
  <FileExplorer
    content={[
      'File one',
      'File two',
      'File three',
      'File four',
      {
        folderName: 'folder one',
        content: ['folder file one'],
      },
    ]}
  />
)
