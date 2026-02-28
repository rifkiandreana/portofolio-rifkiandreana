import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const roles = ["Software Testing Specialist", "Data Analys", "Marine Info Systems Student", "Tech Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(isDeleting ? currentRole.substring(0, displayText.length - 1) : currentRole.substring(0, displayText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-1">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-2 md:ml-25">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">Available for Internships & Full-time Roles</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight">
              Hi, I'm <span className="text-gradient">Rifki Andreana</span>
            </h1>
            <div className="h-12 md:h-16 mb-8">
              <p className="text-xl md:text-2xl text-slate-400 font-medium">
                I am a <span className="text-white border-r-2 border-indigo-500 pr-1">{displayText}</span>
              </p>
            </div>
            <p className="max-w-2xl mx-auto md:mx-0 text-slate-400 text-lg mb-10 leading-relaxed">
              Final-year Marine Information Systems student passionate about building high-quality software through meticulous testing and automation, with a strong interest in data analysis and data-driven decision making. Specialized in
              ensuring seamless user experiences while leveraging data to improve system performance and reliability.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-12">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/25 cursor-pointer"
              >
                View Projects <ArrowRight size={18} />
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex items-center md:items-start justify-center md:justify-start gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:rifkiandrenasutrisno@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-40 h-40 md:w-66 md:h-106 rounded-full md:m-30 md:mr-40 overflow-hidden mx-auto border-2 border-indigo-900/30 shadow-lg"
          >
            <img src="src/components/asset/foto1.png" alt="Rifki Andreana — Photo" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link to="about" smooth={true} duration={500} offset={-80} className="text-slate-500 hover:text-white transition-colors cursor-pointer">
          <ChevronDown className="animate-bounce" size={32} />
        </Link>
      </motion.div>
    </section>
  );
}
