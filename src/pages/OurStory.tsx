import { motion } from "framer-motion";
import { School, HeartCrack, RefreshCcw, Heart } from "lucide-react";

const events = [
  {
    icon: School,
    title: "We Fell in Love Before We Even Understood Love 🎒",
    desc: "Back in secondary school, when everything was still innocent and uncertain, we found each other. We didn’t know what forever meant… we didn’t even understand what love truly was. But somehow, in the middle of that young and confusing world, my heart chose you first.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: HeartCrack,
    title: "And Then… We Let Go 💔",
    desc: "Life happened. We grew, we changed, and eventually, we lost what we once had. We went our separate ways, pretending to be fine… but deep down, a part of me never stopped loving you, never stopped wondering what our story could have been if we just had another chance.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: RefreshCcw,
    title: "But Somehow, Love Found Its Way Back 🥺",
    desc: "Years later, out of all the people in the world, life brought you back to me. And this time, it wasn’t puppy love… it was deeper, calmer, intentional. It felt like the universe paused, looked at both of us, and said — 'You deserve to try again, but this time, do it right.'",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: Heart,
    title: "2 Years 10 Months of Choosing You ❤️",
    desc: "Today makes it 2 years and 10 months since we started again. It’s been a rollercoaster — not perfect, not always easy — but real. And through every misunderstanding, every laugh, every silent prayer, I have never regretted loving you… not even for a single day. If I had to live this life again, in every lifetime, I would still find my way back to you.",
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
