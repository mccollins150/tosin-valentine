import { useState, useEffect } from "react";

interface Props {
  text: string;
  speed?: number;
  className?: string;
}

const TypewriterText = ({ text, speed = 50, className = "" }: Props) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      {!done && <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />}
    </span>
  );
};

export default TypewriterText;
