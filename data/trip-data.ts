// ── Location Pins Data ──
export interface LocationPin {
  name: string;
  coordinates: { lat: number; lng: number };
  map_link: string;
}

export interface LocationGroup {
  id: string;
  label: string;
  color: string;
  icon: string;
  pins: LocationPin[];
}

export const locationGroups: LocationGroup[] = [
  {
    id: "varanasi",
    label: "Varanasi",
    color: "#E8973A",
    icon: "🛕",
    pins: [
      { name: "Dashashwamedh Ghat", coordinates: { lat: 25.3066, lng: 83.0103 }, map_link: "https://www.google.com/maps?q=25.3066,83.0103" },
      { name: "Kashi Vishwanath Temple", coordinates: { lat: 25.3109, lng: 83.0107 }, map_link: "https://www.google.com/maps?q=25.3109,83.0107" },
      { name: "Assi Ghat", coordinates: { lat: 25.288, lng: 83.003 }, map_link: "https://www.google.com/maps?q=25.2880,83.0030" },
      { name: "Manikarnika Ghat", coordinates: { lat: 25.31, lng: 83.013 }, map_link: "https://www.google.com/maps?q=25.3100,83.0130" },
      { name: "Sarnath (Dhamek Stupa)", coordinates: { lat: 25.376165, lng: 83.022713 }, map_link: "https://www.google.com/maps?q=25.376165,83.022713" },
    ],
  },
  {
    id: "ayodhya",
    label: "Ayodhya",
    color: "#D4563A",
    icon: "🏛️",
    pins: [
      { name: "Ram Mandir Ayodhya", coordinates: { lat: 26.7956, lng: 82.1943 }, map_link: "https://www.google.com/maps?q=26.7956,82.1943" },
      { name: "Hanuman Garhi", coordinates: { lat: 26.7983, lng: 82.2045 }, map_link: "https://www.google.com/maps?q=26.7983,82.2045" },
      { name: "Kanak Bhawan", coordinates: { lat: 26.7965, lng: 82.2055 }, map_link: "https://www.google.com/maps?q=26.7965,82.2055" },
      { name: "Ram Ki Paidi", coordinates: { lat: 26.7995, lng: 82.203 }, map_link: "https://www.google.com/maps?q=26.7995,82.2030" },
      { name: "Saryu River Ghat", coordinates: { lat: 26.804, lng: 82.199 }, map_link: "https://www.google.com/maps?q=26.8040,82.1990" },
      { name: "Guptar Ghat", coordinates: { lat: 26.78, lng: 82.17 }, map_link: "https://www.google.com/maps?q=26.7800,82.1700" },
    ],
  },
  {
    id: "delhi",
    label: "Delhi",
    color: "#3A7BD5",
    icon: "🏙️",
    pins: [
      { name: "New Delhi Railway Station", coordinates: { lat: 28.6415, lng: 77.2205 }, map_link: "https://www.google.com/maps?q=28.6415,77.2205" },
      { name: "India Gate", coordinates: { lat: 28.6129, lng: 77.2295 }, map_link: "https://www.google.com/maps?q=28.6129,77.2295" },
      { name: "Red Fort", coordinates: { lat: 28.6562, lng: 77.241 }, map_link: "https://www.google.com/maps?q=28.6562,77.2410" },
      { name: "Qutub Minar", coordinates: { lat: 28.5245, lng: 77.1855 }, map_link: "https://www.google.com/maps?q=28.5245,77.1855" },
    ],
  },
  {
    id: "agra",
    label: "Agra (Optional)",
    color: "#7C3AED",
    icon: "🕌",
    pins: [
      { name: "Taj Mahal", coordinates: { lat: 27.17667, lng: 78.008072 }, map_link: "https://www.google.com/maps?q=27.176670,78.008072" },
      { name: "Agra Fort", coordinates: { lat: 27.1795, lng: 78.0211 }, map_link: "https://www.google.com/maps?q=27.1795,78.0211" },
    ],
  },
];

export const transportNodes = [
  { name: "Vijayawada Junction (BZA)", coordinates: { lat: 16.5167, lng: 80.6167 }, map_link: "https://www.google.com/maps?q=16.5167,80.6167" },
  { name: "Varanasi Junction (BSB)", coordinates: { lat: 25.3176, lng: 82.9739 }, map_link: "https://www.google.com/maps?q=25.3176,82.9739" },
  { name: "Ayodhya Dham Junction", coordinates: { lat: 26.799, lng: 82.198 }, map_link: "https://www.google.com/maps?q=26.7990,82.1980" },
  { name: "Lucknow Airport (LKO)", coordinates: { lat: 26.7606, lng: 80.8893 }, map_link: "https://www.google.com/maps?q=26.7606,80.8893" },
  { name: "Delhi Airport (DEL)", coordinates: { lat: 28.5562, lng: 77.1 }, map_link: "https://www.google.com/maps?q=28.5562,77.1000" },
];

// ── Itinerary Data ──
export interface ItineraryActivity {
  time: string;
  title: string;
  description?: string;
  highlight?: boolean;
  icon?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  subtitle: string;
  location: string;
  color: string;
  travelMode?: "train" | "flight" | "road" | "rest";
  activities: ItineraryActivity[];
  tips?: string[];
}

export const itinerary: ItineraryDay[] = [
  {
    day: 1,
    title: "Night Departure",
    subtitle: "Bhimavaram / Vijayawada → Train",
    location: "Vijayawada",
    color: "#3A7BD5",
    travelMode: "train",
    activities: [
      { time: "Evening", title: "Travel Bhimavaram → Vijayawada Junction", icon: "🚌" },
      { time: "03:40 AM", title: "Board AP Express (20805) from BZA", description: "Or Tamil Nadu SF (12621) at 03:50 AM", highlight: true, icon: "🚆" },
    ],
    tips: ["Carry packed dinner for train journey", "Keep all ID proofs handy"],
  },
  {
    day: 2,
    title: "On Train",
    subtitle: "Crossing Central India",
    location: "En Route",
    color: "#888888",
    travelMode: "train",
    activities: [
      { time: "Full Day", title: "Rest & enjoy scenic views through Central India", icon: "🚆" },
      { time: "Tip", title: "Order food via IRCTC e-catering app", description: "Hot meals delivered at stations", icon: "🍱" },
    ],
    tips: ["Keep mobile charger & power bank ready", "Scenic view near Nagpur & Jhansi stretch"],
  },
  {
    day: 3,
    title: "Delhi Arrival + Sightseeing",
    subtitle: "New Delhi → Optional sightseeing → Board night train",
    location: "Delhi",
    color: "#3A7BD5",
    travelMode: "train",
    activities: [
      { time: "05:40 AM", title: "Arrive New Delhi (NDLS)", highlight: true, icon: "📍" },
      { time: "06:00–08:00", title: "Freshen up, Breakfast at station area", icon: "☕" },
      { time: "08:00–10:00", title: "India Gate visit", description: "30 min drive from station", icon: "🏛️" },
      { time: "10:00–12:00", title: "Qutub Minar or Red Fort", description: "Choose one based on interest", icon: "🏰" },
      { time: "12:00–14:00", title: "Chandni Chowk for food", description: "Famous street food — paranthe wali gali", icon: "🍛" },
      { time: "20:05", title: "Board Shiv Ganga Express to Varanasi", description: "Arrives 06:10 AM next day — saves hotel night!", highlight: true, icon: "🚆" },
    ],
    tips: ["Best pick: Shiv Ganga at 20:05 → arrive 06:10 Day 4", "Keep luggage in NDLS cloak room during sightseeing (₹30/bag)"],
  },
  {
    day: 4,
    title: "Varanasi + Ganga Aarti",
    subtitle: "Arrive Varanasi → Temples → Evening Ganga Aarti",
    location: "Varanasi",
    color: "#E8973A",
    activities: [
      { time: "06:10 AM", title: "Arrive Varanasi (BNRS)", highlight: true, icon: "📍" },
      { time: "06:30–08:00", title: "Sunrise boat ride on Ganges ⭐", description: "₹200–₹400/person shared, ₹800–₹1,500 private", highlight: true, icon: "🛶" },
      { time: "08:00–10:00", title: "Kashi Vishwanath Temple darshan", description: "Arrive early to beat crowds. Carry ID.", icon: "🛕" },
      { time: "10:00–13:00", title: "Manikarnika Ghat & Assi Ghat walk", description: "No photography at Manikarnika cremation area", icon: "🚶" },
      { time: "13:00–17:00", title: "Lunch & Rest at hotel", icon: "🏨" },
      { time: "18:00–19:30", title: "Grand Ganga Aarti at Dashashwamedh Ghat ⭐⭐", description: "Most spectacular ceremony — reach 1 hr early for front seats", highlight: true, icon: "🪔" },
    ],
    tips: ["Book hotel near Dashashwamedh Ghat area", "Ganga Aarti: Arrive 17:00 for good viewing spot"],
  },
  {
    day: 5,
    title: "Full Varanasi → Ayodhya Night",
    subtitle: "Morning Ghats → Sarnath → Temples → Depart Night",
    location: "Varanasi",
    color: "#E8973A",
    travelMode: "road",
    activities: [
      { time: "05:30–07:00", title: "Morning Ghat walk", description: "Assi → Dashashwamedh → Manikarnika", icon: "🚶" },
      { time: "07:00–08:00", title: "Morning Aarti at Assi Ghat", description: "Quieter, more spiritual than Dashashwamedh", icon: "🪔" },
      { time: "08:00–10:00", title: "Sarnath Buddhist site", description: "Dhamek Stupa, Deer Park — 10 km from Varanasi", icon: "☸️" },
      { time: "10:30–12:00", title: "Kashi Vishwanath Corridor & Annapurna Temple", icon: "🛕" },
      { time: "12:00–13:00", title: "Lunch — Kashi kachori/chaat", description: "Deena Chat Bhandar is famous!", icon: "🍛" },
      { time: "13:00–15:00", title: "BHU Vishwanath Temple, Durga Kund, Sankat Mochan", icon: "🛕" },
      { time: "15:00–17:00", title: "Ramnagar Fort by boat", description: "Cross Ganges — beautiful fort & museum", icon: "🏰" },
      { time: "18:00–20:00", title: "Evening Ganga Aarti (Day 2)", description: "You know the flow now — enjoy front seats!", icon: "🪔" },
      { time: "21:00–22:00", title: "Depart Varanasi → Ayodhya", description: "Private cab ₹2,500–₹4,000 for group, ~5 hrs", highlight: true, icon: "🚗" },
    ],
    tips: ["Book cab to Ayodhya in advance", "Arrives 03:00–04:00 AM in Ayodhya"],
  },
  {
    day: 6,
    title: "Ayodhya Pilgrimage",
    subtitle: "Ram Mandir → Hanuman Garhi → Saryu Aarti",
    location: "Ayodhya",
    color: "#D4563A",
    activities: [
      { time: "05:00 AM", title: "Reach Ayodhya, freshen up", icon: "🏨" },
      { time: "05:30 AM", title: "Hanuman Garhi Temple ⭐", description: "Visit BEFORE Ram Mandir (tradition). 76 steps, panoramic view.", highlight: true, icon: "🛕" },
      { time: "07:00–09:00", title: "Ram Janmabhoomi / Ram Mandir ⭐⭐⭐", description: "Book Sugam Darshan e-pass FREE at srjbtkshetra.in", highlight: true, icon: "🏛️" },
      { time: "09:30–10:30", title: "Kanak Bhawan (Golden Temple)", description: "Sita-Ram idols in gold, gifted by Queen Kaikeyi", icon: "🛕" },
      { time: "10:30–11:30", title: "Dashrath Mahal & Nageshwarnath Temple", description: "Oldest temple, built by Lord Ram's son Kush", icon: "🛕" },
      { time: "12:30–14:00", title: "Sita Ki Rasoi & Lunch", description: "Free Prasad available at many temples (11:30–15:00)", icon: "🍱" },
      { time: "15:00–16:30", title: "Ram Ki Paidi Ghats / Saryu River walk", icon: "🚶" },
      { time: "17:00–18:30", title: "Saryu River Ghat — Evening Aarti ⭐⭐", description: "Similar to Varanasi Ganga Aarti, beautifully lit", highlight: true, icon: "🪔" },
      { time: "19:00–20:00", title: "Guptar Ghat", description: "Where Lord Rama took Jal Samadhi — peaceful", icon: "🌊" },
    ],
    tips: ["No phones inside Ram Mandir sanctum — use locker", "Book Sugam Darshan e-pass 15–30 days ahead"],
  },
  {
    day: 7,
    title: "Return Journey",
    subtitle: "Ayodhya → Delhi → Vijayawada",
    location: "Return",
    color: "#27AE60",
    travelMode: "flight",
    activities: [
      { time: "Morning", title: "Option A: Train Ayodhya → Delhi (~7–8 hrs)", description: "Then Delhi → Vijayawada by AP Express (arrive Day 8)", icon: "🚆" },
      { time: "Morning", title: "Option B: Cab/Train Ayodhya → Delhi → Flight", description: "Delhi → Vijayawada flight, ₹3,500–₹6,000/person. Arrive same evening!", highlight: true, icon: "✈️" },
      { time: "Morning", title: "Option C: Cab to Lucknow → Direct Flight", description: "Lucknow → Vijayawada, ~2.5 hrs, ₹4,000–₹8,000/person", icon: "✈️" },
      { time: "Evening", title: "Arrive Vijayawada → Bhimavaram/Chirala", icon: "🏠" },
    ],
    tips: ["Flight from Delhi recommended for ₹90K budget", "Book return flights early for best prices"],
  },
];

// ── YouTube Videos Data ──
export interface VideoRef {
  title: string;
  language: string;
  purpose: string;
  youtube_url: string;
  category: string;
}

export const youtubeVideos: VideoRef[] = [
  { title: "Varanasi Ayodhya Full Tour Plan (Telugu)", language: "Telugu", purpose: "Complete itinerary understanding", youtube_url: "https://www.youtube.com/watch?v=dplJv9SaC_s", category: "Full Trip Overview" },
  { title: "Varanasi + Ayodhya Budget Travel Plan", language: "Hindi/English", purpose: "Cost breakdown and logistics", youtube_url: "https://www.youtube.com/watch?v=4oZo6KS1zVw", category: "Full Trip Overview" },
  { title: "Varanasi Full Tour Guide (Kashi Yatra Telugu)", language: "Telugu", purpose: "Temple darshan + ghat navigation", youtube_url: "https://www.youtube.com/watch?v=erxzYWEUtDw", category: "Varanasi" },
  { title: "2 Days in Varanasi Complete Guide", language: "English", purpose: "Structured modern travel walkthrough", youtube_url: "https://www.youtube.com/watch?v=JRRaj6_crdw", category: "Varanasi" },
  { title: "Ganga Aarti Varanasi Telugu Vlog", language: "Telugu", purpose: "Understand seating, timing, crowd flow", youtube_url: "https://www.youtube.com/watch?v=86NElQdf2Dc", category: "Ganga Aarti" },
  { title: "Varanasi Ganga Aarti Real Experience", language: "Telugu", purpose: "Live experience and expectations", youtube_url: "https://www.youtube.com/watch?v=oWYyCtBvyUg", category: "Ganga Aarti" },
  { title: "Ayodhya Ram Mandir Full Tour Guide", language: "Hindi", purpose: "Ram Mandir darshan flow + nearby temples", youtube_url: "https://www.youtube.com/watch?v=Vxw9z0k6l6Q", category: "Ayodhya" },
  { title: "Ayodhya Complete Travel Guide", language: "English", purpose: "Temple sequence + local navigation", youtube_url: "https://www.youtube.com/watch?v=1gX6K9s8QwE", category: "Ayodhya" },
  { title: "How to Travel in Varanasi (Auto, Boat, Walking Guide)", language: "Hindi", purpose: "Local transport hacks + cost saving", youtube_url: "https://www.youtube.com/watch?v=9dK8l0mYp7E", category: "Transport" },
  { title: "Indian Train Travel Guide (3AC, Boarding, Tips)", language: "English", purpose: "Train journey preparation", youtube_url: "https://www.youtube.com/watch?v=2c6yY9m5r0E", category: "Transport" },
];

// ── Route / Travel Segments ──
export interface RouteSegment {
  from: string;
  to: string;
  mode: "train" | "flight" | "road";
  duration: string;
  details: string;
  cost: string;
  recommended?: string;
}

export const routeSegments: RouteSegment[] = [
  {
    from: "Vijayawada (BZA)",
    to: "New Delhi (NDLS)",
    mode: "train",
    duration: "~26 hrs",
    details: "AP Express 20805 — Daily, 3AC",
    cost: "₹1,200–₹1,500 / person",
    recommended: "AP Express (20805) ⭐ BEST",
  },
  {
    from: "New Delhi (NDLS)",
    to: "Varanasi (BSB)",
    mode: "train",
    duration: "~10 hrs overnight",
    details: "Shiv Ganga Express 12560 — Daily",
    cost: "₹800–₹1,100 / person",
    recommended: "Shiv Ganga overnight (saves hotel!)",
  },
  {
    from: "Varanasi",
    to: "Ayodhya",
    mode: "road",
    duration: "~5 hrs",
    details: "Private cab — most convenient for groups",
    cost: "₹2,500–₹4,000 total",
    recommended: "Night cab after Ganga Aarti",
  },
  {
    from: "Ayodhya",
    to: "Delhi → Vijayawada",
    mode: "flight",
    duration: "~7 hrs + 2 hrs",
    details: "Train to Delhi + IndiGo/Air India flight",
    cost: "₹3,500–₹6,000 / person (flight)",
    recommended: "Flight from Delhi ✈️ (recommended)",
  },
];

// ── Train Options ──
export interface TrainOption {
  route: string;
  trainNo: string;
  trainName: string;
  departs: string;
  arrives: string;
  duration: string;
  days: string;
  costPerPerson: string;
  isBest?: boolean;
  isFastest?: boolean;
  isCheapest?: boolean;
}

export const trainOptions: TrainOption[] = [
  // Route 1: Vijayawada → Delhi
  { route: "Vijayawada → Delhi", trainNo: "20805", trainName: "AP Express", departs: "03:40 BZA", arrives: "05:40 NDLS", duration: "26 hrs", days: "Daily", costPerPerson: "₹1,200–₹1,500", isBest: true },
  { route: "Vijayawada → Delhi", trainNo: "12269", trainName: "MAS NZM Duronto", departs: "12:20 BZA", arrives: "10:40 NZM", duration: "22h 20m", days: "Mon, Fri", costPerPerson: "₹1,800–₹2,000", isFastest: true },
  { route: "Vijayawada → Delhi", trainNo: "12621", trainName: "Tamil Nadu SF Exp", departs: "03:50 BZA", arrives: "06:30 NDLS", duration: "26h 40m", days: "Daily", costPerPerson: "₹1,200–₹1,500" },
  { route: "Vijayawada → Delhi", trainNo: "16031", trainName: "Andaman Express", departs: "13:10 BZA", arrives: "20:55 NDLS", duration: "31h 45m", days: "Wed,Thu,Sun", costPerPerson: "₹710", isCheapest: true },
  // Route 2: Delhi → Varanasi
  { route: "Delhi → Varanasi", trainNo: "22436", trainName: "Vande Bharat Express", departs: "06:00 NDLS", arrives: "14:00 BSB", duration: "8 hrs", days: "Mon-Wed, Fri-Sun", costPerPerson: "₹1,500–₹1,800", isFastest: true },
  { route: "Delhi → Varanasi", trainNo: "12560", trainName: "Shiv Ganga Express", departs: "20:05 NDLS", arrives: "06:10 BNRS", duration: "10h 05m", days: "Daily", costPerPerson: "₹800–₹1,100", isBest: true },
  { route: "Delhi → Varanasi", trainNo: "14006", trainName: "Lichchivi Express", departs: "18:00 NDLS", arrives: "06:00 BSB", duration: "12 hrs", days: "Daily", costPerPerson: "₹430", isCheapest: true },
];

// ── Budget Data ──
export interface BudgetItem {
  item: string;
  costFor3: string;
  costFor4?: string;
}

export const budgetBreakdown: BudgetItem[] = [
  { item: "Vijayawada → Delhi (3AC, AP Express)", costFor3: "₹3,600–₹4,500", costFor4: "₹4,800–₹6,000" },
  { item: "Delhi → Varanasi (Shiv Ganga, 3AC)", costFor3: "₹2,400–₹3,300", costFor4: "₹3,200–₹4,400" },
  { item: "Varanasi Hotel (2 nights × ₹1,500)", costFor3: "₹3,000", costFor4: "₹4,500" },
  { item: "Varanasi activities (boat, entry, guide)", costFor3: "₹2,000", costFor4: "₹2,500" },
  { item: "Varanasi → Ayodhya (shared cab)", costFor3: "₹2,500", costFor4: "₹2,500" },
  { item: "Ayodhya Hotel (1 night × ₹1,000)", costFor3: "₹1,000", costFor4: "₹1,500" },
  { item: "Ayodhya activities & local transport", costFor3: "₹1,500", costFor4: "₹2,000" },
  { item: "Ayodhya → Delhi (train, 3AC)", costFor3: "₹2,100–₹2,700", costFor4: "₹2,800–₹3,600" },
  { item: "Delhi → Vijayawada (3AC return)", costFor3: "₹3,600–₹4,500", costFor4: "₹4,800–₹6,000" },
  { item: "Food (7 days × ₹200/person/day)", costFor3: "₹4,200", costFor4: "₹5,600" },
  { item: "Miscellaneous (autos, tips, shopping)", costFor3: "₹3,000", costFor4: "₹4,000" },
];

// ── Important Reminders ──
export const reminders = [
  { icon: "🛕", text: "Ram Mandir: Book Sugam Darshan e-pass FREE at srjbtkshetra.in — long queues without it" },
  { icon: "🚆", text: "Train booking: Book ASAP on IRCTC — popular routes fill fast, especially 3AC" },
  { icon: "🪪", text: "Varanasi: Carry original ID for some temple entry (Kashi Vishwanath)" },
  { icon: "👗", text: "Dress code: Cover shoulders and legs at all temples — carry a scarf/dupatta" },
  { icon: "🙏", text: "Manikarnika Ghat: Respect the space, no photography of cremations" },
  { icon: "📱", text: "No phones inside Ram Mandir sanctum — keep in locker outside" },
  { icon: "⚠️", text: "Beware touts: Especially near Varanasi ghats — negotiate auto/boat fares upfront" },
  { icon: "☀️", text: "Best season: Oct–March (cool weather) — March is perfect!" },
];

// ── Booking Links ──
export const bookingLinks = [
  { name: "IRCTC (Train Tickets)", url: "https://www.irctc.co.in", note: "Book 60 days in advance" },
  { name: "Ram Mandir Darshan", url: "https://srjbtkshetra.in", note: "Free Sugam Darshan e-pass" },
  { name: "RedBus (Bus Varanasi→Ayodhya)", url: "https://www.redbus.in", note: "UPSRTC ₹338+" },
  { name: "MakeMyTrip (Hotels)", url: "https://www.makemytrip.com", note: "Budget: ₹800–₹1,500/night" },
];

// ── Alternate Itineraries ──
export interface AlternateRoute {
  id: string;
  title: string;
  description: string;
  extraDays: number;
  extraCost: string;
  highlights: string[];
}

export const alternateRoutes: AlternateRoute[] = [
  {
    id: "agra",
    title: "Add Agra (Taj Mahal)",
    description: "8-Day Trip — Delhi → Agra → Varanasi → Ayodhya",
    extraDays: 1,
    extraCost: "₹800–₹1,500 per person",
    highlights: ["Taj Mahal", "Agra Fort", "Agra → Varanasi overnight train"],
  },
  {
    id: "prayagraj",
    title: "Add Prayagraj (Triveni Sangam)",
    description: "Stop between Varanasi & Ayodhya",
    extraDays: 1,
    extraCost: "₹2,000–₹3,000 total",
    highlights: ["Triveni Sangam (Ganga+Yamuna+Saraswati)", "Hanuman Mandir", "Anand Bhawan"],
  },
  {
    id: "direct-return",
    title: "Skip Delhi Return",
    description: "Ayodhya → Lucknow → Flight to Vijayawada",
    extraDays: 0,
    extraCost: "₹4,000–₹8,000/person (flight)",
    highlights: ["Saves 1 day of travel", "Direct flight options"],
  },
];
