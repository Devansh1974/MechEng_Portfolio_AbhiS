import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Power } from 'lucide-react';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t-4 border-indigo-600 relative overflow-hidden">
      {/* Scanning Line Effect */}
      <motion.div 
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-indigo-500/30 w-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center border-b border-slate-800 pb-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wider flex items-center gap-2">
              <Power size={20} className="text-indigo-500" />
              {resumeData.personalInfo.name}
            </h3>
            <p className="text-slate-500 max-w-md font-mono text-sm">
              &gt; AUTOMATING COST OPTIMIZATION PROCESSES
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:items-end gap-3 font-mono text-sm"
          >
            <a href={`mailto:${resumeData.personalInfo.email}`} className="flex items-center gap-2 hover:text-indigo-400 transition-colors group">
              <span className="w-2 h-2 bg-indigo-600 rounded-full group-hover:animate-ping"></span>
              <Mail size={16} /> {resumeData.personalInfo.email}
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> <span>Pune, India</span>
            </div>
          </motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-mono uppercase">
          <p>&copy; {new Date().getFullYear()} Abhishek Kumar Singh. <span className="text-indigo-900">SYSTEM.ALL_RIGHTS_RESERVED</span></p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            ENGINEERED with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
