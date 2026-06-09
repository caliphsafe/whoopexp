import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Opportunity from "@/components/Opportunity";
import CreativeDirection from "@/components/CreativeDirection";
import ProductSystem from "@/components/ProductSystem";
import PackagingSystem from "@/components/PackagingSystem";
import DigitalExperience from "@/components/DigitalExperience";
import CampaignLaunch from "@/components/CampaignLaunch";
import PhysicalActivation from "@/components/PhysicalActivation";
import DirectorsNotes from "@/components/DirectorsNotes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Opportunity />
      <CreativeDirection />
      <ProductSystem />
      <PackagingSystem />
      <DigitalExperience />
      <CampaignLaunch />
      <PhysicalActivation />
      <DirectorsNotes />
      <Footer />
    </main>
  );
}
