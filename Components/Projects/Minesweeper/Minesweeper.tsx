import React, { useMemo } from 'react'
import { ArticleTimeStamps, Paragraph } from '../../Articles/Utilities'
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
        image="https://i.imgur.com/NznpTNf.png"
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
        <ArticleTimeStamps
          createdAt={new Date('2022-10-09T22:19:37.934Z')}
          style={{ marginRight: '20px' }}
        />
        <Paragraph
          style={{
            textAlign: 'center',
            textDecoration: 'underline',
            color: 'red',
          }}
        >
          This is a work in progress! (highly recommend for now using a PC and
          not mobile to view)
        </Paragraph>
        <div className={styles.gameContainer}>
          <Game
            columns={20}
            rows={20}
            numberOfBombs={10}
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
              PlaceBombs: true,
              CalculateNeighbors: true,
              FlagCell: true,
              RevealCell: true,
              RecursiveReveal: true,
              AutoFlag: false,
              BasicAutoClick: false,
            }}
            borderlessMode={false}
          />
        </div>
      </main>
    </Layout>
  )
}

export default Minesweeper
