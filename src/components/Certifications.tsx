import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certs = [
  {
    title: "Global Finalist",
    issuer: "Monaco Energy Boat Challenge",
    desc: "Certified recognition for competitive excellence and engineering from the Yacht Club de Monaco.",
    image: "/images/image-8.jpg",
    link: "/MEBC_Certificate.pdf"
  },
  {
    title: "Certificate of Recognition",
    issuer: "Kumaraguru College of Technology",
    desc: "Honored for independently propelling technical innovation and outstanding real-world achievements.",
    image: "/images/image-4.jpg"
  }
];

export const Certifications = () => {
  return (
    <section className="py-32 px-6 border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Credentials & Honors</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center group hover:bg-[#111] transition-colors"
            >
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden bg-black flex-shrink-0">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-sm font-medium text-zinc-400 mb-4">{cert.issuer}</p>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                  {cert.desc}
                </p>
                
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-zinc-300 transition-colors uppercase tracking-widest mt-auto border border-white/10 w-fit px-4 py-2 rounded-lg hover:bg-white/5"
                  >
                    View Document <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
