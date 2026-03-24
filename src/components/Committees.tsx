import { motion } from "framer-motion";
import { useState } from "react";

const scientificCommittee = [
{ name: "Prof. Abbou Abdelkader", affiliation: "Ibn Tofail University, Kenitra" },
{ name: "Prof. Abdelouahed Laachir", affiliation: "Hassan I University, ESEFB, Settat" },
{ name: "Prof. Abderrazzaq Bazar", affiliation: "Mohammed V University, ENS, Rabat" },
{ name: "Prof. Abdesselam Ferrati", affiliation: "Mohammed V University, ENS, Rabat" },
{ name: "Prof. Adil Azhar", affiliation: "Mohammed V University, ENS, Rabat" },
{ name: "Prof. Ahmed Smirkou", affiliation: "Ibn Tofail University, FLLA, Kenitra" },
{ name: "Prof. Ayoub Lotfy", affiliation: "FLHS, Hassan II University, Casablanca" },
{ name: "Prof. Basma Mounjid", affiliation: "Mohammed V University, ENS, Rabat" },
{ name: "Prof. Boutaina Guebba", affiliation: "Mohammed V University, ENS, Rabat" },
{ name: "Prof. Brahim Abouyassine", affiliation: "Mohammed V University, ENS, Rabat" },
{ name: "Prof. Bzioui Abdelhak", affiliation: "ENCG, Hassan I University, Settat" },
{ name: "Prof. Elghazali Oumaima", affiliation: "INSIAS, Mohammed V University, Rabat" },
{ name: "Prof. Fatima Zahra Boutabssil", affiliation: "Sultan Moulay Slimane University, FLSH, Beni Mellal" },
{ name: "Prof. Hamza Salih", affiliation: "Mohammed V University, ENS, Rabat" },
{ name: "Prof. Hassan Zaid", affiliation: "FLHS, Sultan Moulay Slimane University, Beni Mellal" },
{ name: "Prof. Houmman Hachoumi", affiliation: "Ibn Tofail University, EST, Kenitra" },
{ name: "Prof. Ikbal Zeddari", affiliation: "FLHS, Mohammed V University, Rabat" },
{ name: "Prof. Imane Nejjar", affiliation: "Mohammed V University, ENS, Rabat" },
{ name: "Prof. Islam El Kassimi", affiliation: "Mohammed V University, ENS, Rabat" },
{ name: "Prof. Jilali Nakkam", affiliation: "Mohammed V University, ENS, Rabat" },
{ name: "Prof. Malika Eddakhch", affiliation: "Mohammed V University, ENS, Rabat" },
{ name: "Prof. Mohamed Smirkou", affiliation: "Ibn Tofail University, Kenitra" },
{ name: "Prof. Mustapha Mourchid", affiliation: "Moulay Ismail University, ENS, Meknes" },
{ name: "Prof. Nadri Youssef", affiliation: "FSJES, Hassan II University, Casablanca" },
{ name: "Prof. Nourddine Amrous", affiliation: "Mohamed V University, FLSH" },
{ name: "Prof. Samira Dlimi", affiliation: "ENS, Mohammed V University, Rabat" },
{ name: "Prof. Youcef Hdouch", affiliation: "Ibn Tofail University, FLLA, Kenitra" },
{ name: "Prof. Youssef Ait Kerroum", affiliation: "Cadi Ayad University, ENS, Marrakech" },
{ name: "Prof. Youssef Baahmad", affiliation: "Mohammed V University, ENS, Rabat" },
{ name: "Prof. Zaid Hmouri", affiliation: "Chouaib Doukkali University, ESEF, El Jadida" },
{ name: "Prof. Zakaria Othmane", affiliation: "ENS, Sidi Mohamed Ben Abdellah University, Fes" }];



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
    <section className="py-20 md:py-28 section-alt">
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

        {tab === "scientific" &&
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}>

            {scientificCommittee.map((member) =>
          <div
            key={member.name}
            className="bg-card border border-border rounded-lg p-4 hover:shadow-sm transition-shadow">

                <p className="font-semibold text-foreground text-sm">{member.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{member.affiliation}</p>
              </div>
          )}
          </motion.div>
        }

        {tab === "organizing" &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {organizingCommittee.map((name) =>
            <div
              key={name}
              className="bg-card border border-border rounded-lg p-4 hover:shadow-sm transition-shadow">

                  <p className="font-semibold text-foreground text-sm">{name}</p>
                  <p className="text-muted-foreground text-xs mt-1">
</p>
                </div>)}
            </div>
            <div className="bg-card border border-border rounded-lg p-6 mb-4">
              <p className="text-foreground font-semibold text-sm mb-4">Doctoral Researchers Organizing Committee</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {doctoralStudents.map((name) =>
              <div
                key={name}
                className="bg-background border border-border rounded-lg p-3 hover:shadow-sm transition-shadow">
                    <p className="font-semibold text-foreground text-sm">{name}</p>
                    <p className="text-muted-foreground text-xs mt-1">Doctoral Candidate</p>
                  </div>
              )}
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground font-semibold text-sm mb-4">MA TESOL Organizing Committee</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {tesolStudents.map((name) =>
              <div
                key={name}
                className="bg-background border border-border rounded-lg p-3 hover:shadow-sm transition-shadow">
                    <p className="font-semibold text-foreground text-sm">{name}</p>
                    <p className="text-muted-foreground text-xs mt-1">TESOL MA</p>
                  </div>
              )}
              </div>
            </div>
          </motion.div>
        }
      </div>
    </section>);

};

export default Committees;