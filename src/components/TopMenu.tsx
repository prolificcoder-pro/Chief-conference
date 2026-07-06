import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "keynote-speaker", label: "Speakers" },
  { id: "important-dates", label: "Dates" },
  { id: "call-for-papers", label: "Call for Papers" },
  { id: "streams", label: "Streams" },
  { id: "committees", label: "Committees" },
  { id: "testimonials", label: "Testimonials" },
  { id: "partners", label: "Partners" },
  { id: "contact", label: "Contact" },
];

const TopMenu = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      }
    }, 300);
  };

  // Lock scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ─── DESKTOP: elegant inline nav bar ─── */}
      <div className="absolute top-6 left-0 w-full z-[100] px-8 hidden md:flex justify-center">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-10"
        >
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollTo(e, id)}
              className="group relative text-[11px] font-medium tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors duration-300 py-1"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </motion.nav>
      </div>

      {/* ─── MOBILE: hamburger button ─── */}
      <div className="absolute top-5 right-5 z-[200] md:hidden">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
        >
          <Menu className="w-4 h-4 text-white" />
        </motion.button>
      </div>

      {/* ─── MOBILE: full-screen drawer ─── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 h-full w-[75vw] max-w-[320px] z-[400] md:hidden flex flex-col"
              style={{
                background: "linear-gradient(160deg, hsl(220 42% 10%) 0%, hsl(220 38% 14%) 100%)",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Close button */}
              <div className="flex items-center justify-between px-7 pt-8 pb-10">
                <span className="text-[9px] tracking-[0.35em] uppercase text-white/30 font-medium">
                  Navigation
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent/0 via-accent to-accent/0" />

              {/* Nav links */}
              <nav className="flex flex-col px-6 gap-1 flex-1">
                {sections.map(({ id, label }, i) => (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => scrollTo(e, id)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.045, duration: 0.35, ease: "easeOut" }}
                    className="group flex items-center gap-4 px-4 py-4 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-accent/0 group-hover:bg-accent transition-colors duration-200 flex-shrink-0" />
                    <span className="text-sm font-medium tracking-[0.15em] uppercase">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* Bottom decoration */}
              <div className="px-7 py-8">
                <div className="w-full h-px bg-white/5" />
                <p className="text-[9px] tracking-widest text-white/20 uppercase mt-4 text-center">
                  Applied Linguistics & ELT 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopMenu;
