import { useRef, useState } from "react";
import StopWatch from "./StopWatch";

const Module3 = () => {
  // --- Example: Focusing Input ---
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };

  // --- Example: Storing Mutable Values (Stopwatch) ---
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <>
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Module Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold">📌 Module 3: Refs & DOM Handling</h1>
        <p className="mt-2 text-lg">👉 Goal: DOM element access করা</p>
      </div>

      {/* Topics Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* useRef Hook */}
        <div className="p-5 bg-white rounded-2xl shadow border">
          <h2 className="text-xl font-semibold mb-2">🔹 useRef Hook</h2>
          <p className="text-gray-700">
            useRef হলো React Hook যেটা দিয়ে আমরা DOM element access করতে পারি
            এবং mutable values ধরে রাখতে পারি re-render ছাড়াই।
          </p>
        </div>

        {/* Focusing Input */}
        <div className="p-5 bg-white rounded-2xl shadow border">
          <h2 className="text-xl font-semibold mb-2">🔹 Focusing Input</h2>
          <input
            ref={inputRef}
            type="text"
            placeholder="Write something..."
            className="border px-3 py-2 rounded-lg w-full focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <button
            onClick={handleFocus}
            className="mt-3 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
          >
            Focus Input
          </button>
        </div>

        {/* Storing Mutable Values */}
        <div className="p-5 bg-white rounded-2xl shadow border">
          <h2 className="text-xl font-semibold mb-2">
            🔹 Storing Mutable Values
          </h2>
          <p className="text-gray-700">
            useRef এর মাধ্যমে আমরা এমন data store করতে পারি যা change হলেও
            component re-render হয় না। যেমন: setInterval এর reference।
          </p>
        </div>

        {/* Stopwatch */}
        <div className="p-5 bg-white rounded-2xl shadow border flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">⏱️ Stopwatch</h2>
          <p className="text-2xl font-mono mb-4">{time}s</p>
          <div className="flex gap-2">
            <button
              onClick={startTimer}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Start
            </button>
            <button
              onClick={stopTimer}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Stop
            </button>
            <button
              onClick={resetTimer}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Practice Tasks */}
      <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-200">
        <h2 className="text-xl font-semibold mb-3">📝 Practice Task:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Focus input button তৈরি করো</li>
          <li>Stopwatch timer বানাও (start, stop, reset)</li>
        </ul>
      </div>
    </div>

    <StopWatch />
    </>
  );
};

export default Module3;
