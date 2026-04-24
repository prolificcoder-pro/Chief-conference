import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import partnerIpda from "@/assets/partner-ipda.jpg";
import ensLogo from "@/assets/ens-logo.png";
import partnerTesol from "@/assets/partner-tesol.jpeg";
import partnerAmideast from "@/assets/partner-amideast.png";
import partnerCalliope from "@/assets/partner-calliope.png";
import partnerCnrst from "@/assets/partner-cnrst-logo.png";
import partnerMwn from "@/assets/partner-mwn.png";

const partners = [
  { src: ensLogo, alt: "ENS Rabat", url: "" },
  { src: partnerTesol, alt: "TESOL Master Program", url: "" },
  { src: partnerIpda, alt: "IPDA", url: "https://ipda.org.uk/" },
  { src: partnerAmideast, alt: "AMIDEAST", url: "" },
  { src: partnerCalliope, alt: "Calliope", url: "" },
  { src: partnerCnrst, alt: "CNRST", url: "" },
  { src: partnerMwn, alt: "Morocco World News", url: "https://www.moroccoworldnews.com/" },
];

// Duplicate to ensure there is enough content to scroll through
const scrollItems = [...partners, ...partners, ...partners];

const Partners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    let animationId: number;
    let autoScrollSpeed = 1;
    
    const loop = () => {
      // Only auto-scroll if user isn't actively navigating
      if (el && !isScrollingRef.current) {
        el.scrollLeft += autoScrollSpeed;
        const oneThird = el.scrollWidth / 3;
        
        // Seamless infinite loop
        if (el.scrollLeft >= oneThird * 2) {
          el.scrollLeft -= oneThird;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += oneThird;
        }
      }
      animationId = window.requestAnimationFrame(loop);
    };
    
    animationId = window.requestAnimationFrame(loop);
    return () => window.cancelAnimationFrame(animationId);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      isScrollingRef.current = true;
      const { current } = scrollRef;
      const scrollAmount = current.offsetWidth / 2;
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
      
      // Resume auto scroll after the smooth scroll finishes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 600);
    }
  };

  return (
    <section id="partners" className="py-20 md:py-28 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 relative">
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

        <div className="relative group flex items-center justify-center max-w-6xl mx-auto">
          {/* Left Simple Arrow Button */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-2 md:-left-8 z-20 p-3 md:p-4 rounded-full bg-white dark:bg-zinc-800 border border-muted shadow-lg hover:bg-accent text-zinc-600 dark:text-zinc-300 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto items-center py-4 w-full [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
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

          {/* Right Simple Arrow Button */}
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-2 md:-right-8 z-20 p-3 md:p-4 rounded-full bg-white dark:bg-zinc-800 border border-muted shadow-lg hover:bg-accent text-zinc-600 dark:text-zinc-300 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
