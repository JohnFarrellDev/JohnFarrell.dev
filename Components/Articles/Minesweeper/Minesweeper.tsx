import styles from './Minesweeper.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Layout } from '../../Layout/Layout'
import { SEO } from '../../SEO/SEO'
import { Title } from '../../Utilities/Title/Title'
import { ArticleTimeStamps } from '../Utilities/ArticleTimeStamps/ArticleTimeStamps'
import { Paragraph } from '../Utilities/Paragraph/Paragraph'
import { Game } from '../../Projects/Minesweeper/Components/Game/Game'

export const Minesweeper = () => {
  return (
    <Layout>
      <SEO
        title="Solving Minesweeper | John Farrell"
        description="Algorithmically solving minesweeper and visualising the algorithms"
        image="https://i.imgur.com/NznpTNf.png"
      />
      <section className="blog-page">
        <section className="section">
          <div className="section-center">
            <Title title="Solving Minesweeper" extraStyles={styles.title} />

            <ArticleTimeStamps createdAt={new Date('2022-10-09T22:19:37.934Z')} />

            <Paragraph
              style={{
                textAlign: 'center',
                textDecoration: 'underline',
                color: 'red',
              }}
            >
              This is a work in progress! (highly recommend for now using a PC and not mobile to view)
            </Paragraph>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="https://i.imgur.com/cVwtZnc.png"
                alt="Image showing vs code search not very effectively finding the right file from component name"
                width={512}
                height={512}
              />
            </div>

            <Paragraph>Why do this? Uhm not sure, it's sort of interesting.</Paragraph>

            <Paragraph>
              The purpose of this accompanying article is to provide further context and to allow to showcase individual
              features easily.
            </Paragraph>

            <Paragraph>
              Any visual examples with side-by-side game grids, the grid on the right is simply an uncovered version of
              the left hand side grid.
            </Paragraph>

            <h3 style={{ marginTop: '30px' }}>Implement the Game</h3>

            <Paragraph style={{ textDecoration: 'underline' }}>Generate the Grid</Paragraph>

            <Paragraph>
              Generating the grid for the game is done by creating a simple 2d array where each inner array represents a
              row. Each element within the inner array represents the state of a particular cell in the grid.
            </Paragraph>

            <ul className={styles.list}>
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
                  BasicAutoClick: false,
                }}
                allowedOperations={{
                  CalculateNeighbors: false,
                  FlagCell: true,
                  PlaceBombs: false,
                  RevealCell: true,
                  RecursiveReveal: false,
                  AutoFlag: false,
                  BasicAutoClick: false,
                }}
                borderlessMode={false}
              />

              <Paragraph style={{ textDecoration: 'underline' }}>Place the Bombs</Paragraph>

              <Paragraph>
                The second step is to ensure that N cells contain a bomb where N is the number of bombs for that
                specific game. An additional rule is that the first cell clicked by a player on starting the game should
                never contain a bomb. Because of the additional rule bomb placement can only be done directly after the
                first player click. Simply every cells position is added to an array except the position of the cell the
                user clicked. That array is simply shuffled using the{' '}
                <Link href={'https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle'} passHref={true}>
                  Fisher-Yates Shuffler
                </Link>
                . The last N cells in the shuffled array then have their cell state update to true for isBomb.
              </Paragraph>

              <Game
                columns={5}
                rows={5}
                numberOfBombs={20}
                hasCustomControls={false}
                transparentSideView={true}
                customAnimations={{
                  CalculateNeighbors: false,
                  PlaceBombs: false,
                  RecursiveReveal: false,
                  FlagCell: false,
                  BasicAutoClick: false,
                }}
                allowedOperations={{
                  CalculateNeighbors: false,
                  FlagCell: false,
                  PlaceBombs: true,
                  RevealCell: true,
                  RecursiveReveal: false,
                  AutoFlag: false,
                  BasicAutoClick: false,
                }}
                borderlessMode={false}
              />

              <Paragraph>
                Technically this visualisation is a bit of a lie. It does not include every shuffle done by the
                Fisher-Yates shuffling algorithm but simply shows the starting bomb positions and end bomb position (but
                here you go with my lies anyway)
              </Paragraph>

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
                  BasicAutoClick: false,
                }}
                allowedOperations={{
                  CalculateNeighbors: false,
                  FlagCell: false,
                  PlaceBombs: true,
                  RevealCell: true,
                  RecursiveReveal: false,
                  AutoFlag: false,
                  BasicAutoClick: false,
                }}
                borderlessMode={false}
              />

              <Paragraph style={{ textDecoration: 'underline' }}>
                Calculate neighbor cells and number of neighbor bombs.
              </Paragraph>

              <Paragraph>
                To play Minesweeper every cell must know how many bombs are in its adjacent cells. This can only be
                calculated after the bombs have been placed obviously which occurs on the player's first click. Simply
                loop through every cell, calculate the position of its adjacent cells and also the total number of
                adjacent bombs. (for a twist I also added a borderless mode which has made the code significantly more
                disgusting to read)
              </Paragraph>

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
                  BasicAutoClick: false,
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

              <Paragraph>
                Animation showing how the grid is looped through and every neighbor's position is calculated.
              </Paragraph>

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
                  BasicAutoClick: false,
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

              <Paragraph>
                Borderless mode implementation, a cell on the left can have a bomb for a neighbor on the right, same for
                top-bottom and for all corners too.
              </Paragraph>

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
                  BasicAutoClick: false,
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

              <Paragraph>
                Animation showing how the grid is looped through and every neighbor's position is calculated but for
                borderless.
              </Paragraph>

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
                  BasicAutoClick: false,
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

              <Paragraph style={{ textDecoration: 'underline' }}>Make the Game Playable</Paragraph>

              <Paragraph>
                Finally to be able to play the game you must be able to reveal cells by left clicking, additionally
                right clicking a cell should allow a user to place a flag indicating they think the cell has a bomb. If
                the user is able to uncover all non-bomb cells they win, if the user uncovers a cell that has a bomb
                however they lose.
              </Paragraph>

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
                  BasicAutoClick: false,
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

              <Paragraph style={{ textDecoration: 'underline' }}>
                Automatically Reveal Neighbor Cells when 0 Neighbor Bombs
              </Paragraph>

              <Paragraph>
                And finally, a functionality that is normally implemented in Minesweeper is the "recursive reveal". If a
                player clicks a cell that contains no neighboring bombs all adjacent cells should be automatically
                uncovered. If any of the adjacent cells also have no neighboring bombs then it's neighbors can be
                uncovered and so on...
              </Paragraph>

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
                  BasicAutoClick: false,
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

              <Paragraph>For visualisation purposes you can see how the recursive reveal is implemented.</Paragraph>

              <Game
                columns={10}
                rows={10}
                numberOfBombs={5}
                hasCustomControls={false}
                transparentSideView={false}
                customAnimations={{
                  CalculateNeighbors: false,
                  PlaceBombs: false,
                  RecursiveReveal: true,
                  FlagCell: false,
                  BasicAutoClick: false,
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

              <h3 style={{ marginTop: '30px' }}>Constraint Propagation Auto Solver</h3>

              <Paragraph>
                Most of the time when a player is able to with certainty uncover a cell knowing it is not a bomb or
                place a flag on a cell as they know it is a bomb they are utilising{' '}
                <Link href={'https://en.wikipedia.org/wiki/Local_consistency'} passHref={true}>
                  constraint propagation
                </Link>
                .
              </Paragraph>

              <Paragraph>
                If a cell indicates it only has 2 bombs adjacent to it and there are only 2 uncovered cells then we can
                with certainty flag those cells as having bombs.
              </Paragraph>

              <Paragraph>
                Alternatively if a cell only has 2 bombs and 2 of it's adjacent cells are already flagged then we can
                with certainty uncover the remaining cells.
              </Paragraph>

              <Paragraph>
                By applying these 2 constraints we able to uncovered more of the grid, each time we uncover more of the
                grid we can apply the constraints again (hench the propagation)
              </Paragraph>

              <Paragraph>
                For someone who is very adept at Minesweeper it could be good practice to play with the constrain
                propagation turned on. This only leaves the more challenging problems to solve and anything that would
                be trivial is already computed away.
              </Paragraph>

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
                  BasicAutoClick: false,
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

              <Paragraph>
                If my explanation didn't make any sense the animation should make it clearer (I hope)
              </Paragraph>

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
                  FlagCell: true,
                  BasicAutoClick: true,
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

              <h3 style={{ marginTop: '30px' }}>To Dos...</h3>

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
