import { AspectRatio } from "@radix-ui/react-aspect-ratio";

interface YouTubeEmbedProps {
  id: string;
}

export function YouTubeEmbed({ id }: YouTubeEmbedProps) {
  return (
    <div className="my-8">
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full rounded-lg"
        />
      </AspectRatio>
    </div>
  );
}
