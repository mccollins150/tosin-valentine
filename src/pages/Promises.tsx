import { motion } from "framer-motion";

const promises = [
  { text: "I promise to love you endlessly", emoji: "💝" },
  { text: "I promise to annoy you forever", emoji: "😜" },
  { text: "I promise to always hold your hand", emoji: "🤝" },
  { text: "I promise to make you laugh when you're sad", emoji: "😄" },
  { text: "I promise to choose you again and again", emoji: "💍" },
  { text: "I promise to be your biggest supporter", emoji: "📣" },
  { text: "I promise to always listen to you", emoji: "👂" },
  { text: "I promise to grow old with you", emoji: "👴👵" },
];

const Promises = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-display text-gradient-love text-center mb-2">
          My Promises To You 🤞
        </h1>
        <p className="text-center text-muted-foreground font-body mb-12">
          These are the words I'll live by, for you, forever.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {promises.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: -2 + Math.random() * 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.03, rotate: 0 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all animate-sway"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="text-3xl mb-3">{p.emoji}</div>
              <p className="font-display text-lg text-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Promises;
