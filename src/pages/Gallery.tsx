import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { id: 0, src: "/images/precious1.jpg", caption: "You 💕" },
  { id: 1, src: "/images/precious2.jpg", caption: "Me 😍" },
  { id: 2, src: "/images/precious7.jpg", caption: "Me and you 🌸" },
  { id: 3, src: "/images/precious4.jpg", caption: "Laughing together 😄" },
  { id: 4, src: "/images/precious5.jpg", caption: "My favorite person 💖" },
  { id: 5, src: "/images/precious6.jpg", caption: "Making memories 📸" },
  { id: 6, src: "/images/precious3.jpg", caption: "You & Me 💗" },
  { id: 7, src: "/images/precious8.jpg", caption: "Forever grateful 🙏" },
  { id: 8, src: "/images/precious9.jpg", caption: "My whole world ❤️" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selected === null) return;
    setSelected((selected + dir + photos.length) % photos.length);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl text-center mb-2">
          Our Memories 📸
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Every moment with you is a treasure ❤️
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(i)}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 max-w-md w-full text-center relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-square rounded-xl mb-4 overflow-hidden">
                <img
                  src={photos[selected].src}
                  alt={photos[selected].caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-lg text-black">
                {photos[selected].caption}
              </p>

              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() => navigate(-1)}
                  className="p-2 rounded-full bg-gray-200 hover:bg-pink-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => navigate(1)}
                  className="p-2 rounded-full bg-gray-200 hover:bg-pink-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
