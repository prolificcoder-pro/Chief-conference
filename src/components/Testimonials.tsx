import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    quote: "Honestly, it would have been a much more monumental project without the creativity, guidance, professionalism and tenacity of the team!!!",
    author: "André Fasciola",
    role: "Conference Participant",
  },
  {
    id: 2,
    quote: "An extraordinary experience that brought together brilliant minds. The organization and attention to detail were second to none.",
    author: "Dr. Sarah Jenkins",
    role: "Keynote Presenter",
  },
  {
    id: 3,
    quote: "The level of discourse and the seamless execution of the event exceeded all our expectations. Truly a benchmark for academic gatherings.",
    author: "Prof. Michael Chen",
    role: "Research Fellow",
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Optional: Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      z: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      z: 0,
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#FAF8F5] overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] text-center mb-4">
            Testimonials
          </h2>
          <div className="w-16 h-1 gold-gradient mx-auto rounded-full" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative min-h-[400px] sm:min-h-[300px] flex items-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-16 lg:gap-24 absolute"
            >
              {/* Quote Area (Left) */}
              <div className="flex-1 md:w-2/3">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-[1.3] text-[#1c1c1c] tracking-tight">
                  "{testimonialsData[currentIndex].quote}"
                </p>
              </div>

              {/* Attribution Area (Right) */}
              <div className="md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right pt-2 md:pt-4">
                
                {/* Blank Person Profile / Avatar */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-black/5 border border-black/10 flex items-center justify-center shadow-inner">
                    <User className="w-6 h-6 text-black/20" />
                  </div>
                  {/* Reserved space for logo text if needed in the future */}
                  <span className="text-[9px] tracking-widest uppercase text-black/40 mt-3 font-semibold h-4">
                    {/* Placeholder text area */}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex flex-col items-center md:items-end">
                  <span className="text-[#1c1c1c] font-serif text-lg md:text-xl">
                    {testimonialsData[currentIndex].author}
                  </span>
                  <span className="text-black/60 text-xs md:text-sm font-serif mt-1">
                    {testimonialsData[currentIndex].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="mt-16 flex items-center justify-between md:justify-end gap-6 md:gap-8">
          
          {/* Dot Indicators */}
          <div className="flex gap-2 mr-auto md:mr-12">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex 
                    ? "w-8 h-2 bg-accent" 
                    : "w-2 h-2 bg-black/10 hover:bg-black/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 hover:bg-black/5 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 hover:bg-black/5 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
