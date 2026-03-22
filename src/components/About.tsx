import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden glass-card p-2"
        >
          <div className="w-full h-full rounded-xl overflow-hidden bg-black">
            <img 
              src="/images/image-1.jpg" 
              alt="Harshavarthan and Team" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            From Groundwork to the <span className="text-zinc-500">Global Stage.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
            <p>
              I architect the bridge between intelligent software and robust hardware. My journey isn't just about building circuits—it's a narrative that flows from developing embedded systems in local environments to representing India on an international platform at Monaco.
            </p>
            <p>
              Whether pioneering an autonomous river-cleaning bot or engineering critical subsystems for a zero-emission hydrogen boat, my focus remains strictly on <span className="text-white font-medium">solving real-world problems</span> with precision craftsmanship.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
