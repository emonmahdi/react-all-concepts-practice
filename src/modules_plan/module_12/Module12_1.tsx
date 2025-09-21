import React, { createContext, useContext, useState, ReactNode } from "react";

// Type for Theme Context
type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const Module12_1 = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <h1 className="text-2xl font-bold text-indigo-600">
        📌 Module 12: TypeScript with React
      </h1>
      <p className="text-gray-700">👉 Goal: React কে Type-safe করা</p>

      {/* Props Typing */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">1. Props Typing</h2>
        <p className="text-gray-700">
          React এ TypeScript ব্যবহার করে props এর data type আগে থেকেই define করা যায়।
        </p>
        <pre className="bg-black text-green-400 text-sm p-3 rounded mt-3 overflow-x-auto">
{`type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};`}
        </pre>
      </section>

      {/* State Typing */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">2. State Typing</h2>
        <p className="text-gray-700">
          useState ব্যবহার করার সময় generic দিয়ে state এর টাইপ declare করা যায়।
        </p>
        <pre className="bg-black text-green-400 text-sm p-3 rounded mt-3 overflow-x-auto">
{`const [count, setCount] = useState<number>(0);
const [name, setName] = useState<string>("Emon");`}
        </pre>
      </section>

      {/* Context Typing */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">3. Context Typing</h2>
        <p className="text-gray-700">
          Context API ব্যবহার করার সময় এর value এবং function এর টাইপ declare করতে হয়।
        </p>
        <pre className="bg-black text-green-400 text-sm p-3 rounded mt-3 overflow-x-auto">
{`type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);`}
        </pre>
      </section>

      {/* Custom Hook Typing */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">4. Custom Hooks Typing</h2>
        <p className="text-gray-700">
          Custom hook বানানোর সময় return type এবং parameter type define করা জরুরি।
        </p>
        <pre className="bg-black text-green-400 text-sm p-3 rounded mt-3 overflow-x-auto">
{`function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue] as const;
}

// Usage
const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");`}
        </pre>
      </section>

      {/* Practice Task */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">🎯 Practice Task</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>
            একটি <b>Todo App</b> বানাও যেখানে TypeScript দিয়ে todo এর টাইপ define করতে হবে।
          </li>
          <li>
            একটি <b>Theme Context</b> বানাও যেখানে Context typing + useContext ব্যবহার হবে।
          </li>
        </ul>
      </section>

      {/* Interview Questions */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">
          🎯 Interview Questions & Answers
        </h2>
        <div className="space-y-4 mt-2">
          <div>
            <p className="font-semibold text-gray-800">
              Q1: React এর সাথে TypeScript কেন ব্যবহার করা হয়?
            </p>
            <p className="text-gray-700">
              Ans: Type safety, better autocomplete, bug reduce, developer experience
              improve করার জন্য।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q2: Props typing এর সুবিধা কী?
            </p>
            <p className="text-gray-700">
              Ans: ভুল টাইপের props pass করলে compile-time এ error পাওয়া যায়।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q3: useState এর সাথে TypeScript কিভাবে কাজ করে?
            </p>
            <p className="text-gray-700">
              Ans: useState&lt;Type&gt; দিয়ে state এর type declare করা হয়, যাতে ভুল data set না হয়।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q4: Context typing কেন দরকার?
            </p>
            <p className="text-gray-700">
              Ans: Context value এবং function এর সঠিক type নিশ্চিত করতে, যাতে ভুলভাবে ব্যবহার না হয়।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q5 (Critical): Generic দিয়ে custom hook বানালে কী সুবিধা?
            </p>
            <p className="text-gray-700">
              Ans: Hook reusable হয় এবং যেকোনো type এর data handle করতে পারে।
            </p>
          </div>
        </div>
      </section>

      {/* Problem Solving QnA */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">🧩 Problem Solving Q&A</h2>
        <div className="space-y-4 mt-2">
          <div>
            <p className="font-semibold text-gray-800">
              Q1: যদি কোনো component এ ভুল props type পাঠানো হয়?
            </p>
            <p className="text-gray-700">
              Ans: Compile-time এ error দিবে, app run হওয়ার আগেই bug detect হবে।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q2: Todo app বানানোর সময় id কে number না string রাখবে?
            </p>
            <p className="text-gray-700">
              Ans: Project এর requirement অনুযায়ী। কিন্তু TypeScript এ আগে থেকে type define করলে ভুল হবে না।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q3: Context default value undefined হলে কী করবে?
            </p>
            <p className="text-gray-700">
              Ans: useContext ব্যবহার করার সময় conditionally check করতে হবে অথবা provider সবসময় দিতে হবে।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Module12_1;
