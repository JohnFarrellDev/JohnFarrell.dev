import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ArticleTimeStamps } from './ArticleTimeStamps'

export default {
  title: 'Utilities/ArticleTimeStamps',
  component: ArticleTimeStamps,
} as ComponentMeta<typeof ArticleTimeStamps>

export const CreatedAt: ComponentStory<typeof ArticleTimeStamps> = () => (
  <ArticleTimeStamps createdAt={new Date('2022-05-29T19:28:53.185Z')} />
)

export const CreatedAtAndLastUpdated: ComponentStory<
  typeof ArticleTimeStamps
> = () => (
  <ArticleTimeStamps
    createdAt={new Date('2022-05-29T19:28:53.185Z')}
    lastUpdated={new Date('2022-05-30T19:28:53.185Z')}
  />
)
