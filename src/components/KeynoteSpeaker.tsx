import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import jackRichards from "@/assets/jack-richards.jpeg";
import kevinMcManus from "@/assets/kevin-macmanus.jpeg";
import mohammedDahbi from "@/assets/mohammed-dahbi.png";
import newSpeaker1 from "@/assets/speaker-4.jpg";
import newSpeaker2 from "@/assets/speaker-5.jpg";

interface SpeakerCardProps {
  image: string;
  name: string;
  label: string;
  subtitle: string;
  bio: string;
  imageClassName?: string;
}

const SpeakerCard = ({ image, name, label, subtitle, bio, imageClassName = "" }: SpeakerCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center text-center w-full md:w-auto md:max-w-[260px]">
      <p className="text-accent font-body uppercase tracking-[0.2em] text-xs font-light mb-4">
        {label}
      </p>
      <img
        src={image}
        alt={name}
        className={`w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg shadow-black/10 mb-3 ${imageClassName}`}
      />

      {/* Expand/Collapse Arrow */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="group mb-3 p-1 rounded-full transition-all duration-300 hover:bg-accent/10 focus:outline-none"
        aria-label={expanded ? `Collapse ${name} biography` : `Expand ${name} biography`}
      >
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <ChevronDown
            className="w-[18px] h-[18px] text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:scale-110 group-hover:drop-shadow-[0_0_4px_hsl(var(--accent)/0.5)]"
          />
        </motion.div>
      </button>

      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
        {name}
      </h3>
      <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-[220px]">
        {subtitle}
      </p>

      {/* Expandable Biography Panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden w-full mt-4"
          >
            <div className="bg-muted/50 rounded-lg shadow-sm p-4 text-left text-muted-foreground font-body text-sm leading-relaxed whitespace-pre-wrap">
              {bio.split('\n').map((line, i) => {
                const colonMatch = line.match(/^(\s*)([\w\s&]+):(.*)/);
                if (colonMatch && colonMatch[2].trim().length > 0 && colonMatch[2].trim().length < 40) {
                  return (
                    <span key={i}>
                      {colonMatch[1]}<strong className="text-foreground">{colonMatch[2].trim()}:</strong>{colonMatch[3]}
                      {'\n'}
                    </span>
                  );
                }
                return <span key={i}>{line}{'\n'}</span>;
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const speakersData = [
  {
    image: kevinMcManus,
    name: "Kevin McManus",
    label: "International Keynote",
    subtitle: "Ph.D., Professor of Linguistics, University of Pittsburgh",
    bio: "Dr. Kevin McManus is a Professor of Linguistics at the University of Pittsburgh whose research explores the cognitive and interactional dimensions of second language development. His work lies at the intersection of second language acquisition, psycholinguistics, and language pedagogy, with particular attention to the processes that shape how additional languages are learned in instructed settings.\n\nResearch Focus:\n\nDr. McManus’s scholarship investigates how cognitive factors, learning conditions, instructional practices, and interactional contexts work together to support and shape linguistic development.\n\nMorphosyntactic Development:\n\nA central strand of his research examines the acquisition of morphosyntax, particularly grammatical domains such as tense, aspect, and mood.\n\nInput and Interaction:\n\nHis work has contributed significantly to understanding how variations in linguistic input, learner interaction, and patterns of language use influence the trajectory of second language development.\n\nCrosslinguistic Influence:\n\nDr. McManus also maintains a sustained research interest in crosslinguistic influence, exploring how prior linguistic knowledge affects new language learning and how instruction can mitigate negative transfer effects.\n\nFurther Information:\n\nFor more details about his research and publications, visit: https://kmcmanusuk.github.io/",
  },
  {
    image: jackRichards,
    name: "Jack C. Richards",
    label: "International Keynote",
    subtitle: "Internationally Acclaimed Professor and Scholar in Applied Linguistics",
    bio: "Dr. Jack C. Richards is an internationally renowned applied linguist and educator whose work has had a profound impact on English language teaching methodology worldwide. His scholarship and textbooks have shaped language teaching practices across the globe for several decades.\n\nScholarly Contributions:\n\nDr. Richards has authored and edited over 150 books and articles in the fields of applied linguistics and language pedagogy. Among his most influential works are Error Analysis (1974), Approaches and Methods in Language Teaching (2014, with Ted Rodgers), and Curriculum Development in Language Teaching (2017).\n\nImpact on Language Education:\n\nHis research and pedagogical frameworks have played a central role in defining modern approaches to English language teaching, teacher education, and curriculum design worldwide.\n\nInternational Recognition:\n\nDr. Richards’ contributions to applied linguistics have been widely recognized. He has received numerous honorary professorships, an honorary Doctor of Literature from Victoria University in 2011, and the Arts Foundation of New Zealand’s Award for Patronage in 2014.\n\nFurther Information:\n\nFor more information visit: https://professorjackrichards.com",
  },
  {
    image: mohammedDahbi,
    name: "Mohammed Dahbi",
    label: "National Keynote",
    subtitle: "Professor Emeritus, Al Akhawayn University in Ifrane",
    bio: "Dr. Mohammed Dahbi is a prominent Moroccan academic and administrator who has played a foundational role at Al Akhawayn University (AUI) in Ifrane since its inception. Currently serving as Professor Emeritus, his career is defined by high-level leadership and scholarly contributions to linguistics and social sciences.\n\nAcademic Leadership at AUI:\n\nDr. Dahbi has held several of the most senior administrative positions within the university:\n\nProvost & VPAA: He served as the Vice President for Academic Affairs (Provost), where he was instrumental in shaping the university's academic standards and curricula.\n\nDean of SHSS: He was the long-standing Dean of the School of Humanities and Social Sciences (SHSS), a role he was appointed to in 2002.\n\nFoundational Figure: He is recognized as a \"respectful personality\" who marked the university from its early days as a project to its current status as an established institution.\n\nEducation and Scholarly Work\n\nAcademic Background: He holds a Doctor of Philosophy (PhD) and is an expert in Linguistics.\n\nResearch Focus: His work often explores the intersection of education, linguistics, and social responsibility. He has co-authored research on the university's role as a \"Social Actor\" and its impact on K-12 education in Morocco.\n\nMultilingualism: His research frequently addresses literacy in Morocco's multilingual environment, examining the roles of Arabic, Amazigh, French, and Spanish in the educational system.",
  },
  {
    image: newSpeaker1,
    name: "Imane Nejjar",
    label: "National Featured Speaker",
    subtitle: "Professor of Education, Mohamed V University",
    bio: "Imane Nejjar completed her Bachelor of Arts in English from Faculty of Letters and Human Sciences in Rabat. She received her Master of Arts degree in English and American Literature (1986-88) from Old Dominion University, Norfolk, VA, USA. She participated in an online course on Shaping the Way WeTeach English with the University of Oregon in 2006 and took part in a training on Cooperative Learning and Kagan Structures in Orlando, Florida in July 2011. She participated in many MATE conferences and some international conferences on ELT such as the Skills Conference in Egypt (2007), and the IATEFL conference in Glasgow (2012). The main subjects she has taught are American and British literature, Composition, EFL, Educational Psychology, and Learning Technologies for the EFL classroom. Her main interests are Educational Psychology, ELT, British, American, French & Arabic literatures, Comparative Education and ICT.",
    imageClassName: "object-top",
  },
  {
    image: newSpeaker2,
    name: "Josephine Clark Kennedy",
    label: "International Featured Speaker",
    subtitle: "Deputy Vice President for English Language and Teacher Development Programs, Amideast",
    bio: "Josephine Clark Kennedy is Deputy Vice President for English Language and Teacher Development Programs at Amideast, where she leads the organization’s strategy, strategic growth, and technical direction for English language learning and teacher development programs across the Middle East and North Africa and beyond. She oversees initiatives related to English language education, teacher professional development, curriculum and assessment design, instructional design and digital learning, and institutional partnerships.\n\nMs. Kennedy brings more than 25 years of international experience in TESOL, education leadership, and workforce and youth development. Since joining Amideast in 2021 as Regional Director for English Language Programs, she has led regional strategy, program quality, and large-scale K–12 and higher education initiatives across multiple country offices. Prior to Amideast, she held senior leadership roles with World Learning and SIT Graduate Institute, including Divisional Vice President for Global Education and Development, where she oversaw education and teacher development programs across more than 20 country offices and supported online learning initiatives reaching participants in approximately 170 countries.\n\nThroughout her career, Ms. Kennedy has led large-scale education reform, teacher training, and English language initiatives funded by organizations including USAID, the U.S. Department of State, UNICEF, and the World Bank. Her work has focused on communicative language teaching, literacy, inclusive education, curriculum reform, teacher professional development, and systems strengthening across diverse educational contexts.\n\nA recognized leader in the TESOL field, Ms. Kennedy is a past President and Conference Chair of TESOL Arabia and has served in leadership roles with TESOL International Association and other professional organizations.\n\nMs. Kennedy holds a Master of Arts in Teaching from SIT Graduate Institute and pursued doctoral studies in TESOL Education at the University of Exeter in the United Kingdom.",
  },
];

const KeynoteSpeaker = () => (
  <section id="keynote-speaker" className="py-20 md:py-28 section-alt">
    <div className="container mx-auto px-6 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Keynote Speakers
        </h2>
        <div className="w-16 h-1 gold-gradient mx-auto rounded-full mb-14" />

        <div className="flex flex-col gap-10 md:gap-14 items-center w-full">
          {/* Top Row: First 3 Keynotes */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-12 lg:gap-16">
            {speakersData.slice(0, 3).map((speaker, i) => (
              <SpeakerCard key={speaker.name} {...speaker} />
            ))}
          </div>

          {/* Featured Speakers Title */}
          <div className="w-full flex flex-col items-center pt-4 md:pt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Featured Speakers
            </h2>
            <div className="w-16 h-1 gold-gradient mx-auto rounded-full" />
          </div>

          {/* Bottom Row: Next 2 Keynotes */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-12 lg:gap-16 max-w-3xl w-full">
            {speakersData.slice(3, 5).map((speaker, i) => (
              <SpeakerCard key={speaker.name} {...speaker} />
            ))}
          </div>
        </div>

        <div className="w-12 h-px bg-border mt-14 mx-auto" />
        <p className="text-muted-foreground/60 font-body text-sm italic text-center mt-6">
          More details to follow in the program schedule.
        </p>
      </motion.div>
    </div>
  </section>
);

export default KeynoteSpeaker;
