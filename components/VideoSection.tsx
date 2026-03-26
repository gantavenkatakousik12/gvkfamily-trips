"use client";
import { useState } from "react";
import { youtubeVideos } from "@/data/trip-data";

const categories = [...new Set(youtubeVideos.map((v) => v.category))];

const categoryColors: Record<string, string> = {
  "Full Trip Overview": "#111111",
  Varanasi: "#E8973A",
  "Ganga Aarti": "#D4563A",
  Ayodhya: "#D4563A",
  Transport: "#3A7BD5",
};

const languageBadge: Record<string, { bg: string; text: string }> = {
  Telugu: { bg: "#FFF0E0", text: "#C97D28" },
  English: { bg: "#E8F8EE", text: "#27AE60" },
  "Hindi/English": { bg: "#EBF2FF", text: "#3A7BD5" },
  Hindi: { bg: "#FBE8E8", text: "#D4563A" },
};

function getYoutubeThumbnail(url: string): string {
  const match = url.match(/[?&]v=([^&]+)/);
  const videoId = match ? match[1] : "";
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

function getYoutubeEmbedUrl(url: string): string {
  const match = url.match(/[?&]v=([^&]+)/);
  const videoId = match ? match[1] : "";
  return `https://www.youtube.com/embed/${videoId}`;
}

export default function VideoSection() {
  const [activeCategory, setActiveCategory] = useState("Full Trip Overview");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filtered = youtubeVideos.filter((v) => v.category === activeCategory);

  return (
    <section id="videos" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#E8973A]" />
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#888]">
              Video Guides
            </span>
            <span className="w-5 h-[1px] bg-[#E8973A]" />
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Watch Before <span className="text-[#E8973A]">You Go</span>
          </h2>
          <p className="text-sm md:text-base text-[#555] mt-3 max-w-xl mx-auto">
            Telugu & English video guides for every destination. Watch them before your visit for the best experience.
          </p>
        </div>

        {/* Category Tabs - Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 mb-8 md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setPlayingVideo(null);
              }}
              className={`whitespace-nowrap flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all shrink-0 ${
                activeCategory === cat
                  ? "text-white shadow-md"
                  : "bg-[#F7F5F2] text-[#555] hover:bg-[#EBE8E4]"
              }`}
              style={
                activeCategory === cat
                  ? { background: categoryColors[cat] || "#111" }
                  : undefined
              }
            >
              {cat === "Full Trip Overview" && "🗺️"}
              {cat === "Varanasi" && "🛕"}
              {cat === "Ganga Aarti" && "🪔"}
              {cat === "Ayodhya" && "🏛️"}
              {cat === "Transport" && "🚆"}
              <span className="ml-1">{cat}</span>
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 animate-fade-in">
          {filtered.map((video) => {
            const isPlaying = playingVideo === video.youtube_url;
            const lang = languageBadge[video.language] || { bg: "#F7F5F2", text: "#555" };

            return (
              <div
                key={video.youtube_url}
                className="bg-white rounded-xl border border-[#E8E4DF] overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {/* Video Thumbnail / Embed */}
                <div className="relative aspect-video bg-black">
                  {isPlaying ? (
                    <iframe
                      src={`${getYoutubeEmbedUrl(video.youtube_url)}?autoplay=1`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                  ) : (
                    <>
                      <img
                        src={getYoutubeThumbnail(video.youtube_url)}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <button
                          onClick={() => setPlayingVideo(video.youtube_url)}
                          className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                        >
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="#E8973A">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                      {/* Language Badge */}
                      <span
                        className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: lang.bg, color: lang.text }}
                      >
                        {video.language}
                      </span>
                    </>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-[#111] mb-1 leading-snug">{video.title}</h4>
                  <p className="text-xs text-[#888] mb-3">{video.purpose}</p>
                  <div className="flex items-center justify-between">
                    <a
                      href={video.youtube_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D4563A] hover:underline"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                      </svg>
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
