import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

const guidelines = [
  { label: "Language", text: "Contributors are invited to submit their proposals in English" },
  { label: "Length & Format", text: "Abstracts must be submitted as a single paragraph not exceeding 300 words." },
  { label: "Font", text: "Times New Roman, 12-point." },
  { label: "Spacing", text: "Double-spaced." },
  { label: "Alignment", text: "Left-aligned (not justified)." },
  { label: "Margins", text: "1 inch (2.54 cm) on all sides." },
  { label: "Title", text: "Bold, centered, and in Title Case." },
  { label: "Presentation Preference", text: "Clearly indicate your preferred format (Paper or Poster) at the time of submission." },
  { label: "Content & Structure", text: "Abstracts should clearly outline the problem statement and theoretical framework. Where applicable, include methodology and findings." },
  { label: "Keywords", text: <>3–5 keywords, italicized label <em>Keywords:</em> followed by terms separated by commas.</> },
  { label: "References", text: "If included, formatted according to APA 7th edition." },
  { label: "Author Bio", text: "A brief biographical note (maximum 100 words) is required for each author, providing full name(s), institutional affiliation(s), and email address." },
];

const CallForPapers = () => (
  <section id="call-for-papers" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6 max-w-5xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Call for Papers
        </h2>
        <div className="w-16 h-1 gold-gradient mx-auto rounded-full" />
      </motion.div>

      <motion.div
        className="bg-card rounded-xl p-8 border border-border shadow-sm mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-6 h-6 text-accent" />
          <h3 className="text-xl font-bold text-foreground">Abstract Guidelines</h3>
        </div>

        <div className="space-y-3 text-muted-foreground font-body">
          {guidelines.map((item, i) => (
            <p key={i} className="leading-relaxed">
              <strong className="text-foreground">{item.label}:</strong>{" "}
              {item.text}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="hero-bg rounded-xl p-8 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ExternalLink className="w-8 h-8 text-accent mb-4" />
        <h3 className="text-lg font-bold text-primary-foreground mb-2">Submit Your Abstract</h3>
        <p className="text-primary-foreground/70 text-sm mb-6 font-body">
          Abstracts and manuscripts are submitted via Google Form.
        </p>
        <a
          href="https://forms.gle/GWLPS2uycepcQnnCA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block gold-gradient text-accent-foreground font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg"
        >
          Submit Your Abstract
        </a>
      </motion.div>
    </div>
  </section>
);

export default CallForPapers;
