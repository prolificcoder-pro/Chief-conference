import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Globe, Brain } from "lucide-react";

const streams = [
  {
    icon: BookOpen,
    title: "Applied Linguistics & Language Studies",
    topics: [
      "Second Language Acquisition",
      "Sociolinguistics & Language in Society",
      "Natural Language Processing",
      "Discourse Analysis",
      "Semantics and Pragmatics",
    ],
  },
  {
    icon: GraduationCap,
    title: "Language Teaching & Learning",
    topics: [
      "Innovative Pedagogies in Language Education",
      "Literature-based Language Instruction",
      "Critical Thinking & Literary Analysis",
      "Digital & Technology-Enhanced Learning",
      "Task-Based Language Teaching (TBLT)",
      "Classroom Linguistic Diversity",
      "Assessment Theory & Practice",
      "Curriculum Engineering",
      "Inclusion, Disability & Special Education",
    ],
  },
  {
    icon: Globe,
    title: "Language, Culture & Media",
    topics: [
      "Digital Media's Impact on Linguistic Practices",
      "Language & Identity in Online Platforms",
      "Culturally Responsive Pedagogy",
      "Cultural Stereotypes in Advertising",
      "Film & Television for Language Acquisition",
      "Linguistic Evolution in Online Communities",
    ],
  },
  {
    icon: Brain,
    title: "Emotional & Cognitive Dimensions of Language Learning",
    topics: [
      "Cognitive Processing in (L2) Language Development",
      "Social-Emotional Learning and Interpersonal Cognition",
      "Motivation, Agency, and Identity Formation",
      "Neurolinguistics & Language Disorders",
      "The Impact of Trauma and Adversity on Cognitive-Emotional Development",
    ],
  },
];

const Streams = () => (
  <section id="streams" className="py-20 md:py-28 section-alt">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Conference Streams
        </h2>
        <div className="w-16 h-1 gold-gradient mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {streams.map((stream, i) => (
          <motion.div
            key={stream.title}
            className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center">
                <stream.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{stream.title}</h3>
            </div>
            <ul className="space-y-2">
              {stream.topics.map((topic) => (
                <li key={topic} className="text-muted-foreground font-body flex items-start gap-2">
                  <span className="text-accent mt-1.5 text-xs">●</span>
                  {topic}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Streams;
