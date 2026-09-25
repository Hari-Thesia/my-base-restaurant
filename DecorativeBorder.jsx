import React from "react";

// A repeating interlocking maze-style border strip in a warm tan tone,
// echoing the geometric side-border from the Chef's Note reference.
export default function DecorativeBorder({ className = "" }) {
  return (
    <div
      className={`pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "var(--color-tan)" }}
      >
        <defs>
          <pattern
            id="mazePattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(0)"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M0 10 H14 V0" />
              <path d="M26 0 V14 H40" />
              <path d="M40 30 H26 V40" />
              <path d="M14 40 V30 H0" />
              <path d="M10 10 H30 V30 H10 Z" opacity="0.55" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mazePattern)" />
      </svg>
    </div>
  );
}