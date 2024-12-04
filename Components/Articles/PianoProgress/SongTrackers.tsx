import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Music } from 'lucide-react';
import { Youtube } from '@/Components/icons/Youtube';
interface SongInformation {
  name: string;
  composerOrArtist: string;
  sheetMusic: { text: string; link?: string };
  progress: number;
  performances: { link: string; iconText?: string }[];
  comments: string[];
}

const songs: SongInformation[] = [
  {
    name: 'Another Year Older',
    sheetMusic: {
      text: 'Bastien (Piano For Adults Book 1 Page 54)',
      link: 'https://www.amazon.co.uk/Bastien-Piano-Adults-Book-1/dp/0849773008',
    },
    composerOrArtist: 'unknown',
    progress: 100,
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
    progress: 100,
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
    progress: 100,
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
    progress: 100,
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
    progress: 100,
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
    progress: 100,
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
    progress: 100,
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
    progress: 100,
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
];

export function SongTrackers() {
  return (
    <div className="my-6 bg-slate-50 py-6">
      <Table className="container">
        <TableHeader>
          <TableRow>
            <TableHead>Song Name</TableHead>
            <TableHead>Composer</TableHead>
            <TableHead>Sheet Music</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Performance</TableHead>
            <TableHead>Comments</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {songs.map((song, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{song.name}</TableCell>
              <TableCell>{song.composerOrArtist}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" asChild>
                  <a
                    className="no-underline"
                    href={song.sheetMusic.link ?? ''}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Music className="mr-2 h-4 w-4 text-black" />
                    View Sheet
                  </a>
                </Button>
              </TableCell>
              <TableCell>
                <Badge variant={song.progress === 100 ? 'default' : 'secondary'}>{song.progress}%</Badge>
              </TableCell>
              <TableCell>
                {song.performances.length > 0 ? (
                  <div className="flex flex-col gap-2">
                    {song.performances.map((performance, index) => (
                      <Button variant="outline" size="sm" asChild key={index}>
                        <a
                          className="no-underline"
                          href={performance.link ?? ''}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Youtube className="mr-2 h-4 w-4 text-red-600" />
                          Watch
                        </a>
                      </Button>
                    ))}
                  </div>
                ) : (
                  <span className="text-muted-foreground">Not recorded</span>
                )}
              </TableCell>
              <TableCell className="whitespace-pre-wrap">
                {song.comments.map((comment, index) => (
                  <p key={index}>{comment}</p>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
