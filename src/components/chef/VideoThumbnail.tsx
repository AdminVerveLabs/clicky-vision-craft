import { useState } from "react";

const VideoThumbnail = ({ title, videoId }: { title: string; videoId: string }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div
        className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group aspect-video bg-dark"
        onClick={() => setPlaying(true)}
      >
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <div
                  className="w-0 h-0 ml-1"
                  style={{
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: "14px solid hsl(var(--purple))",
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <p className="font-sans text-[13px] font-semibold text-dark text-center">{title}</p>
    </div>
  );
};

export const VIDEO_HIGHLIGHTS = [
  { title: "Louie's Birthday", id: "ASLBrgGHWA0" },
  { title: "Birthday Extravaganza", id: "YLEKjH1Ee50" },
  { title: "Mackenzie's Party", id: "2tpxTX9SMdM" },
  { title: "Jessica's Party", id: "awNOc_qgScM" },
];

export default VideoThumbnail;
