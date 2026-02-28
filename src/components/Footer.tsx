import { Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#030712]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Code2 className="text-white w-5 h-5" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Rifki<span className="text-indigo-500">.dev</span>
          </span>
        </div>
        
        <p className="text-slate-500 text-sm">
          © {currentYear} Rifki Andreana. Built with React & Tailwind CSS.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
