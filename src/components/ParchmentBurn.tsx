"use client";

import { useEffect, useRef, useState } from "react";

interface ParchmentBurnProps {
  text: string;
  burning: boolean;
  onComplete: () => void;
  volume?: number;
}

export default function ParchmentBurn({
  text, burning, onComplete, volume = 0.85,
}: ParchmentBurnProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [textOpacity, setTextOpacity] = useState(1);
  const onCompleteRef = useRef(onComplete);
  const doneFiredRef = useRef(false);

  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  // Start video when burn begins
  useEffect(() => {
    if (!burning) return;
    const video = videoRef.current;
    if (!video) return;
    doneFiredRef.current = false;
    setTextOpacity(1);
    video.currentTime = 0;
    video.volume = Math.max(0, Math.min(1, volume));
    video.play().catch(() => {});
  }, [burning, volume]);

  // Track video progress to fade text
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const duration = video.duration;
      if (!duration) return;
      const progress = video.currentTime / duration;
      // Stay visible for first 20%, fade out by 80%
      const opacity =
        progress < 0.2 ? 1 :
        progress > 0.8 ? 0 :
        1 - (progress - 0.2) / 0.6;
      setTextOpacity(opacity);
    };

    const handleEnded = () => {
      if (doneFiredRef.current) return;
      doneFiredRef.current = true;
      setTimeout(() => onCompleteRef.current(), 500);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Text wrapping
  const words = text.split(" ");
  const approxCharsPerLine = 32;
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    if ((line + " " + word).trim().length > approxCharsPerLine && line) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);

  const fontSize = 18;
  const lineHeight = fontSize * 1.85;
  const totalTextH = lines.length * lineHeight;

  return (
    <div
      style={{
        position:    "relative",
        width:       "min(460px, 85vw)",
        aspectRatio: "3 / 4",
        margin:      "0 auto",
        overflow:    "hidden",
        borderRadius: "2px",
      }}
    >
      {/* Video — the burning paper */}
      <video
        ref={videoRef}
        src="/burn-effect.mp4"
        playsInline
        preload="auto"
        muted
        style={{
          position:   "absolute",
          inset:      0,
          width:      "100%",
          height:     "100%",
          objectFit:  "cover",
        }}
      />

      {/* Text overlay — fades out as the paper burns */}
      <div
        style={{
          position:       "absolute",
          inset:          0,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          padding:        "15%",
          pointerEvents:  "none",
          opacity:        textOpacity,
          transition:     "opacity 0.15s linear",
        }}
      >
        <div
          style={{
            fontFamily:     "'Cormorant Garamond', Georgia, serif",
            fontWeight:     300,
            fontStyle:      "italic",
            color:          "#2a1f14",
            fontSize:       "clamp(14px, 3.8vw, 18px)",
            lineHeight:     1.85,
            textAlign:      "center",
            height:         totalTextH,
            display:        "flex",
            flexDirection:  "column",
            justifyContent: "center",
            gap:            0,
          }}
        >
          {lines.map((l, i) => (
            <span key={i} style={{ display: "block" }}>{l}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
