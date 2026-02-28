import { motion } from "motion/react";
import { Github, ExternalLink, ShieldCheck, Search, Database } from "lucide-react";
import { sub } from "motion/react-client";
import { text } from "stream/consumers";

const projects = [
  {
    title: "OBU 3.0",
    subtitle: "Transjakarta",
    desc: "OBU 3.0 is an application installed on an On-Board Unit (OBU), a hardware device mounted inside vehicles such as Transjakarta buses. The application supports navigation and operational communication during daily operations.",
    image: "src/components/asset/OBU RN 1.png",
    tags: ["Manual Testing", "Mobile App", "Postman", "MQTT"],
    // github: "https://github.com",
    // demo: "https://example.com",
    icon: ShieldCheck,
  },
  {
    title: "OBU Mikrotrans",
    subtitle: "Transjakarta",
    desc: "OBU  Mikrotrans is an application installed on an On-Board Unit (OBU), a hardware device mounted inside vehicles such as mikrotrans. The application supports navigation and operational communication during daily operations.",
    image: "src/components/asset/OBU N.png",
    tags: ["Manual Testing", "Mobile App", "Postman", "MQTT"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: ShieldCheck,
  },
  {
    title: "Dashboard SYNTRA",
    subtitle: "Transjakarta",
    desc: "SYNTRA is a digital platform and internal fleet control (smart mobility) technology used by Transjakarta to integrate daily operations, from vehicle inspections and driver scheduling to real-time monitoring. The test focused on the download voice announcer feature.",
    image: "src/components/asset/Voice Announcher.png",
    tags: ["Manual Testing", "Webite", "Postman"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: ShieldCheck,
  },
  {
    title: "Dashboard TJ App",
    subtitle: "Transjakarta",
    desc: "The TJ App Dashboard is a visual tool for monitoring, analyzing, and taking action on the TJ:Transjakarta app. The focus here is on automating several features.",
    image: "src/components/asset/Dashboard TJ.png",
    tags: ["Automation Testing", "Website", "Cypress"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: ShieldCheck,
  },
  {
    title: "Sigap App",
    subtitle: "Transjakarta",
    desc: "Sigap App is an application used to report and follow up on incidents that occur within Transjakarta operations. It allowing management to monitor, track, and respond to issues in a timely manner to ensure service quality.",
    image: "src/components/asset/Sigap app.png",
    tags: ["Manual Testing", "Mobile App", "Postman"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: ShieldCheck,
  },
  {
    title: "Dashboard Indogadai",
    subtitle: "Zenmirai",
    desc: "Dashboard Indogadai is a monitoring and reporting platform for Indogadai operations. It provides real-time insights into operational performance and key metrics.",
    image: "src/components/asset/Indogadai.png",
    tags: ["Manual Testing", "Web App", "Swagger", "DBeaver"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: ShieldCheck,
  },
  {
    title: "Smart Obat Ikan",
    subtitle: "Balai Pengujian Kesehatan Ikan dan Lingkungan (BPKIL)",
    desc: "Smart Fish Medicine is a feature on the BPKIL website that is used to search for a list of fish medicines that are registered and have expired at BPKIL.",
    image: "src/components/asset/BPKIL.png",
    tags: ["Web Development", "Javascript", "PHP", "MariaDB"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: ShieldCheck,
  },
  {
    title: "Seawcare",
    subtitle: "Universitas Pendidikan Indonesia",
    desc: "Seawcare is a website that provides detailed information about seaweed and detects seaweed diseases. The detection model was built with yolov8 and integrated with Flask for web access.",
    image: "src/components/asset/seawcare.png",
    tags: ["Web Development", "Javascript", "PHP", "Yolov8", "flask", "Bootstrap"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: ShieldCheck,
  },
  {
    title: "Mapping of Grouper Fish Suitability Zones",
    subtitle: "Universitas Pendidikan Indonesia",
    desc: "This mapping was carried out using imagery from the Landsat 8 satellite and using an overlay of calculations of chlorophyll a, sea surface temperature, salinity, and Total Suspended Solids on Tidung Island in 2024.",
    image: "src/components/asset/Layout24.png",
    tags: ["ArcgisPro", "GIS Analysis", "Remote Sensing"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: ShieldCheck,
  },
  {
    title: "Pemodelan prediksi gelombang laut selat sunda menggunakan LSTM",
    subtitle: "Universitas Pendidikan Indonesia",
    desc: 'Sunda Strait Ocean Wave Prediction Modeling Using LSTM is a project that aims to predict ocean waves in the Sunda Strait using a Long Short-Term Memory (LSTM) based machine learning model. This research project successfully penetrated Sinta 2 with the title "APPLICATION OF INVERSE DISTANCE WEIGHTED (IDW) INTERPOLATION IN DETERMINING WAVE HEIGHT IN THE WATERS OF THE SUNDA STRAIT".',
    image: "src/components/asset/lstm.png",
    tags: ["Web Development", "Javascript", "PHP", "Yolov8", "flask", "Bootstrap"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: ShieldCheck,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-indigo-500 font-semibold tracking-wider uppercase text-sm mb-4">
              Portfolio
            </motion.h2>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-display font-bold text-white">
              Featured <span className="text-gradient">Projects</span>
            </motion.h3>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-md">
            A selection of my work in automation, performance testing, and full-stack development.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden glass border-white/5 hover:border-indigo-500/30 transition-all flex flex-col h-full w-[320px]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-60" />
                <div className="absolute top-4 left-4 p-2 rounded-xl bg-indigo-600 text-white shadow-lg">
                  <project.icon size={20} />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h4>

                {project.subtitle && <p className="text-xs text-indigo-400/80 font-medium mb-3">{project.subtitle}</p>}
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{project.desc}</p>

                {/* <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
