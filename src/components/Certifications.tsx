import { motion } from "motion/react";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "AI Beginner",
    issuer: "Digital Talent Scholarship",
    date: "2025",
    id: "1959900840-1230/FGA/BLSDM.Komdigi/2025",
    icon: Award,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    link: "https://mapi.sdmdigital.id/get-file?path=output_signed/195-1149-9900/793c5d86-c812-4f2d-a7ca-77792f1ab1f1.pdf&disk=dts-storage-sertifikat",
  },
  {
    title: "Junior Web Developer",
    issuer: "BNSP - Badan Nasional Sertifikasi Profesi",
    date: "2024",
    id: "62019 2513 4 0031124 2024.",
    icon: Award,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    link: "https://drive.google.com/file/d/1Xg_0rcSAf6m0qCICUW1ixIAzHIXJO_Ku/view?usp=sharing",
  },
  {
    title: "Data Analytics & Visualization: Using Excel and Python",
    issuer: "Udemy",
    date: "2024",
    id: "UC-ce5f35ab-df97-4f44-bd84-cd8f5be63502.",
    icon: Award,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    link: "https://drive.google.com/file/d/1O-E1ZdNUsvyYKUoHAP-HXEfY3h6X8uy6/view?usp=sharing",
  },
  {
    title: "IC3 Digital Literacy - Level 1",
    issuer: "Certiport - A Pearson VUE Business",
    date: "2024",
    id: "wbQ8X-FaRT",
    icon: Award,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    link: "https://drive.google.com/file/d/1EDbNBxFRpA965z2sNkuDFHYZhWqZbrEp/view?usp=sharing",
  },
  {
    title: "SAP Analytics Cloud dan SAP Build Apps (Data Science & App Development)",
    issuer: "ASEAN Data Science Explorers 2024",
    date: "2024",
    id: "880/SERT/24-DSI-04/V/2024",
    icon: Award,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    link: "https://drive.google.com/file/d/1d2qWtXGVKtWD6IHCG73KJcaAbnHqUj6J/view?usp=sharing",
  },
  {
    title: "Junior Web Developer",
    issuer: "Digital Talent Scholarship",
    date: "2023",
    id: "880/SERT/24-DSI-04/V/2024",
    icon: Award,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    link: "https://drive.google.com/file/d/1NmetcH3wkmkXykfU9cWXG2eTloHqP_O0/view?usp=sharing",
  },
  {
    title: "Introduction to Data Science with Python",
    issuer: "DQLab",
    date: "2024",
    id: "-",
    icon: Award,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    link: "https://drive.google.com/file/d/1SM_5Q3ptBrYz-PxdFhxHmEFonOGjwi7z/view?usp=sharing",
  },
  {
    title: "Pahlawan Muda Digital untuk UMKM Indonesia (Pandu Indonesia)",
    issuer: "Digital Talent Scholarship",
    date: "2023",
    id: "880/SERT/24-DSI-04/V/2024",
    icon: Award,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    link: "https://drive.google.com/file/d/1qaQyIeIoBvP5celLwxnDZSkC7QgQ9On7/view?usp=sharing",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-[#030712] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-indigo-500 font-semibold tracking-wider uppercase text-sm mb-4">
            Achievements
          </motion.h2>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Professional <span className="text-gradient">Certifications</span>
          </motion.h3>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-2xl mx-auto">
            Continuous learning and validation of expertise in software quality and project management.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-3xl glass glass-hover flex flex-col sm:flex-row gap-6 items-start sm:items-center group"
            >
              <div className={`w-16 h-16 shrink-0 rounded-2xl ${cert.bg} flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                <cert.icon className={cert.color} size={32} />
              </div>

              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </a>
                  <CheckCircle2 size={16} className="text-indigo-500 shrink-0" />
                </div>
                <p className="text-slate-400 text-sm mb-3">{cert.issuer}</p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                  <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">ID: {cert.id}</span>
                  <span>Issued: {cert.date}</span>
                </div>
              </div>

              {/* <a href="#" className="p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-indigo-600 transition-all shrink-0" aria-label="View Certificate">
                <ExternalLink size={20} />
              </a> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
