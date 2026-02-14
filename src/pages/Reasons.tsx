import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Shuffle } from "lucide-react";
import { reasons } from "@/data/reasons";

const Reasons = () => {
  const [showModal, setShowModal] = useState(false);
  const [randomReason, setRandomReason] = useState("");

  const showRandom = () => {
    setRandomReason(reasons[Math.floor(Math.random() * reasons.length)]);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-display text-gradient-love text-center mb-2">
          50 Reasons I Love You 💖
        </h1>
        <p className="text-center text-muted-foreground font-body mb-6">
          And honestly, there are millions more...
        </p>

        <div className="flex justify-center mb-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={showRandom}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium flex items-center gap-2 shadow-lg shadow-primary/30"
          >
            <Shuffle className="w-4 h-4" /> Show me another reason
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 9) * 0.03 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-primary font-display text-lg mt-0.5">
                  {i + 1}.
                </span>
                <p className="text-sm text-foreground font-body">{reason}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/60 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-2xl p-8 max-w-sm w-full text-center"
            >
              <Heart className="w-10 h-10 text-primary fill-primary mx-auto mb-4 animate-pulse-soft" />
              <p className="font-display text-xl text-foreground mb-4">{randomReason}</p>
              <button
                onClick={() => setShowModal(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
              >
                Close 💕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Reasons;
