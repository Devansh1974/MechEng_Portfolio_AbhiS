import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, FileText } from 'lucide-react';
import { resumeData } from '../data/resume';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Qualifications</h2>
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
            <div className="w-2 h-2 bg-indigo-200 rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Column */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-sm shadow-sm border border-slate-200 dark:border-slate-800 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-indigo-400"></div>
            
            <div className="flex items-center gap-3 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white uppercase tracking-tight">Academic History</h3>
            </div>
            
            <div className="space-y-8 pl-2">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-slate-300 dark:border-slate-700"
                >
                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-white dark:bg-slate-900 border-2 border-indigo-600 rounded-full"></div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white font-sans">{edu.degree}</h4>
                  <p className="text-indigo-600 font-medium font-mono text-sm">{edu.institution}</p>
                  {edu.year && <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{edu.year}</p>}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-sm shadow-sm border border-slate-200 dark:border-slate-800 relative">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-teal-500 to-teal-300"></div>

            <div className="flex items-center gap-3 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
              <Award className="w-6 h-6 text-teal-600" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white uppercase tracking-tight">Certifications</h3>
            </div>

            <div className="grid gap-3">
              {resumeData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-slate-50 dark:bg-slate-800/50 border-l-4 border-teal-500 flex items-start gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <FileText className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-tight">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
