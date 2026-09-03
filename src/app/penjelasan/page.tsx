import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faSeedling,
  faGlobe,
  faLandmark,
  faDrum,
  faBowlFood,
  faWind,
  faClockRotateLeft,
  faPeopleGroup,
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
    origin: "Maluku Utara: Ternate, Tidore, Makian, Bacan",
    desc: "Digunakan sebagai bumbu, pengawet makanan, obat, dan bahan parfum. Nilainya yang tinggi mendorong ekspedisi bangsa Eropa.",
    icon: faSeedling,
  },
  {
    name: "Pala",
    origin: "Kepulauan Banda, Maluku",
    desc: "Biji pala dan selaput bijinya, fuli, menjadi komoditas mewah di Eropa. Keduanya membuat Banda kaya sekaligus menjadi sasaran perebutan kekuasaan.",
    icon: faSeedling,
  },
  {
    name: "Lada",
    origin: "Banten, Lampung, Aceh, Sumatera Selatan",
    desc: "Komoditas perdagangan utama untuk bumbu dan pengawet yang mendorong tumbuhnya pelabuhan seperti Banten.",
    icon: faSeedling,
  },
  {
    name: "Kayu Manis",
    origin: "Kerinci, Jambi, Sumatera Barat",
    desc: "Dipakai sebagai bumbu, obat, dan pengawet alami serta diperdagangkan melalui pelabuhan Sumatra.",
    icon: faSeedling,
  },
  {
    name: "Kapur Barus",
    origin: "Barus, Sumatera Utara",
    desc: "Komoditas aromatik untuk pengobatan, ritual, dan pembalseman yang membuat Barus dikenal dalam jaringan niaga Asia.",
    icon: faSeedling,
  },
];

const chronology = [
  {
    period: "Praaksara",
    title: "Pelayaran Austronesia",
    desc: "Pelaut Austronesia mengembangkan perahu bercadik dan jaringan pelayaran luas dari Asia Tenggara hingga Madagaskar dan Afrika Timur. Jejak perdagangan rempah dengan dunia kuno terus dikaji melalui bukti arkeologis dan sumber tertulis.",
  },
  {
    period: "Abad ke-4–15",
    title: "Kerajaan maritim",
    desc: "Sriwijaya berkembang sebagai entrepôt di sekitar Selat Malaka dan Selat Sunda. Majapahit memperkuat hubungan antarpulau dalam jaringan perdagangan Nusantara.",
  },
  {
    period: "Abad ke-15–16",
    title: "Kesultanan dan emporium",
    desc: "Malaka menjadi pusat pertemuan pedagang Asia dan Eropa. Ternate dan Tidore menjadi pusat politik serta perdagangan cengkih di Maluku.",
  },
  {
    period: "Abad ke-16–20",
    title: "Monopoli dan kolonialisme",
    desc: "Portugis merebut Malaka pada 1511 dan mencapai Maluku pada 1512. Perjanjian Zaragoza 1521 membagi wilayah operasi Spanyol dan Portugis. VOC berdiri pada 1602 dan memaksakan monopoli melalui pelayaran hongi dengan kora-kora, ekstirpasi, serta kekerasan di Banda pada 1621 di bawah JP Coen. Perjanjian Breda 1667 mengatur pertukaran Pulau Run dengan Manhattan.",
  },
];

const impacts = [
  {
    title: "Bahasa dan masyarakat pelabuhan",
    desc: "Bahasa Melayu Pasar berkembang sebagai lingua franca. Pelabuhan menjadi masyarakat kosmopolitan dengan perjumpaan orang Nusantara, Arab, Gujarat, Tiongkok, dan Eropa, termasuk terbentuknya Kampung Arab, Pecinan, dan Koja.",
    icon: faPeopleGroup,
  },
  {
    title: "Akulturasi budaya",
    desc: "Pertukaran perdagangan membentuk kuliner seperti gulai dan kari, tradisi jamu, masjid beratap tumpang, serta kesenian seperti gambus.",
    icon: faBowlFood,
  },
  {
    title: "Perubahan dunia",
    desc: "Perburuan rempah ikut mendorong Age of Discovery atau Era Penjelajahan Samudra, yang mengubah peta politik dan ekonomi dunia dari tatanan feodal menuju kapitalisme global.",
    icon: faGlobe,
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

const ports = [
  {
    name: "Ternate dan Tidore",
    region: "Maluku Utara",
    desc: "Pusat produksi dan perdagangan cengkih. Kedua kesultanan ini terhubung dengan Sulawesi, Jawa, dan jaringan pedagang Asia melalui pelabuhan-pelabuhan di Maluku.",
  },
  {
    name: "Kepulauan Banda",
    region: "Maluku Tengah",
    desc: "Wilayah utama penghasil pala dan fuli. Kapal dari berbagai wilayah datang untuk mengumpulkan komoditas yang kemudian dibawa ke pelabuhan perantara di Sulawesi dan Jawa.",
  },
  {
    name: "Makassar",
    region: "Sulawesi Selatan",
    desc: "Simpul penting yang menghubungkan Maluku dengan Jawa, Nusa Tenggara, dan jalur menuju Asia. Pelabuhan ini menjadi ruang pertukaran rempah, beras, kain, dan hasil laut.",
  },
  {
    name: "Banten",
    region: "Jawa bagian barat",
    desc: "Pelabuhan lada yang ramai dan pintu masuk menuju pasar Asia. Letaknya di dekat Selat Sunda membuat Banten strategis bagi kapal yang bergerak antara Samudra Hindia dan Nusantara.",
  },
  {
    name: "Aceh dan Barus",
    region: "Sumatera bagian utara",
    desc: "Aceh berperan sebagai pusat perdagangan di ujung barat Nusantara, sedangkan Barus dikenal melalui kapur barus. Keduanya terhubung dengan India, Arab, dan pesisir Afrika Timur.",
  },
  {
    name: "Malaka",
    region: "Semenanjung Melayu",
    desc: "Emporium besar tempat rempah dari Nusantara bertemu pedagang Gujarat, Arab, Persia, Tiongkok, dan Eropa sebelum diteruskan ke pasar yang lebih luas.",
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
                Jalur Rempah adalah jaringan niaga bahari yang menghubungkan
                kepulauan Nusantara dengan India, Timur Tengah, Tiongkok, dan
                Eropa. Jaringan ini berpusat pada rute maritim, bukan satu jalan
                tunggal.
              </p>
              <p>
                Pelayaran memanfaatkan angin muson. Muson Barat, sekitar
                Oktober–Maret, membantu pelayaran menuju Nusantara; Muson Timur,
                sekitar April–September, membantu pelayaran kembali menuju
                Samudra Hindia atau Laut Tiongkok Selatan.
              </p>
              <p>
                Kerajaan maritim seperti Sriwijaya dan Majapahit membangun
                pengaruh dengan menguasai pelabuhan dan simpul laut strategis.
                Pola ini disebut thalassocracy, yaitu kekuatan yang bertumpu
                pada jaringan maritim.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
          <div>
            <FontAwesomeIcon
              icon={faWind}
              className="h-6 w-6 text-rempah-dark"
            />
            <h2 className="mt-4 text-2xl font-semibold text-neutral-900">
              Angin muson dan pelayaran
            </h2>
            <p className="mt-2 leading-relaxed text-neutral-600">
              Pengetahuan membaca musim membuat pelabuhan Nusantara terhubung
              secara berkala dengan pusat perdagangan dunia.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border-l-2 border-rempah-light pl-4">
              <h3 className="font-semibold text-neutral-900">Muson Barat</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                Oktober–Maret, mendukung pelayaran dari India, Arab, dan
                Tiongkok menuju Nusantara.
              </p>
            </div>
            <div className="border-l-2 border-rempah-light pl-4">
              <h3 className="font-semibold text-neutral-900">Muson Timur</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                April–September, mendukung pelayaran keluar dari Nusantara
                menuju barat dan timur.
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

      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              className="h-5 w-5 text-rempah-dark"
            />
            <h2 className="text-2xl font-semibold text-neutral-900">
              Kronologi singkat
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {chronology.map((item) => (
              <article
                key={item.period}
                className="border-t-2 border-rempah-light pt-4"
              >
                <p className="text-sm font-bold text-rempah-dark">
                  {item.period}
                </p>
                <h3 className="mt-2 font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rute" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Rute pelayaran rempah Nusantara
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-neutral-600">
            Dari Maluku sebagai pusat cengkih dan pala, rempah disebarkan
            melalui jaringan pelayaran ke Sulawesi, Jawa, hingga Sumatera
            sebelum diteruskan ke pasar dunia. Setiap pelabuhan memiliki peran
            berbeda sebagai tempat produksi, pengumpulan, pertukaran, atau
            pengiriman komoditas.
          </p>

          <div className="mt-8">
            <LottieSpiceMap />
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900">
              Pelabuhan utama
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600">
              Pelabuhan-pelabuhan berikut membentuk rangkaian distribusi dari
              kebun rempah hingga pusat perdagangan internasional.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ports.map((port) => (
                <article
                  key={port.name}
                  className="border-l-2 border-rempah-light bg-white p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-rempah-dark">
                    {port.region}
                  </p>
                  <h4 className="mt-2 font-semibold text-neutral-900">
                    {port.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {port.desc}
                  </p>
                </article>
              ))}
            </div>
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

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="section-kicker">Relevansi hari ini</p>
          <h2 className="mt-2 max-w-2xl text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Merawat ingatan, menghidupkan kembali jaringan
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-neutral-600">
            Jalur Rempah menjadi bagian dari diplomasi budaya Indonesia dan
            mendukung gagasan Poros Maritim Dunia. Pelestarian pelabuhan,
            pengetahuan rempah, dan tradisi masyarakat membantu mengajukan
            jaringan ini sebagai warisan budaya dunia kepada UNESCO.
          </p>
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
          {[...heritage, ...impacts].map((h) => (
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
