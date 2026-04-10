import RabatSlider from "@/components/RabatSlider";
import FacebookMockup from "@/components/FacebookMockup";
import Hero from "@/components/Hero";
import About from "@/components/About";
import KeynoteSpeaker from "@/components/KeynoteSpeaker";
import Streams from "@/components/Streams";
import CallForPapers from "@/components/CallForPapers";
import ImportantDates from "@/components/ImportantDates";
import Registration from "@/components/Registration";
import Committees from "@/components/Committees";
import Contact from "@/components/Contact";
import MapSection from "@/components/MapSection";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import OnsiteNotice from "@/components/OnsiteNotice";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <main>
    <MobileNav />
    <Hero />
    <RabatSlider />
    <About />
    <KeynoteSpeaker />
    <ImportantDates />
    <CallForPapers />
    <Streams />
    <Registration />
    <Committees />
    <Contact />
    <Partners />
    <FacebookMockup />
    <MapSection />
    <Footer />
    <WhatsAppButton />
    <OnsiteNotice />
  </main>
);

export default Index;
