import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Play, Pause, ChevronDown } from "lucide-react";
import TypewriterText from "@/components/TypewriterText";

const Index = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Love counter
  useEffect(() => {
    const start = new Date("2026-01-23T00:00:00").getTime();
    const update = () => {
      const diff = Date.now() - start;
      if (diff < 0) return;
      setDays(Math.floor(diff / 86400000));
      setHours(Math.floor((diff % 86400000) / 3600000));
      setMinutes(Math.floor((diff % 3600000) / 60000));
      setSeconds(Math.floor((diff % 60000) / 1000));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      );
      audioRef.current.loop = true;
      audioRef.current.volume = 0.15;
    }
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center gradient-hero relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl mb-6"
          >
            ❤️
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-display text-gradient-love leading-tight mb-6">
            To the most beautiful girl in my world, Precious ❤️
          </h1>
          <div className="text-lg md:text-xl text-muted-foreground font-body min-h-[60px] mb-8">
            <TypewriterText
              text="You came into my life like a blessing I never knew I needed. Every moment with you feels like a dream I never want to wake up from. I love you more than words could ever say... 💕"
              speed={40}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link to="/our-story">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium shadow-lg shadow-primary/30 hover:shadow-xl transition-shadow"
              >
                Open Our Story 💌
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleAudio}
              className="px-6 py-3 bg-card border border-border rounded-full font-body text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {playing ? "Pause Music" : "Play Music 🎵"}
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-6 h-6 text-primary/50" />
        </motion.div>
      </section>

      {/* Love Counter */}
      <section className="py-20 px-4 gradient-romantic">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display text-gradient-love mb-2">
            Our Love Counter 💕
          </h2>
          <p className="text-muted-foreground font-body mb-10">
            Together since January 23, 2026
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: days, label: "Days" },
              { val: hours, label: "Hours" },
              { val: minutes, label: "Minutes" },
              { val: seconds, label: "Seconds" },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm"
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-3xl md:text-5xl font-display text-primary">{item.val}</div>
                <div className="text-sm text-muted-foreground font-body mt-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground font-body text-sm flex items-center justify-center gap-1">
            <Heart className="w-3 h-3 fill-primary text-primary" /> and counting...
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
