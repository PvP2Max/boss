"use client";

import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const [phase, setPhase] = useState<"static" | "transitioning" | "video">(
    "static"
  );
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    // After 5 seconds on the static hero, transition to video if loaded
    timerRef.current = setTimeout(() => {
      if (videoLoaded) {
        setPhase("transitioning");
        setTimeout(() => {
          setPhase("video");
          videoRef.current?.play();
        }, 800);
      }
    }, 5000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [videoLoaded]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background gradient always present */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-gold-500/[0.03] blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-gold-500/[0.05] blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gold-500/[0.02] blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Video (preloading in background) */}
      <video
        ref={videoRef}
        onCanPlayThrough={handleVideoLoaded}
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          phase === "video" ? "opacity-40" : "opacity-0"
        }`}
      >
        {/* Placeholder: user will add their video source */}
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for video */}
      {phase === "video" && (
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-dark-950/80" />
      )}

      {/* Static Hero Content */}
      <div
        className={`relative z-10 mx-auto max-w-5xl px-6 text-center transition-all duration-1000 ${
          phase === "transitioning" || phase === "video"
            ? "pointer-events-none translate-y-4 opacity-0"
            : "opacity-100"
        }`}
      >
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-1.5"
          style={{ animation: "fade-in 0.8s ease-out 0.2s both" }}
        >
          <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-sm font-medium text-gold-400">
            Army&apos;s Best BOSS Program 2025
          </span>
        </div>

        <h1
          className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          style={{ animation: "fade-in-up 0.8s ease-out 0.4s both" }}
        >
          <span className="text-dark-100">The Voice of the</span>
          <br />
          <span className="text-gradient">Single Soldier</span>
        </h1>

        <p
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-dark-300 sm:text-xl"
          style={{ animation: "fade-in-up 0.8s ease-out 0.6s both" }}
        >
          Better Opportunities for Single Soldiers. Building community,
          creating memories, and advocating for Soldiers at Fort Wainwright,
          Alaska.
        </p>

        <div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animation: "fade-in-up 0.8s ease-out 0.8s both" }}
        >
          <a
            href="#why-join"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-gold-500 px-8 py-3.5 text-lg font-semibold text-dark-900 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
          >
            Why Join BOSS
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#events"
            className="inline-flex items-center gap-2 rounded-lg border border-gold-500/30 px-8 py-3.5 text-lg font-medium text-gold-400 transition-all hover:border-gold-500/60 hover:bg-gold-500/10"
          >
            See Our Events
          </a>
        </div>
      </div>

      {/* Minimal video-phase overlay text */}
      {phase === "video" && (
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-24">
          <div
            className="text-center"
            style={{ animation: "fade-in-up 0.8s ease-out both" }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold-400/70">
              Fort Wainwright BOSS
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              The Voice of the Single Soldier
            </h2>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#events"
          className="flex flex-col items-center gap-2 text-dark-500 transition-colors hover:text-gold-400"
          aria-label="Scroll to events"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-dark-600 p-1">
            <div className="h-1.5 w-1 animate-bounce rounded-full bg-gold-400" />
          </div>
        </a>
      </div>
    </section>
  );
}
