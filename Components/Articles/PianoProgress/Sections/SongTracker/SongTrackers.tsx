import styles from './SongTracker.module.css'
import { ShowMoreText } from '../ShowMoreText/ShowMoreText'
import { YoutubeLink } from '../YoutubeLink/YoutubeLink'

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
    name: 'Another Year Older',
    sheetMusic: {
      text: 'Bastien (Piano For Adults Book 1 Page 54)',
      link: 'https://www.amazon.co.uk/Bastien-Piano-Adults-Book-1/dp/0849773008',
    },
    composerOrArtist: 'unknown',
    progress: 'In progress',
    performances: [],
    comments: [],
  },
  {
    name: 'Minuet In G',
    composerOrArtist: 'Johann Sebastian Bach',
    sheetMusic: {
      text: 'Bastien (Piano For Adults Book 1 Page 55)',
      link: 'https://www.amazon.co.uk/Bastien-Piano-Adults-Book-1/dp/0849773008',
    },
    progress: 'In progress',
    performances: [],
    comments: [],
  },
  {
    name: 'Fantaisie Impromptu',
    composerOrArtist: 'Frédéric Chopin',
    sheetMusic: {
      text: 'Bastien (Piano For Adults Book 1 Page 52)',
      link: 'https://www.amazon.co.uk/Bastien-Piano-Adults-Book-1/dp/0849773008',
    },
    progress: 'In progress',
    performances: [],
    comments: ["Doesn't seem particularly difficult, I just need to practice it a bit."],
  },
  {
    name: 'Can Can',
    composerOrArtist: 'Jacques Offenbach',
    sheetMusic: {
      text: 'Bastien (Piano For Adults Book 1 Page 51)',
      link: 'https://www.amazon.co.uk/Bastien-Piano-Adults-Book-1/dp/0849773008',
    },
    progress: 'In progress',
    performances: [
      {
        link: 'https://www.youtube.com/watch?v=DYSCU0q15EE',
        iconText:
          'This was before working with a metronome, all the notes played are correct but the timing is quite poor.',
      },
    ],
    comments: ['Keep the timing and playing smooth at the high tempo is a challenge.'],
  },
  {
    name: 'Persian Market',
    composerOrArtist: '?',
    sheetMusic: {
      text: 'Bastien (Piano For Adults Book 1 Page 45)',
      link: 'https://www.amazon.co.uk/Bastien-Piano-Adults-Book-1/dp/0849773008',
    },
    progress: 'Finished',
    performances: [
      {
        link: 'https://www.youtube.com/watch?v=8Yu09SsAxyw',
      },
    ],
    comments: [
      'First time having to work with the pedal and usage of a black key throughout the whole song.',
      'Also having to do a diminuendo at the end of the song which is a new dynamic.',
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
    performances: [
      {
        link: 'https://www.youtube.com/watch?v=XP_-eHI5wqY',
        iconText:
          'Need more control over the left hand so I can continuously (not just the chords) play it quieter while keeping the same tempo. ',
      },
    ],
    comments: [
      'First time managing to play a song that had multiple chord throughout, the movement between the chords are minimal though.',
      'First time working with dynamics, right hand is played mezzo forte (medium loud) and left hand is played mezzo piano (medium soft).',
    ],
  },
  {
    name: 'Morning Mood',
    composerOrArtist: 'Edvard Grieg',
    sheetMusic: {
      text: 'Arranged by James Bastien',
    },
    progress: 'Finished',
    performances: [{ link: 'https://www.youtube.com/watch?v=I38n6SseTLQ' }],
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
      {
        link: 'https://www.youtube.com/watch?v=AidYvRgYTdU',
        iconText:
          'By the time I played this I had finished the song for a while but just wanted a recording. Took about an hour to have the song at a decent level again. Happy with the smooth transition from line 2 to 3 and the smoothness of the whole piece.',
      },
      {
        link: 'https://www.youtube.com/watch?v=N3tW1_CwSyw',
        iconText:
          'Disjointed (too long a break) sound when I move from the second line to the third line as I have to move my left hand with the 5th finger at C3 up to the 3rd finger being at G3.',
      },
      { link: 'https://www.youtube.com/watch?v=oEd4o98OCj0', iconText: '' },
    ],
    comments: ['The first song I learnt :D'],
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
                      <a href={song.sheetMusic.link} target="_blank" rel="noopener noreferrer">
                        {' '}
                        Sheets
                      </a>
                    </>
                  )}
                </td>
                <td>{song.progress}</td>
                <td>
                  {song.performances.map((performance, index) => {
                    return <YoutubeLink key={index} link={performance.link} iconText={performance.iconText} />
                  })}
                </td>
                <td>
                  {song.comments.map((comment) => {
                    return <ShowMoreText key={comment} text={comment} length={100} />
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
