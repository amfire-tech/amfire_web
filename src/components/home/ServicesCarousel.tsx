"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

type CardData = {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function ServicesCarousel({ cards }: { cards: CardData[] }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const paused = useRef(false);
  const total = cards.length;

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused.current) {
        setVisible(false);
        setTimeout(() => {
          setCurrent((c) => (c + 1) % total);
          setVisible(true);
        }, 250);
      }
    }, 3500);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (idx: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setVisible(true);
    }, 250);
  };

  const prev = () => goTo((current - 1 + total) % total);
  const next = () => goTo((current + 1) % total);

  return (
    <div
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
      >
        <ServiceCard
          href={cards[current].href}
          icon={cards[current].icon}
          title={cards[current].title}
          description={cards[current].description}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to service ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "gradient-bg w-5" : "bg-border w-1.5"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Previous service"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label="Next service"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
