import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#030712] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-indigo-500 font-semibold tracking-wider uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Let's work <span className="text-gradient">together</span>.
            </h3>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              I'm currently looking for new opportunities in Software Quality Assurance and Automation. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Email</p>
                  <a href="mailto:rifkiandrenasutrisno@gmail.com" className="text-lg text-white font-semibold hover:text-indigo-400 transition-colors">
                    rifkiandrenasutrisno@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">LinkedIn</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-semibold hover:text-indigo-400 transition-colors">
                    linkedin.com/in/rifkiandreana
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">GitHub</p>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-semibold hover:text-indigo-400 transition-colors">
                    github.com/rifkiandreana
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-8 md:p-12 rounded-3xl glass relative">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Your Name</label>
                  <input type="text" placeholder="Eden Hazard" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Your Email</label>
                  <input type="email" placeholder="hazard@chelsea.com" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500/50 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Message</label>
                <textarea rows={5} placeholder="Tell me about your project..." className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500/50 transition-all resize-none" />
              </div>
              <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/25 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
