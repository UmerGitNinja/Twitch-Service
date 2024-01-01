import ClientResultComponent from "@/components/ClientResultComponent";
import DropDownComponent from "@/components/DropDownComponent";
import GetStartedComponent from "@/components/GetStartedComponent";
import Hero from "@/components/Hero";
import PerformanceComponent from "@/components/PerformanceComponent";
import SliderComponent from "@/components/SliderComponent";
import SocialComponent from "@/components/SocialComponent";
import WhyViewpalComponent from "@/components/WhyViewpalComponent";
import SearchComponent from "@/components/SearchComponent";
import Footer from "@/components/footer";
import { VideoComponent } from "@/components/VideoComponent";

export default function Home() {
  return (
    <main className="bg-[#101010] text-white">
      <Hero />
      <SliderComponent/>
      <WhyViewpalComponent />
      <VideoComponent/>
      <div className="px-4 md:px-16 lg:px-32">
      <GetStartedComponent />
      <ClientResultComponent /> 
      <PerformanceComponent />
      <SearchComponent/>
      <DropDownComponent />
      <SocialComponent />
      </div>
      <Footer />
    </main>
  );
}
