import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const ImportantDates = () =>
  <section id="important-dates" className="py-20 md:py-28 section-alt">
    <div className="container mx-auto px-6 max-w-5xl">
      <motion.div
        className="hero-bg rounded-xl p-8 md:p-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>

        <div className="flex items-center justify-center gap-3 mb-8">
          <Calendar className="w-6 h-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">Important Dates</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative group flex flex-col items-center justify-center">
            <p className="text-primary-foreground/60 text-sm uppercase tracking-wide mb-2 group-hover:text-primary-foreground/80 transition-colors">Submission Deadline</p>
            <div className="relative flex flex-col items-center">
              <div className="absolute -top-3 -right-8 rotate-[15deg] group-hover:rotate-[20deg] group-hover:scale-110 transition-all duration-300 z-10">
                <span className="bg-gradient-to-r from-red-600 to-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-lg border border-red-400/30">
                  Extended
                </span>
              </div>
              <p className="text-primary-foreground/40 font-serif text-sm font-semibold line-through decoration-red-500/80 decoration-[2px] mb-1">
                May 15
              </p>
              <div className="relative mt-0.5">
                <span className="absolute -inset-1 bg-accent/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <p className="relative text-accent font-serif text-xl font-bold px-4 py-1 rounded-full border border-accent/30 bg-accent/10 shadow-sm">
                  May 23
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-primary-foreground/60 text-sm uppercase tracking-wide mb-1">Review Period</p>
            <p className="text-primary-foreground font-serif text-lg font-semibold">May 23-29</p>
          </div>
          <div>
            <p className="text-primary-foreground/60 text-sm uppercase tracking-wide mb-1">Acceptance Notification</p>
            <p className="text-primary-foreground font-serif text-lg font-semibold">May 30</p>
          </div>
          <div>
            <p className="text-primary-foreground/60 text-sm uppercase tracking-wide mb-1">Final Program Published</p>
            <p className="text-primary-foreground font-serif text-lg font-semibold">Early June</p>
          </div>
          <div>
            <p className="text-primary-foreground/60 text-sm uppercase tracking-wide mb-1">Conference Date</p>
            <p className="text-primary-foreground font-serif text-lg font-semibold">June 24–25, 2026</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>;
export default ImportantDates;