import LiteYouTubeEmbed from 'react-lite-youtube-embed';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
}

export function YoutubeVideo({ videoId, title }: YouTubeVideoProps) {
  return <LiteYouTubeEmbed id={videoId} title={title} />;
}
