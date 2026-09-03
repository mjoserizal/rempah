import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faClock,
  faTag,
  faBrain,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type Video = {
  id: string;
  title: string;
  duration: string;
  category: string;
  desc: string;
};

const videos: Video[] = [
  {
    id: "dQw4w9WgXcQ",
    title: "Pendahuluan jalur rempah",
    duration: "5 mnt",
    category: "Sejarah",
    desc: "Pengantar umum mengenal jalur rempah Nusantara dan perannya dalam sejarah dunia.",
  },
  {
    id: "jNQXAC9IVRw",
    title: "Maluku dan sejarah pala",
    duration: "8 mnt",
    category: "Rempah",
    desc: "Mengenal kepulauan Banda dan bagaimana pala mengubah peta kekuasaan dunia.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Benteng-benteng rempah",
    duration: "10 mnt",
    category: "Sejarah",
    desc: "Jelajahi benteng peninggalan era monopoli rempah di Indonesia Timur.",
  },
  {
    id: "jNQXAC9IVRw",
    title: "Tradisi dan budaya rempah",
    duration: "6 mnt",
    category: "Budaya",
    desc: "Tradisi, upacara, dan kuliner yang lahir dari kekayaan rempah Nusantara.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Jamu dan pengobatan tradisional",
    duration: "7 mnt",
    category: "Kesehatan",
    desc: "Eksplorasi jamu sebagai warisan pengobatan tradisional berbasis rempah.",
  },
  {
    id: "jNQXAC9IVRw",
    title: "Jalur rempah kini",
    duration: "9 mnt",
    category: "Kontemporer",
    desc: "Bagaimana jalur rempah dirayakan dan dilestarikan sebagai warisan budaya dunia.",
  },
];

export default function Video() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500">
            <FontAwesomeIcon icon={faCirclePlay} className="h-4 w-4" />
            Materi audiovisual
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Simak dan pahami
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Materi audiovisual untuk memahami sejarah, budaya, dan warisan jalur
            rempah Indonesia.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <div
              key={i}
              className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white"
            >
              <div className="relative aspect-video w-full bg-neutral-100">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1 text-neutral-500">
                    <FontAwesomeIcon icon={faTag} className="h-3 w-3" />
                    {v.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-neutral-500">
                    <FontAwesomeIcon icon={faClock} className="h-3 w-3" />
                    {v.duration}
                  </span>
                </div>
                <h2 className="mt-2 font-semibold text-neutral-900">
                  {v.title}
                </h2>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-neutral-600">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold text-neutral-900">
                Perdalam pemahamanmu
              </h2>
              <p className="mt-1 text-neutral-600">
                Gunakan kuis untuk mengingat kembali hal-hal penting dari
                materi.
              </p>
            </div>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              <FontAwesomeIcon icon={faBrain} className="h-4 w-4" />
              Kerjakan kuis
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="h-3.5 w-3.5"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
