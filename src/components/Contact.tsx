import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6 max-w-4xl">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact & Inquiries</h2>
        <div className="w-16 h-1 gold-gradient mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Coordinators */}
        <motion.div
          className="bg-card rounded-xl p-8 border border-border shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-foreground mb-6">Conference Coordinators</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Boutaina Guebba</p>
                <a
                  href="mailto:boutaina.guebba@ens.um5.ac.ma"
                  className="text-accent text-sm hover:underline break-all"
                >
                  boutaina.guebba@ens.um5.ac.ma
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Adil Azhar</p>
                <a
                  href="mailto:adil.azhar@ens.um5.ac.ma"
                  className="text-accent text-sm hover:underline break-all"
                >
                  adil.azhar@ens.um5.ac.ma
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">General Inquiries</p>
                <a
                  href="mailto:infoalconference@gmail.com"
                  className="text-accent text-sm hover:underline break-all"
                >
                  infoalconference@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Submit */}
        <motion.div
          className="hero-bg rounded-xl p-8 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <ExternalLink className="w-8 h-8 text-accent mb-4" />
          <h3 className="text-lg font-bold text-primary-foreground mb-2">Submit Your Abstract</h3>
          <p className="text-primary-foreground/70 text-sm mb-6 font-body">
            Abstracts and manuscripts are submitted via Google Form.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSceTZEa3ZPAl0AL6dIFhMPbnqSrd0DoasiokJCjkBMGrzSrIw/viewform?usp=sharing&ouid=106040740252824244633"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient text-accent-foreground font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            Submission Form
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
