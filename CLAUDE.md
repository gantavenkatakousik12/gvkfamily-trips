@AGENTS.md
# GVK Family Trips — Agent Context & Instructions

## 🎯 Project Objective
Build a **high-quality, mobile-first travel planning web application** named **GVK Family Trips**.

This platform should act as:
- A **master travel blueprint**
- A **decision-support system during travel**
- A **visual + navigational guide**

---

## 🧩 Core Data Sources

The system must integrate and render the following structured data:

1. `trip-plan.md`
   - Full itinerary (day-wise plan)
   - Travel flow and sequencing

2. `images-pins.json`
   - Locations
   - Coordinates (lat/lng)
   - Google Maps links
   - Image URLs

3. `youtube-videos.json`
   - Location-based video references
   - Purpose-based categorization

4. `design-system.json`
   - UI tokens, spacing, colors, layout rules

---

## 🏗️ System Requirements

### 1. UI/UX Principles
- Clean, modern, minimal
- Mobile-first (priority)
- Fast loading (optimize images + JSON usage)
- Clear hierarchy: **Place → Info → Action**

---

### 2. Core Features

#### 📍 Location Explorer
- Display all places with:
  - Name
  - Image
  - Map pin (clickable)
- Group by:
  - Varanasi
  - Ayodhya
  - Delhi
  - Optional (Agra)

---

#### 🎥 Video Assistance Layer
- Show relevant YouTube videos per location
- Tag by:
  - "Before Visit"
  - "During Visit"
  - "If Stuck"

---

#### 🗺️ Map Integration
- Use coordinates from JSON
- Show pins
- Enable direct navigation via Google Maps links

---

#### 📅 Itinerary Viewer
- Render `trip-plan.md`
- Convert into structured UI:
  - Day-wise cards
  - Time blocks
  - Key highlights

---

#### 🖼️ Visual Layer
- Show images for:
  - Each location
  - Key experiences (ghats, temples, aarti)

---

## ⚙️ Technical Constraints

- Use **Next.js (App Router)**
- Use **TypeScript**
- Use **Tailwind CSS**
- Keep components modular:
  - `/components`
  - `/data`
  - `/features`

---

## 🧠 Intelligence Layer (Important)

The system should help user answer:

- Where to go next?
- What is nearby?
- What is worth skipping?
- What is time-sensitive?

---

## 🔄 Data Handling Rules

- Do NOT hardcode data inside components
- Always use JSON sources
- Keep UI reactive to data changes

---

## 📱 Mobile Optimization Rules

- Stack layout vertically
- Avoid clutter
- Use scroll-based sections
- Buttons must be thumb-friendly

---

## 🚀 Expected Output

A **production-quality travel dashboard** with:

- Map + pins
- Images per location
- Embedded YouTube videos
- Day-wise itinerary
- Smooth navigation

---

## ⚠️ Constraints

- Avoid over-engineering
- Avoid unnecessary libraries
- Focus on clarity + usability

---

## ✅ Success Criteria

- User can complete entire trip using ONLY this app
- No confusion during travel
- Fast access to:
  - Maps
  - Videos
  - Plan

---

## 🔥 Priority Order

1. Data integration
2. Itinerary rendering
3. Location + map UI
4. Video integration
5. UI polish

---

## 🧪 Future Enhancements (Optional)

- Offline mode (cache JSON)
- Route optimization
- Expense tracker
- Multi-user support

---

## 📌 Final Instruction

Every feature must answer:
> "Does this reduce confusion during the trip?"

If YES → implement  
If NO → discard  
