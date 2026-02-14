import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Heart } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";

const SecretPage = () => {
  const [answer, setAnswer] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === "cake") {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 flex items-center justify-center relative">
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.div
            key="locked"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-md w-full text-center"
          >
            <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-display text-gradient-love mb-2">
              Unlock My Final Surprise ❤️
            </h1>
            <p className="text-muted-foreground font-body mb-8">
              Answer this to see my secret message:
            </p>
            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="font-display text-xl text-foreground mb-6">
                Which do I love more? <br />Ice-cream or Cake? 🍦🎂
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                    setError(false);
                  }}
                  placeholder="Type your answer..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-body text-center focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-destructive text-sm font-body"
                  >
                    Not quite! Try again 😉
                  </motion.p>
                )}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium shadow-lg shadow-primary/30"
                >
                  Unlock 🔓
                </motion.button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="max-w-lg w-full text-center z-10"
          >
            <FloatingHearts />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-16 h-16 text-primary fill-primary mx-auto mb-6" />
            </motion.div>
            <h1 className="text-3xl md:text-5xl font-display text-gradient-love leading-tight mb-6">
              No matter where life takes us, I will always choose you, Tosin Oluleye ❤️
            </h1>
            <p className="text-muted-foreground font-body text-lg">
              You are my forever, my always, my everything. 💕
            </p>
            <p className="text-muted-foreground font-body text-sm mt-4">
              I love you more than words could ever express 🥹
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SecretPage;
