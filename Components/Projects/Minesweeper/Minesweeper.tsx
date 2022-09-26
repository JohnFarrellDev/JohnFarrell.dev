import React, { useMemo } from 'react'
import { Layout } from '../../Layout'
import { SEO } from '../../SEO'
import { Title } from '../../Utilities/Title'
import { Game } from './Components/Game/Game'
import styles from './Minesweeper.module.css'

export const Minesweeper = () => {
  const seo = useMemo(
    () => (
      <SEO
        title="Minesweeper"
        description="Implementing minesweeper and it's automated solving algorithms visualised."
      />
    ),
    []
  )

  const title = useMemo(() => <Title title="Minesweeper" />, [])

  return (
    <Layout>
      {seo}
      {title}
      <main>
        <div className={styles.gameContainer}>
          <Game
            columns={20}
            rows={20}
            numberOfBombs={10}
            hasCustomControls={true}
            transparentSideView={false}
            customAnimations={{
              CalculateNeighbors: false,
              PlaceBombs: false
            }}
            allowedOperations={{
              PlaceBombs: true,
              CalculateNeighbors: true,
              FlagCell: true,
              RevealCell: true,
              RecursiveReveal: true
            }}
            borderlessMode={false}
          />
        </div>
      </main>
    </Layout>
  )
}

export default Minesweeper
