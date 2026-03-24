import { useEffect, useState } from "react";
import chellahDrones from "@/assets/chellah-drones.jpg";
import kasbahUdayas from "@/assets/kasbah-udayas.jpg";
import hassanTower from "@/assets/hassan-tower.jpg";
import hassanTower2 from "@/assets/hassan-tower-2.jpg";
import rabatLandmark from "@/assets/rabat-landmark.jpg";

const SLIDER_IMAGES = [
  { src: rabatLandmark, alt: "Rabat historic landmark" },
  { src: hassanTower, alt: "Hassan Tower and mosaic fountain" },
  { src: kasbahUdayas, alt: "Kasbah of the Udayas alleyway" },
  { src: chellahDrones, alt: "Chellah walls illuminated at night" },
  { src: hassanTower2, alt: "Hassan Tower close-up view" },
];

const SLIDE_INTERVAL = 6500;

const RabatSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "85vh" }}>
      {/* Top fade from hero navy into slider */}
      <div className="absolute top-0 left-0 right-0 h-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to bottom, hsl(220 42% 13%), transparent)" }} />
      {SLIDER_IMAGES.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{
            opacity: currentSlide === i ? 1 : 0,
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
            style={{
              animation: currentSlide === i ? "hero-zoom 7s ease-in-out forwards" : "none",
            }}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDER_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              currentSlide === i
                ? "bg-white scale-110"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default RabatSlider;
