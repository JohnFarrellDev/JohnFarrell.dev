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

            <h3 style={{ marginTop: '30px' }}>Todo</h3>
            <ul className={styles.list}>
              <li>
                Create a customisable game board
                <Game
                  columns={5}
                  rows={5}
                  numberOfBombs={5}
                  hasCustomControls={true}
                  transparentSideView={false}
                  customAnimations={{
                    CalculateNeighbors: false,
                    PlaceBombs: false,
                    RecursiveReveal: false,
                    FlagCell: false,
                  }}
                  allowedOperations={{
                    CalculateNeighbors: false,
                    FlagCell: false,
                    PlaceBombs: false,
                    RevealCell: false,
                    RecursiveReveal: false,
                    AutoFlag: false,
                    BasicAutoClick: false,
                  }}
                  borderlessMode={false}
                />
              </li>

              <li>
                Implement placing bombs randomly (can't be placed on player's
                first clicked cell)
                <Game
                  columns={5}
                  rows={5}
                  numberOfBombs={24}
                  hasCustomControls={false}
                  transparentSideView={true}
                  customAnimations={{
                    CalculateNeighbors: false,
                    PlaceBombs: false,
                    RecursiveReveal: false,
                    FlagCell: false,
                  }}
                  allowedOperations={{
                    CalculateNeighbors: false,
                    FlagCell: false,
                    PlaceBombs: true,
                    RevealCell: false,
                    RecursiveReveal: false,
                    AutoFlag: false,
                    BasicAutoClick: false,
                  }}
                  borderlessMode={false}
                />
              </li>

              <li>
                Add visualization for placing bombs
                <Game
                  columns={5}
                  rows={5}
                  numberOfBombs={5}
                  hasCustomControls={false}
                  transparentSideView={true}
                  customAnimations={{
                    CalculateNeighbors: false,
                    PlaceBombs: true,
                    RecursiveReveal: false,
                    FlagCell: false,
                  }}
                  allowedOperations={{
                    CalculateNeighbors: false,
                    FlagCell: false,
                    PlaceBombs: true,
                    RevealCell: false,
                    RecursiveReveal: false,
                    AutoFlag: false,
                    BasicAutoClick: false,
                  }}
                  borderlessMode={false}
                />
              </li>

              <li>
                Calculate neighbor cell positions and calculate number of bombs
                in neighbor cells
                <Game
                  columns={5}
                  rows={5}
                  numberOfBombs={5}
                  hasCustomControls={false}
                  transparentSideView={true}
                  customAnimations={{
                    CalculateNeighbors: false,
                    PlaceBombs: false,
                    RecursiveReveal: false,
                    FlagCell: false,
                  }}
                  allowedOperations={{
                    CalculateNeighbors: true,
                    FlagCell: false,
                    PlaceBombs: true,
                    RevealCell: false,
                    RecursiveReveal: false,
                    AutoFlag: false,
                    BasicAutoClick: false,
                  }}
                  borderlessMode={false}
                />
              </li>

              <li>
                Add animation for calculating number of bombs in neighboring
                cells
                <Game
                  columns={5}
                  rows={5}
                  numberOfBombs={5}
                  hasCustomControls={false}
                  transparentSideView={true}
                  customAnimations={{
                    CalculateNeighbors: true,
                    PlaceBombs: false,
                    RecursiveReveal: false,
                    FlagCell: false,
                  }}
                  allowedOperations={{
                    CalculateNeighbors: true,
                    FlagCell: false,
                    PlaceBombs: true,
                    RevealCell: false,
                    RecursiveReveal: false,
                    AutoFlag: false,
                    BasicAutoClick: false,
                  }}
                  borderlessMode={false}
                />
              </li>

              <li>
                Implement borderless game mode, no longer have an edge on the
                game board, top of board is neighbor to bottom etc.
                <Game
                  columns={5}
                  rows={5}
                  numberOfBombs={5}
                  hasCustomControls={false}
                  transparentSideView={true}
                  customAnimations={{
                    CalculateNeighbors: false,
                    PlaceBombs: false,
                    RecursiveReveal: false,
                    FlagCell: false,
                  }}
                  allowedOperations={{
                    CalculateNeighbors: true,
                    FlagCell: false,
                    PlaceBombs: true,
                    RevealCell: false,
                    RecursiveReveal: false,
                    AutoFlag: false,
                    BasicAutoClick: false,
                  }}
                  borderlessMode={true}
                />
              </li>

              <li>
                Add animation for calculating number of bombs in neighboring
                cells in the borderless game mode
                <Game
                  columns={5}
                  rows={5}
                  numberOfBombs={5}
                  hasCustomControls={false}
                  transparentSideView={true}
                  customAnimations={{
                    CalculateNeighbors: true,
                    PlaceBombs: false,
                    RecursiveReveal: false,
                    FlagCell: false,
                  }}
                  allowedOperations={{
                    CalculateNeighbors: true,
                    FlagCell: false,
                    PlaceBombs: true,
                    RevealCell: false,
                    RecursiveReveal: false,
                    AutoFlag: false,
                    BasicAutoClick: false,
                  }}
                  borderlessMode={true}
                />
              </li>

              <li>
                Add click to reveal cell - if the cell is not a bomb reveal how
                many neighboring cells are a bomb, if the cell is a bomb you've
                lost, if every non bomb cell has been uncovered you win
                <Game
                  columns={5}
                  rows={5}
                  numberOfBombs={5}
                  hasCustomControls={false}
                  transparentSideView={true}
                  customAnimations={{
                    CalculateNeighbors: false,
                    PlaceBombs: false,
                    RecursiveReveal: false,
                    FlagCell: false,
                  }}
                  allowedOperations={{
                    CalculateNeighbors: true,
                    FlagCell: false,
                    PlaceBombs: true,
                    RevealCell: true,
                    RecursiveReveal: false,
                    AutoFlag: false,
                    BasicAutoClick: false,
                  }}
                  borderlessMode={false}
                />
              </li>

              <li>
                Add allowing user to flag a cell they think is a bomb
                <Game
                  columns={5}
                  rows={5}
                  numberOfBombs={5}
                  hasCustomControls={false}
                  transparentSideView={true}
                  customAnimations={{
                    CalculateNeighbors: false,
                    PlaceBombs: false,
                    RecursiveReveal: false,
                    FlagCell: false,
                  }}
                  allowedOperations={{
                    CalculateNeighbors: true,
                    FlagCell: true,
                    PlaceBombs: true,
                    RevealCell: true,
                    RecursiveReveal: false,
                    AutoFlag: false,
                    BasicAutoClick: false,
                  }}
                  borderlessMode={false}
                />
              </li>

              <li>
                Implement "recursive reveal" - if a cell is clicked that has no
                bombs in it's neighboring cell reveal the surrounding cells, if
                a surrounding cell also does not have any neighbors with bombs
                repeat the process
                <Game
                  columns={5}
                  rows={5}
                  numberOfBombs={5}
                  hasCustomControls={false}
                  transparentSideView={true}
                  customAnimations={{
                    CalculateNeighbors: false,
                    PlaceBombs: false,
                    RecursiveReveal: false,
                    FlagCell: false,
                  }}
                  allowedOperations={{
                    CalculateNeighbors: true,
                    FlagCell: true,
                    PlaceBombs: true,
                    RevealCell: true,
                    RecursiveReveal: true,
                    AutoFlag: false,
                    BasicAutoClick: false,
                  }}
                  borderlessMode={false}
                />
              </li>

              <li>
                Implement animation for recursive reveal
                <Game
                  columns={10}
                  rows={10}
                  numberOfBombs={1}
                  hasCustomControls={false}
                  transparentSideView={false}
                  customAnimations={{
                    CalculateNeighbors: false,
                    PlaceBombs: false,
                    RecursiveReveal: false,
                    FlagCell: false,
                  }}
                  allowedOperations={{
                    CalculateNeighbors: true,
                    FlagCell: true,
                    PlaceBombs: true,
                    RevealCell: true,
                    RecursiveReveal: true,
                    AutoFlag: false,
                    BasicAutoClick: false,
                  }}
                  borderlessMode={true}
                />
              </li>

              <li>
                Implement auto flagging of bombs and basic auto clicking
                <Game
                  columns={10}
                  rows={10}
                  numberOfBombs={15}
                  hasCustomControls={false}
                  transparentSideView={false}
                  customAnimations={{
                    CalculateNeighbors: false,
                    PlaceBombs: false,
                    RecursiveReveal: false,
                    FlagCell: false,
                  }}
                  allowedOperations={{
                    CalculateNeighbors: true,
                    FlagCell: true,
                    PlaceBombs: true,
                    RevealCell: true,
                    RecursiveReveal: true,
                    AutoFlag: true,
                    BasicAutoClick: true,
                  }}
                  borderlessMode={false}
                />
              </li>

              <li>
                Implement animation for auto flagging and basic auto clicking
              </li>

              <li>
                Implement auto revealing of cells that cannot be bombs (with
                visualisation)
              </li>
              <li>
                Implement solving for common patterns (with visualisation)
              </li>
              <li>Implement probabilistic auto solve (with visualisation)</li>
              <li>Implement optional sound effects</li>
              <li>Implement scoreboard</li>
            </ul>
          </div>
        </section>
      </section>
    </Layout>
  )
}
