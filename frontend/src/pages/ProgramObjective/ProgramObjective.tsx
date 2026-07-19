import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ClosingSection from "../../components/Cloasing-section/cloasing-section";
import Hero from "./sections/Hero";
import Overview from "./sections/Overview";
import Timeline from "./sections/Timeline";
import ImpactResult from "./sections/ImpactResult";
import Documentation from "./sections/Documentation";
import Testimonial from "./sections/Testimonial";
import FAQ from "./sections/FAQ";
const ProgramObjective = () => {
  return (
    <>
      <Navbar />

      <main className="program-objective-content" id="program-objective">
        <Hero />
        <Overview />
        <Timeline />
        <ImpactResult />
        <Documentation />
        <Testimonial />
        <FAQ />
      </main>

      <ClosingSection />
      <Footer />
    </>
  );
};

export default ProgramObjective;
