import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Cpu, Ruler, Disc } from 'lucide-react';
import { resumeData } from '../data/resume';
import TechBackground from './TechBackground';
import profileImg from '../assets/image.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-[95vh] flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 pt-20">
      <TechBackground />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-2 lg:gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 border border-indigo-200 rounded-sm dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-800">
            <Cpu size={14} />
            <span>Mechanical Optimization Expert</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight tracking-tight">
            PRECISION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">ENGINEERING</span>
          </h1>
          
          <div className="h-1 w-24 bg-indigo-600 mb-8" />

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed font-light">
            <strong className="text-slate-900 dark:text-white font-semibold">{resumeData.personalInfo.name}</strong> — {resumeData.personalInfo.title}. 
            specializing in <span className="text-indigo-600 dark:text-indigo-400 font-medium">Zero-Based Costing</span>, <span className="text-indigo-600 dark:text-indigo-400 font-medium">VAVE</span>, and <span className="text-indigo-600 dark:text-indigo-400 font-medium">Parametric Modeling</span>.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold uppercase tracking-wider hover:bg-slate-800 dark:hover:bg-slate-200 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20">
              Initiate Contact <ArrowRight size={16} />
            </a>
            <a href="#" className="px-8 py-4 bg-transparent border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all flex items-center gap-2">
              Download CV <Download size={16} />
            </a>
          </div>

          {/* Stats / Tech Specs */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 dark:border-slate-800 pt-8">
             <div>
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white">17+</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Years Exp.</p>
             </div>
             <div>
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white">$5M+</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Cost Saved</p>
             </div>
             <div>
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white">30%</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Lead Time Red.</p>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px]">
            {/* Technical Frame Elements */}
            <div className="absolute top-0 right-0 w-full h-full border-2 border-slate-200 dark:border-slate-800 translate-x-4 translate-y-4 rounded-sm"></div>
            <div className="absolute top-0 right-0 w-full h-full border-2 border-indigo-500/30 -translate-x-4 -translate-y-4 rounded-sm"></div>
            
            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-indigo-600 z-20"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-indigo-600 z-20"></div>

            {/* Main Image Container */}
            <div className="relative w-full h-full overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
               <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply pointer-events-none"></div>
               <img src={profileImg} alt="Abhishek Kumar Singh" className="w-full h-full object-cover object-top" />
               
               {/* Overlay Info */}
               <div className="absolute bottom-0 left-0 w-full bg-slate-900/80 backdrop-blur-sm p-4 border-t border-indigo-500">
                  <div className="flex items-center justify-between">
                     <div>
                        <p className="text-white text-xs font-mono">ID: ENG-001</p>
                        <p className="text-indigo-400 text-xs font-mono">STATUS: ONLINE</p>
                     </div>
                     <Disc className="text-indigo-400 animate-spin-slow" size={20} />
                  </div>
               </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -left-12 bg-white dark:bg-slate-800 p-3 shadow-xl rounded-sm border-l-4 border-indigo-500 z-30 hidden md:block"
            >
              <Ruler className="text-indigo-600 mb-1" size={20} />
              <p className="text-xs font-bold dark:text-white">Design-to-Cost</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
