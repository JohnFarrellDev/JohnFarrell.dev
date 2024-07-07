interface YouTubeVideoProps {
  src: string
  title: string
}

export function YoutubeVideo({ src, title }: YouTubeVideoProps) {
  return <iframe src={src} title={title} allowFullScreen className="aspect-video h-auto w-full" />
}
