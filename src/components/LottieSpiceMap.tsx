"use client";

import { Lottie } from "lottie-react";

export default function LottieSpiceMap() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl p-0 sm:p-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-50/80 via-white/30 to-indigo-100/70">
        <Lottie
          src="/Peta Indonesia.json"
          loop
          autoplay
          className="relative z-10 h-full w-full"
          style={{ height: "100%", width: "100%" }}
          aria-label="Animasi peta Indonesia dan jalur rempah"
        />
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute inset-0 z-20 h-full w-full"
          role="img"
          aria-label="Arus pelayaran utama dari Maluku menuju Jawa, Sumatra, dan pasar Asia"
        >
          <defs>
            <marker
              id="route-arrow"
              markerWidth="5"
              markerHeight="5"
              refX="4"
              refY="2.5"
              orient="auto"
            >
              <path d="M0,0 L5,2.5 L0,5 z" fill="#e76f51" />
            </marker>
          </defs>
          <path
            d="M73 38 C65 43, 59 51, 51 58 C43 65, 34 68, 23 67"
            fill="none"
            stroke="#e76f51"
            strokeDasharray="2 2"
            strokeLinecap="round"
            strokeWidth="1.2"
            markerEnd="url(#route-arrow)"
            className="route-current"
          />
          <path
            d="M73 38 C70 48, 67 58, 63 70 C59 79, 53 84, 45 88"
            fill="none"
            stroke="#0d9488"
            strokeDasharray="2 2"
            strokeLinecap="round"
            strokeWidth="1.2"
            markerEnd="url(#route-arrow)"
            className="route-current route-current-delayed"
          />
          <path
            d="M73 38 C80 31, 87 27, 94 26"
            fill="none"
            stroke="#d97706"
            strokeDasharray="2 2"
            strokeLinecap="round"
            strokeWidth="1.2"
            markerEnd="url(#route-arrow)"
            className="route-current route-current-slow"
          />
          <g
            transform="translate(73 38)"
            className="route-ship route-ship-coral"
            aria-hidden="true"
          >
            <circle r="3.2" fill="#fff" stroke="#fff" strokeWidth="1.4" />
            <path d="M-2 1H2L1 2H-1Z M0 1V-2L1 1Z" fill="#e76f51" />
            <animateMotion
              dur="7s"
              path="M0 0 C-8 5,-14 13,-22 20 C-30 27,-39 30,-50 29"
              repeatCount="indefinite"
            />
          </g>
          <g
            transform="translate(73 38)"
            className="route-ship route-ship-teal"
            aria-hidden="true"
          >
            <circle r="3.2" fill="#fff" stroke="#fff" strokeWidth="1.4" />
            <path d="M-2 1H2L1 2H-1Z M0 1V-2L1 1Z" fill="#0d9488" />
            <animateMotion
              dur="8.5s"
              path="M0 0 C-3 10,-6 20,-10 32 C-14 41,-20 46,-28 50"
              repeatCount="indefinite"
              begin="-2s"
            />
          </g>
          <g
            transform="translate(73 38)"
            className="route-ship route-ship-amber"
            aria-hidden="true"
          >
            <circle r="3.2" fill="#fff" stroke="#fff" strokeWidth="1.4" />
            <path d="M-2 1H2L1 2H-1Z M0 1V-2L1 1Z" fill="#d97706" />
            <animateMotion
              dur="6s"
              path="M0 0 C7 -7,14 -11,21 -12"
              repeatCount="indefinite"
              begin="-3s"
            />
          </g>
          {[
            [73, 38],
            [51, 58],
            [45, 88],
            [94, 26],
          ].map(([cx, cy]) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="1.8"
              fill="#fff"
              stroke="#e76f51"
              strokeWidth="0.9"
            />
          ))}
        </svg>
        <div className="absolute left-3 top-3 z-30 rounded-full bg-white/80 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-teal-800 shadow-sm backdrop-blur-sm">
          Arus pelayaran
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-2 pb-1 pt-4 text-xs font-semibold text-neutral-600">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-spice-coral" />
          Rute Nusantara
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-spice-teal" />
          Rute pesisir
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-spice-amber" />
          Jalur keluar
        </span>
      </div>
    </div>
  );
}
