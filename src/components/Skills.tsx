import { motion } from "motion/react";
import { Terminal, Code, Globe, Database, Cpu, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Tools",
    icon: Terminal,
    skills: ["Puppeteer", "Apache JMeter", "Playwright", "Postman", "Cypress", "Jest", "Jupyter Notebook", "Google Colab", "Scikit-learn"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["React.js", "Node.js", "Express", "Tailwind CSS", "REST APIs", "Git/GitHub", "Data Visualization", "Basic Machine Learning"],
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#030712] relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-indigo-500 font-semibold tracking-wider uppercase text-sm mb-4">
            My Expertise
          </motion.h2>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Technical <span className="text-gradient">Skillset</span>
          </motion.h3>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit focused on quality assurance, automated testing, and modern web development.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl glass glass-hover relative group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} rounded-t-3xl opacity-50`} />

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-white/5 text-white group-hover:bg-indigo-600 transition-colors">
                  <category.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-white">{category.title}</h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:border-indigo-500/50 hover:text-white transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
