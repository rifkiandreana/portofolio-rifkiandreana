import { motion } from "motion/react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    type: "Education",
    title: "Marine Information Systems",
    company: "Universitas Pendidikan Indonesia (UPI)",
    period: "2022 - 2026",
    desc: "Focusing on data analysis and software development in marine technology contexts. Throughout my studies, I have worked on projects involving data processing, system design, and predictive modeling to solve real-world marine and transportation challenges. My academic experience has strengthened my analytical thinking, problem-solving skills, and ability to build reliable, data-driven systems.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    type: "Internship",
    title: "Software Quality Assurance",
    company: "Transjakarta",
    period: "June 2025 - March 2026",
    desc: "Experienced in conducting manual testing for mobile applications such as Syntra Mobile and TJ App to ensure all features function according to requirements, with a strong focus on applications integrated with On-Board Unit (OBU) devices, including functional validation, real-world usage scenarios, regression testing, and detailed bug documentation. Additionally, developed and maintained website automation testing using Cypress by creating and managing automated test scripts, while collaborating closely with developers to efficiently reproduce and resolve issues.",
    icon: Briefcase,
    color: "bg-indigo-500",
  },
  {
    type: "Internship",
    title: "Software Quality Assurance",
    company: "Zenmirai Indonesia",
    period: "Feb 2025 - April 2025",
    desc: "Performed API testing using Swagger to validate endpoints, ensure accurate data validation, and verify that system responses met expected results for a web-based pawn (gadai) platform. Designed and executed comprehensive test cases based on functional specifications to ensure core features—such as item valuation, loan calculation, transaction processing, and payment workflows—operated accurately and reliably. Collaborated closely with development and UI/UX teams to validate newly implemented features, ensuring they aligned with business rules, financial accuracy standards, and user experience requirements within the pawn service system.",
    icon: Briefcase,
    color: "bg-indigo-500",
  },
  {
    type: "Internship",
    title: "Landing Page",
    company: "PT. Renjana Sinergi Indonesia",
    period: "Nov 2024 - Feb 2025",
    desc: "Designing landing pages using Figma, ensuring an attractive visual appearance that matches the brand identity before implementing it into WordPress.",
    icon: Briefcase,
    color: "bg-indigo-500",
  },
  {
    type: "Internship",
    title: "Project Consultant and Web Developer",
    company: "Balai Pengujian Kesehatan Ikan dan Lingkungan (BPKIL)",
    period: "Okt 2024 - Des 2024",
    desc: "Integrated data from 780+ registered fish medicine products and 160+ fish medicine companies under the Fish and Environmental Health Testing Center (BPKIL), ensuring structured and reliable data management. Implemented validation mechanisms to maintain the completeness and accuracy of critical information, including product names, registration numbers, validity periods, and company details. Designed and developed a user-friendly, responsive website that enables users to efficiently search, verify, and access comprehensive information about fish medicine products and registered companies.",
    icon: Briefcase,
    color: "bg-indigo-500",
  },
  {
    type: "Project",
    title: "Research Assistant Lecturer,",
    company: "Universitas Pendidikan Indonesia (UPI)",
    period: "2024",
    desc: "Served as a Research Assistant in a lecturer-led research project titled “Long Short-Term Memory Modeling for Classification of Sea Wave Height in Banten Province.” Collected ocean wave data from BMKG and performed extensive data preprocessing, resulting in over 2 million clean and structured records for analysis. Conducted in-depth pattern analysis of sea wave heights using the Long Short-Term Memory (LSTM) approach to support accurate predictive modeling. Contributed to the preparation of a comprehensive research report and co-authored two scientific articles for publication.",
    icon: Calendar,
    color: "bg-emerald-500",
  },
  {
    type: "Internship",
    title: "IT Helpdesk",
    company: "CV Muji Utama Karya",
    period: "Feb 2021 - Mar 2021",
    desc: "Responsible for the maintenance and repair of office laptop/computer devices to ensure optimal availability and maximum performance for staf.",
    icon: Briefcase,
    color: "bg-indigo-500",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#030712]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-indigo-500 font-semibold tracking-wider uppercase text-sm mb-4">
            My Journey
          </motion.h2>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-display font-bold text-white">
            Experience & <span className="text-gradient">Education</span>
          </motion.h3>
        </div>

        <div className="relative">
          {/* Vertical line */}
          {/* <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" /> */}

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div key={exp.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex flex-col gap-8 items-start relative">
                {/* Desktop Dot */}
                {/* <div className="absolute left-1/2 top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-[#030712] -translate-x-1/2 hidden md:block" /> */}

                <div className="w-full">
                  <div className="p-3 rounded-3xl glass glass-hover relative group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${exp.color} text-white`}>
                        <exp.icon size={20} />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">{exp.type}</span>
                        <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                      <span className="font-semibold text-slate-300">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
