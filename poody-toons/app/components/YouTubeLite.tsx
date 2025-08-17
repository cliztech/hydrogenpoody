import {useState} from 'react';

interface Props {
  videoId: string;
  title: string;
}

export function YouTubeLite({videoId, title}: Props) {
  const [play, setPlay] = useState(false);
  return (
    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
      {play ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        <button
          aria-label={`Play ${title}`}
          onClick={() => setPlay(true)}
          className="w-full h-full grid place-items-center bg-black/5"
        >
          <img
            alt="Thumbnail"
            loading="lazy"
            className="w-full h-full object-cover"
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          />
        </button>
      )}
    </div>
  );
}
