"use client";

import { useState, useEffect } from "react";

const phrases = [
  "your users love.",
  "that move markets.",
  "built to last.",
  "powered by AI.",
];

export function AnimatedTagline() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setShow(true);
      }, 300);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="gradient-text"
      style={{
        display: "inline-block",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(6px)",
      }}
    >
      {phrases[index]}
    </span>
  );
}
