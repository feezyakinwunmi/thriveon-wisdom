// components/DividerShape.tsx
"use client";

export default function DividerShape() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Custom SVG divider shape */}
      <svg
        className="w-full h-12 md:h-16 text-white"
        preserveAspectRatio="none"
        viewBox="0 0 1440 120"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,64 C240,96 480,32 720,48 C960,64 1200,80 1440,64 L1440,120 L0,120 Z" />
        <path d="M0,80 C240,100 480,60 720,70 C960,80 1200,90 1440,80 L1440,120 L0,120 Z" opacity="0.5" />
      </svg>
    </div>
  );
}