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
          <div>
            <p className="text-primary-foreground/60 text-sm uppercase tracking-wide mb-1">Submission Deadline</p>
            <p className="text-primary-foreground font-serif text-lg font-semibold">May 15</p>
          </div>
          <div>
            <p className="text-primary-foreground/60 text-sm uppercase tracking-wide mb-1">Review Period</p>
            <p className="text-primary-foreground font-serif text-lg font-semibold">May 15-29</p>
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