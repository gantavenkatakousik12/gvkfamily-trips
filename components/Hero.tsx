export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block w-2 h-2 rounded-full bg-[#E8973A] animate-pulse-dot" />
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-white/60">
              North India Pilgrimage • 7 Days
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 animate-fade-in-up"
            style={{ fontFamily: "var(--font-playfair)", animationDelay: "0.2s" }}
          >
            GVK Family{" "}
            <span className="text-[#E8973A]">Trips</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base md:text-lg text-white/75 leading-relaxed mb-8 max-w-lg animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            Vijayawada → Delhi → Varanasi → Ayodhya → Home.
            Your complete travel blueprint with maps, videos, and day-by-day itinerary.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="#itinerary"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8973A] text-white text-sm font-semibold rounded-full hover:bg-[#C97D28] transition-colors"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View Itinerary
            </a>
            <a
              href="#route"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur text-white text-sm font-semibold rounded-full border border-white/25 hover:bg-white/25 transition-colors"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Route Map
            </a>
          </div>
        </div>

        {/* Route Preview Cards - Desktop */}
        <div className="hidden lg:flex absolute right-8 bottom-24 gap-3">
          {[
            { city: "Varanasi", icon: "🛕", color: "#E8973A", img: "https://images.unsplash.com/photo-1571536802086-159d3c8d4524?w=200&h=260&fit=crop" },
            { city: "Ayodhya", icon: "🏛️", color: "#D4563A", img: "https://images.unsplash.com/photo-1710328882757-81a73e834a89?w=200&h=260&fit=crop" },
            { city: "Delhi", icon: "🏙️", color: "#3A7BD5", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=200&h=260&fit=crop" },
          ].map((c, i) => (
            <div
              key={c.city}
              className="relative w-[140px] h-[180px] rounded-xl overflow-hidden shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${0.6 + i * 0.15}s` }}
            >
              <img src={c.img} alt={c.city} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                <span className="text-sm">{c.icon}</span>
                <span className="text-white text-xs font-semibold">{c.city}</span>
              </div>
              <div
                className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full"
                style={{ background: c.color }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-white/40 text-[10px] tracking-widest uppercase">Scroll</span>
        <svg width="16" height="24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4">
          <rect x="4" y="1" width="8" height="14" rx="4" />
          <line x1="8" y1="5" x2="8" y2="8" strokeLinecap="round">
            <animate attributeName="y1" values="4;7;4" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="y2" values="7;10;7" dur="1.5s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
    </section>
  );
}
