import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faBrain,
  faGamepad,
  faCirclePlay,
  faShirt,
  faArrowRight,
  faScroll,
  faAnchor,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import LottieSpiceMap from "@/components/LottieSpiceMap";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    title: "Penjelasan",
    description: "Sejarah, rempah, dan rute jalur rempah Nusantara.",
    href: "/penjelasan",
    icon: faBookOpen,
  },
  {
    title: "Quiz",
    description: "Uji pengetahuanmu lewat kuis interaktif.",
    href: "/quiz",
    icon: faBrain,
  },
  {
    title: "Game",
    description: "Rasakan jadi pedagang rempah di laut Nusantara.",
    href: "/game",
    icon: faGamepad,
  },
  {
    title: "Video",
    description: "Tonton video edukatif seputar kejayaan rempah.",
    href: "/video",
    icon: faCirclePlay,
  },
  {
    title: "Merchandise",
    description: "Koleksi merchandise bertemakan rempah Nusantara.",
    href: "/merchandise",
    icon: faShirt,
  },
];

const milestones = [
  {
    label: "Masa Awal",
    period: "Abad ke-7 hingga ke-15",
    text: "Rempah Nusantara mulai dikenal pedagang India dan Tiongkok.",
    detail:
      "Pelabuhan-pelabuhan di Nusantara tumbuh sebagai titik temu budaya, bahasa, dan pengetahuan dari berbagai penjuru Asia.",
    icon: faScroll,
  },
  {
    label: "Era Kolonial",
    period: "Abad ke-16 hingga ke-19",
    text: "Portugis, Belanda, dan Spanyol berebut monopoli rempah.",
    detail:
      "Nilai cengkeh dan pala mendorong pelayaran jarak jauh sekaligus membawa perebutan kuasa dan perubahan besar bagi masyarakat Maluku.",
    icon: faAnchor,
  },
  {
    label: "Warisan Kini",
    period: "Masa kini",
    text: "Jalur rempah diakui sebagai memori kolektif dunia oleh UNESCO.",
    detail:
      "Jejaknya masih terlihat dalam tradisi, kuliner, pelabuhan, dan cerita masyarakat yang terus dirawat lintas generasi.",
    icon: faSeedling,
  },
];

export default function Home() {
  return (
    <div className="home-scroll flex flex-col">
      {/* Hero */}
      <section className="paper-grid -mt-16 flex min-h-svh items-center border-b border-neutral-200 pt-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <ScrollReveal>
            <div>
              <span className="inline-block text-sm font-medium text-neutral-500">
                Ruang Belajar Jalur Rempah
              </span>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
                Jejak rempah yang menghubungkan Indonesia dengan dunia
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
                Sejak berabad-abad lalu, Nusantara menjadi pusat perdagangan
                rempah dunia. Pelajari sejarah, geografi, budaya, dan warisan
                jalur rempah melalui artikel, video, kuis, dan simulasi.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
                >
                  Mulai Quiz
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="h-3.5 w-3.5"
                  />
                </Link>
                <Link
                  href="/penjelasan"
                  className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50"
                >
                  Baca Penjelasan
                </Link>
              </div>
            </div>
          </ScrollReveal>
          <div className="lg:scale-125">
            <LottieSpiceMap />
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="belajar"
        className="home-section mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6"
      >
        <ScrollReveal>
          <p className="section-kicker">Jelajahi pengetahuan</p>
          <h2 className="mt-2 text-2xl font-semibold text-neutral-900">
            Pilih cara belajarmu
          </h2>
        </ScrollReveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, index) => (
            <ScrollReveal key={f.title} delay={index * 70} className="h-full">
              <Link
                href={f.href}
                className="group flex h-full flex-col rounded-lg border border-neutral-200 border-t-2 border-t-[#a158f5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <FontAwesomeIcon
                    icon={f.icon}
                    className="h-5 w-5 text-[#a158f5] transition group-hover:scale-110"
                  />
                  <span className="text-xs font-semibold text-neutral-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-semibold text-neutral-900">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  {f.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-neutral-900">
                  Pelajari
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="h-3 w-3 transition group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={350} className="h-full">
            <div className="flex h-full flex-col rounded-lg border border-neutral-200 bg-neutral-50 p-6">
              <div className="flex items-start justify-between">
                <FontAwesomeIcon
                  icon={faSeedling}
                  className="h-5 w-5 text-[#a158f5]"
                />
                <span className="text-xs font-semibold text-neutral-400">
                  Catatan
                </span>
              </div>
              <h3 className="mt-6 font-semibold text-neutral-900">
                Dukung pelestarian
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                Kenali warisan jalur rempah dan dukung pengenalan sejarahnya
                melalui koleksi bertema Nusantara.
              </p>
              <Link
                href="/merchandise"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-[#a158f5]"
              >
                Lihat koleksi
                <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Route map */}
      <section className="home-section mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
        <ScrollReveal>
          <div className="max-w-2xl border-l-2 border-[#a158f5] pl-6">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Rute pelayaran rempah Nusantara
            </h2>
            <p className="mt-3 max-w-md leading-relaxed text-neutral-600">
              Dari Maluku sebagai pusat cengkeh dan pala, rempah disebarkan
              melalui jaringan pelayaran ke Sulawesi, Jawa, hingga Sumatera
              sebelum diteruskan ke pasar dunia.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-neutral-600">
              <span className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#a158f5]" />
                Pelabuhan utama
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-0.5 w-5 bg-[#a158f5]" />
                Rute perdagangan
              </span>
            </div>
            <Link
              href="/penjelasan#rute"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50"
            >
              Baca penjelasan rute
              <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Milestones */}
      <section className="home-section flex min-h-svh items-center border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <ScrollReveal>
            <p className="section-kicker">Garis waktu</p>
            <h2 className="mt-2 text-2xl font-semibold text-neutral-900">
              Perjalanan singkat
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-600">
              Dari jaringan dagang antarpulau hingga warisan budaya yang masih
              hidup, berikut tiga bab penting dalam perjalanan rempah Nusantara.
            </p>
          </ScrollReveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {milestones.map((m, index) => (
              <ScrollReveal key={m.label} delay={index * 100}>
                <div className="h-full border-t-2 border-rempah pt-5">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={m.icon}
                      className="h-5 w-5 text-rempah"
                    />
                    <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                      {m.period}
                    </span>
                  </div>
                  <h3 className="mt-5 font-semibold text-neutral-900">
                    {m.label}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-700">
                    {m.text}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {m.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
