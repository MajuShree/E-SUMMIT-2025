import React from "react";

interface SparklesProps {
  className?: string;
}

const Sparkles: React.FC<SparklesProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.5" />
    <line x1="12" y1="2" x2="12" y2="6" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
    <line x1="2" y1="12" x2="6" y2="12" stroke="currentColor" strokeWidth="2" />
    <line x1="18" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default Sparkles;