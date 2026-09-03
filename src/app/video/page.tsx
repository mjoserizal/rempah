"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faClock,
  faTag,
  faBrain,
  faArrowUpRightFromSquare,
  faXmark,
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
    id: "fj2xxbx_OHQ",
    title: "Pendahuluan jalur rempah",
    duration: "5 mnt",
    category: "Sejarah",
    desc: "Pengantar umum mengenal jalur rempah Nusantara dan perannya dalam sejarah dunia.",
  },
  {
    id: "9iivYtn1pEQ",
    title: "Maluku dan sejarah pala",
    duration: "8 mnt",
    category: "Rempah",
    desc: "Mengenal kepulauan Banda dan bagaimana pala mengubah peta kekuasaan dunia.",
  },
  {
    id: "-uL-Q3_tHN8",
    title: "Benteng-benteng rempah",
    duration: "10 mnt",
    category: "Sejarah",
    desc: "Jelajahi benteng peninggalan era monopoli rempah di Indonesia Timur.",
  },
  {
    id: "fj2xxbx_OHQ",
    title: "Tradisi dan budaya rempah",
    duration: "6 mnt",
    category: "Budaya",
    desc: "Tradisi, upacara, dan kuliner yang lahir dari kekayaan rempah Nusantara.",
  },
  {
    id: "wd4yNMiIPCQ",
    title: "Jamu dan pengobatan tradisional",
    duration: "7 mnt",
    category: "Kesehatan",
    desc: "Eksplorasi jamu sebagai warisan pengobatan tradisional berbasis rempah.",
  },
  {
    id: "fj2xxbx_OHQ",
    title: "Jalur rempah kini",
    duration: "9 mnt",
    category: "Kontemporer",
    desc: "Bagaimana jalur rempah dirayakan dan dilestarikan sebagai warisan budaya dunia.",
  },
];

export default function Video() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  useEffect(() => {
    if (!selectedVideo) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedVideo(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

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
          {videos.map((v) => (
            <div
              key={v.title}
              className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white"
            >
              <button
                type="button"
                onClick={() => setSelectedVideo(v)}
                aria-label={`Putar video ${v.title}`}
                className="group relative flex aspect-video w-full items-center justify-center bg-cover bg-center bg-neutral-900 text-white"
                style={{
                  backgroundImage: `url(https://i.ytimg.com/vi/${v.id}/hqdefault.jpg)`,
                }}
              >
                <span className="absolute inset-0 bg-neutral-950/55 transition group-hover:bg-neutral-950/40" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-neutral-900 transition-transform group-hover:scale-110">
                  <FontAwesomeIcon icon={faCirclePlay} className="h-7 w-7" />
                </span>
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 text-xs font-medium">
                  Putar video
                </span>
              </button>
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

      {selectedVideo &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
            className="fixed inset-0 z-[100] flex h-dvh w-screen items-center justify-center bg-neutral-950/90 p-3 backdrop-blur-sm sm:p-6"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="flex max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <h2
                    id="video-modal-title"
                    className="truncate font-semibold text-neutral-900"
                  >
                    {selectedVideo.title}
                  </h2>
                  <p className="mt-0.5 text-xs text-neutral-500">
                    {selectedVideo.category} · {selectedVideo.duration}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  aria-label="Tutup video"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
                >
                  <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
                </button>
              </div>
              <div className="aspect-video min-h-0 w-full bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
