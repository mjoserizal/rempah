"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faShirt,
  faBagShopping,
  faMugHot,
  faHatCowboy,
  faImage,
  faStickyNote,
  faWineBottle,
  faBook,
  faKey,
  faSackDollar,
  faCartShopping,
  faXmark,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  desc: string;
  icon: IconDefinition;
};

const products: Product[] = [
  {
    id: 1,
    name: "Kaos jalur rempah",
    price: 120000,
    category: "Pakaian",
    desc: "Kaos katun dengan garis besar peta jalur rempah Nusantara.",
    icon: faShirt,
  },
  {
    id: 2,
    name: "Tote bag rempah",
    price: 85000,
    category: "Aksesoris",
    desc: "Tas belanja kanvas dengan ilustrasi aneka rempah Indonesia.",
    icon: faBagShopping,
  },
  {
    id: 3,
    name: "Mug rempah",
    price: 65000,
    category: "Perlengkapan",
    desc: "Mug keramik bertema cengkeh, pala, dan lada.",
    icon: faMugHot,
  },
  {
    id: 4,
    name: "Topi pelaut rempah",
    price: 95000,
    category: "Aksesoris",
    desc: "Topi bergaya pelaut era jalur rempah.",
    icon: faHatCowboy,
  },
  {
    id: 5,
    name: "Poster sejarah rempah",
    price: 75000,
    category: "Dekorasi",
    desc: "Poster edukatif kronologi jalur rempah.",
    icon: faImage,
  },
  {
    id: 6,
    name: "Stiker set rempah",
    price: 25000,
    category: "Aksesoris",
    desc: "Paket stiker aneka rempah Nusantara.",
    icon: faStickyNote,
  },
  {
    id: 7,
    name: "Botol minum rempah",
    price: 110000,
    category: "Perlengkapan",
    desc: "Tumbler dengan motif pelayaran rempah.",
    icon: faWineBottle,
  },
  {
    id: 8,
    name: "Buku saku rempah",
    price: 60000,
    category: "Edukasi",
    desc: "Panduan singkat sejarah dan jenis rempah.",
    icon: faBook,
  },
  {
    id: 9,
    name: "Gantungan kunci rempah",
    price: 30000,
    category: "Aksesoris",
    desc: "Gantungan kunci bertema aneka rempah.",
    icon: faKey,
  },
  {
    id: 10,
    name: "Syal rempah",
    price: 135000,
    category: "Pakaian",
    desc: "Syal bermotif rempah khas Nusantara.",
    icon: faShirt,
  },
  {
    id: 11,
    name: "Tas ransel rempah",
    price: 199000,
    category: "Aksesoris",
    desc: "Ransel kanvas untuk petualangan.",
    icon: faBagShopping,
  },
  {
    id: 12,
    name: "Paket kopi rempah",
    price: 145000,
    category: "Kuliner",
    desc: "Kopi dan jahe instan bercita rasa rempah.",
    icon: faSackDollar,
  },
];

function formatPrice(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

export default function Merchandise() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [checkout, setCheckout] = useState(false);

  const addToCart = (id: number) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  };

  const changeQty = (id: number, delta: number) => {
    setCart((c) => {
      const next = { ...c };
      const updated = (next[id] || 0) + delta;
      if (updated <= 0) delete next[id];
      else next[id] = updated;
      return next;
    });
  };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((acc, [id, qty]) => {
    const p = products.find((x) => x.id === Number(id))!;
    return acc + p.price * qty;
  }, 0);

  return (
    <div className="flex flex-col">
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500">
            <FontAwesomeIcon icon={faShirt} className="h-4 w-4" />
            Pendukung pembelajaran
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Koleksi untuk mengenal jalur rempah
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Produk bertema rempah Nusantara untuk membantu mengenalkan sejarah
            dan budaya jalur rempah. Pilih koleksi, lalu masukkan ke keranjang.
          </p>
          {cartCount > 0 && (
            <button
              onClick={() => setCheckout(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              <FontAwesomeIcon icon={faCartShopping} className="h-4 w-4" />
              Keranjang ({cartCount}) — {formatPrice(cartTotal)}
            </button>
          )}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => {
            const qty = cart[p.id] || 0;
            return (
              <div
                key={p.id}
                className="flex flex-col rounded-lg border border-neutral-200 bg-white p-4 transition hover:border-neutral-300"
              >
                <div className="flex h-32 items-center justify-center rounded-md bg-neutral-50">
                  <FontAwesomeIcon
                    icon={p.icon}
                    className="h-10 w-10 text-neutral-300"
                  />
                </div>
                <div className="mt-3 flex-1">
                  <div className="text-xs text-neutral-500">{p.category}</div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {p.name}
                  </h3>
                  <p className="mt-1 hidden text-xs leading-relaxed text-neutral-500 sm:block">
                    {p.desc}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold text-neutral-900">
                      {formatPrice(p.price)}
                    </span>
                    {qty > 0 ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => changeQty(p.id, -1)}
                          className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                        >
                          <FontAwesomeIcon icon={faMinus} className="h-3 w-3" />
                        </button>
                        <span className="w-4 text-center text-sm font-medium">
                          {qty}
                        </span>
                        <button
                          onClick={() => addToCart(p.id)}
                          className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 text-white hover:bg-neutral-700"
                        >
                          <FontAwesomeIcon icon={faPlus} className="h-3 w-3" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(p.id)}
                        className="inline-flex items-center gap-1 rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-neutral-700"
                      >
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          className="h-3 w-3"
                        />
                        Keranjang
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {checkout && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setCheckout(false)}
        >
          <div
            className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-lg border border-neutral-200 bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-neutral-900">
                Keranjang belanja
              </h2>
              <button
                onClick={() => setCheckout(false)}
                className="text-neutral-500 hover:text-neutral-900"
              >
                <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
              </button>
            </div>
            {Object.keys(cart).length === 0 ? (
              <p className="mt-6 text-center text-neutral-500">
                Keranjangmu masih kosong.
              </p>
            ) : (
              <>
                <ul className="mt-4 space-y-3">
                  {Object.entries(cart).map(([id, qty]) => {
                    const p = products.find((x) => x.id === Number(id))!;
                    return (
                      <li
                        key={id}
                        className="flex items-center justify-between rounded-md border border-neutral-200 p-3"
                      >
                        <div>
                          <div className="text-sm font-medium text-neutral-900">
                            {p.name}
                          </div>
                          <div className="text-xs text-neutral-500">
                            {formatPrice(p.price)}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => changeQty(p.id, -1)}
                            className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                          >
                            <FontAwesomeIcon
                              icon={faMinus}
                              className="h-3 w-3"
                            />
                          </button>
                          <span className="w-5 text-center text-sm font-medium">
                            {qty}
                          </span>
                          <button
                            onClick={() => changeQty(p.id, 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 text-white hover:bg-neutral-700"
                          >
                            <FontAwesomeIcon
                              icon={faPlus}
                              className="h-3 w-3"
                            />
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-5 flex items-center justify-between border-t border-neutral-200 pt-4">
                  <span className="font-semibold text-neutral-900">Total</span>
                  <span className="text-xl font-bold text-neutral-900">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setCheckout(false);
                    setCart({});
                  }}
                  className="mt-5 w-full rounded-md bg-neutral-900 py-3 font-medium text-white transition hover:bg-neutral-700"
                >
                  Selesaikan pesanan
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
