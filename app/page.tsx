import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RouteMap from "@/components/RouteMap";
import Itinerary from "@/components/Itinerary";
import LocationExplorer from "@/components/LocationExplorer";
import VideoSection from "@/components/VideoSection";
import BudgetSection from "@/components/BudgetSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <RouteMap />
      <Itinerary />
      <LocationExplorer />
      <VideoSection />
      <BudgetSection />
      <Footer />
    </main>
  );
}
