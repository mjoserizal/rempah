import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faSeedling,
  faGlobe,
  faLandmark,
  faDrum,
  faBowlFood,
  faArrowRightLong,
  faArrowLeftLong,
  faArrowsLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import LottieSpiceMap from "@/components/LottieSpiceMap";
import ScrollReveal from "@/components/ScrollReveal";

type Spice = {
  name: string;
  origin: string;
  desc: string;
  icon: IconDefinition;
};

const spices: Spice[] = [
  {
    name: "Cengkeh",
    origin: "Ternate & Tidore, Maluku",
    desc: "Rempah berharga yang nilainya pernah setara emas dan menjadi pemicu ekspedisi bangsa Eropa.",
    icon: faSeedling,
  },
  {
    name: "Pala",
    origin: "Kepulauan Banda, Maluku",
    desc: "Selama berabad-abad hanya tumbuh di Banda, menjadi sumber kekayaan sekaligus konflik.",
    icon: faSeedling,
  },
  {
    name: "Lada",
    origin: "Lampung & Sumatera",
    desc: "Dijuluki raja rempah dan menjadi komoditas perdagangan terbesar, mendorong tumbuhnya pelabuhan seperti Banten.",
    icon: faSeedling,
  },
  {
    name: "Kayu Manis",
    origin: "Sumatera Barat & Jawa",
    desc: "Aromanya digemari seluruh dunia, dipakai untuk bumbu, obat, dan pengawet alami.",
    icon: faSeedling,
  },
  {
    name: "Jahe",
    origin: "Jawa & Indonesia Timur",
    desc: "Lama dikenal sebagai tanaman obat dan rempah masak yang bergengsi di pasar dunia.",
    icon: faSeedling,
  },
  {
    name: "Kunyit",
    origin: "Jawa",
    desc: "Rempah kuning yang dipakai dalam masakan, ritual, dan pengobatan tradisional (jamu).",
    icon: faSeedling,
  },
];

const routes = [
  {
    name: "Rute Barat",
    path: "Eropa → Timur Tengah → India → Selat Malaka",
    desc: "Rute paling ramai yang mengalirkan cengkeh, pala, dan lada dari Maluku ke pasar dunia.",
    icon: faArrowRightLong,
  },
  {
    name: "Rute Timur",
    path: "Tiongkok & Jepang → Sulawesi → Maluku",
    desc: "Menghubungkan Maluku dengan pasar Asia Timur lewat pelabuhan di Nusantara timur.",
    icon: faArrowLeftLong,
  },
  {
    name: "Rute Nusantara",
    path: "Maluku → Sulawesi → Jawa → Sumatera",
    desc: "Jaringan pelayaran antarpulau yang menjadi tulang punggung distribusi rempah.",
    icon: faArrowsLeftRight,
  },
];

const heritage = [
  {
    title: "Benteng & Pelabuhan",
    desc: "Benteng peninggalan Portugis dan Belanda di Ternate, Banda, dan Makassar jadi saksi kejayaan rempah.",
    icon: faLandmark,
  },
  {
    title: "Tradisi & Upacara",
    desc: "Festival seperti Legu Gam di Maluku merayakan hubungan budaya dengan rempah.",
    icon: faDrum,
  },
  {
    title: "Jamu & Kuliner",
    desc: "Kekayaan rempah melahirkan tradisi jamu dan kuliner khas yang kini dikenal dunia.",
    icon: faBowlFood,
  },
];

export default function Penjelasan() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <span className="inline-block text-sm font-medium text-neutral-500">
            <FontAwesomeIcon icon={faBookOpen} className="mr-1.5 h-4 w-4" />
            Penjelasan
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Sejarah Jalur Rempah Indonesia
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-600">
            Jalur rempah adalah jaringan perdagangan yang menghubungkan
            Nusantara dengan dunia sejak zaman dahulu. Rempah-rempah kita begitu
            bernilai sehingga menjadi pemicu penjelajahan samudra dan turut
            mengubah peta dunia.
          </p>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-20 lg:py-20">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rempah-light">
              <FontAwesomeIcon
                icon={faGlobe}
                className="h-4 w-4 text-rempah-dark"
              />
            </div>
            <p className="section-kicker mt-6">Konteks sejarah</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl">
              Mengapa disebut jalur rempah?
            </h2>
          </div>
          <div className="border-l-2 border-rempah-light pl-6 text-neutral-700 sm:pl-8">
            <div className="space-y-5 leading-relaxed">
              <p>
                Sejak abad ke-7, pedagang dari Tiongkok, India, Arab, dan Eropa
                datang ke Nusantara untuk membeli rempah langka seperti cengkeh,
                pala, dan lada. Rempah ini digunakan untuk mengawetkan makanan,
                obat-obatan, dan parfum.
              </p>
              <p>
                Nilainya bisa melebihi emas. Karena itu Portugis dan kemudian
                Belanda rela melayari samudra ribuan kilometer untuk menguasai
                sumber rempah di Maluku. Persaingan ini melahirkan era
                kolonialisme.
              </p>
              <p>
                Pada 2022, UNESCO menetapkan Jalur Rempah sebagai bagian dari
                memori kolektif dunia. Kini jalur rempah menjadi simbol
                kebanggaan dan identitas budaya bangsa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Rempah-rempah legendaris
          </h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            Komoditas berharga yang menjadikan Nusantara pusat peradaban
            perdagangan dunia.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
            {spices.map((s) => (
              <div key={s.name} className="bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-100">
                    <FontAwesomeIcon
                      icon={s.icon}
                      className="h-4 w-4 text-neutral-600"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{s.name}</h3>
                    <p className="text-xs text-neutral-500">{s.origin}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rute" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Rute perdagangan
          </h2>

          <div className="mt-8">
            <LottieSpiceMap />
          </div>

          <div className="mt-10 space-y-5">
            {routes.map((r, routeIndex) => {
              const stops = r.path.split(" → ");

              return (
                <ScrollReveal key={r.name} delay={routeIndex * 100}>
                  <article className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rempah-light">
                        <FontAwesomeIcon
                          icon={r.icon}
                          className="h-4 w-4 text-rempah-dark"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900">
                          {r.name}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                          {r.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 overflow-x-auto pb-1">
                      <div className="flex min-w-max items-start">
                        {stops.map((stop, stopIndex) => (
                          <div
                            key={stop}
                            className="route-stop flex items-start"
                          >
                            <div className="flex w-32 flex-col items-center text-center sm:w-40">
                              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-rempah bg-white text-sm font-bold text-rempah-dark">
                                {stopIndex + 1}
                              </span>
                              <span className="mt-2 text-xs font-medium leading-tight text-neutral-700">
                                {stop}
                              </span>
                            </div>
                            {stopIndex < stops.length - 1 && (
                              <div className="route-connector mt-4 flex w-10 items-center text-rempah sm:w-16">
                                <span className="h-px flex-1 bg-rempah-light" />
                                <FontAwesomeIcon
                                  icon={faArrowRightLong}
                                  className="h-3 w-3"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Warisan yang tersisa
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Jejak jalur rempah masih hidup dalam budaya dan kehidupan masyarakat
          Indonesia hingga kini.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {heritage.map((h) => (
            <div key={h.title}>
              <FontAwesomeIcon
                icon={h.icon}
                className="h-6 w-6 text-neutral-500"
              />
              <h3 className="mt-3 font-semibold text-neutral-900">{h.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
