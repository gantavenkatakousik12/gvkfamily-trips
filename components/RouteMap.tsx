"use client";
import { routeSegments } from "@/data/trip-data";

const modeConfig = {
  train: {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3A7BD5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15.5V5a3 3 0 013-3h10a3 3 0 013 3v10.5" />
        <path d="M4 15.5a2.5 2.5 0 002.5 2.5h11a2.5 2.5 0 002.5-2.5" />
        <path d="M8 21l-2 3M16 21l2 3" />
        <path d="M9 6h6M9 10h6" />
        <circle cx="8.5" cy="14" r="1" />
        <circle cx="15.5" cy="14" r="1" />
      </svg>
    ),
    color: "#3A7BD5",
    bg: "#EBF2FF",
    lineStyle: "8 4",
    label: "Train",
  },
  flight: {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#27AE60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2L16 11l3.5-3.5C20.3 6.7 21 5.5 21 4.5S20.3 3 19.5 3s-2.2.7-3 1.5L13 8l-8.2-1.8a1 1 0 00-.9.3L2.5 7.8a.5.5 0 00.2.9L9 11l-2.5 2.5L4 12.8a.5.5 0 00-.6.1l-.7.7a.5.5 0 00.1.6L6 16l1.8 3.2a.5.5 0 00.6.1l.7-.7a.5.5 0 00.1-.6L8.5 15.5 11 13l2.3 6.3a.5.5 0 00.9.2l1.3-1.4a1 1 0 00.3-.9z" />
      </svg>
    ),
    color: "#27AE60",
    bg: "#E8F8EE",
    lineStyle: "3 6",
    label: "Flight",
  },
  road: {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8973A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.6A2 2 0 0013.7 5H10.3a2 2 0 00-1.6.9L6 9.5l-2.5 1.1C2.7 11 2 11.8 2 12.7V16c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
    color: "#E8973A",
    bg: "#FFF5E9",
    lineStyle: "none",
    label: "Road",
  },
};

export default function RouteMap() {
  return (
    <section id="route" className="py-16 md:py-24 bg-[#F7F5F2]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#E8973A]" />
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#888]">
              Travel Route
            </span>
            <span className="w-5 h-[1px] bg-[#E8973A]" />
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your Complete <span className="text-[#E8973A]">Journey</span> Map
          </h2>
          <p className="text-sm md:text-base text-[#555] mt-3 max-w-xl mx-auto leading-relaxed">
            Vijayawada → Delhi → Varanasi → Ayodhya → Home — with the best transport options for each leg
          </p>
        </div>

        {/* Route Flow - Vertical Timeline */}
        <div className="max-w-2xl mx-auto">
          {routeSegments.map((seg, idx) => {
            const config = modeConfig[seg.mode];
            const isLast = idx === routeSegments.length - 1;
            return (
              <div key={idx} className="relative flex gap-4 md:gap-6">
                {/* Left: Pin + Line */}
                <div className="flex flex-col items-center shrink-0">
                  {/* From Pin */}
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md border-2"
                    style={{
                      background: config.bg,
                      borderColor: config.color,
                    }}
                  >
                    {config.icon}
                  </div>
                  {/* Connector Line */}
                  {!isLast && (
                    <div className="flex-1 w-0.5 min-h-[80px] relative">
                      <svg width="2" height="100%" className="absolute inset-0">
                        <line
                          x1="1" y1="0" x2="1" y2="100%"
                          stroke={config.color}
                          strokeWidth="2"
                          strokeDasharray={config.lineStyle}
                          strokeOpacity={0.5}
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Right: Content Card */}
                <div className={`flex-1 ${!isLast ? "pb-6 md:pb-8" : ""}`}>
                  <div className="bg-white rounded-xl border border-[#E8E4DF] p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
                            style={{ background: config.bg, color: config.color }}
                          >
                            {config.label}
                          </span>
                          {seg.recommended && (
                            <span className="text-[10px] text-[#27AE60] font-medium">
                              ★ Recommended
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm md:text-base font-bold text-[#111]">
                          {seg.from}
                          <span className="mx-2 text-[#ccc]">→</span>
                          {seg.to}
                        </h3>
                      </div>
                      <span className="text-xs font-semibold text-[#111] whitespace-nowrap bg-[#F7F5F2] px-2.5 py-1 rounded-lg">
                        {seg.duration}
                      </span>
                    </div>

                    {/* Details */}
                    <p className="text-xs text-[#555] mb-2">{seg.details}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#111]">{seg.cost}</span>
                      {seg.recommended && (
                        <span className="text-[11px] text-[#888]">{seg.recommended}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Final Destination Pin */}
          <div className="flex items-center gap-4 md:gap-6 mt-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#27AE60]/10 border-2 border-[#27AE60] shadow-md">
              <span className="text-lg">🏠</span>
            </div>
            <div>
              <span className="text-sm font-bold text-[#111]">Back Home — Vijayawada / Bhimavaram</span>
              <p className="text-xs text-[#888] mt-0.5">Trip complete! 🎉</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-10 md:mt-14">
          {Object.entries(modeConfig).map(([key, config]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <svg width="24" height="2">
                  <line
                    x1="0" y1="1" x2="24" y2="1"
                    stroke={config.color}
                    strokeWidth="2"
                    strokeDasharray={config.lineStyle === "none" ? undefined : config.lineStyle}
                  />
                </svg>
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: config.color }}
                />
              </div>
              <span className="text-xs text-[#555] font-medium">{config.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
