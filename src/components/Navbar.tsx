"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faXmark,
  faMapLocationDot,
  faBookOpen,
  faBrain,
  faGamepad,
  faCirclePlay,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems: { label: string; href: string; icon: IconDefinition }[] = [
  { label: "Beranda", href: "/", icon: faMapLocationDot },
  { label: "Penjelasan", href: "/penjelasan", icon: faBookOpen },
  { label: "Quiz", href: "/quiz", icon: faBrain },
  { label: "Game", href: "/game", icon: faGamepad },
  { label: "Video", href: "/video", icon: faCirclePlay },
  { label: "Merchandise", href: "/merchandise", icon: faShirt },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 mx-auto w-[calc(100%-1.5rem)] max-w-6xl rounded-full border border-neutral-200 bg-white/75 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-neutral-900">
          <FontAwesomeIcon
            icon={faMapLocationDot}
            className="h-5 w-5 text-rempah"
          />
          <span className="text-base font-semibold tracking-tight">
            Jalur Rempah
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  active
                    ? "text-rempah-dark"
                    : "text-neutral-600 hover:text-rempah-dark"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 md:hidden"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-neutral-200 bg-white px-4 py-2 md:hidden">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium ${
                  active
                    ? "text-rempah-dark"
                    : "text-neutral-700 hover:text-rempah-dark"
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="w-4 text-rempah" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
