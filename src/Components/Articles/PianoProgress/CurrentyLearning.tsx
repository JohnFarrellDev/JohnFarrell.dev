import { Music } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/Components/ui/card';

const currentSongs: string[] = [
  'Interstellar Main Theme - Hans Zimmer',
  'Gymnopedie No. 1 - Erik Satie',
  'Una Mattina - Ludovico Einaudi',
];

export function CurrentyLearning() {
  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Currently Learning</CardTitle>
        <Music className="text-muted-foreground h-6 w-6" />
      </CardHeader>
      <CardContent>
        <ul className="list-disc space-y-2 pl-5">
          {currentSongs.map((song, index) => (
            <li key={index} className="text-muted-foreground text-sm">
              {song}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
