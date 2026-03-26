import { bookingLinks } from "@/data/trip-data";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🛕</span>
              <span className="font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                GVK Family Trips
              </span>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">
              Your complete travel blueprint for the North India Pilgrimage — Varanasi, Ayodhya, Delhi and more.
            </p>
          </div>

          {/* Quick Navigate */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[
                { label: "Route Map", href: "#route" },
                { label: "Day-by-Day Plan", href: "#itinerary" },
                { label: "Explore Places", href: "#places" },
                { label: "Video Guides", href: "#videos" },
                { label: "Budget Planner", href: "#budget" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-xs text-white/50 hover:text-[#E8973A] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">Book Now</h4>
            <ul className="space-y-2">
              {bookingLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/50 hover:text-[#E8973A] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trip Summary */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">Trip Info</h4>
            <div className="space-y-2.5 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <span>👥</span> 3–4 Members
              </div>
              <div className="flex items-center gap-2">
                <span>📅</span> 7 Days / 6 Nights
              </div>
              <div className="flex items-center gap-2">
                <span>💰</span> ₹30K–₹90K (flexible)
              </div>
              <div className="flex items-center gap-2">
                <span>🗺️</span> VJA → DEL → BNR → AY → VJA
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/30">
            © 2026 GVK Family Trips. Built with ❤️ for our family pilgrimage.
          </p>
          <p className="text-[11px] text-white/30">
            Data: IRCTC, ixigo, RedBus, Holidify • Fares are approximate
          </p>
        </div>
      </div>
    </footer>
  );
}
