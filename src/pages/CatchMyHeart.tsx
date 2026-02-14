import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CatchMyHeart = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [caught, setCaught] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const navigate = useNavigate();

  const moveHeart = useCallback(() => {
    if (caught) return;
    setAttempts((a) => a + 1);
    // After 10 attempts, make it easier
    const range = attempts > 10 ? 20 : 70;
    setPos({
      x: 10 + Math.random() * range,
      y: 10 + Math.random() * range,
    });
  }, [caught, attempts]);

  const catchHeart = () => {
    setCaught(true);
    setTimeout(() => navigate("/promises"), 1500);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 flex flex-col items-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 z-10"
      >
        <h1 className="text-4xl md:text-5xl font-display text-gradient-love mb-2">
          Catch My Heart 😄
        </h1>
        <p className="text-muted-foreground font-body">
          {caught
            ? "You caught it! You always had my heart 💖"
            : "Try to click the heart! It's running from you 😜"}
        </p>
        {!caught && attempts > 0 && (
          <p className="text-xs text-muted-foreground mt-2 font-body">
            Attempts: {attempts} {attempts > 10 ? "(I'll make it easier 😉)" : ""}
          </p>
        )}
      </motion.div>

      <div className="relative w-full max-w-lg h-[60vh] bg-card border border-border rounded-2xl overflow-hidden">
        <motion.button
          animate={{ x: `${pos.x}%`, y: `${pos.y}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          onMouseEnter={moveHeart}
          onClick={catchHeart}
          className="absolute text-4xl md:text-5xl cursor-pointer select-none"
          style={{ left: 0, top: 0 }}
          whileHover={{ scale: 1.2 }}
        >
          {caught ? "💖" : "❤️"}
        </motion.button>

        {caught && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <p className="font-display text-2xl text-primary">You got me! 💕</p>
              <p className="text-sm text-muted-foreground font-body mt-2">
                Taking you to my promises...
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CatchMyHeart;
