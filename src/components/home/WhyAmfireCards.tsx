"use client";

import { useState, useEffect } from "react";

type Card = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Props = {
  cards: Card[];
};

export function WhyAmfireCards({ cards }: Props) {
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(true);

  const totalPages = Math.ceil(cards.length / 3);

  useEffect(() => {
    if (totalPages <= 1) return;
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPage((p) => (p + 1) % totalPages);
        setVisible(true);
      }, 300);
    }, 3500);
    return () => clearInterval(id);
  }, [totalPages]);

  const currentCards = cards.slice(page * 3, page * 3 + 3);

  return (
    <div className="space-y-3 md:space-y-5">
      {currentCards.map((item, i) => (
        <div
          key={`${page}-${i}`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <div className="flex items-start gap-3 md:gap-4 p-3.5 sm:p-4 md:p-5 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/25 hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-0.5 md:mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Page dots */}
      {totalPages > 1 && (
        <div className="flex items-center gap-1.5 pt-1">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setVisible(false);
                setTimeout(() => { setPage(i); setVisible(true); }, 300);
              }}
              aria-label={`Page ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: i === page ? "20px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === page ? "var(--color-primary)" : "var(--color-border)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
