import React from 'react'
import { Layout } from '../../Layout'
import { SEO } from '../../SEO'
import { Title } from '../../Utilities/Title'
import styles from './Minesweeper.module.css'
import { ArticleTimeStamps } from '../Utilities/ArticleTimeStamps'
import { Paragraph } from '../Utilities/Paragraph'
import { Game } from '../../Projects/Minesweeper/Components/Game'

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
              context and to allow to showcase individual features easily.
            </Paragraph>

            <h3>Todo</h3>
            <ul>
              <li>Create customisable game board</li>

              <Game
                columns={5}
                rows={5}
                numberOfBombs={5}
                hasCustomControls={true}
                transparentSideView={false}
                customAnimations={new Map()}
              />

              <li>
                Implement placing bombs randomly (can't be placed on player's
                first clicked cell)
              </li>

              <Game
                columns={5}
                rows={5}
                numberOfBombs={5}
                hasCustomControls={true}
                transparentSideView={true}
                customAnimations={new Map()}
              />

              <li>Add visualization for placing bombs</li>

              <Game
                columns={5}
                rows={5}
                numberOfBombs={5}
                hasCustomControls={true}
                transparentSideView={true}
                customAnimations={new Map([["PlaceBombs", true]])}
              />

              <li>Add concept of game state, isAlive, isDead, isPlaying</li>
              <li>
                Add click to reveal cell - if not a bomb reveal how many
                neighbouring cells are a bomb
              </li>
              <li>
                Add lose if click on a bomb, set gameState to isDead, clicking
                again resets the game
              </li>
              <li>Add win if all cells non bomb cells cleared</li>
              <li>
                Implement borderless game mode, no longer have an edge on
                gameboard, top of board is neighbor to bottom
              </li>
              <li>Implement click to reveal cell game is active</li>
              <li>Implement showing surrounding cells bomb count</li>
              <li>
                Implement ability to win by revealing all cells that do not
                contain a bomb
              </li>
              <li>Implement recursive reveal (with visualisation)</li>
              <li>Implement auto flagging of bombs (with visualisation)</li>
              <li>
                Implement auto revealing of cells that cannot be bombs (with
                visualisation)
              </li>
              <li>
                Implement solving for common patterns (with visualisation)
              </li>
              <li>Implement probabilistic auto solve (with visualisation)</li>
              <li>Implement scoreboard</li>
            </ul>
          </div>
        </section>
      </section>
    </Layout>
  )
}
