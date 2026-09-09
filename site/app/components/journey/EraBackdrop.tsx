"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  base: string; // e.g. "/journey/era-1" → era-1.webm / era-1.mp4 / era-1-poster.jpg
  active: boolean;
  label: string;
};

/**
 * Layered era backdrop with graceful degradation:
 * - gradient base always renders (page ships before any media exists)
 * - <video> lazily mounts on first activation, fades in when playable,
 *   pauses off-screen, unmounts permanently if both sources 404
 * - never mounts under prefers-reduced-motion
 */
export function EraBackdrop({ base, active, label }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [wantsVideo, setWantsVideo] = useState(false);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!active || wantsVideo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setWantsVideo(true);
  }, [active, wantsVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || failed) return;
    if (active) {
      video.play().catch(() => {
        /* autoplay rejection or missing media — gradient stays */
      });
    } else {
      video.pause();
    }
  }, [active, failed, wantsVideo]);

  const handleError = () => {
    if (videoRef.current?.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
      setFailed(true);
      setPlaying(false);
    }
  };

  return (
    <div className="mj-era__backdrop" aria-hidden="true">
      <div className="mj-era__gradient" />
      {!failed && wantsVideo && (
        <video
          ref={videoRef}
          className={`mj-era__video${playing ? " is-playing" : ""}`}
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${base}-poster.jpg`}
          onCanPlay={() => setPlaying(true)}
          onError={handleError}
        >
          <source src={`${base}.webm`} type="video/webm" />
          <source src={`${base}.mp4`} type="video/mp4" />
        </video>
      )}
      <div className="mj-era__scrim" />
    </div>
  );
}

