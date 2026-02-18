import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#C9EBFF,transparent)] dark:bg-[radial-gradient(circle_800px_at_100%_200px,#1e293b,transparent)] opacity-40"></div>
      
      {/* Animated Gears - Floating in background */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[-100px] opacity-5 dark:opacity-10"
      >
        <Settings size={400} />
      </motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-40 left-[-100px] opacity-5 dark:opacity-10"
      >
        <Settings size={300} />
      </motion.div>
    </div>
  );
};

export default TechBackground;
