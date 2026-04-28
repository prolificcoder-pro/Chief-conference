import { motion } from "framer-motion";
import { useState } from "react";

const groupedScientificCommittee = [
  {
    university: "Mohammed V University, Rabat",
    members: [
      "Prof. Abderrazzaq Bazar (ENS)",
      "Prof. Abdesselam Ferrati (ENS)",
      "Prof. Adil Azhar (ENS)",
      "Prof. Basma Mounjid (ENS)",
      "Prof. Boutaina Guebba (ENS)",
      "Prof. Brahim Abouyassine (ENS)",
      "Prof. Elghazali Oumaima (INSIAS)",
      "Prof. Hamza Salih (ENS)",
      "Prof. Ikbal Zeddari (FLHS)",
      "Prof. Imane Nejjar (ENS)",
      "Prof. Islam El Kassimi (ENS)",
      "Prof. Jilali Nakkam (ENS)",
      "Prof. Malika Eddakhch (ENS)",
      "Prof. Nourddine Amrous (FLSH)",
      "Prof. Samira Dlimi (ENS)",
      "Prof. Youssef Baahmad (ENS)",
    ],
  },
  {
    university: "Ibn Tofail University, Kenitra",
    members: [
      "Prof. Abbou Abdelkader",
      "Prof. Ahmed Smirkou (FLLA)",
      "Prof. Houmman Hachoumi (EST)",
      "Prof. Mohamed Smirkou",
      "Prof. Youcef Hdouch (FLLA)",
    ],
  },
  {
    university: "Hassan I University, Settat",
    members: [
      "Prof. Abdelouahed Laachir (ESEFB)",
      "Prof. Bzioui Abdelhak (ENCG)",
    ],
  },
  {
    university: "Hassan II University, Casablanca",
    members: [
      "Prof. Ayoub Lotfy (FLHS)",
      "Prof. Nadri Youssef (FSJES)",
    ],
  },
  {
    university: "Sultan Moulay Slimane University, Beni Mellal",
    members: [
      "Prof. Fatima Zahra Boutabssil (FLSH)",
      "Prof. Hassan Zaid (FLHS)",
    ],
  },
  {
    university: "Moulay Ismail University, Meknes",
    members: ["Prof. Mustapha Mourchid (ENS)"],
  },
  {
    university: "Cadi Ayad University, Marrakech",
    members: ["Prof. Youssef Ait Kerroum (ENS)"],
  },
  {
    university: "Chouaib Doukkali University, El Jadida",
    members: ["Prof. Zaid Hmouri (ESEF)"],
  },
  {
    university: "Sidi Mohamed Ben Abdellah University, Fes",
    members: ["Prof. Zakaria Othmane (ENS)"],
  },
];



const organizingCommittee = [
"Prof. Adil Azhar",
"Prof. Imane Nejjar",
"Prof. Malika Eddakhch",
"Prof. Boutaina Guebba",
"Prof. Islam El Kassimi",
"Prof. Basma Mounjid",
"Prof. Hamza Salih",
"Prof. Abderrazzaq Bazar",
"Prof. Jilali Nakkam"];

const doctoralStudents = [
"Taha Ouadani",
"Youness Benbrik",
"Imane Ouldbouya"];

const tesolStudents = [
"Chuillaj Ghita",
"Fatime Zahra El Motacim",
"Hiba Labouihi",
"Kawtar Aqiq",
"Lamiae Berraho",
"Rahma Lamzawak",
"Raouya Hasnaoui",
"Youssef Elassiji"];



type Tab = "scientific" | "organizing";

const Committees = () => {
  const [tab, setTab] = useState<Tab>("scientific");

  return (
    <section id="committees" className="py-20 md:py-28 section-alt">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Committees</h2>
          <div className="w-16 h-1 gold-gradient mx-auto rounded-full mb-8" />

          <div className="inline-flex bg-card border border-border rounded-full p-1 gap-1">
            <button
              onClick={() => setTab("scientific")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              tab === "scientific" ?
              "gold-gradient text-accent-foreground shadow-sm" :
              "text-muted-foreground hover:text-foreground"}`
              }>

              Scientific Committee
            </button>
            <button
              onClick={() => setTab("organizing")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              tab === "organizing" ?
              "gold-gradient text-accent-foreground shadow-sm" :
              "text-muted-foreground hover:text-foreground"}`
              }>

              Organizing Committee
            </button>
          </div>
        </motion.div>

        {tab === "scientific" && (
          <motion.div
            className="columns-1 sm:columns-2 lg:columns-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {groupedScientificCommittee.map((group) => (
              <div
                key={group.university}
                className="bg-card border border-border/60 rounded-xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 break-inside-avoid mb-6 inline-block w-full relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 gold-gradient opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-serif font-bold text-foreground text-lg mt-1 mb-3 leading-tight">
                  {group.university}
                </h3>
                <div className="w-10 h-0.5 bg-primary/20 mb-5 group-hover:w-16 group-hover:bg-primary/40 transition-all duration-300" />
                <ul className="space-y-3">
                  {group.members.map((member) => (
                    <li key={member} className="text-muted-foreground text-sm flex items-start group/item">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary group-hover/item:scale-125 transition-all shrink-0" />
                      <span className="group-hover/item:text-foreground transition-colors leading-relaxed">{member}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}

        {tab === "organizing" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {organizingCommittee.map((name) => (
                <div
                  key={name}
                  className="bg-card border border-border/60 rounded-xl p-5 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full gold-gradient opacity-60 group-hover:opacity-100 transition-opacity" />
                  <p className="font-serif font-semibold text-foreground text-base ml-2">{name}</p>
                  <p className="text-muted-foreground text-xs mt-1.5 ml-2">Organizing Committee</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card/50 border border-border/60 rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                <h3 className="font-serif text-foreground font-bold text-xl mb-2">Doctoral Researchers</h3>
                <div className="w-12 h-0.5 bg-primary/20 mb-6" />
                <div className="grid sm:grid-cols-2 gap-4">
                  {doctoralStudents.map((name) => (
                    <div
                      key={name}
                      className="bg-background border border-border/50 rounded-lg p-4 hover:shadow-sm hover:border-primary/20 transition-all group"
                    >
                      <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{name}</p>
                      <p className="text-muted-foreground text-xs mt-1">Doctoral Candidate</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card/50 border border-border/60 rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                <h3 className="font-serif text-foreground font-bold text-xl mb-2">MA TESOL Students</h3>
                <div className="w-12 h-0.5 bg-accent/30 mb-6" />
                <div className="grid sm:grid-cols-2 gap-4">
                  {tesolStudents.map((name) => (
                    <div
                      key={name}
                      className="bg-background border border-border/50 rounded-lg p-4 hover:shadow-sm hover:border-accent/30 transition-all group"
                    >
                      <p className="font-semibold text-foreground text-sm group-hover:text-accent-foreground transition-colors">{name}</p>
                      <p className="text-muted-foreground text-xs mt-1">TESOL MA</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>);

};

export default Committees;