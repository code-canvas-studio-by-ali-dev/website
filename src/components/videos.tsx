// components/BackgroundVideo.tsx

"use client";

import { useEffect, useState } from "react";

interface BackgroundVideoProps {
  videos: string[]; // Array of video paths (/public/videos/)
  interval?: number; // Switch time in ms (default: 10000)
}

export default function BackgroundVideo({
  videos,
  interval = 10000,
}: BackgroundVideoProps) {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    if (videos.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, interval);
    return () => clearInterval(timer);
  }, [videos, interval]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <video
        key={currentVideo} // re-render when video changes
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
