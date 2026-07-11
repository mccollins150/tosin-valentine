import { motion } from "framer-motion";
import { School, HeartCrack, RefreshCcw, Heart } from "lucide-react";

const events = [
  {
    icon: School,
    title: "We Were Always in the Same Church ⛪",
    desc: "For over two years, we worshipped in the same church, attended the same band, existed in the same space... yet we never really spoke. We never imagined that someday, our story would begin right there.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: RefreshCcw,
    title: "The Day Everything Changed 💫",
    desc: "After I returned from my trip, you casually asked for my number after service. It felt like such a small moment at the time… but little did we know, that simple request was about to change everything between us.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: HeartCrack,
    title: "From Strangers to Late-Night Calls 📱",
    desc: "Even after exchanging numbers, we didn't think we would really vibe. But one conversation turned into another… and suddenly, hours on the phone started feeling like minutes. Every call made me realize just how special you were becoming to me.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: Heart,
    title: "Five Days Later… Us ❤️",
    desc: "In just five days, we went from 'just vibing' to something so real and beautiful. Since that week, loving you has been the easiest and most amazing part of my life. Every day since has been another chapter in the most beautiful story I've ever lived, and I can't wait to keep writing it with you.",
    color: "bg-primary/10 text-primary",
  },
];



const OurStory = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-display text-gradient-love text-center mb-2">
          Our Love Story 💌
        </h1>
        <p className="text-center text-muted-foreground font-body mb-12">
          How it all began...
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />

          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative mb-12 pl-16 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background md:left-auto md:right-auto md:-translate-x-1/2 md:left-[calc(100%)] md:top-4" 
                   style={{ [i % 2 === 0 ? "right" : "left"]: "-10px", ...(typeof window !== 'undefined' && window.innerWidth >= 768 ? {} : { left: "14px", right: "auto" }) }}>
              </div>

              <div className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${event.color}`}>
                  <event.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-1">{event.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurStory;
