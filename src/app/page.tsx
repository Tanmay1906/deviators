import HeroSection from "@/components/HomePage/HeroSection";
import AboutSection from "@/components/HomePage/AboutSection";
import TeamShowcase from "@/components/HomePage/TeamShowcase";
import events from "@/data/event";
import ImageCarousel from "@/components/HomePage/ImageCarousel";
import GroupPicture from "@/assets/group_pic.png";

export default function Home() {
  const images = [
    GroupPicture,
    ...events.map((event) => event.images[event.index]),
  ];

  return (
    <>
      <main className="relative">
        {/* Content Sections */}
        <HeroSection />
        <AboutSection />
        <TeamShowcase />
        <ImageCarousel images={images} />
      </main>
    </>
  );
}
