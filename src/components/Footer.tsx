import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 text-center border-t border-border bg-card/50">
    <p className="font-display text-lg text-primary flex items-center justify-center gap-2">
      Made with <Heart className="w-4 h-4 fill-primary animate-pulse-soft" /> for Tosin Oluleye
    </p>
    <p className="text-xs text-muted-foreground mt-1 font-body">Forever & Always 💕</p>
  </footer>
);

export default Footer;
