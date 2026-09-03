"use client";

import { Lottie } from "lottie-react";

export default function LottieSpiceMap() {
  return (
    <div className="mx-auto aspect-[4/3] w-full max-w-[40rem]">
      <Lottie
        src="/Peta Indonesia.json"
        loop
        autoplay
        className="h-full w-full"
        style={{ height: "100%", width: "100%" }}
        aria-label="Animasi peta jalur rempah Indonesia"
      />
    </div>
  );
}
