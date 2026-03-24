import { motion } from "framer-motion";
import partnerIpda from "@/assets/partner-ipda.jpg";
import ensLogo from "@/assets/ens-logo.png";
import partnerTesol from "@/assets/partner-tesol.jpeg";
import partnerAmideast from "@/assets/partner-amideast.png";
import partnerCalliope from "@/assets/partner-calliope.png";
import partnerCnrst from "@/assets/partner-cnrst-logo.png";


const partners = [
  { src: ensLogo, alt: "ENS Rabat", url: "" },
  { src: partnerTesol, alt: "TESOL Master Program", url: "" },
  { src: partnerIpda, alt: "IPDA", url: "https://ipda.org.uk/" },
  { src: partnerAmideast, alt: "AMIDEAST", url: "" },
  { src: partnerCalliope, alt: "Calliope", url: "" },
  { src: partnerCnrst, alt: "CNRST", url: "" },

];

// Duplicate for seamless infinite scroll
const scrollItems = [...partners, ...partners, ...partners];

const Partners = () => (
  <section id="partners" className="py-20 md:py-28 bg-background overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Institutional Partners
        </h2>
        <div className="w-16 h-1 gold-gradient mx-auto rounded-full" />
      </motion.div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div className="flex animate-partner-scroll">
          {scrollItems.map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 sm:px-12 flex items-center justify-center"
            >
              {partner.url ? (
                <a href={partner.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-all duration-300"
                  />
                </a>
              ) : (
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-all duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Partners;
