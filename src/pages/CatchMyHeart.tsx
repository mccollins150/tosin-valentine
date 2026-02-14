import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CatchMyHeart = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [caught, setCaught] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [answer, setAnswer] = useState("");
  const [allowCatch, setAllowCatch] = useState(false);

  const navigate = useNavigate();

  const moveHeart = useCallback(() => {
    if (caught) return;

    setAttempts((a) => {
      const next = a + 1;

      // After 3 attempts show question
      if (next === 3) {
        setShowQuestion(true);
      }

      return next;
    });

    setPos({
      x: 5 + Math.random() * 85,
      y: 5 + Math.random() * 75,
    });
  }, [caught]);

  const catchHeart = () => {
    if (!allowCatch) return;

    setCaught(true);
    setTimeout(() => navigate("/promises"), 2000);
  };

  const checkAnswer = () => {
    // 🔴 CHANGE THIS TO YOUR REAL DOB
    if (answer === "23/03/2003") {
      setAllowCatch(true);
      setShowQuestion(false);
    } else {
      alert("Oops 😅 That's not your boyfriend's date of birth!");
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 flex flex-col items-center relative overflow-hidden">

      <div className="text-center mb-6 z-10">
        <h1 className="text-4xl md:text-5xl font-display text-gradient-love mb-2">
          Catch My Heart 😜
        </h1>

        {!caught && !showQuestion && (
          <p className="text-muted-foreground font-body">
            Try to catch it if you can 😏
          </p>
        )}

        {attempts === 1 && <p>😂 You almost had it!</p>}
        {attempts === 2 && <p>😜 Nope... still mine!</p>}
      </div>

      <div className="relative w-full max-w-lg h-[60vh] bg-card border border-border rounded-2xl overflow-hidden">

        {/* RUNNING HEART */}
        <motion.button
          animate={{ x: `${pos.x}%`, y: `${pos.y}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          onMouseEnter={!allowCatch ? moveHeart : undefined}
          onClick={catchHeart}
          className="absolute text-5xl cursor-pointer select-none"
          style={{ left: 0, top: 0 }}
        >
          {caught ? "💖" : "❤️"}
        </motion.button>

        {/* QUESTION MODAL */}
        <AnimatePresence>
          {showQuestion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black/60"
            >
              <motion.div
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <p className="mb-3 font-semibold">
                  You think love is easy? 😌 <br />
                  What's your boyfriend's date of birth?
                </p>

                <input
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="DD/MM/YYYY"
                  className="border p-2 rounded w-full mb-3"
                />

                <button
                  onClick={checkAnswer}
                  className="bg-pink-500 text-white px-4 py-2 rounded"
                >
                  Submit ❤️
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SUCCESS */}
        {caught && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl text-pink-500">You got me 💕</p>
              <p className="text-sm mt-2">
                moving on...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatchMyHeart;
