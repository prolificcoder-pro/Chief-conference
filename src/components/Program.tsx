import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Search, MapPin, Clock, Download, ChevronRight, FileText, ChevronDown } from "lucide-react";

interface Presentation {
  title: string;
  speaker: string;
  affiliation?: string;
  time?: string;
}

interface Panel {
  title: string;
  venue: string;
  presentations: Presentation[];
}

interface TimeSlot {
  time: string;
  title: string;
  venue?: string;
  details?: string;
  isBreak?: boolean;
  panels?: Panel[];
}

const day1Schedule: TimeSlot[] = [
  {
    time: "08:00 – 09:00",
    title: "Registration",
    venue: "Ibnu Nafiss"
  },
  {
    time: "09:00 – 09:15",
    title: "Welcome Speeches",
    venue: "Ibnu Nafiss",
    details: "Director & Conference Chair"
  },
  {
    time: "09:15 – 10:15",
    title: "Keynote Speech 1: Dr. Jack C. Richards",
    venue: "Ibnu Nafiss",
    details: "The Future of the Past in Language Teaching"
  },
  {
    time: "10:15 – 11:15",
    title: "Keynote Speech 2: Dr. Mohamed Dahbi",
    venue: "Ibnu Nafiss",
    details: "A Life Journey with Applied Linguistics: From English Language Teaching to Literacy to Citizenship"
  },
  {
    time: "11:15 – 11:45",
    title: "Coffee Break",
    isBreak: true
  },
  {
    time: "11:45 – 13:15",
    title: "Parallel Sessions",
    panels: [
      {
        title: "Panel 1: Cognitive, Digital, and Multilingual Dimensions of EFL Learning",
        venue: "Ibnu Nafiss",
        presentations: [
          {
            time: "11:45 – 12:00",
            title: "Virtual Tabadul: Building Language-learning Community through Virtual Exchange",
            speaker: "Youcef Hdouch",
            affiliation: "Ibn Tofail University"
          },
          {
            time: "12:00 – 12:15",
            title: "Hidden Challenges in Language Learning: Neurological, Cognitive, and Psychosocial Perspectives on Students’ Performance",
            speaker: "Abdelaziz Zohri",
            affiliation: "ENCG Settat"
          },
          {
            time: "12:15 – 12:30",
            title: "Registered Multilingualism: A Construct for Moroccan Multilingual Competence and ELT Practice",
            speaker: "Mariam Dahbi",
            affiliation: "Mohammed 6 P University"
          },
          {
            time: "12:30 – 12:45",
            title: "Beyond Academic Dishonesty: Understanding Student AI Writing Practices in Moroccan Higher Education",
            speaker: "Doha Mtalasi & Nada Hour",
            affiliation: "Moulay Ismail University"
          },
          {
            time: "12:45 – 13:00",
            title: "From Guessing to Prompting: How AI Reshapes Metacognitive Strategy Use in Extensive Reading among Moroccan EFL Learners at Calliope Languages",
            speaker: "Hassan Mouchrif, Meryem Bennis, Amine Debbagh",
            affiliation: "Calliope"
          },
          {
            time: "13:00 – 13:15",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      },
      {
        title: "Panel 2: Evolving EFL Practices: Grammar, Lexis, and Teacher Emotion",
        venue: "La Salle des Actes",
        presentations: [
          {
            time: "11:45 – 12:00",
            title: "Shifting Linguistic Priorities: Moroccan Parents' Attitudes Towards English-French Language Competition",
            speaker: "Diaa Sardani & Zakaria Jamaati",
            affiliation: "Ibn Zohr University"
          },
          {
            time: "12:00 – 12:15",
            title: "Rethinking Lexical Development in EFL Classes: Experiential Learning through the Lens of Students’ Perceptions",
            speaker: "Atimad Chankoub",
            affiliation: "Ibn Tofail University"
          },
          {
            time: "12:15 – 12:30",
            title: "When Teachers Feel, Students Respond: A Multi-Dimensional Analysis of How Teacher Enjoyment, Anxiety, and Boredom Predict Student Attitudes",
            speaker: "Elmakki Amiri",
            affiliation: "Mohamed V University"
          },
          {
            time: "12:30 – 12:45",
            title: "Null Copula: the Neglected Facet of the Pro-drop Parameter in Moroccan EFL Learners",
            speaker: "Imane Errguig",
            affiliation: "Ibn Tofail University"
          },
          {
            time: "12:45 – 13:00",
            title: "Pedagogical Development in EFL Grammar Instruction: A Comparative Textbook Analysis of Morocco’s Focus and English Spotlight",
            speaker: "Wijdane Kasmi & Mostapha Zanzoun",
            affiliation: "S. M. Slimane"
          },
          {
            time: "13:00 – 13:15",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      },
      {
        title: "Panel 3: Language, Literature, and Societal Realities in Moroccan EFL",
        venue: "Salle Audiovisuel",
        presentations: [
          {
            time: "11:45 – 12:00",
            title: "Urban Linguistic Practices in Commercial Signage: A Bottom-Up Linguistic Landscape Study of Rabat.",
            speaker: "Hicham Darfouf & Karima Belghiti",
            affiliation: "Mohamed V University"
          },
          {
            time: "12:00 – 12:15",
            title: "Translating Diglossia in Al xubz al hâfî : Homogenization or Heterogenization? Case Study of English and French Translations",
            speaker: "Imane Daoudi & Mohammed Jadir",
            affiliation: "Hassan II University"
          },
          {
            time: "12:15 – 12:30",
            title: "Assessing Intercultural Awareness Among Moroccan PhD Students in English Studies.",
            speaker: "Jaouad Zaaimi",
            affiliation: "Ibn Tofail University"
          },
          {
            time: "12:30 – 12:45",
            title: "When Praise Hurts Learning: Exploring the Adverse Effects of Teacher Praise in Moroccan EFL Classrooms. The Case of Souss Massa Region",
            speaker: "Khadija Aberouch & Mohamed Akharraz",
            affiliation: "Ibn Zohr University"
          },
          {
            time: "12:45 – 13:00",
            title: "Literature-Based Language Instruction in Moroccan Higher Education: Practices, Perceptions, and Pedagogical Implications",
            speaker: "Lamiae Mamoune & Mohammed Bennis",
            affiliation: "Sidi Mohammed Ben Abdellah University"
          },
          {
            time: "13:00 – 13:15",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      }
    ]
  },
  {
    time: "13:15 – 14:30",
    title: "Lunch Break",
    isBreak: true
  },
  {
    time: "14:30 – 16:00",
    title: "Parallel Sessions",
    panels: [
      {
        title: "Panel 4: Language, Technology, and Classroom Dynamics in Higher Education",
        venue: "Ibnu Nafiss",
        presentations: [
          {
            time: "14:30 – 14:45",
            title: "How Can Aphasiology Inform Foreign Language Grammar Instruction? A Usage-Based Perspective",
            speaker: "Loubna Elouardi",
            affiliation: "Mohammed V University"
          },
          {
            time: "14:45 – 15:00",
            title: "Teacher Education for Global Englishes: Developing Awareness of Linguistic Diversity",
            speaker: "Mustapha Mourchid",
            affiliation: "Mly Ismail University"
          },
          {
            time: "15:00 – 15:15",
            title: "Rethinking Journalism Education in the Age of Artificial Intelligence: Pedagogical Transformations, Digital Challenges, and Emerging Practices among Master’s Students at ISIC, Rabat",
            speaker: "Abdelkrim Mouaziz & Ahmed Ennouari",
            affiliation: "ISIC, Rabat"
          },
          {
            time: "15:15 – 15:30",
            title: "Digital Orientalism: A Critical Discourse Analysis of AI-Generated Language About African and Arab Women",
            speaker: "Houda Abdou",
            affiliation: "Sidi Mohamed Ben Abdellah"
          },
          {
            time: "15:30 – 15:45",
            title: "Psychological Safety and Student Participation in EFL Classrooms",
            speaker: "Oumaima Elghazali",
            affiliation: "INSIAS, Mohammed V University"
          },
          {
            time: "15:45 – 16:00",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      },
      {
        title: "Panel 5: Identity, Culture, and Affective Dimensions in Moroccan Education",
        venue: "La salle des Actes",
        presentations: [
          {
            time: "14:30 – 14:45",
            title: "Emotional Language Choice Among English Studies Students in Morocco: UMI as a Case Study",
            speaker: "A. Chouari, C. Ettaji, C. Ouhayou, H. Chnani",
            affiliation: "My Ismail University"
          },
          {
            time: "14:45 – 15:00",
            title: "Moroccan Teachers on Screen: A Critical Pedagogy Reading of Teachers’ Representation in Contemporary Moroccan Cinema",
            speaker: "Hajar ElKassimi ElAlaoui",
            affiliation: "Mohammed V University"
          },
          {
            time: "15:00 – 15:15",
            title: "Between Representation and Responsiveness: Cultural Stereotypes and Culturally Responsive Pedagogy in Morocco's Spotlight 3",
            speaker: "Khalid Id-Babou",
            affiliation: "Ibn Zohr University"
          },
          {
            time: "15:15 – 15:30",
            title: "L2 motivational self-system, L2 anxiety, facilitating anxiety, debilitating anxiety, Moroccan EFL students",
            speaker: "Sara Moufki",
            affiliation: "Mohammed V University"
          },
          {
            time: "15:30 – 15:45",
            title: "Inclusive Education in the Global South: A Comparative Analysis of American and Moroccan IEP Rating Scales",
            speaker: "Fadoua Kadiri & A. J. Halliday",
            affiliation: "Mohammed V University"
          },
          {
            time: "15:45 – 16:00",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      },
      {
        title: "Panel 6: Professional Development, Inclusivity, and Teacher Education in EFL",
        venue: "Salle Audiovisuel",
        presentations: [
          {
            time: "14:30 – 14:45",
            title: "The effectiveness of Communities of Practice over Decontextualized Professional Development",
            speaker: "Walid Mima",
            affiliation: "Ibn Tofail University"
          },
          {
            time: "14:45 – 15:00",
            title: "A Systematic Review of Methodological and Psychometric Practices in Attitudinal Measurement: Evidence from Moroccan Educational Research",
            speaker: "Oussama Bellafdil & Said Elmouhtarim",
            affiliation: "Sultan My Slimane University"
          },
          {
            time: "15:00 – 15:15",
            title: "Foreign language anxiety, English-speaking anxiety, Moroccan EFL learners, FLCAS, PRPSA",
            speaker: "Zayneb Ouknider",
            affiliation: "Mohammed V University"
          },
          {
            time: "15:15 – 15:30",
            title: "Learner Autonomy and Digital Tool Engagement in EFL Learning",
            speaker: "Taha Ouadani",
            affiliation: "ENS-Rabat, Mohammed V University"
          },
          {
            time: "15:30 – 15:45",
            title: "Student Voices in Cooperative Learning: Exploring Pre-Service Teachers’ Perceptions of the Jigsaw Technique at ESEF, Kenitra, Morocco",
            speaker: "Ayoub Elbaioui & Latifa Hafidi Idrissi",
            affiliation: "Ibn Tofail University"
          },
          {
            time: "15:45 – 16:00",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      }
    ]
  },
  {
    time: "16:00 – 16:30",
    title: "Coffee Break",
    isBreak: true
  },
  {
    time: "16:30 – 18:00",
    title: "Parallel Sessions",
    panels: [
      {
        title: "Panel 7: Technology, Autonomy, and Inclusivity in Contemporary ELT",
        venue: "Ibnu Nafiss",
        presentations: [
          {
            time: "16:30 – 16:45",
            title: "The Impact of AI tools on EFL University Students’ Goal Setting and Planning: A Quantitative Study within a Self-Regulated Learning Framework",
            speaker: "Imane Ouldbouya",
            affiliation: "Mohammed V University"
          },
          {
            time: "16:45 – 17:00",
            title: "Exploring the Effects of a SPOC-Supported Flipped Classroom in an Introduction to Linguistics Course at Mohammed V University",
            speaker: "Fatima Elhamdi & Malika Eddakhch",
            affiliation: "Mohammed V University"
          },
          {
            time: "17:00 – 17:15",
            title: "AI-Powered Personalized Learning: Leveraging Artificial Intelligence and Universal Design for Learning to Promote Inclusivity in ELT Classrooms",
            speaker: "Ayah Dadi & P. Nassira Houat",
            affiliation: "University Mohamed 1st Oujda"
          },
          {
            time: "17:15 – 17:30",
            title: "Sign Language and Inclusive Pedagogy: A Systematic Review of Under-Documented Languages of the MENA Region",
            speaker: "Ibtissam Kasmi",
            affiliation: "Mohammed V University"
          },
          {
            time: "17:30 – 17:45",
            title: "Leveraging Digital Platforms to Enhance Autonomous English Learning in Higher Education Institutions.",
            speaker: "Mounir Beniche",
            affiliation: "Mohamed V University"
          },
          {
            time: "17:45 – 18:00",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      },
      {
        title: "Panel 8: AI, Virtual Reality, and Emerging Pedagogies in Higher Education",
        venue: "La salle des Actes",
        presentations: [
          {
            time: "16:30 – 16:45",
            title: "Mapping the Scientific Landscape of Artificial Intelligence in Language Education: A Bibliometric Analysis.",
            speaker: "Abdellatif Hali & Abderrahim Mimouni",
            affiliation: "Ibn Zohr University"
          },
          {
            time: "16:45 – 17:00",
            title: "Virtual Reality, Vocabulary Retention, Cognitive Load Theory, Moroccan EFL Context",
            speaker: "Zakaria Farid & Ayoub Loutfi",
            affiliation: "Hassan II University"
          },
          {
            time: "17:00 – 17:15",
            title: "Exploring the Conflict between Strands-Based Assessment and Professional Intuition in the Moroccan EFL Context",
            speaker: "Y. Ait Hammou & N. Trimasse & M. Elghazi",
            affiliation: "Ibn Zohr University"
          },
          {
            time: "17:15 – 17:30",
            title: "Students' Perceptions of AI-Based Oral Assessment in the Moroccan University EFL Context",
            speaker: "Oumaima Elhadri",
            affiliation: "Mohammed V University"
          },
          {
            time: "17:30 – 17:45",
            title: "Pedagogical Shaping of Teacher-Learner-AI Collaboration in Writing Instruction",
            speaker: "Elmahfoud Aachari",
            affiliation: "Cadi Ayad University"
          },
          {
            time: "17:45 – 18:00",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      },
      {
        title: "Panel 9: Classroom Dynamics, Teacher Beliefs, and Assessment Practices in EFL",
        venue: "Salle Audiovisuel",
        presentations: [
          {
            time: "16:30 – 16:45",
            title: "The Effect of Teacher-Student Class Dynamics on Student Engagement in Higher Education",
            speaker: "Ikram Ben Ajiba",
            affiliation: "Mohammed V University"
          },
          {
            time: "16:45 – 17:00",
            title: "Teaching English for Personal Development in Moroccan Higher Education: The Case of Primary Education at the ENS (UMI)",
            speaker: "Ahmed Chouari & Ouahiba Er-Raid",
            affiliation: "ENS (UMI)"
          },
          {
            time: "17:00 – 17:15",
            title: "Inclusive Education in Morocco for Students with Impairments: Exploring Teacher Preparedness, Practices, and Challenges in Secondary Mainstream Classrooms",
            speaker: "H. Draoui, S. Elmouhtarim & M. Achamrah",
            affiliation: "Soultan Mly Slimane"
          },
          {
            time: "17:15 – 17:30",
            title: "Bridging the Gap Between Assessment Theory and Practice: Implementing Test Specifications in Moroccan Higher Education English Studies Programs",
            speaker: "Anouar Mohamed Elkassri & Ouchaib Abdeelaziz",
            affiliation: "Hassan II University"
          },
          {
            time: "17:30 – 17:45",
            title: "The Role of Metacognitive regulation in Shaping Moroccan in-Service Teachers’ Self-Efficacy Beliefs",
            speaker: "A. Erjaila, B. Benzehaf & H. Zyad",
            affiliation: "Chouaib Dokkali University"
          },
          {
            time: "17:45 – 18:00",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      }
    ]
  }
];

const day2Schedule: TimeSlot[] = [
  {
    time: "09:00 – 10:00",
    title: "Keynote Speech 3: Dr. Kevin McManus",
    venue: "Ibnu Nafiss",
    details: "Explicit Instruction in Language Learning"
  },
  {
    time: "10:00 – 11:00",
    title: "Keynote Speech 4: Dr. Hani Hussein",
    venue: "Ibnu Nafiss",
    details: "Advantages and disadvantages of using automated assessment in evaluating writing essays in EFL context"
  },
  {
    time: "11:00 – 11:30",
    title: "Coffee Break",
    isBreak: true
  },
  {
    time: "11:30 – 12:10",
    title: "Featured Speakers Sessions",
    panels: [
      {
        title: "Panel 10: Institutional History, Legacy, and the Evolution of ELT",
        venue: "Ibnu Nafiss",
        presentations: [
          {
            time: "11:30 – 12:00",
            title: "Unfolding the Scroll: Reconstructing Teacher Education and ELT at the ENS-Rabat English Department, Between Memories and Facts",
            speaker: "Imane Nejjar",
            affiliation: "ENS, Mohamed V University"
          },
          {
            time: "12:00 – 12:10",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      },
      {
        title: "Panel 11: Literary Texts and Practical Approaches in EMI",
        venue: "La Salle des Actes",
        presentations: [
          {
            time: "11:30 – 12:00",
            title: "Literature as Language: Practical Fiction-Based Approaches for EMI Classrooms",
            speaker: "Matthew Cannella",
            affiliation: "RELO, U.S. Embassy in Rabat"
          },
          {
            time: "12:00 – 12:10",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      },
      {
        title: "Panel 12: Bridging Macro Policy and Classroom Materials in ELT",
        venue: "Salle Audiovisuel",
        presentations: [
          {
            time: "11:30 – 12:00",
            title: "Bridging Policy and Practice: Translating Competency-Based Language Reform into Teaching and Learning Materials",
            speaker: "Josephine Kennedy",
            affiliation: "Amideast Morocco"
          },
          {
            time: "12:00 – 12:10",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      }
    ]
  },
  {
    time: "12:15 – 13:45",
    title: "Parallel Sessions",
    panels: [
      {
        title: "Panel 13: Language Policy, Curriculum Design, and Cognitive Strategies in ELT",
        venue: "Ibnu Nafiss",
        presentations: [
          {
            time: "12:15 – 12:30",
            title: "Language Practices and Medium of Instruction in Moroccan STEM Higher Education",
            speaker: "Abderrazzak Bazar",
            affiliation: "Mohamed V University"
          },
          {
            time: "12:30 – 12:45",
            title: "The Employable English Major: ESP, Curriculum Reform, and the Moroccan Labor Market",
            speaker: "Abdelhak Bzioui",
            affiliation: "ENCG, Settat"
          },
          {
            time: "12:45 – 13:00",
            title: "A Pedagogical Framework for Inclusive Internationalization in Language Education: Aligning Curriculum Design with Global Learning Outcomes",
            speaker: "Youssef Nadri",
            affiliation: "Hassan II University"
          },
          {
            time: "13:00 – 13:15",
            title: "Vocabulary Recycling in Moroccan EFL Textbooks: A Corpus-Based Analysis",
            speaker: "Hiba Oumali",
            affiliation: "Mohammed V University"
          },
          {
            time: "13:15 – 13:30",
            title: "Reading Comprehension Strategies, Awareness, Instruction, Cognitive, Metacognitive",
            speaker: "Anouar Elmalihi",
            affiliation: "Mohamed V University"
          },
          {
            time: "13:30 – 13:45",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      },
      {
        title: "Panel 14: Classroom Practices, Scaffolding, and Agency",
        venue: "La Salle des Actes",
        presentations: [
          {
            time: "12:15 – 12:30",
            title: "Linguistic Realities vs. Monolingual Mandates: Fostering Pedagogical Agency Through Translanguaging at the ENS",
            speaker: "Boutaina Guebba",
            affiliation: "ENS, Mohammed V University"
          },
          {
            time: "12:30 – 12:45",
            title: "Investigating the Effect of Project-Based Assessment on Moroccan EFL Students’ Achievement",
            speaker: "Radouane Elghandour",
            affiliation: "Moulay Ismail University"
          },
          {
            time: "12:45 – 13:00",
            title: "Digital Assessment in Italian Language Higher Education: Evidence from Moroccan Universities",
            speaker: "Charifa Eddahani",
            affiliation: "Mohammed V University"
          },
          {
            time: "13:00 – 13:15",
            title: "Exploring the Conflict between Strands-Based Assessment and Professional Intuition in the Moroccan EFL Context",
            speaker: "Yassine Raha",
            affiliation: "Ibn Tofail University"
          },
          {
            time: "13:15 – 13:30",
            title: "Bidirectional Conversion Between Explicit and Implicit Scaffolding in Second Language Acquisition: A Systematic Literature Review.",
            speaker: "Mustapha Zahrane",
            affiliation: "Cadi Ayyad"
          },
          {
            time: "13:30 – 13:45",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      },
      {
        title: "Panel 15: Inclusion, Literacy, and Cognitive Dimensions",
        venue: "Salle Audiovisuel",
        presentations: [
          {
            time: "12:15 – 12:30",
            title: "Differential Outcomes in Inclusive Pedagogical Interventions for Children with Profound Intellectual Disability and Autism Spectrum Disorder: A Comparative Case Study Analysis in Morocco",
            speaker: "Oussama Boukhari & Bessma Hamama",
            affiliation: "Ibn Tofail University"
          },
          {
            time: "12:30 – 12:45",
            title: "Navigating Literacy in Transition: Experiences of Multilingual Students Affected by Migration in U.S. Secondary Schools",
            speaker: "Rabab Mesbahi",
            affiliation: "Mohamed V University"
          },
          {
            time: "12:45 – 13:00",
            title: "Revisiting the Role of Phonological Short-Term Memory on Second Language Vocabulary Acquisition: A Meta-Analysis.",
            speaker: "Mohamed Smirkou",
            affiliation: "Ibn Tofail University"
          },
          {
            time: "13:00 – 13:15",
            title: "Feedback Literacy and Student Agency in Higher Education Writing: Motivational Insights from a Moroccan University Context",
            speaker: "Loubna Abbou",
            affiliation: "Ibn Tofail University"
          },
          {
            time: "13:15 – 13:30",
            title: "Bridging Theory and Practice in EFL Teacher Education: Insights from Pre-service CRMEF Teacher Training Programs",
            speaker: "Rajaa Hassine",
            affiliation: "Ibn Zohr University"
          },
          {
            time: "13:30 – 13:45",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      }
    ]
  },
  {
    time: "13:45 – 15:00",
    title: "Lunch Break",
    isBreak: true
  },
  {
    time: "15:00 – 16:45",
    title: "Parallel Sessions",
    panels: [
      {
        title: "Panel 16: Flipped Classrooms, EMI, and Metacognition",
        venue: "Ibnu Nafiss",
        presentations: [
          {
            time: "15:00 – 15:15",
            title: "Exploring Student Perceptions of the Flipped Classroom in Reading Comprehension: The Case of Ibn Tofail University.",
            speaker: "Jillali Nakkam",
            affiliation: "Mohamed V University"
          },
          {
            time: "15:15 – 15:30",
            title: "EFL pre-service teachers’ profile, Lifelong learning, collaborative Professional Development.",
            speaker: "Fatima Zahra Elboussaidi",
            affiliation: "Ibn Tofail University"
          },
          {
            time: "15:30 – 15:45",
            title: "The Development of Critical Cultural Awareness of EFL students in a University Pre-service Teacher Education Program",
            speaker: "Adil Azhar",
            affiliation: "ENS, Mohammed V University"
          },
          {
            time: "15:45 – 16:00",
            title: "Foundations for EMI: Exploring EAP, Academic Engagement, and Learner Autonomy to Foster Internationalisation in Humanities’ EFL Instruction.",
            speaker: "C. Elbachery, M. Harrizi, S. Rguibi, R. Elkhayma",
            affiliation: "Hassan II University"
          },
          {
            time: "16:00 – 16:15",
            title: "Graphic Organizers and Metacognitive Awareness: A Question of Cognitive Impact",
            speaker: "Islam El Kassimi",
            affiliation: "ENS, Mohammed V University"
          },
          {
            time: "16:15 – 16:45",
            title: "Teaching Synthesis Writing through SOAR and Genre-Based Pedagogy in EFL Classrooms: The Case of My Youssef Preparatory Classes, Rabat",
            speaker: "Abderrazzak Belbouah",
            affiliation: "CPGE Moulay Youssef Rabat"
          },
          {
            time: "16:45 – 16:55",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      },
      {
        title: "Panel 17: Assessment, Translanguaging, and Writing Dynamics",
        venue: "La Salle des Actes",
        presentations: [
          {
            time: "15:00 – 15:15",
            title: "The Interplay of Motivation, Learning Approaches, and Strategies in Shaping Critical Thinking: A Biggs’ 3P Model Study of Moroccan University Students",
            speaker: "Wissal Zarhouni & Karima Belghiti",
            affiliation: "Mohammed V University"
          },
          {
            time: "15:15 – 15:30",
            title: "Multilingual Pedagogies in High Schools: The Role of Translanguaging in Student Motivation and Engagement",
            speaker: "Wiam Zamzem, H. Belhiah & A. Guaad",
            affiliation: "Mohamed V University"
          },
          {
            time: "15:30 – 15:45",
            title: "Proximity Under Pressure: Cognitive Load and the Dynamics of Cross-Linguistic Influence in L3 Acquisition",
            speaker: "Anass Jamili & Ikbal Zeddari",
            affiliation: "University Mohammed V"
          },
          {
            time: "15:45 – 16:00",
            title: "Assisted Independence? The Paradox of ChatGPT Use in EFL Writing Development",
            speaker: "Rime Zouiten",
            affiliation: "Hassan II University"
          },
          {
            time: "16:00 – 16:15",
            title: "The Status of EFL Listening Assessment in Moroccan Public High Schools: A Case of Negative Washback",
            speaker: "S.Y. El Baghdadi, Y. El Ouidani, L. Madaoui & N. Bahmani",
            affiliation: "Ibn Zohr University"
          },
          {
            time: "16:15 – 16:45",
            title: "Aligning Cognitive processing and Interculturally responsive pedagogy in Language Education",
            speaker: "K. Hicham, M. Belmihi, H. Ech-channouri, F. Masrar",
            affiliation: "Mohammed V University & Sultan Moulay Slimane University"
          },
          {
            time: "16:45 – 16:55",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      },
      {
        title: "Panel 18: Instructional Design, Identity, and Literacy",
        venue: "Salle Audiovisuel",
        presentations: [
          {
            time: "15:00 – 15:15",
            title: "Discovery-Based and Direct Instruction in EFL Grammar Teaching: A Classroom-Based Comparative Study",
            speaker: "Aali Ouzzine",
            affiliation: "CFIE"
          },
          {
            time: "15:15 – 15:30",
            title: "Rethinking Assessment Through Portfolios: A Study of Moroccan EFL University Students' Perceptions from Exam-Centered to Learning-Oriented Evaluation",
            speaker: "Samia Wardane",
            affiliation: "Hassan II University"
          },
          {
            time: "15:30 – 15:45",
            title: "AI, Heritage, and Identity: Perceptions of Moroccan Students on Blending Culture and Innovation in English Language Learning",
            speaker: "Zakaria Abdelmounim & Abdelaaziz El Bakkali",
            affiliation: "Sidi M Ben Abdellah"
          },
          {
            time: "15:45 – 16:00",
            title: "Predicting Reading Proficiency based on Lexical Knowledge_",
            speaker: "El Mehdi El Hamydy",
            affiliation: "Mohammed V University"
          },
          {
            time: "16:00 – 16:15",
            title: "Improving EFL Students' Hypertext Reading Comprehension Through Metacognitive Reading Strategy Training: A Quasi-Experimental Study",
            speaker: "Omar Taky-Eddine & Redouane Madaoui",
            affiliation: "Ibn Zohr University"
          },
          {
            time: "16:15 – 16:45",
            title: "Assessing Pragmatic Competence Through the Speech Act of Apologizing Among High School EFL Learners",
            speaker: "Khawla Lamghari",
            affiliation: "ENS, Mohammed V University"
          },
          {
            time: "16:45 – 16:55",
            title: "Discussion Session",
            speaker: "All Presenters"
          }
        ]
      }
    ]
  },
  {
    time: "16:55 – 17:20",
    title: "Closing Session",
    venue: "Ibnu Nafiss"
  }
];

interface Poster {
  title: string;
  speaker: string;
  affiliation: string;
}

const posterList: Poster[] = [
  {
    title: "Ensuring Continuous Feedback in the EFL Students’ Writing Development through the Use of Automated Writing Evaluation Tools",
    speaker: "Abdelmajid Ait El Moubarik",
    affiliation: "Cadi Ayyad University"
  },
  {
    title: "Exploring the Capacities and Complexities of Using AI-Powered Tools in English Language Teaching",
    speaker: "Ait Arab Zakaryae",
    affiliation: "Cadi Ayyad University"
  },
  {
    title: "Studio-Based Pedagogy and Soft Skills: Enhancing Graduate Employability",
    speaker: "Ben Moulay Youssef",
    affiliation: "Cady Ayyad University"
  },
  {
    title: "Metaphorical Conceptualisations of Doctoral Experience in Moroccan Digital Discourse: A Conceptual Metaphor Analysis",
    speaker: "Fatima Ezzahra Oubni",
    affiliation: "Sultan Moulay Slimane University"
  },
  {
    title: "Bridging the Gap: Social Media as a Scaffold for EFL Student–Professor Engagement",
    speaker: "Haytham Elaoufy",
    affiliation: "Moulay Smail University"
  },
  {
    title: "AI-Assisted Self-Assessment for Vocabulary Learning in EFL Classrooms",
    speaker: "Houda Stitou",
    affiliation: "UMI"
  },
  {
    title: "Is Organizational Weakness Language-Specific? A Small-Scale Comparison of L1 And L2 Writing Among First-Year EFL Students",
    speaker: "Ismail Saber",
    affiliation: "Moulay Ismail University"
  },
  {
    title: "The Classroom Brain and Inclusive Learning: Harnessing Collective Knowledge in Culturally and Linguistically Diverse Classrooms",
    speaker: "Jalal Zalzouli",
    affiliation: "Cadi Ayyad University"
  },
  {
    title: "Argument Structure of Speech Act Verbs in Moroccan Arabic: A Semantic Analysis of the Verb “ṭleb”",
    speaker: "Yasmina EL Haddari",
    affiliation: "Ibn Tofail University"
  }
];

const Program = () => {
  const [activeTab, setActiveTab] = useState<"day1" | "day2" | "posters">("day1");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);

  const getVenueColor = (venue?: string) => {
    if (!venue) return "border-muted text-muted-foreground bg-muted/5";
    const v = venue.toLowerCase();
    if (v.includes("nafiss")) {
      return "border-blue-500/20 text-blue-400 bg-blue-500/5";
    }
    if (v.includes("actes")) {
      return "border-amber-500/20 text-amber-400 bg-amber-500/5";
    }
    if (v.includes("audiovisuel")) {
      return "border-teal-500/20 text-teal-400 bg-teal-500/5";
    }
    return "border-accent/20 text-accent bg-accent/5";
  };

  const matchesSearch = (slot: TimeSlot | Poster) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    
    // Check main slot/poster details
    if ('title' in slot && slot.title.toLowerCase().includes(q)) return true;
    if ('speaker' in slot && slot.speaker.toLowerCase().includes(q)) return true;
    if ('affiliation' in slot && slot.affiliation?.toLowerCase().includes(q)) return true;
    if ('details' in slot && slot.details?.toLowerCase().includes(q)) return true;
    if ('venue' in slot && slot.venue?.toLowerCase().includes(q)) return true;

    // Check nested panels
    if ('panels' in slot && slot.panels) {
      return slot.panels.some(panel => 
        panel.title.toLowerCase().includes(q) ||
        panel.venue.toLowerCase().includes(q) ||
        panel.presentations.some(pres => 
          pres.title.toLowerCase().includes(q) ||
          pres.speaker.toLowerCase().includes(q) ||
          pres.affiliation?.toLowerCase().includes(q)
        )
      );
    }

    return false;
  };

  const schedule = activeTab === "day1" ? day1Schedule : day2Schedule;
  const filteredSchedule = schedule.filter(matchesSearch);
  const filteredPosters = posterList.filter(matchesSearch);

  const togglePanel = (panelTitle: string) => {
    if (expandedPanel === panelTitle) {
      setExpandedPanel(null);
    } else {
      setExpandedPanel(panelTitle);
    }
  };

  return (
    <section id="program" className="py-20 md:py-28 relative overflow-hidden bg-background">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-body uppercase tracking-[0.25em] text-xs font-semibold mb-3">
            Schedule Overview
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Conference Programme
          </h2>
          <div className="w-16 h-1 gold-gradient mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-sm md:text-base">
            Explore our curated schedule including keynote speeches, parallel panels across multiple venues, and specialized poster sessions.
          </p>
        </motion.div>

        {/* Tab Controls, Search & Actions */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 bg-muted/20 p-3 rounded-2xl border border-border/40 backdrop-blur-sm">
          {/* Tabs */}
          <div className="flex bg-muted/40 p-1 rounded-xl w-full lg:w-auto overflow-x-auto">
            <button
              onClick={() => { setActiveTab("day1"); setSearchQuery(""); }}
              className={`flex-1 lg:flex-initial px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === "day1"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Day 1 (June 24)
            </button>
            <button
              onClick={() => { setActiveTab("day2"); setSearchQuery(""); }}
              className={`flex-1 lg:flex-initial px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === "day2"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Day 2 (June 25)
            </button>
            <button
              onClick={() => { setActiveTab("posters"); setSearchQuery(""); }}
              className={`flex-1 lg:flex-initial px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === "posters"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Poster Session
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            {/* Download PDF button */}
            <a
              href="/conference-programme.pdf"
              download="Conference-Programme.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 bg-card hover:bg-muted/40 border border-border/40 hover:border-border/60 text-foreground text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 shadow-sm"
            >
              <Download className="w-4 h-4 text-accent" />
              <span>Download PDF Program</span>
            </a>

            {/* Search bar */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
              <input
                type="text"
                placeholder="Search presenter, topic, university..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-muted/30 hover:bg-muted/50 focus:bg-background border border-border/40 focus:border-accent/40 rounded-xl text-sm focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/50"
              />
            </div>
          </div>
        </div>

        {/* Schedule Display */}
        <div className="min-h-[400px]">
          {activeTab !== "posters" ? (
            <div className="space-y-6">
              {filteredSchedule.length > 0 ? (
                filteredSchedule.map((slot, index) => {
                  const hasPanels = !!slot.panels;
                  return (
                    <motion.div
                      key={`${slot.time}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className={`relative overflow-hidden rounded-2xl border border-border/30 p-5 md:p-6 transition-all duration-300 hover:border-border/60 ${
                        slot.isBreak
                          ? "bg-muted/10 border-dashed"
                          : "bg-card/45 backdrop-blur-md shadow-sm"
                      }`}
                    >
                      {/* Timeline Dot Indicator */}
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        {/* Time Column */}
                        <div className="flex items-center gap-2 md:w-36 shrink-0 text-accent font-semibold text-sm md:text-base">
                          <Clock className="w-4 h-4" />
                          <span>{slot.time}</span>
                        </div>

                        {/* Details Column */}
                        <div className="flex-1">
                          {slot.isBreak ? (
                            <div className="py-1">
                              <h3 className="text-base font-semibold text-muted-foreground italic">
                                {slot.title}
                              </h3>
                            </div>
                          ) : (
                            <div>
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <h3 className="text-lg md:text-xl font-bold text-foreground">
                                  {slot.title}
                                </h3>
                                {slot.venue && (
                                  <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${getVenueColor(slot.venue)}`}>
                                    <MapPin className="w-3 h-3" />
                                    {slot.venue}
                                  </span>
                                )}
                              </div>

                              {slot.details && (
                                <p className="text-muted-foreground text-sm font-body mb-2 leading-relaxed">
                                  {slot.details}
                                </p>
                              )}

                              {/* Parallel Sessions / Panels Grid */}
                              {hasPanels && slot.panels && (
                                <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                                  {slot.panels.map((panel, panelIdx) => {
                                    const isExpanded = expandedPanel === panel.title;
                                    const matchingPresentations = searchQuery
                                      ? panel.presentations.filter(pres => 
                                          pres.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                          pres.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                          pres.affiliation?.toLowerCase().includes(searchQuery.toLowerCase())
                                        )
                                      : panel.presentations;

                                    if (searchQuery && matchingPresentations.length === 0) return null;

                                    return (
                                      <div
                                        key={panelIdx}
                                        className="flex flex-col rounded-xl border border-border/40 bg-card p-4 transition-shadow hover:shadow-md"
                                      >
                                        <div className="mb-3">
                                          <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-2 border ${getVenueColor(panel.venue)}`}>
                                            <MapPin className="w-3 h-3" />
                                            {panel.venue}
                                          </span>
                                          <h4 className="text-sm font-bold text-foreground leading-tight min-h-[40px]">
                                            {panel.title}
                                          </h4>
                                        </div>

                                        <button
                                          onClick={() => togglePanel(panel.title)}
                                          className="flex items-center justify-between w-full text-xs font-semibold py-2 px-3 bg-muted/30 hover:bg-muted/50 rounded-lg text-muted-foreground hover:text-foreground transition-all duration-300"
                                        >
                                          <span>{isExpanded ? "Hide Presentations" : `View Presentations (${matchingPresentations.length})`}</span>
                                          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                                            <ChevronDown className="w-3.5 h-3.5" />
                                          </motion.div>
                                        </button>

                                        <AnimatePresence>
                                          {isExpanded && (
                                            <motion.div
                                              initial={{ height: 0, opacity: 0 }}
                                              animate={{ height: "auto", opacity: 1 }}
                                              exit={{ height: 0, opacity: 0 }}
                                              className="overflow-hidden mt-3"
                                            >
                                              <div className="space-y-3 pt-2 border-t border-border/30">
                                                {matchingPresentations.map((pres, presIdx) => (
                                                  <div key={presIdx} className="text-xs">
                                                    <div className="flex items-start gap-1.5 text-accent font-semibold mb-1">
                                                      <Clock className="w-3 h-3 mt-0.5" />
                                                      <span>{pres.time}</span>
                                                    </div>
                                                    <p className="font-semibold text-foreground leading-snug mb-0.5">
                                                      "{pres.title}"
                                                    </p>
                                                    <p className="text-muted-foreground font-body">
                                                      {pres.speaker} {pres.affiliation && <span className="text-[10px] opacity-80">({pres.affiliation})</span>}
                                                    </p>
                                                  </div>
                                                ))}
                                              </div>
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="text-center py-12 bg-card/25 rounded-2xl border border-border/30">
                  <p className="text-muted-foreground text-sm font-body">No matching presentations found for your search query.</p>
                </div>
              )}
            </div>
          ) : (
            /* Posters View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosters.length > 0 ? (
                filteredPosters.map((poster, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex flex-col justify-between p-5 rounded-2xl border border-border/30 bg-card/45 backdrop-blur-md transition-all duration-300 hover:shadow-md hover:border-border/60"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-4 h-4 text-accent" />
                        <span className="text-xs font-bold text-accent uppercase tracking-wider">Poster Presentation</span>
                      </div>
                      <h3 className="text-base font-bold text-foreground leading-snug mb-3">
                        "{poster.title}"
                      </h3>
                    </div>
                    <div className="pt-3 border-t border-border/30">
                      <p className="text-sm font-semibold text-foreground">{poster.speaker}</p>
                      <p className="text-xs text-muted-foreground font-body">{poster.affiliation}</p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 bg-card/25 rounded-2xl border border-border/30">
                  <p className="text-muted-foreground text-sm font-body">No matching poster presentations found.</p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="w-12 h-px bg-border mt-14 mx-auto" />
        <p className="text-muted-foreground/60 font-body text-xs italic text-center mt-6">
          Venues: Ibnu Nafiss, La Salle des Actes, and Salle Audiovisuel (ENS, Rabat).
        </p>
      </div>
    </section>
  );
};

export default Program;
