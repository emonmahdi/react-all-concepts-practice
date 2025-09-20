import { useReducer, useMemo, useCallback, useLayoutEffect, useId, useState } from "react";

// ✅ useReducer Example (Calculator)
const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

// ✅ Expensive Calculation Function
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += num;
  }
  return result;
};

const Module7 = () => {
  // useReducer (Calculator)
  const [state, dispatch] = useReducer(calculatorReducer, { count: 0 });

  // useMemo (Performance Optimization)
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const calculation = useMemo(() => expensiveCalculation(number), [number]);

  // useCallback (Prevent Re-renders)
  const [todos, setTodos] = useState([]);
  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "New Todo"]);
  }, []);

  // useLayoutEffect Example
  useLayoutEffect(() => {
    console.log("useLayoutEffect -> DOM update এর আগে চলে");
  }, []);

  // useId Example
  const id = useId();

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Module Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold">📌 Module 7: Advanced Hooks</h1>
        <p className="mt-2 text-lg">👉 Goal: React hooks master করা</p>
      </div>

      {/* Hooks Explanation */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* useReducer */}
        <div className="p-5 bg-white rounded-2xl shadow border">
          <h2 className="text-xl font-semibold mb-2">🔹 useReducer</h2>
          <p className="text-gray-700 mb-2">
            এটি state management এর alternative। জটিল state logic manage করার জন্য{" "}
            <code>useReducer</code> ব্যবহার করা হয়।
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch({ type: "decrement" })}
              className="px-3 py-2 bg-red-500 text-white rounded-lg"
            >
              -
            </button>
            <span className="text-lg font-bold">{state.count}</span>
            <button
              onClick={() => dispatch({ type: "increment" })}
              className="px-3 py-2 bg-green-500 text-white rounded-lg"
            >
              +
            </button>
            <button
              onClick={() => dispatch({ type: "reset" })}
              className="px-3 py-2 bg-gray-500 text-white rounded-lg"
            >
              Reset
            </button>
          </div>
        </div>

        {/* useMemo */}
        <div className="p-5 bg-white rounded-2xl shadow border">
          <h2 className="text-xl font-semibold mb-2">🔹 useMemo</h2>
          <p className="text-gray-700 mb-2">
            Expensive calculation বারবার না করে, dependency change হলে তবেই
            execute হয়। Performance optimize করে।
          </p>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
            className="border px-3 py-2 rounded-lg mb-3 w-full"
            placeholder="Enter a number"
          />
          <p className={`p-3 rounded-lg ${dark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
            Calculation Result: {calculation}
          </p>
          <button
            onClick={() => setDark((prev) => !prev)}
            className="mt-3 px-4 py-2 bg-indigo-500 text-white rounded-lg"
          >
            Toggle Theme
          </button>
        </div>

        {/* useCallback */}
        <div className="p-5 bg-white rounded-2xl shadow border">
          <h2 className="text-xl font-semibold mb-2">🔹 useCallback</h2>
          <p className="text-gray-700 mb-2">
            function বারবার re-create না হয়ে dependency অনুযায়ী memoize হয়। এটি
            re-render কমাতে সাহায্য করে।
          </p>
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg"
          >
            Add Todo
          </button>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>

        {/* useLayoutEffect & useId */}
        <div className="p-5 bg-white rounded-2xl shadow border">
          <h2 className="text-xl font-semibold mb-2">🔹 useLayoutEffect & useId</h2>
          <p className="text-gray-700 mb-2">
            <b>useLayoutEffect:</b> DOM update হওয়ার আগে synchronous ভাবে execute হয়।  
          </p>
          <p className="text-gray-700 mb-2">
            <b>useId:</b> React 18+ এ unique ID generate করার জন্য ব্যবহার হয়।
          </p>
          <label htmlFor={id} className="block mb-2 font-medium">
            Enter Name:
          </label>
          <input
            id={id}
            type="text"
            className="border px-3 py-2 rounded-lg w-full"
            placeholder="Your name"
          />
        </div>
      </div>

      {/* Practice Tasks */}
      <div className="p-5 bg-pink-50 rounded-2xl border border-pink-200">
        <h2 className="text-xl font-semibold mb-3">📝 Practice Task:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            useReducer দিয়ে Calculator বানাও (increment, decrement, reset সহ)
          </li>
          <li>
            Expensive calculation (যেমন বড় লুপ) optimize করো useMemo দিয়ে
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Module7;
