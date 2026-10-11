import React from "react";

/**
 * Careers hero illustration — "Your orbit"
 * Different disciplines orbit a single seat that's waiting for a person.
 * Three rings turn at different speeds and directions; node icons counter-rotate
 * so they always stay upright. Pure CSS animation (no JS), and it stops for
 * users who prefer reduced motion.
 */

const css = `
  @keyframes cx-spin { to { transform: rotate(360deg); } }
  @keyframes cx-pulse {
    0%   { transform: scale(1);   opacity: 0.35; }
    100% { transform: scale(2.2); opacity: 0; }
  }
  @keyframes cx-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

  .cx-ring { transform-origin: 290px 200px; }
  .cx-c    { transform-box: fill-box; transform-origin: center; }

  .cx-r1 { animation: cx-spin 36s linear infinite; }
  .cx-r1 .cx-c { animation: cx-spin 36s linear infinite reverse; }

  .cx-r2 { animation: cx-spin 52s linear infinite reverse; }
  .cx-r2 .cx-c { animation: cx-spin 52s linear infinite; }

  .cx-r3 { animation: cx-spin 72s linear infinite; }
  .cx-r3 .cx-c { animation: cx-spin 72s linear infinite reverse; }

  .cx-pulse { transform-box: fill-box; transform-origin: center; animation: cx-pulse 3.2s ease-out infinite; }
  .cx-pulse-2 { animation-delay: 1.6s; }
  .cx-dot { animation: cx-blink 1.8s ease-in-out infinite; }

  @media (prefers-reduced-motion: reduce) {
    .cx-r1, .cx-r2, .cx-r3,
    .cx-r1 .cx-c, .cx-r2 .cx-c, .cx-r3 .cx-c,
    .cx-pulse, .cx-dot { animation: none; }
    .cx-pulse { opacity: 0.2; }
  }
`;

/** A single orbiting discipline: white disc + icon, drawn around (0,0). */
function Node({ x, y, accent, children }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="cx-c" filter="url(#cxShadow)">
        <circle r="21" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <circle r="21" fill={accent} opacity="0.07" />
        <g
          stroke={accent}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {children}
        </g>
      </g>
    </g>
  );
}

export function GeneralCareersIllustration() {
  const BRAND = "#1673B8";
  const GREEN = "#10B981";
  const NAVY = "#0A0F2C";

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <svg
        className="relative z-10 w-full"
        viewBox="0 0 580 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Engineering, design, data, security, support and other disciplines orbiting a central seat for a new team member"
      >
        <style>{css}</style>

        <defs>
          <radialGradient id="cxGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={BRAND} stopOpacity="0.16" />
            <stop offset="60%" stopColor={BRAND} stopOpacity="0.05" />
            <stop offset="100%" stopColor={BRAND} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cxCore" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B8FD1" />
            <stop offset="100%" stopColor={BRAND} />
          </linearGradient>
          <filter id="cxShadow" x="-40%" y="-40%" width="180%" height="190%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor={NAVY} floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Ambient glow */}
        <circle cx="290" cy="200" r="195" fill="url(#cxGlow)" />

        {/* Orbit rings */}
        <g stroke={BRAND} strokeWidth="1.25" strokeLinecap="round" strokeDasharray="2 8" opacity="0.3">
          <circle cx="290" cy="200" r="65" />
          <circle cx="290" cy="200" r="115" />
          <circle cx="290" cy="200" r="165" />
        </g>

        {/* Ring 3 (outer) */}
        <g className="cx-ring cx-r3">
          {/* chat / support */}
          <Node x={432.9} y={117.5} accent={BRAND}>
            <path d="M-8 -6 H8 V3 H-1 L-5 7 V3 H-8 Z" />
          </Node>
          {/* database */}
          <Node x={290} y={365} accent={GREEN}>
            <ellipse cx="0" cy="-5" rx="7" ry="3" />
            <path d="M-7 -5 V5 C-7 8 7 8 7 5 V-5" />
            <path d="M-7 0 C-7 3 7 3 7 0" />
          </Node>
          {/* people */}
          <Node x={147.1} y={117.5} accent={NAVY}>
            <circle cx="-3" cy="-3" r="3" />
            <path d="M-8 7 C-8 2 2 2 2 7" />
            <circle cx="5" cy="-4" r="2.5" />
            <path d="M4 2 C8 2 10 4 10 7" />
          </Node>
        </g>

        {/* Ring 2 (middle, turns the other way) */}
        <g className="cx-ring cx-r2">
          {/* chart */}
          <Node x={290} y={85} accent={BRAND}>
            <path d="M-6 7 V1 M0 7 V-3 M6 7 V-7" strokeWidth="3.5" />
          </Node>
          {/* shield */}
          <Node x={389.6} y={257.5} accent={NAVY}>
            <path d="M0 -8 L7 -5 V1 C7 5 3 8 0 9 C-3 8 -7 5 -7 1 V-5 Z" />
            <path d="M-3 0 L-1 2.5 L3.5 -2.5" />
          </Node>
          {/* pen */}
          <Node x={190.4} y={257.5} accent={GREEN}>
            <path d="M-7 7 L-6 2 L3 -7 L7 -3 L-2 6 Z" />
            <path d="M1 -5 L5 -1" />
          </Node>
        </g>

        {/* Ring 1 (inner) */}
        <g className="cx-ring cx-r1">
          {/* code */}
          <Node x={322.5} y={143.7} accent={BRAND}>
            <path d="M-4 -5 L-9 0 L-4 5 M4 -5 L9 0 L4 5 M1.5 -6 L-1.5 6" />
          </Node>
          {/* spark */}
          <Node x={257.5} y={256.3} accent={GREEN}>
            <path d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" />
          </Node>
        </g>

        {/* Centre: the open seat */}
        <g transform="translate(290 200)">
          <circle className="cx-pulse" r="34" fill={BRAND} />
          <circle className="cx-pulse cx-pulse-2" r="34" fill={BRAND} />
          <circle r="36" fill="url(#cxCore)" stroke="#FFFFFF" strokeWidth="4" filter="url(#cxShadow)" />
          <circle cx="0" cy="-7" r="7.5" fill="#FFFFFF" />
          <path d="M-14 15 C-14 5 -8 3 0 3 C8 3 14 5 14 15 Z" fill="#FFFFFF" />
          {/* "add member" badge */}
          <g transform="translate(26 -26)">
            <circle r="10" fill={GREEN} stroke="#FFFFFF" strokeWidth="3" />
            <path d="M-4 0 H4 M0 -4 V4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        {/* Status chip (top-left corner, clear of the rings) */}
        <g transform="translate(24 24)" filter="url(#cxShadow)">
          <rect width="116" height="30" rx="15" fill="#FFFFFF" stroke="#E2E8F0" />
          <circle className="cx-dot" cx="17" cy="15" r="4.5" fill={GREEN} />
          <text
            x="30"
            y="19.5"
            fill="#0F172A"
            fontSize="11.5"
            fontWeight="700"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
          >
            Now hiring
          </text>
        </g>
      </svg>
    </div>
  );
}