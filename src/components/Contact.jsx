import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { resumeData } from '../data/resume';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-widest">Initiate Communication</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto font-mono text-sm">
            // STATUS: OPEN FOR CONSULTATION AND NEW OPPORTUNITIES
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.a
            href={`mailto:${resumeData.personalInfo.email}`}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center justify-center p-8 bg-slate-800/50 border border-slate-700 rounded-sm hover:border-indigo-500 transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-indigo-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4 text-indigo-400 group-hover:text-indigo-300 relative z-10 border border-slate-700">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10 uppercase tracking-wide">Email Channel</h3>
            <p className="text-slate-400 font-mono text-sm relative z-10">{resumeData.personalInfo.email}</p>
          </motion.a>

          <motion.a
            href={`tel:${resumeData.personalInfo.phone}`}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center justify-center p-8 bg-slate-800/50 border border-slate-700 rounded-sm hover:border-indigo-500 transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-indigo-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4 text-indigo-400 group-hover:text-indigo-300 relative z-10 border border-slate-700">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10 uppercase tracking-wide">Direct Line</h3>
            <p className="text-slate-400 font-mono text-sm relative z-10">{resumeData.personalInfo.phone}</p>
          </motion.a>
        </div>
        
        <div className="mt-16 border-t border-slate-800 pt-8 text-center">
             <div className="flex items-center justify-center gap-2 text-slate-500 font-mono text-xs">
                <MapPin size={14} />
                <span>LOCATION_DATA: {resumeData.personalInfo.location}</span>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
