import { motion } from "framer-motion";

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
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-7xl px-4">
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-10 py-4 px-8"
      >
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => scrollTo(e, id)}
            className="group relative text-[9px] sm:text-[10px] md:text-[11px] font-medium tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors duration-300 py-1"
          >
            {label}
            {/* Elegant animated underline on hover */}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
        ))}
      </motion.nav>
    </div>
  );
};

export default TopMenu;
