import { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "keynote-speaker", label: "Keynote Speaker" },
  { id: "important-dates", label: "Important Dates" },
  { id: "call-for-papers", label: "Call for Papers" },
  { id: "streams", label: "Conference Streams" },
  { id: "committees", label: "Committees" },
  { id: "partners", label: "Partners" },
  { id: "contact", label: "Contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md"
        aria-label="Open navigation menu"
      >
        {open ? (
          <X className="w-6 h-6 text-accent" />
        ) : (
          <Menu className="w-6 h-6 text-accent" />
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <nav
            className="absolute top-14 left-4 bg-card/95 backdrop-blur-md rounded-lg border border-border/50 py-3 px-1 min-w-[200px]"
            onClick={(e) => e.stopPropagation()}
          >
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNav;
