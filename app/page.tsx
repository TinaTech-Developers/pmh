import About from "./components/About";
import Clients from "./components/Clients";
import ClientSlider from "./components/ClientSlider";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import ImpactStories from "./components/ImpactStories";
import Promotion from "./components/Promotion";
import ServicesSlider from "./components/ServicesSlider";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <About />
      <WhyUs />

      <ImpactStories />
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="col-span-2 flex flex-col items-center pt-10 ">
          <h2 className=" text-blue-500 font-semibold ">| Expertise</h2>
          <h1 className="text-2xl font-semibold text-[#003366] mt-4">
            Our Services
          </h1>
          <div className="flex items-center justify-between gap-1 mt-2  mb-10 inline-bloc">
            <span className="h-1 w-1 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-4 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-10 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-16 bg-blue-500 rounded-full"></span>
          </div>
        </div>
      </div>

      <ServicesSlider />
      <Clients />
      <ClientSlider />
      <Promotion />
    </>
  );
}
