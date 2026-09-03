"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faCircleCheck,
  faCircleXmark,
  faTrophy,
  faRotateRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const questions: Question[] = [
  {
    question:
      "Rempah apa yang menjadi penyebab utama bangsa Eropa datang ke Nusantara?",
    options: [
      "Cengkeh dan Pala",
      "Teh dan Kopi",
      "Gula dan Beras",
      "Tembakau dan Kapas",
    ],
    answer: 0,
    explanation:
      "Cengkeh dan pala yang hanya tumbuh di Maluku menjadi incaran karena nilainya setara emas.",
  },
  {
    question:
      "Di kepulauan mana pala pertama kali dikenal sebagai satu-satunya di dunia?",
    options: [
      "Sumatera",
      "Kepulauan Banda, Maluku",
      "Jawa Barat",
      "Kalimantan",
    ],
    answer: 1,
    explanation:
      "Kepulauan Banda dikenal sebagai satu-satunya sumber pala selama berabad-abad.",
  },
  {
    question:
      "Pelabuhan yang berkembang pesat karena perdagangan lada adalah...",
    options: [
      "Pelabuhan Belawan",
      "Pelabuhan Banten",
      "Pelabuhan Merak",
      "Pelabuhan Tanjung Priok",
    ],
    answer: 1,
    explanation:
      "Pelabuhan Banten tumbuh menjadi pelabuhan internasional yang ramai karena perdagangan lada.",
  },
  {
    question:
      "Bangsa yang pertama kali berlayar ke Nusantara untuk menguasai jalur rempah?",
    options: ["Inggris", "Belanda", "Portugis", "Spanyol"],
    answer: 2,
    explanation:
      "Portugis pada 1511 menjadi bangsa Eropa pertama yang tiba mencari rempah.",
  },
  {
    question: "Apa julukan lada dalam dunia perdagangan rempah?",
    options: ["Ratu Emas", "Raja Rempah", "Permata Laut", "Berlian Tropis"],
    answer: 1,
    explanation:
      "Lada dijuluki 'raja rempah' karena menjadi komoditas perdagangan terbesar.",
  },
  {
    question: "Tradisi 'Legu Gam' yang terkait rempah berasal dari mana?",
    options: ["Maluku", "Aceh", "Bali", "Papua"],
    answer: 0,
    explanation:
      "Legu Gam adalah tradisi budaya Maluku yang merayakan hubungan masyarakat dengan rempah.",
  },
  {
    question:
      "Pada tahun berapa UNESCO menetapkan Jalur Rempah sebagai memori kolektif dunia?",
    options: ["2015", "2018", "2020", "2022"],
    answer: 3,
    explanation:
      "Pada 2022, UNESCO mengakui Jalur Rempah sebagai bagian memori kolektif dunia.",
  },
  {
    question:
      "Sistem pengobatan tradisional Indonesia yang memanfaatkan rempah disebut...",
    options: ["Akupunktur", "Jamu", "Homeopati", "Aromaterapi"],
    answer: 1,
    explanation:
      "Jamu adalah pengobatan tradisional khas Indonesia yang memanfaatkan kekayaan rempah.",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const question = questions[current];

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setAnswers((prev) => [...prev, index]);
    if (index === question.answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  const percentage = Math.round((score / questions.length) * 100);
  const grade =
    percentage >= 90
      ? "Luar biasa — kamu pakar rempah."
      : percentage >= 70
        ? "Hebat — pengetahuanmu kuat."
        : percentage >= 50
          ? "Lumayan, terus belajar."
          : "Ayo baca penjelasan dulu.";

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-14 sm:px-6">
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500">
        <FontAwesomeIcon icon={faBrain} className="h-4 w-4" />
        Kuis
      </span>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        Ukur pemahamanmu
      </h1>
      <p className="mt-2 text-neutral-600">
        Delapan pertanyaan untuk mengingat kembali materi jalur rempah
        Indonesia. Setiap jawaban dilengkapi penjelasan singkat.
      </p>

      <div className="mt-10">
        {!finished ? (
          <div className="rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between text-sm text-neutral-600">
              <span>
                Pertanyaan {current + 1} dari {questions.length}
              </span>
              <span>Skor: {score}</span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
              <div
                className="h-full rounded-full bg-neutral-900 transition-all duration-300"
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            <h2 className="mt-6 text-lg font-semibold text-neutral-900">
              {question.question}
            </h2>

            <div className="mt-5 space-y-2.5">
              {question.options.map((opt, i) => {
                let cls =
                  "border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800";
                if (selected !== null) {
                  if (i === question.answer) {
                    cls = "border-green-600 bg-green-50 text-green-900";
                  } else if (i === selected) {
                    cls = "border-red-500 bg-red-50 text-red-900";
                  } else {
                    cls = "border-neutral-200 bg-white text-neutral-500";
                  }
                }
                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={selected !== null}
                    className={`flex w-full items-center justify-between rounded-lg border p-4 text-left text-sm font-medium transition ${cls}`}
                  >
                    <span>{opt}</span>
                    {selected !== null && i === question.answer && (
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="h-4 w-4 text-green-600"
                      />
                    )}
                    {selected !== null &&
                      i === selected &&
                      i !== question.answer && (
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          className="h-4 w-4 text-red-500"
                        />
                      )}
                  </button>
                );
              })}
            </div>

            {selected !== null && (
              <div
                className={`mt-5 rounded-lg p-4 text-sm leading-relaxed ${
                  selected === question.answer
                    ? "bg-green-50 text-green-900"
                    : "bg-neutral-50 text-neutral-700"
                }`}
              >
                <p className="font-medium">
                  {selected === question.answer ? "Benar." : "Belum tepat."}
                </p>
                <p className="mt-1 text-neutral-600">{question.explanation}</p>
              </div>
            )}

            {selected !== null && (
              <button
                onClick={handleNext}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
              >
                {current + 1 < questions.length ? "Berikutnya" : "Lihat hasil"}
                <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        ) : (
          <div className="rounded-lg border border-neutral-200 bg-white p-8 text-center">
            <FontAwesomeIcon
              icon={faTrophy}
              className="mx-auto h-10 w-10 text-neutral-900"
            />
            <h2 className="mt-4 text-2xl font-bold text-neutral-900">
              {score}/{questions.length}
            </h2>
            <p className="mt-1 font-medium text-neutral-700">{grade}</p>
            <div className="mx-auto mt-5 h-2 w-full max-w-xs overflow-hidden rounded-full bg-neutral-100">
              <div
                className="h-full rounded-full bg-neutral-900"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-neutral-500">{percentage}% benar</p>

            <div className="mt-8 space-y-4 text-left">
              {questions.map((q, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-neutral-200 p-4 text-sm"
                >
                  <p className="font-medium text-neutral-900">{q.question}</p>
                  <p
                    className={`mt-1 ${answers[i] === q.answer ? "text-green-700" : "text-red-600"}`}
                  >
                    {answers[i] === q.answer ? "Benar" : "Kurang tepat"} —
                    jawabanmu: {q.options[answers[i]]}
                  </p>
                  {answers[i] !== q.answer && (
                    <p className="text-neutral-600">
                      Jawaban benar: {q.options[q.answer]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={restart}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              <FontAwesomeIcon icon={faRotateRight} className="h-4 w-4" />
              Ulangi
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
