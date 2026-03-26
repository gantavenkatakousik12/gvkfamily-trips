"use client";
import { useState } from "react";
import { budgetBreakdown, trainOptions, alternateRoutes, reminders, bookingLinks } from "@/data/trip-data";

function TrainTable() {
  const [selectedRoute, setSelectedRoute] = useState("Vijayawada → Delhi");
  const routes = [...new Set(trainOptions.map((t) => t.route))];
  const filtered = trainOptions.filter((t) => t.route === selectedRoute);

  return (
    <div>
      {/* Route tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar pb-1">
        {routes.map((r) => (
          <button
            key={r}
            onClick={() => setSelectedRoute(r)}
            className={`whitespace-nowrap text-xs font-medium px-3 py-1.5 rounded-full transition-all shrink-0 ${
              selectedRoute === r
                ? "bg-[#3A7BD5] text-white"
                : "bg-[#F7F5F2] text-[#555] hover:bg-[#E8E4DF]"
            }`}
          >
            🚆 {r}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-[#E8E4DF]">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-[#F7F5F2]">
              <th className="text-left p-2.5 font-semibold text-[#555]">Train</th>
              <th className="text-left p-2.5 font-semibold text-[#555]">Departs</th>
              <th className="text-left p-2.5 font-semibold text-[#555]">Arrives</th>
              <th className="text-left p-2.5 font-semibold text-[#555]">Duration</th>
              <th className="text-left p-2.5 font-semibold text-[#555]">Days</th>
              <th className="text-left p-2.5 font-semibold text-[#555]">Cost (3AC)</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.trainNo} className="border-t border-[#E8E4DF] hover:bg-[#FAFAF8]">
                <td className="p-2.5">
                  <span className="font-semibold text-[#111]">{t.trainName}</span>
                  <span className="block text-[10px] text-[#888]">#{t.trainNo}</span>
                  <div className="flex gap-1 mt-1">
                    {t.isBest && (
                      <span className="text-[9px] bg-[#E8F8EE] text-[#27AE60] font-semibold px-1.5 py-0.5 rounded-full">⭐ BEST</span>
                    )}
                    {t.isFastest && (
                      <span className="text-[9px] bg-[#EBF2FF] text-[#3A7BD5] font-semibold px-1.5 py-0.5 rounded-full">🏆 FASTEST</span>
                    )}
                    {t.isCheapest && (
                      <span className="text-[9px] bg-[#FFF5E9] text-[#E8973A] font-semibold px-1.5 py-0.5 rounded-full">💰 CHEAPEST</span>
                    )}
                  </div>
                </td>
                <td className="p-2.5 text-[#555]">{t.departs}</td>
                <td className="p-2.5 text-[#555]">{t.arrives}</td>
                <td className="p-2.5 font-semibold text-[#111]">{t.duration}</td>
                <td className="p-2.5 text-[#555]">{t.days}</td>
                <td className="p-2.5 font-semibold text-[#111]">{t.costPerPerson}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function BudgetSection() {
  const [groupSize, setGroupSize] = useState<3 | 4>(3);

  return (
    <section id="budget" className="py-16 md:py-24 bg-[#F7F5F2]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#E8973A]" />
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#888]">
              Budget & Transport
            </span>
            <span className="w-5 h-[1px] bg-[#E8973A]" />
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Plan Your <span className="text-[#E8973A]">Budget</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Budget Breakdown */}
          <div className="bg-white rounded-2xl border border-[#E8E4DF] p-5 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-bold text-[#111]">💰 Cost Breakdown</h3>
              <div className="flex bg-[#F7F5F2] rounded-full p-0.5">
                {([3, 4] as const).map((n) => (
                  <button
                    key={n}
                    onClick={() => setGroupSize(n)}
                    className={`text-xs font-medium px-3 py-1 rounded-full transition-all ${
                      groupSize === n
                        ? "bg-[#E8973A] text-white"
                        : "text-[#555]"
                    }`}
                  >
                    {n} Members
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              {budgetBreakdown.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b border-[#F7F5F2] last:border-0"
                >
                  <span className="text-xs text-[#555] flex-1">{item.item}</span>
                  <span className="text-xs font-semibold text-[#111] ml-3">
                    {groupSize === 3 ? item.costFor3 : item.costFor4 || item.costFor3}
                  </span>
                </div>
              ))}
            </div>

            {/* Total (budget mode) */}
            <div className="mt-4 pt-3 border-t-2 border-[#E8E4DF] flex items-center justify-between">
              <span className="text-sm font-bold text-[#111]">Estimated Total (Budget Mode)</span>
              <span className="text-lg font-bold text-[#E8973A]">
                {groupSize === 3 ? "₹28,900–₹31,700" : "₹38,500–₹44,000"}
              </span>
            </div>
            <p className="text-[10px] text-[#888] mt-2">
              With premium 2AC + mid-range hotels: {groupSize === 3 ? "₹55,000–₹65,000" : "₹70,000–₹80,000"}
            </p>
          </div>

          {/* Right: Train Options */}
          <div className="bg-white rounded-2xl border border-[#E8E4DF] p-5 md:p-6 shadow-sm">
            <h3 className="text-base font-bold text-[#111] mb-4">🚆 Train Options</h3>
            <TrainTable />
          </div>
        </div>

        {/* Alternate Routes */}
        <div className="mt-8">
          <h3
            className="text-xl md:text-2xl font-bold text-[#111] mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            🔄 Alternate <span className="text-[#E8973A]">Itineraries</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {alternateRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-white rounded-xl border border-[#E8E4DF] p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">
                    {route.id === "agra" ? "🕌" : route.id === "prayagraj" ? "🌊" : "✈️"}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#111]">{route.title}</h4>
                    <p className="text-xs text-[#888] mt-0.5">{route.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3 text-xs">
                  <span className="bg-[#EBF2FF] text-[#3A7BD5] font-medium px-2 py-0.5 rounded-full">
                    +{route.extraDays} day{route.extraDays !== 1 ? "s" : ""}
                  </span>
                  <span className="bg-[#FFF5E9] text-[#E8973A] font-medium px-2 py-0.5 rounded-full">
                    {route.extraCost}
                  </span>
                </div>
                <ul className="space-y-1">
                  {route.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-[#555] flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#E8973A]" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Reminders + Booking Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Reminders */}
          <div className="bg-white rounded-2xl border border-[#E8E4DF] p-5 md:p-6 shadow-sm">
            <h3 className="text-base font-bold text-[#111] mb-4">⚠️ Important Reminders</h3>
            <div className="space-y-3">
              {reminders.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-base shrink-0 mt-0.5">{r.icon}</span>
                  <p className="text-xs text-[#555] leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Booking Links */}
          <div className="bg-white rounded-2xl border border-[#E8E4DF] p-5 md:p-6 shadow-sm">
            <h3 className="text-base font-bold text-[#111] mb-4">📱 Quick Booking Links</h3>
            <div className="space-y-3">
              {bookingLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#F7F5F2] hover:bg-[#EBE8E4] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-[#E8973A]/10 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8973A" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-[#111] group-hover:text-[#E8973A] transition-colors">
                      {link.name}
                    </span>
                    <span className="block text-xs text-[#888]">{link.note}</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
