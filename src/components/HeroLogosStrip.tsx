import { motion } from "framer-motion";
import ensLogo from "@/assets/ens-logo.png";
import partnerTesol from "@/assets/partner-tesol.jpeg";
import partnerIpda from "@/assets/partner-ipda.jpg";

const logos = [
  { src: ensLogo, alt: "ENS Rabat" },
  { src: partnerTesol, alt: "TESOL Master Program" },
  { src: partnerIpda, alt: "IPDA" },
];

const HeroLogosStrip = () => (
  <motion.div
    className="mb-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
      {logos.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          className="h-10 sm:h-12 w-auto object-contain opacity-[0.88] grayscale brightness-[2] contrast-[0.9]"
        />
      ))}
    </div>
    <div className="w-32 h-px bg-primary-foreground/15 mx-auto mt-5" />
  </motion.div>
);

export default HeroLogosStrip;
