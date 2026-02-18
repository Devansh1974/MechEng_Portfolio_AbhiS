import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Minimize2 } from 'lucide-react';
import { resumeData } from '../data/resume';
import TechBackground from './TechBackground';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Subtle Background for continuity */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/3 h-full border-l border-dashed border-slate-300 dark:border-slate-700"></div>
        <div className="absolute left-10 top-10 w-20 h-20 border-t-2 border-l-2 border-indigo-200 dark:border-slate-800"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 mb-4 bg-indigo-50 dark:bg-slate-900 rounded-full">
            <Minimize2 className="text-indigo-600 w-5 h-5" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Professional Trajectory</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-mono text-sm">
            // EXECUTION_LOG: 17+ YEARS OF COST OPTIMIZATION AND ENGINEERING LEADERSHIP
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Tech Style with Draw Animation */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 md:left-1/2 transform -translate-x-px w-0.5 bg-gradient-to-b from-indigo-500 via-slate-300 to-indigo-500 dark:via-slate-700"
          ></motion.div>

          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 50 }}
              className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} justify-between items-start group`}
            >
              {/* Timeline Connector */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (index * 0.2), type: "spring" }}
                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 top-6 z-10 w-4 h-4 bg-indigo-600 rotate-45 border-2 border-white dark:border-slate-950 shadow-lg group-hover:scale-125 transition-transform duration-300"
              ></motion.div>

              <div className="md:w-5/12 ml-8 md:ml-0 bg-white dark:bg-slate-900 p-6 rounded-sm shadow-md border-l-4 border-indigo-600 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-slate-100 dark:bg-slate-800 -mr-8 -mt-8 rotate-45 transition-transform group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20"></div>

                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">{exp.role}</h3>
                   <h4 className="text-indigo-600 font-bold text-sm uppercase tracking-wider mb-3">{exp.company}</h4>
                   
                   <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                      <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded"><Calendar size={12} /> {exp.period}</span>
                      <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded"><MapPin size={12} /> {exp.location}</span>
                   </div>
                
                   <ul className="space-y-2">
                     {exp.description.slice(0, 3).map((desc, i) => (
                       <li key={i} className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                         <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 flex-shrink-0"></span>
                         <span>{desc}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
