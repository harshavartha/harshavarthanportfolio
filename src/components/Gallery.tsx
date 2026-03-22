import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { id: 1, url: "/images/image-1.jpg", title: "IEA - Group Session" },
  { id: 2, url: "/images/image-2.jpg", title: "IEA - Paris" },
  { id: 3, url: "/images/image-3.jpg", title: "Indian Embassy" },
  { id: 4, url: "/images/image-6.jpg", title: "Monaco Event" },
  { id: 5, url: "/images/image-13.jpg", title: "Team Sea Sakthi Core Group" },
  { id: 6, url: "/images/image-8.jpg", title: "Monaco Harbor Race Grid" },
  { id: 7, url: "/images/image-10.jpg", title: "Monaco Race Close-up" },
  { id: 8, url: "/images/image-11.jpg", title: "River Cleaning Action 1" },
  { id: 9, url: "/images/image-12.jpg", title: "River Cleaning Action 2" },
  { id: 10, url: "/images/image-14.jpg", title: "Harshavarthan", position: "object-top" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Visual Archive</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative overflow-hidden rounded-xl bg-[#0a0a0a] group cursor-pointer col-span-1 aspect-square md:aspect-auto"
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.title}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = '/images/image-9.jpg';
                }}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 filter grayscale-[0.2] group-hover:grayscale-0 ${img.position || 'object-center'}`}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};