"use client";
import { useState } from "react";
import { itinerary, type ItineraryDay } from "@/data/trip-data";

const modeIcons: Record<string, React.ReactNode> = {
  train: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M4 15.5V5a3 3 0 013-3h10a3 3 0 013 3v10.5" />
      <path d="M8 21l-2 3M16 21l2 3" />
      <circle cx="8.5" cy="14" r="1" /><circle cx="15.5" cy="14" r="1" />
    </svg>
  ),
  flight: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M17.8 19.2L16 11l3.5-3.5C20.3 6.7 21 5.5 21 4.5S20.3 3 19.5 3s-2.2.7-3 1.5L13 8l-8.2-1.8" />
    </svg>
  ),
  road: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9" />
      <circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />
    </svg>
  ),
  rest: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.4-.7l-.7.7" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
};

function DayCard({ day, isOpen, onToggle }: { day: ItineraryDay; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "bg-white border-[#E8E4DF] shadow-lg"
          : "bg-white border-[#E8E4DF]/60 shadow-sm hover:shadow-md"
      }`}
    >
      {/* Collapsed Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 md:gap-4 p-4 md:p-5 text-left"
      >
        {/* Day number badge */}
        <div
          className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex flex-col items-center justify-center text-white font-bold"
          style={{ background: day.color }}
        >
          <span className="text-[10px] uppercase tracking-wider opacity-80 leading-none">Day</span>
          <span className="text-lg md:text-xl leading-none mt-0.5">{day.day}</span>
        </div>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="text-sm md:text-base font-bold text-[#111] truncate">{day.title}</h3>
            {day.travelMode && (
              <span
                className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: day.color + "20", color: day.color }}
              >
                {modeIcons[day.travelMode]}
              </span>
            )}
          </div>
          <p className="text-xs text-[#888] truncate">{day.subtitle}</p>
        </div>

        {/* Location + Toggle */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-xs font-medium text-[#555] bg-[#F7F5F2] px-2.5 py-1 rounded-full">
            📍 {day.location}
          </span>
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="#888"
            strokeWidth="2"
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      {/* Expanded Content */}
      {isOpen && (
        <div className="px-4 md:px-5 pb-5 animate-fade-in">
          {/* Activities Timeline */}
          <div className="relative ml-6 md:ml-7 border-l-2 border-[#E8E4DF] pl-5 md:pl-6 space-y-4">
            {day.activities.map((act, i) => (
              <div key={i} className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[27px] md:-left-[31px] w-3 h-3 rounded-full border-2 ${
                    act.highlight
                      ? "border-[#E8973A] bg-[#E8973A]"
                      : "border-[#ccc] bg-white"
                  }`}
                />
                <div
                  className={`rounded-lg p-3 ${
                    act.highlight
                      ? "bg-[#E8973A]/5 border border-[#E8973A]/20"
                      : "bg-[#F7F5F2]/80"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {act.icon && <span className="text-base shrink-0 mt-0.5">{act.icon}</span>}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-semibold text-[#888] shrink-0">{act.time}</span>
                        <span className="text-xs md:text-sm font-semibold text-[#111]">{act.title}</span>
                      </div>
                      {act.description && (
                        <p className="text-xs text-[#555] mt-1 leading-relaxed">{act.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          {day.tips && day.tips.length > 0 && (
            <div className="mt-4 bg-[#FFFBF0] border border-[#F5C033]/30 rounded-lg p-3 md:p-4">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-sm">💡</span>
                <span className="text-xs font-semibold text-[#111]">Tips</span>
              </div>
              <ul className="space-y-1">
                {day.tips.map((tip, i) => (
                  <li key={i} className="text-xs text-[#555] flex items-start gap-2">
                    <span className="text-[#F5C033] mt-0.5">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Itinerary() {
  const [openDay, setOpenDay] = useState<number | null>(4); // Day 4 open by default

  return (
    <section id="itinerary" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#E8973A]" />
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#888]">
              Day-by-Day Plan
            </span>
            <span className="w-5 h-[1px] bg-[#E8973A]" />
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            7-Day <span className="text-[#E8973A]">Itinerary</span>
          </h2>
          <p className="text-sm md:text-base text-[#555] mt-3 max-w-xl mx-auto">
            Every hour planned. Tap any day to expand the full schedule with timings, highlights, and pro tips.
          </p>
        </div>

        {/* Day Cards */}
        <div className="max-w-3xl mx-auto space-y-3">
          {itinerary.map((day) => (
            <DayCard
              key={day.day}
              day={day}
              isOpen={openDay === day.day}
              onToggle={() => setOpenDay(openDay === day.day ? null : day.day)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
