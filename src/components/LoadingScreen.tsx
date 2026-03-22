import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const LoadingScreen = () => {
  const name = "Harshavarthan Venkatesan";
  
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const letterVars: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div 
      key="premium-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#020617] overflow-hidden"
    >
      {/* Subtle background glow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-slate-800/20 rounded-full blur-[100px]" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Name Typing Animation */}
        <motion.div
           variants={containerVars}
           initial="hidden"
           animate="visible"
           className="flex overflow-hidden"
        >
          {name.split("").map((char, index) => (
            <motion.span 
              key={index} 
              variants={letterVars}
              className={`text-xl md:text-3xl lg:text-4xl font-light tracking-[0.15em] text-white ${char === " " ? "w-3 md:w-5" : ""}`}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Animated Underline */}
        <div className="relative w-full flex justify-center mt-6">
          <motion.div 
             initial={{ scaleX: 0, opacity: 0 }}
             animate={{ scaleX: 1, opacity: 1 }}
             transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
             className="w-[80%] md:w-full h-[1px] bg-gradient-to-r from-transparent via-slate-500/40 to-transparent origin-center"
          />
          {/* Moving Light point on the line */}
          <motion.div 
            initial={{ left: "10%", opacity: 0 }}
            animate={{ left: "90%", opacity: [0, 1, 0] }}
            transition={{ delay: 1.4, duration: 1.2, ease: "easeInOut" }}
            className="absolute top-0 w-8 h-[1px] bg-slate-300 shadow-[0_0_8px_2px_rgba(203,213,225,0.6)]"
          />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6, ease: "easeOut" }}
          className="mt-6 text-xs md:text-sm font-light tracking-[0.25em] text-slate-400 uppercase"
        >
          Engineering Intelligent Systems
        </motion.p>
      </div>

      {/* Loading Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.5 }}
        className="absolute bottom-16 md:bottom-24 flex gap-2"
      >
        {[0, 1, 2].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 0.6, 
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 rounded-full bg-slate-500/50"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
