import React from 'react'
import { Layout } from '../../Layout'
import { SEO } from '../../SEO'
import { Title } from '../../Utilities/Title'
import styles from './Minesweeper.module.css'
import { ArticleTimeStamps } from '../Utilities/ArticleTimeStamps'
import { Paragraph } from '../Utilities/Paragraph'

export const Minesweeper = () => {
  return (
    <Layout>
      <SEO
        title="Solving Minesweeper | John Farrell"
        description="Figuring out minesweeper and visualising the algorithms"
      />
      <section className="blog-page">
        <section className="section">
          <div className="section-center">
            <Title title="Solving Minesweeper" extraStyles={styles.title} />

            <ArticleTimeStamps
              createdAt={new Date('2022-08-01T14:15:28.433Z')}
            />

            <Paragraph>
              Why do this? Uhm not sure, it's sort of interesting.
            </Paragraph>

            <Paragraph>
              The purpose of this accompanying article is to provide further
              context and to allow to test individual features easily.
            </Paragraph>

            <h3>Todo</h3>
            <ul>
              <li>Create default game board</li>
              <li>Implement placing bombs randomly</li>
              <li>Add visualization for placing bombs</li>
              <li>Add click to reveal cell</li>
              <li>Add lose if click on a bomb</li>
              <li>Add win if all cells non bomb cells cleared</li>
              <li>Add testing for calculating cell neighbors</li>
              <li>
                Add testing for calculating number of bombs surrounding a cell
              </li>
              <li>
                Implement borderless board mode, no longer have an edge on
                gameboard, top of board is neighbor to bottom
              </li>
              <li>Implement click to reveal cell game is active</li>
              <li>
                Implement ability to lose if clicking cell that is covering a
                bomb
              </li>
              <li>Implement showing surrounding cells bomb count</li>
              <li>
                Implement ability to win by revealing all cells that do not
                contain a bomb
              </li>
              <li>Implement recursive reveal</li>
            </ul>
          </div>
        </section>
      </section>
    </Layout>
  )
}
