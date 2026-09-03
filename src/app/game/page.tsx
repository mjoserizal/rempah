"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faCoins,
  faBasketShopping,
  faSailboat,
  faRotateRight,
  faTrophy,
  faCartPlus,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

type Spice = { name: string; cost: number; sell: number };

const spices: Spice[] = [
  { name: "Cengkeh", cost: 100, sell: 160 },
  { name: "Pala", cost: 90, sell: 150 },
  { name: "Lada", cost: 60, sell: 100 },
  { name: "Kayu Manis", cost: 70, sell: 120 },
  { name: "Jahe", cost: 40, sell: 75 },
];

const events = [
  { text: "Kapalmu selamat dari badai.", delta: 0 },
  { text: "Badai menyerang, sebagian barang hilang.", delta: -50 },
  { text: "Bajak laut menyerang, sebagian emas hilang.", delta: -80 },
  { text: "Harga rempah melonjak di pelabuhan.", delta: 120 },
  { text: "Kamu menemukan rempah langka di perjalanan.", delta: 100 },
];

export default function Game() {
  const [gold, setGold] = useState(500);
  const [inventory, setInventory] = useState<Record<string, number>>({});
  const [logs, setLogs] = useState<string[]>([
    "Selamat datang. Kamu adalah pedagang rempah Nusantara.",
    "Kamu memulai dengan 500 emas. Berdaganglah untuk menjadi kaya.",
  ]);
  const [turn, setTurn] = useState<number>(0);
  const MAX_TURNS = 8;

  const addLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev].slice(0, 6));
  };

  const buy = (spice: Spice) => {
    if (gold < spice.cost) {
      addLog("Emas tidak cukup untuk membeli.");
      return;
    }
    setGold((g) => g - spice.cost);
    setInventory((inv) => ({
      ...inv,
      [spice.name]: (inv[spice.name] || 0) + 1,
    }));
    addLog(`Membeli 1x ${spice.name}.`);
  };

  const sell = (spice: Spice) => {
    const owned = inventory[spice.name] || 0;
    if (owned < 1) {
      addLog("Stok tidak cukup untuk menjual.");
      return;
    }
    setGold((g) => g + spice.sell);
    setInventory((inv) => ({ ...inv, [spice.name]: owned - 1 }));
    addLog(`Menjual 1x ${spice.name}.`);
  };

  const setSail = () => {
    const event = events[Math.floor(Math.random() * events.length)];
    setGold((g) => Math.max(0, g + event.delta));
    addLog(event.text);
    setTurn((t) => t + 1);
    addLog(`Berlayar ke pulau berikutnya (giliran ${turn + 1}/${MAX_TURNS}).`);
  };

  const restart = () => {
    setGold(500);
    setInventory({});
    setLogs(["Petualangan baru dimulai."]);
    setTurn(0);
  };

  const isFinished = turn >= MAX_TURNS;
  const totalGoods = Object.values(inventory).reduce((a, b) => a + b, 0);
  const goodsValue = Object.entries(inventory).reduce((acc, [name, qty]) => {
    const s = spices.find((x) => x.name === name)!;
    return acc + s.sell * qty;
  }, 0);
  const finalScore = gold + goodsValue;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
      <p className="section-kicker">Laboratorium interaktif</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500">
        <FontAwesomeIcon icon={faGamepad} className="h-4 w-4" />
        Simulasi sejarah
      </span>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        Pedagang Rempah Nusantara
      </h1>
      <p className="mt-2 max-w-2xl text-neutral-600">
        Pelajari bagaimana harga, risiko pelayaran, dan jaringan perdagangan
        memengaruhi perjalanan pedagang rempah Nusantara. Berlayar sebanyak{" "}
        {MAX_TURNS} kali untuk melihat dampaknya.
      </p>
      <div className="mt-6 max-w-2xl">
        <div className="flex items-center justify-between text-xs font-medium text-neutral-500">
          <span>Progres pelayaran</span>
          <span>
            {turn} dari {MAX_TURNS} pelayaran
          </span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full bg-rempah transition-all duration-500"
            style={{ width: `${(turn / MAX_TURNS) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {/* Dashboard */}
        <div className="space-y-6">
          <div className="rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-neutral-900">
              Papan pedagang
            </h2>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-md bg-neutral-50 p-3">
                <FontAwesomeIcon
                  icon={faCoins}
                  className="mx-auto h-5 w-5 text-neutral-500"
                />
                <div className="mt-1 text-lg font-bold text-neutral-900">
                  {gold}
                </div>
                <div className="text-xs text-neutral-500">emas</div>
              </div>
              <div className="rounded-md bg-neutral-50 p-3">
                <FontAwesomeIcon
                  icon={faBasketShopping}
                  className="mx-auto h-5 w-5 text-neutral-500"
                />
                <div className="mt-1 text-lg font-bold text-neutral-900">
                  {totalGoods}
                </div>
                <div className="text-xs text-neutral-500">barang</div>
              </div>
              <div className="rounded-md bg-neutral-50 p-3">
                <FontAwesomeIcon
                  icon={faSailboat}
                  className="mx-auto h-5 w-5 text-neutral-500"
                />
                <div className="mt-1 text-lg font-bold text-neutral-900">
                  {MAX_TURNS - turn}
                </div>
                <div className="text-xs text-neutral-500">sisa</div>
              </div>
            </div>

            {isFinished ? (
              <div className="mt-4 rounded-md bg-green-50 p-4 text-center">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="mx-auto h-6 w-6 text-green-700"
                />
                <p className="mt-1 font-semibold text-green-800">
                  Perjalanan selesai
                </p>
                <p className="mt-1 text-2xl font-bold text-green-700">
                  {finalScore} emas
                </p>
                <p className="text-xs text-green-800/70">emas + nilai barang</p>
              </div>
            ) : (
              <button
                onClick={setSail}
                className="sail-button mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 py-2.5 text-sm font-medium text-white transition hover:bg-rempah-dark"
              >
                <FontAwesomeIcon icon={faSailboat} className="h-4 w-4" />
                Berlayar
              </button>
            )}
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-neutral-900">
              Catatan perjalanan
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              {logs.map((log, i) => (
                <li key={i} className="border-l-2 border-neutral-200 pl-3">
                  {log}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Market */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-neutral-900">
              Pasar rempah
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {spices.map((s) => {
                const owned = inventory[s.name] || 0;
                return (
                  <div
                    key={s.name}
                    className="group flex items-center justify-between rounded-md border border-neutral-200 p-4 transition hover:-translate-y-0.5 hover:border-rempah-light hover:shadow-sm"
                  >
                    <div>
                      <div className="font-semibold text-neutral-900">
                        {s.name}
                      </div>
                      <div className="mt-1 text-xs text-neutral-500">
                        Punya: {owned}
                      </div>
                      <div className="mt-1 text-xs">
                        <span className="text-red-600">Beli {s.cost}</span>
                        <span className="mx-1 text-neutral-300">/</span>
                        <span className="text-green-600">Jual {s.sell}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => buy(s)}
                        disabled={isFinished}
                        className="inline-flex items-center gap-1 rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <FontAwesomeIcon
                          icon={faCartPlus}
                          className="h-3 w-3"
                        />
                        Beli
                      </button>
                      <button
                        onClick={() => sell(s)}
                        disabled={isFinished}
                        className="inline-flex items-center gap-1 rounded-md border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <FontAwesomeIcon
                          icon={faSackDollar}
                          className="h-3 w-3"
                        />
                        Jual
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {isFinished && (
            <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center">
              <h3 className="text-xl font-bold text-neutral-900">
                Kekayaan akhir: {finalScore} emas
              </h3>
              <p className="mt-1 text-neutral-600">
                {finalScore >= 1000
                  ? "Kamu raja rempah sejati."
                  : finalScore >= 700
                    ? "Pedagang ulung yang tangguh."
                    : "Ayo coba lagi untuk jadi lebih kaya."}
              </p>
              <button
                onClick={restart}
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
              >
                <FontAwesomeIcon icon={faRotateRight} className="h-4 w-4" />
                Mulai ulang
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
