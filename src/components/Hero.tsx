import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import jackRichards from "@/assets/jack-richards.jpeg";
import kevinMcManus from "@/assets/kevin-macmanus.jpeg";
import mohammedDahbi from "@/assets/mohammed-dahbi.png";
import { useEffect, useState } from "react";
import ParticleBackground from "./ParticleBackground";

const CONFERENCE_DATE = new Date("2026-06-24T09:00:00");
function useCountdown(target: Date) {
  const getTimeLeft = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, started: true };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor(diff / (1000 * 60 * 60) % 24),
      minutes: Math.floor(diff / (1000 * 60) % 60),
      seconds: Math.floor(diff / 1000 % 60),
      started: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

const pad = (n: number) => String(n).padStart(2, "0");

const Hero = () => {
  const { days, hours, minutes, seconds, started } = useCountdown(CONFERENCE_DATE);

  return (
    <section className="hero-bg relative flex items-center justify-center overflow-hidden py-20">
      {/* Solid deep navy background */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(135deg, hsl(220 42% 12%) 0%, hsl(220 38% 16%) 40%, hsl(220 42% 13%) 100%)"
        }} />
      

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-full h-[6px] bg-[hsl(220,45%,20%)] z-20" />

      {/* Particle background */}
      <ParticleBackground />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 z-[2]">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full border border-white/20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full border border-white/15" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>

          <p className="text-primary-foreground/70 font-body uppercase tracking-[0.3em] text-sm mb-4">
            ECOLE NORMALE SUPÉRIEURE — MOHAMMED V UNIVERSITY, RABAT
          </p>
          <p className="text-primary-foreground/60 font-body text-xs tracking-widest uppercase mb-2">
            THE DEPARTMENT OF FOREIGN LANGUAGES AND CULTURES
            <br /><br />
            THE EDUCATION, HUMANITIES, AND LANGUAGES RESEARCH LABORATORY (SESHUL)
            <br /><br />
            ORGANIZE
          </p>
          <p className="text-primary-foreground/60 font-body text-sm tracking-widest uppercase mb-8">THE FIRST ONSITE INTERNATIONAL CONFERENCE ON

          </p>
        </motion.div>

        <motion.h1 className="text-primary-foreground text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto md:text-5xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>

          Applied Linguistics and English Language Teaching{" "}
          <span className="italic font-medium">&</span> Learning
        </motion.h1>

        <motion.div className="w-24 h-1 gold-gradient mx-auto rounded-full mb-8" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.6 }} />


        <motion.p className="text-primary-foreground/80 font-serif italic max-w-3xl mx-auto mb-10 md:text-2xl text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>

          "Converging Disciplines, Evolving Classrooms: Applied Linguistics and ELT in Context"
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/90 font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>

          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-accent" />
            <span className="text-lg font-medium">June 24–25, 2026</span>
          </div>
          <span className="hidden sm:inline text-primary-foreground/30">|</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-lg">ENS, Mohammed V University, Rabat</span>
          </div>
        </motion.div>

        {/* Keynote Speakers Announcement */}
        <motion.div className="mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          <p className="text-accent font-body uppercase tracking-[0.3em] text-xs font-light mb-6">
            Keynote Speakers
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-14">
            {/* International Keynotes */}
            <div className="flex flex-col items-center text-center">
              <div className="relative flex justify-center">
                <div className="absolute z-0" style={{ width: 200, height: 200, top: -14, right: "calc(50% - 120px)", backgroundImage: "radial-gradient(circle, hsl(220 45% 60% / 0.14) 1.5px, transparent 1.5px)", backgroundSize: "14px 14px", maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)" }} />
                <img src={kevinMcManus} alt="Kevin McManus" className="relative z-10 w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] rounded-full object-cover shadow-lg shadow-black/25" />
              </div>
              <p className="text-primary-foreground font-serif text-lg sm:text-xl mt-3 mb-1">Kevin McManus</p>
              <p className="text-primary-foreground/50 font-body text-xs leading-relaxed max-w-[200px]">Ph.D., Professor of Linguistics, University of Pittsburgh</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative flex justify-center">
                <div className="absolute z-0" style={{ width: 280, height: 280, top: -20, right: "calc(50% - 170px)", backgroundImage: "radial-gradient(circle, hsl(220 45% 60% / 0.14) 1.5px, transparent 1.5px)", backgroundSize: "14px 14px", maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)" }} />
                <img src={jackRichards} alt="Jack C. Richards" className="relative z-10 w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] rounded-full object-cover shadow-lg shadow-black/25" />
              </div>
              <p className="text-primary-foreground font-serif text-xl sm:text-2xl mt-3 mb-1">Jack C. Richards</p>
              <p className="text-primary-foreground/50 font-body text-xs leading-relaxed max-w-[220px]">Internationally Acclaimed Scholar in Applied Linguistics</p>
            </div>


            {/* National Keynote */}
            <div className="flex flex-col items-center text-center">
              <div className="relative flex justify-center">
                <div className="absolute z-0" style={{ width: 200, height: 200, top: -14, right: "calc(50% - 120px)", backgroundImage: "radial-gradient(circle, hsl(220 45% 60% / 0.14) 1.5px, transparent 1.5px)", backgroundSize: "14px 14px", maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)" }} />
                <img src={mohammedDahbi} alt="Mohammed Dahbi" className="relative z-10 w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] rounded-full object-cover shadow-lg shadow-black/25" />
              </div>
              <p className="text-primary-foreground font-serif text-lg sm:text-xl mt-3 mb-1">Mohammed Dahbi</p>
              <p className="text-primary-foreground/50 font-body text-xs leading-relaxed max-w-[200px]">Professor Emeritus, Al Akhawayn University in Ifrane</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSceTZEa3ZPAl0AL6dIFhMPbnqSrd0DoasiokJCjkBMGrzSrIw/viewform?usp=sharing&ouid=106040740252824244633" target="_blank" rel="noopener noreferrer" className="inline-block gold-gradient text-accent-foreground font-semibold px-8 py-3 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg">
              Submit Abstract
            </a>
            <a href="#registration" className="inline-block border-2 border-accent text-accent font-semibold px-8 py-3 rounded-full text-lg hover:bg-accent/10 transition-colors">
              Register
            </a>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>

          {started ? <p className="text-primary-foreground/80 font-body uppercase tracking-widest text-sm">
              Conference Has Started
            </p> : <>
              <p className="text-primary-foreground/50 font-body uppercase tracking-[0.25em] text-xs mb-6">
                Conference Begins In
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                {[
              { value: days, label: "Days" },
              { value: hours, label: "Hours" },
              { value: minutes, label: "Minutes" },
              { value: seconds, label: "Seconds" }].
              map(({ value, label }, i) =>
              <div key={label} className="flex items-center gap-4 sm:gap-8">
                    <div className="flex flex-col items-center">
                      <span className="text-accent font-body font-semibold text-3xl sm:text-4xl tabular-nums leading-none">
                        {pad(value)}
                      </span>
                      <span className="text-primary-foreground/40 font-body uppercase tracking-widest text-xs mt-2">
                        {label}
                      </span>
                    </div>
                    {i < 3 &&
                <span className="text-accent/40 font-body text-2xl font-light self-start mt-1 hidden sm:inline">
                        ·
                      </span>
                }
                  </div>
              )}
              </div>
            </>
          }
        </motion.div>
      </div>
    </section>);

};

export default Hero;
