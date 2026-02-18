import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Settings, Database, Crosshair } from 'lucide-react';
import { resumeData } from '../data/resume';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cost Management",
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      skills: ["Product Cost Management", "Zero-Based Costing (ZBC)", "Parametric Cost Modeling", "Design-to-Cost", "Sourcing Methodologies", "Target Costing"]
    },
    {
      title: "Manufacturing Processes",
      icon: <Settings className="w-5 h-5 text-indigo-400" />,
      skills: ["Castings (Ferrous/Non-Ferrous)", "Forging", "Machining", "Fabrication", "Sheet Metal", "Gears Manufacturing", "Teardown & Benchmarking"]
    },
    {
      title: "Tools & Software",
      icon: <Wrench className="w-5 h-5 text-indigo-400" />,
      skills: ["aPriori", "Costimator", "Advanced Excel", "VAVE", "DFM/DFA", "AutoCAD", "CATIA V5", "UG-NX"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Technical Capability Matrix</h2>
          <div className="h-1 w-full max-w-[200px] bg-indigo-600 mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full bg-white/30 animate-pulse"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800 p-0 shadow-lg group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Header */}
              <div className="bg-slate-800 dark:bg-slate-950 p-4 border-b-2 border-indigo-500 flex items-center justify-between">
                <h3 className="font-mono text-white font-bold uppercase tracking-wider text-sm">{category.title}</h3>
                {category.icon}
              </div>
              
              {/* Grid Content */}
              <div className="p-6 relative">
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                 
                 <div className="relative z-10 grid gap-3">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-3">
                         <Crosshair size={14} className="text-indigo-500" />
                         <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill}</span>
                      </div>
                    ))}
                 </div>
              </div>
              
              {/* Footer Decor */}
              <div className="h-2 bg-slate-200 dark:bg-slate-700 flex">
                 <div className="w-1/3 h-full bg-indigo-600"></div>
                 <div className="w-1/3 h-full bg-indigo-400"></div>
                 <div className="w-1/3 h-full bg-slate-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
