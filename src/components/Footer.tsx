import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faBookOpen,
  faBrain,
  faGamepad,
  faCirclePlay,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const links = [
  { label: "Penjelasan", href: "/penjelasan", icon: faBookOpen },
  { label: "Quiz", href: "/quiz", icon: faBrain },
  { label: "Game", href: "/game", icon: faGamepad },
  { label: "Video", href: "/video", icon: faCirclePlay },
  { label: "Merchandise", href: "/merchandise", icon: faShirt },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-900">
              <FontAwesomeIcon icon={faMapLocationDot} className="h-4 w-4 text-rempah" />
              Jalur Rempah
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              Menelusuri jejak perdagangan rempah yang menghubungkan Nusantara
              dengan dunia.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Jelajahi
            </h4>
            <ul className="space-y-2 text-sm text-neutral-700">
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-rempah">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Tentang
            </h4>
            <p className="text-sm leading-relaxed text-neutral-600">
              Situs edukasi tentang sejarah Jalur Rempah Indonesia untuk semua
              kalangan.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} Jalur Rempah Indonesia.
        </div>
      </div>
    </footer>
  );
}
