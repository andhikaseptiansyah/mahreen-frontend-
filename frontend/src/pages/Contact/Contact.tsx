import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ClosingSection from "../../components/Cloasing-section/cloasing-section";
import Footer from "../../components/Footer/Footer";
import ContactHero from "./components/ContactHero";
import ContactMainSection from "./components/ContactMainSection";

const contactPageStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700;800&display=swap");

  .contact-page {
    width: 100%;
    min-width: 0;
    overflow-x: hidden;
    background: #050505;
  }
`;

const Contact = () => {
  useEffect(() => {
    document.title = "Hubungi Kami | Mahreen Indonesia";
  }, []);

  return (
    <div className="contact-page">
      <style data-component="contact-page">{contactPageStyles}</style>
      <Navbar />
      <main>
        <ContactHero />
        <ContactMainSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
