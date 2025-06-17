import React from "react";

const LogoSecond = () => {
  return (
    <>
      <a href="#" className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 64 64"
          fill="none"
          aria-label="Rajib Share Plate Logo"
        >
          <path
            d="M20 48C12 42 8 32 12 22"
            stroke="hsl(var(--chart-1))"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M44 48C52 42 56 32 52 22"
            stroke="hsl(var(--chart-1))"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle
            cx="32"
            cy="32"
            r="12"
            fill="hsl(var(--chart-4))"
            stroke="hsl(var(--chart-1))"
            strokeWidth="2"
          />
          <path d="M32 26c3 3 3 9 0 12 -3-3-3-9 0-12z" fill="white" />
          <path
            d="M32 26c-2 1-4 3-4 6s2 5 4 6"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      </a>
    </>
  );
};

export default LogoSecond;
