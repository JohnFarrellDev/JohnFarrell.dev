import { YoutubeLink } from '../YoutubeLink/YoutubeLink'
import styles from './SongTracker.module.css'

interface SongInformation {
  name: string
  composerOrArtist: string
  sheetMusic: { text: string; link?: string }
  progress: string
  performances: { link: string; iconText?: string }[]
  comments: string[]
}

const songs: SongInformation[] = [
  {
    name: 'Fantaisie Impromptu',
    composerOrArtist: '?',
    sheetMusic: {
      text: 'Bastien (Piano For Adults Book 1 Page 52)',
      link: 'https://www.amazon.co.uk/Bastien-Piano-Adults-Book-1/dp/0849773008',
    },
    progress: 'In progress',
    performances: [],
    comments: [],
  },
  {
    name: 'Can Can',
    composerOrArtist: '?',
    sheetMusic: {
      text: 'Bastien (Piano For Adults Book 1 Page 51)',
      link: 'https://www.amazon.co.uk/Bastien-Piano-Adults-Book-1/dp/0849773008',
    },
    progress: 'In progress',
    performances: [],
    comments: [],
  },
  {
    name: 'Persian Market',
    composerOrArtist: '?',
    sheetMusic: {
      text: 'Bastien (Piano For Adults Book 1 Page 45)',
      link: 'https://www.amazon.co.uk/Bastien-Piano-Adults-Book-1/dp/0849773008',
    },
    progress: 'In progress',
    performances: [],
    comments: [
      'First time having to work with the pedal and usage of a black key throughout the whole song.',
    ],
  },
  {
    name: 'When The Saints Go Marching In',
    composerOrArtist: '?',
    sheetMusic: {
      text: 'Bastien (Piano For Adults Book 1 Page 44)',
      link: 'https://www.amazon.co.uk/Bastien-Piano-Adults-Book-1/dp/0849773008',
    },
    progress: 'Finished',
    performances: [],
    comments: [
      'First time managing to play a song that had multiple chord throughout, the movement between the chords are minimal though.',
    ],
  },
  {
    name: 'Morning Mood',
    composerOrArtist: 'Edvard Grieg',
    sheetMusic: {
      text: 'Arranged by James Bastien',
    },
    progress: 'Finished',
    performances: [],
    comments: [
      'Roughly the same difficulty as Ode to Joy. Took me about 45 minutes to learn instead of the 10 hours Ode to Joy took.',
    ],
  },
  {
    name: 'Ode to Joy',
    composerOrArtist: 'Ludwig van Beethoven',
    sheetMusic: {
      text: 'Arranged by James Bastien',
      link: 'https://www.amazon.co.uk/Bastien-Piano-Basics-Level-One/dp/0849752663',
    },
    progress: 'Finished',
    performances: [
      { link: 'https://www.youtube.com/watch?v=N3tW1_CwSyw', iconText: '' },
      { link: 'https://www.youtube.com/watch?v=oEd4o98OCj0', iconText: '' },
    ],
    comments: ['The first song I learnt :)'],
  },
]

export const SongTrackers = () => {
  return (
    <div className={styles.songTracker}>
      <h2>Song Tracker</h2>
      <table className={styles.progressTable}>
        <thead>
          <tr>
            <th>Song Name</th>
            <th>Composer</th>
            <th>Sheet Music</th>
            <th>Progress</th>
            <th>Performances</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => {
            return (
              <tr key={`${song.name}-${song.composerOrArtist}}`}>
                <td>{song.name}</td>
                <td>{song.composerOrArtist}</td>
                <td>
                  {song.sheetMusic.text}
                  {song.sheetMusic.link && (
                    <>
                      {' '}
                      -
                      <a
                        href={song.sheetMusic.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {' '}
                        Sheets
                      </a>
                    </>
                  )}
                </td>
                <td>{song.progress}</td>
                <td>
                  {song.performances.map((performance, index) => {
                    return (
                      <YoutubeLink
                        key={index}
                        link={performance.link}
                        iconText={performance.iconText}
                      />
                    )
                  })}
                </td>
                <td>
                  {song.comments.map((comment) => {
                    return comment
                  })}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
