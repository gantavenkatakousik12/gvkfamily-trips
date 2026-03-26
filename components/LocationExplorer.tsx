"use client";
import { useState } from "react";
import { locationGroups, type LocationGroup } from "@/data/trip-data";

function LocationCard({ pin, color }: { pin: { name: string; coordinates: { lat: number; lng: number }; map_link: string }; color: string }) {
  // Generate a relevant Unsplash image based on location name
  const getImageUrl = (name: string) => {
    const searchMap: Record<string, string> = {
      "Dashashwamedh Ghat": "https://images.unsplash.com/photo-1571536802086-159d3c8d4524?w=400&h=250&fit=crop",
      "Kashi Vishwanath Temple": "https://images.unsplash.com/photo-1609947017136-9daf32a55668?w=400&h=250&fit=crop",
      "Assi Ghat": "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=400&h=250&fit=crop",
      "Manikarnika Ghat": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=250&fit=crop",
      "Sarnath (Dhamek Stupa)": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=400&h=250&fit=crop",
      "Ram Mandir Ayodhya": "https://images.unsplash.com/photo-1710328882757-81a73e834a89?w=400&h=250&fit=crop",
      "Hanuman Garhi": "https://images.unsplash.com/photo-1604310482802-2a938d8ddd60?w=400&h=250&fit=crop",
      "Kanak Bhawan": "https://images.unsplash.com/photo-1590766940554-634961ade668?w=400&h=250&fit=crop",
      "India Gate": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=250&fit=crop",
      "Red Fort": "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=400&h=250&fit=crop",
      "Qutub Minar": "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=250&fit=crop",
      "Taj Mahal": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop",
      "Agra Fort": "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=400&h=250&fit=crop",
    };
    return searchMap[name] || `https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&h=250&fit=crop`;
  };

  return (
    <div className="group bg-white rounded-xl border border-[#E8E4DF] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-36 md:h-40 overflow-hidden">
        <img
          src={getImageUrl(pin.name)}
          alt={pin.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Pin marker */}
        <div
          className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: color }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
          </svg>
        </div>
        {/* Coordinates badge */}
        <div className="absolute bottom-2 left-2 text-[9px] text-white/80 bg-black/30 backdrop-blur-sm px-1.5 py-0.5 rounded">
          {pin.coordinates.lat.toFixed(4)}°N, {pin.coordinates.lng.toFixed(4)}°E
        </div>
      </div>

      {/* Content */}
      <div className="p-3 md:p-4">
        <h4 className="text-sm font-semibold text-[#111] mb-2 leading-snug">{pin.name}</h4>
        <a
          href={pin.map_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1.5 transition-colors"
          style={{ background: color + "15", color }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
          </svg>
          Open in Google Maps
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function LocationExplorer() {
  const [activeGroup, setActiveGroup] = useState<string>("varanasi");

  const currentGroup = locationGroups.find((g) => g.id === activeGroup);

  return (
    <section id="places" className="py-16 md:py-24 bg-[#F7F5F2]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#E8973A]" />
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#888]">
              Explore Destinations
            </span>
            <span className="w-5 h-[1px] bg-[#E8973A]" />
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Places to <span className="text-[#E8973A]">Visit</span>
          </h2>
          <p className="text-sm md:text-base text-[#555] mt-3 max-w-xl mx-auto">
            Every sacred spot, mapped and ready. Tap any pin to navigate directly via Google Maps.
          </p>
        </div>

        {/* City Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
          {locationGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeGroup === group.id
                  ? "text-white shadow-md"
                  : "bg-white text-[#555] border border-[#E8E4DF] hover:border-[#ccc]"
              }`}
              style={
                activeGroup === group.id
                  ? { background: group.color }
                  : undefined
              }
            >
              <span>{group.icon}</span>
              <span>{group.label}</span>
              <span
                className={`text-xs ml-1 ${
                  activeGroup === group.id ? "text-white/80" : "text-[#aaa]"
                }`}
              >
                {group.pins.length}
              </span>
            </button>
          ))}
        </div>

        {/* Location Grid */}
        {currentGroup && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 animate-fade-in">
            {currentGroup.pins.map((pin) => (
              <LocationCard key={pin.name} pin={pin} color={currentGroup.color} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
