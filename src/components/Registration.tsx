import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";

const Registration = () => (
  <section id="registration" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Registration & Fees
        </h2>
        <div className="w-16 h-1 gold-gradient mx-auto rounded-full" />
      </motion.div>

      <motion.div
        className="bg-card rounded-xl p-8 border border-border shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <CreditCard className="w-6 h-6 text-accent" />
          <h3 className="text-xl font-bold text-foreground">Conference Fees</h3>
        </div>
        <div className="space-y-4">
          <div className="p-4 rounded-lg section-alt text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">PhD Students</p>
            <p className="text-2xl font-bold text-foreground">400 <span className="text-base font-normal">MAD</span></p>
          </div>
          <div className="p-4 rounded-lg section-alt text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Professors / Faculty</p>
            <p className="text-2xl font-bold text-foreground">600 <span className="text-base font-normal">MAD</span></p>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Includes 2 coffee breaks, lunch, and certificate of participation.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Registration;
