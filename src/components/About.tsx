import { motion } from "framer-motion";

const About = () => (
  <section id="why-it-matters" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Why This Conference Matters
        </h2>
        <div className="w-16 h-1 gold-gradient mx-auto rounded-full mb-10" />

        <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
          <p>
            Amid unprecedented global interconnectedness, the boundaries between Applied Linguistics,
            English Language Teaching, and Media and Cultural Studies are dissolving — giving rise to
            dynamic, adaptive learning ecosystems. What were once discrete disciplines now intersect in
            ways that reshape how language is understood, taught, and experienced, reflecting the
            complexity of contemporary education.
          </p>
          <p>
            Applied Linguistics provides the theoretical foundations for effective pedagogy. English
            Language Teaching translates these insights into practical classroom strategies adapted to
            diverse educational contexts. Media and Cultural Studies illuminate the social and cultural
            contexts in which language operates, shaping learners' engagement and interpretation.
            Together, these fields form a comprehensive, evolving framework that drives innovation in
            language teaching and learning — bridging theory, practice, and real-world relevance.
          </p>
          <p>
            This conference offers a vibrant platform for exploration, exchange, and critical dialogue.
            Researchers, educators, practitioners, and doctoral candidates are invited to share
            cutting-edge findings, present original research, discuss emerging debates, and showcase
            transformative classroom practices that respond to the realities of globalized education.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
