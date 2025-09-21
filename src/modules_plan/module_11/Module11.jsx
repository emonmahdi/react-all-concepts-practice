
const Module11 = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <h1 className="text-2xl font-bold text-green-600">
        📌 Module 11: Performance Optimization
      </h1>
      <p className="text-gray-700">
        👉 Goal: React অ্যাপ্লিকেশনকে optimize & debug করা
      </p>

      {/* React DevTools */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">
          1. React DevTools
        </h2>
        <p className="text-gray-700">
          React DevTools হলো একটি Chrome/Firefox extension যেটা দিয়ে React component tree,
          props, state, re-render track করা যায়। Performance debug করার জন্য সবচেয়ে useful।
        </p>
      </section>

      {/* Memoization */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">
          2. Memoization (React.memo, useMemo, useCallback)
        </h2>
        <p className="text-gray-700">
          Memoization মানে হলো কোনো computation এর result cache করে রাখা, যাতে একই
          calculation বারবার না হয়।
        </p>

        <h3 className="font-semibold text-gray-800 mt-2">🔹 React.memo</h3>
        <p className="text-gray-700">
          একটি HOC যেটা props পরিবর্তন না হলে component re-render হতে দেয় না।
        </p>
        <pre className="bg-black text-green-400 text-sm p-3 rounded mt-3 overflow-x-auto">
{`const Child = React.memo(({ value }) => {
  console.log("Child Render");
  return <p>Value: {value}</p>;
});

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Child value="Static Prop" />
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`}
        </pre>

        <h3 className="font-semibold text-gray-800 mt-4">🔹 useMemo</h3>
        <p className="text-gray-700">
          Expensive calculation memoize করে রাখে dependency change না হওয়া পর্যন্ত।
        </p>
        <pre className="bg-black text-green-400 text-sm p-3 rounded mt-3 overflow-x-auto">
{`const App = () => {
  const [num, setNum] = React.useState(0);

  const expensiveCalculation = React.useMemo(() => {
    console.log("Calculating...");
    return num * 2;
  }, [num]);

  return (
    <div>
      <p>Result: {expensiveCalculation}</p>
      <button onClick={() => setNum(num + 1)}>Increase</button>
    </div>
  );
};`}
        </pre>

        <h3 className="font-semibold text-gray-800 mt-4">🔹 useCallback</h3>
        <p className="text-gray-700">
          function কে memoize করে, যাতে child component unnecessary re-render না হয়।
        </p>
        <pre className="bg-black text-green-400 text-sm p-3 rounded mt-3 overflow-x-auto">
{`const Child = React.memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});

const App = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Parent Update</button>
    </div>
  );
};`}
        </pre>
      </section>

      {/* Lazy Loading */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">
          3. Lazy Loading (React.lazy, Suspense)
        </h2>
        <p className="text-gray-700">
          Lazy loading মানে হলো কোনো component কেবল তখনই লোড হবে যখন সেটা দরকার হবে। এতে bundle size ছোট থাকে।
        </p>

        <pre className="bg-black text-green-400 text-sm p-3 rounded mt-3 overflow-x-auto">
{`const LazyComp = React.lazy(() => import("./HeavyComp"));

function App() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <LazyComp />
    </React.Suspense>
  );
}`}
        </pre>
      </section>

      {/* Code Splitting */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">
          4. Code Splitting
        </h2>
        <p className="text-gray-700">
          Code splitting হলো bundle কে ছোট ছোট ভাগে ভাগ করা। React.lazy, dynamic import()
          এর মাধ্যমে করা যায়। এতে initial load time কমে যায়।
        </p>
      </section>

      {/* Practice Task */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">🎯 Practice Task</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>একটা List rendering app বানাও, React.memo + useMemo ব্যবহার করে optimize করো।</li>
          <li>Lazy load images implement করো (যেমন react-lazyload বা IntersectionObserver দিয়ে)।</li>
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
              Q1: React DevTools দিয়ে কী করা যায়?
            </p>
            <p className="text-gray-700">
              Ans: component tree দেখা, props/state ট্র্যাক করা, re-render analyze করা।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q2: React.memo আর useMemo এর মধ্যে পার্থক্য কী?
            </p>
            <p className="text-gray-700">
              Ans: React.memo → component re-render optimize করে। useMemo → expensive calculation memoize করে।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q3: useCallback কেন দরকার?
            </p>
            <p className="text-gray-700">
              Ans: function reference একই থাকে, ফলে child component unnecessary re-render হয় না।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q4: Lazy loading আর code splitting এর মধ্যে সম্পর্ক কী?
            </p>
            <p className="text-gray-700">
              Ans: Code splitting মানে হলো bundle ভাগ করা, আর Lazy loading হলো সেই ভাগ করা code
              প্রয়োজন অনুযায়ী load করা।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q5 (Critical): React app এর performance issue debug করবে কিভাবে?
            </p>
            <p className="text-gray-700">
              Ans: React DevTools profiler, unnecessary re-render চেক, memoization, code splitting
              এবং network analysis ব্যবহার করে।
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
              Q1: একটা বড় list render করলে app slow হয়ে যাচ্ছে। Optimize করবে কিভাবে?
            </p>
            <p className="text-gray-700">
              Ans: React.memo, useMemo, virtualization (react-window বা react-virtualized)
              ব্যবহার করা।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q2: Image heavy app এর performance optimize কিভাবে করবে?
            </p>
            <p className="text-gray-700">
              Ans: Lazy load images, compress করা, CDN ব্যবহার করা, responsive image ব্যবহার করা।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q3: Unnecessary re-render detect করার উপায় কী?
            </p>
            <p className="text-gray-700">
              Ans: React DevTools Profiler দিয়ে trace করা, console.log দিয়ে child render track করা।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Module11;
