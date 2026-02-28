import { motion } from "motion/react";
import { ShieldCheck, Zap, BarChart3, Layers, Database, Brain } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Manual Testing",
    desc: "Expertise in exploratory, regression, and smoke testing to ensure functional integrity.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Zap,
    title: "Automation Testing",
    desc: "Building robust automation suites using Puppeteer and modern JS frameworks.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: BarChart3,
    title: "Performance Testing",
    desc: "Analyzing system bottlenecks and load capacity with Apache JMeter.",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
  },
  {
    icon: Layers,
    title: "SDLC Understanding",
    desc: "Deep knowledge of Agile methodologies and the role of QA in every phase.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Database,
    title: "Data Analytics & Insights",
    desc: "Strong understanding of data analysis, data visualization, and extracting actionable insights to support decision making.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Brain,
    title: "Machine Learning Fundamentals",
    desc: "Foundational knowledge in machine learning concepts including supervised learning, classification, and  deap learning, with experience in building basic predictive models.",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-indigo-500 font-semibold tracking-wider uppercase text-sm mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Bridging the gap between <span className="text-white">Development,</span> Quality, <span className="text-white">and Data-Driven Insights</span>.
            </h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              As a final-year student in Marine Information Systems, I've developed a strong foundation in reliability, precision, and data-driven thinking. My journey into Software Quality Assurance began with a curiosity about how systems
              fail and a drive to prevent those failures by analyzing system behavior and performance data to uncover hidden issues. I specialize in creating automated testing workflows that save time and reduce human error, while
              maintaining a critical eye for manual exploratory testing and leveraging data analysis to identify patterns, generate insights, and continuously improve system performance and user experience.
            </p>

            <div className="flex items-center gap-4 p-4 rounded-2xl glass border-indigo-500/20">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">Quality First Mindset</p>
                <p className="text-sm text-slate-400">Committed to delivering bug-free, user-centric software solutions.</p>
              </div>
            </div>
          </motion.div>

          <div className="sm:grid sm:grid-cols-2 sm:gap-6 flex sm:flex-none gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="min-w-full sm:min-w-0 snap-center p-6 rounded-2xl glass glass-hover group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className={item.color} size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
