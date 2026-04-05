"use client";

import { useEffect, useRef, useState } from "react";

const LINES = [
  "I told her it didn't matter anymore.",
  "That I had made peace with it.",
  "I smiled when I said it.",
  "",
  "I still check her profile every night.",
];

interface ParchmentIntroProps {
  onComplete: () => void; // video ends naturally
  onSkip: () => void;     // user clicks skip
}

export default function ParchmentIntro({ onComplete, onSkip }: ParchmentIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [textOpacity, setTextOpacity] = useState(1);
  const [fading, setFading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);
  const doneFiredRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const onSkipRef = useRef(onSkip);

  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);
  useEffect(() => { onSkipRef.current = onSkip; }, [onSkip]);

  // Autoplay on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  // Fade text as video plays, complete when video ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const duration = video.duration;
      if (!duration) return;
      const progress = video.currentTime / duration;
      const opacity =
        progress < 0.2 ? 1 :
        progress > 0.8 ? 0 :
        1 - (progress - 0.2) / 0.6;
      setTextOpacity(opacity);
    };

    const handleEnded = () => {
      if (doneFiredRef.current) return;
      doneFiredRef.current = true;
      setFading(true);
      setTimeout(() => onCompleteRef.current(), 1200);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const skip = () => {
    if (doneFiredRef.current) return;
    doneFiredRef.current = true;
    setFading(true);
    onSkipRef.current();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
      style={{
        background: "#000000",
        opacity:    fading ? 0 : mounted ? 1 : 0,
        transition: fading ? "opacity 2.5s ease" : "opacity 2s ease",
      }}
      onClick={skip}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <div
          style={{
            position:     "relative",
            width:        "min(90vw, calc(75vh * (896 / 1200)))",
            aspectRatio:  "896 / 1200",
            overflow:     "hidden",
            borderRadius: "16px",
            boxShadow:    "0 16px 64px rgba(0,0,0,0.75), 0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
        {/* Video — cropped up 4% at bottom to hide watermark */}
        <video
          ref={videoRef}
          src="/burn-effect.mp4"
          playsInline
          preload="auto"
          muted
          style={{
            position:   "absolute",
            top:        0,
            left:       0,
            width:      "100%",
            height:     "110%",
            objectFit:  "cover",
            objectPosition: "top",
          }}
        />

        {/* Text overlay — centered in the middle of the video */}
        <div
          style={{
            position:       "absolute",
            inset:          0,
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "center",
            justifyContent: "center",
            padding:        "10%",
            boxSizing:      "border-box",
            opacity:        textOpacity,
            transition:     "opacity 0.15s linear",
            pointerEvents:  "none",
          }}
        >
          {LINES.map((line, i) => (
            <div
              key={i}
              style={{
                minHeight:  line === "" ? "14px" : undefined,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize:   "17px",
                fontWeight: 300,
                fontStyle:  "normal",
                lineHeight: "2",
                color:      "#1a0e04",
                textAlign:  "center",
              }}
            >
              {line || "\u00A0"}
            </div>
          ))}
        </div>

        </div>
        {/* tap to skip — outside the container */}
        <p
          style={{
            textAlign:  "center",
            marginTop:  "12px",
            fontSize:   "18px",
            color:      "#9a7840",
            fontFamily: "Georgia, serif",
            fontStyle:  "italic",
            opacity:    0.5,
          }}
        >
          Skip
        </p>
      </div>
    </div>
  );
}
