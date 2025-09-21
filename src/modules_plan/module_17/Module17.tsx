import React from "react";

const qaData = [
    {
      q: "Q1: React এ Virtual DOM কিভাবে কাজ করে?",
      a: "Virtual DOM হলো একটি lightweight copy of real DOM. যখন state বা props change হয়, React একটি নতুন Virtual DOM tree তৈরি করে, তারপর diffing algorithm ব্যবহার করে পরিবর্তন খুঁজে বের করে এবং শুধুমাত্র সেই অংশ real DOM এ update করে। এতে performance অনেক দ্রুত হয়।",
    },
    {
      q: "Q2: Context API এর Limitations কী?",
      a: "Context ছোট scale এ ভালো কাজ করে কিন্তু global state অনেক বড় হলে performance problem হয়। কারণ context update হলে context ব্যবহার করা সব component re-render হয়। এর সমাধান হলো Redux বা অন্য state management লাইব্রেরি।",
    },
    {
      q: "Q3: React এ Memoization এর ব্যবহার?",
      a: "Memoization (React.memo, useMemo, useCallback) ব্যবহার করে আমরা expensive computation বা function reference প্রতি render এ নতুন না হয় তা নিশ্চিত করি। এতে performance বাড়ে।",
    },
    {
      q: "Q4: Redux এ Middleware এর ভূমিকা কী?",
      a: "Redux Middleware action dispatch এবং reducer এর মাঝে বসে। এটি side effects (যেমন API call, async logic) handle করতে ব্যবহৃত হয়। যেমন redux-thunk বা redux-saga।",
    },
    {
      q: "Q5: React 19 এর নতুন কী কী feature এসেছে?",
      a: "React 19 এ এসেছে Actions API, নতুন Hooks, improved server components, async rendering এর আরও ভালো সাপোর্ট।",
    },
    {
      q: "Q6: React এ Key কেন দরকার?",
      a: "Key list rendering এর সময় React কে unique ভাবে element চিহ্নিত করতে সাহায্য করে। Key না থাকলে বা ভুল হলে unnecessary re-render হয়।",
    },
    {
      q: "Q7: Controlled vs Uncontrolled Components?",
      a: "Controlled component এ form element state দ্বারা control হয়। Uncontrolled component এ DOM নিজে state handle করে (ref ব্যবহার করা হয়)। Controlled বেশি predictable।",
    },
    {
      q: "Q8: useEffect Hook এর common use cases কী?",
      a: "useEffect API call, event listener যোগ/সরানো, subscriptions, DOM manipulation ইত্যাদির জন্য ব্যবহৃত হয়। dependency array দিয়ে control করা যায় কখন run হবে।",
    },
    {
      q: "Q9: React এ Reconciliation কী?",
      a: "Reconciliation হলো process যেখানে React Virtual DOM এর সাথে real DOM compare করে এবং efficient ভাবে update করে।",
    },
    {
      q: "Q10: Prop Drilling সমস্যা কিভাবে সমাধান করা যায়?",
      a: "Prop drilling হলো parent থেকে অনেক child এ props pass করা। এটি avoid করতে Context API বা state management library (Redux, Zustand) ব্যবহার করা হয়।",
    },
    {
      q: "Q11: React.memo কী?",
      a: "React.memo হলো higher-order component যা props change না হলে component কে re-render হতে দেয় না।",
    },
    {
      q: "Q12: useCallback এবং useMemo এর পার্থক্য?",
      a: "useCallback একটি memoized function return করে, আর useMemo একটি memoized value return করে। performance optimization এর জন্য ব্যবহার হয়।",
    },
    {
      q: "Q13: Error Boundaries কী?",
      a: "Error Boundaries হলো React component যা child component এ runtime error ধরতে পারে এবং fallback UI দেখায়।",
    },
    {
      q: "Q14: React.Fragment এর ব্যবহার?",
      a: "React.Fragment একাধিক element return করার সময় wrapper div না দিয়ে ব্যবহার করা হয়। DOM clean রাখে।",
    },
    {
      q: "Q15: React এ StrictMode কেন ব্যবহার করা হয়?",
      a: "StrictMode development এ potential সমস্যা highlight করে (unsafe lifecycle, deprecated API)।",
    },
    {
      q: "Q16: Server Components কী?",
      a: "Server Components React 19 এ এসেছে। এটি backend এ render হয় এবং lightweight client bundle তৈরি করে।",
    },
    {
      q: "Q17: Redux vs Context API?",
      a: "Context API ছোট scale এর জন্য ভালো। Redux predictable state container, middleware support, devtools support দেয়। Large scale এ Redux উপযুক্ত।",
    },
    {
      q: "Q18: React এ Code Splitting কী?",
      a: "Code Splitting dynamic import, React.lazy, Suspense ব্যবহার করে bundle ছোট করে performance improve করে।",
    },
    {
      q: "Q19: CSR vs SSR?",
      a: "CSR (Client Side Rendering) এ browser সব কিছু render করে। SSR (Server Side Rendering) এ server থেকে HTML generate হয়ে আসে। SSR SEO ও performance improve করে।",
    },
    {
      q: "Q20: React এ Hydration কী?",
      a: "Hydration হলো server-rendered HTML কে client-side React attach করার process।",
    },
    // আরও প্রশ্ন যোগ করছি (21-50)
    {
      q: "Q21: JSX কী?",
      a: "JSX হলো JavaScript XML syntax যা React এ UI লিখতে ব্যবহৃত হয়। এটি compile হয়ে JavaScript এ convert হয়।",
    },
    {
      q: "Q22: Virtual DOM এর সুবিধা কী?",
      a: "Virtual DOM re-render কমায়, performance বাড়ায় এবং efficient UI update করে।",
    },
    {
      q: "Q23: React এ Lifting State Up কী?",
      a: "যখন একাধিক component এর মধ্যে common state share করতে হয় তখন parent এ state রাখা হয়। একে Lifting State Up বলে।",
    },
    {
      q: "Q24: React এ Synthetic Events কী?",
      a: "Synthetic Event হলো React এর custom event wrapper যা browser এর native event কে normalize করে।",
    },
    {
      q: "Q25: useRef Hook এর ব্যবহার?",
      a: "useRef DOM element access, mutable value store, এবং previous value track করতে ব্যবহৃত হয়।",
    },
    {
      q: "Q26: React এ CSR এর সমস্যা কী?",
      a: "CSR এ SEO সমস্যা হয় কারণ content JavaScript দিয়ে render হয়। এছাড়া first load এ time বেশি লাগে।",
    },
    {
      q: "Q27: Redux এ Reducer কী?",
      a: "Reducer হলো pure function যা action অনুযায়ী state update করে।",
    },
    {
      q: "Q28: React এ Suspense কী?",
      a: "Suspense asynchronous UI load করার সময় fallback UI দেখায়।",
    },
    {
      q: "Q29: React Portals কী?",
      a: "Portals parent DOM hierarchy এর বাইরে element render করতে দেয়। সাধারণত modal বা tooltip এর জন্য ব্যবহৃত হয়।",
    },
    {
      q: "Q30: React এ Higher Order Component (HOC) কী?",
      a: "HOC হলো এমন একটি function যা একটি component নেয় এবং enhanced component return করে। Reusability এর জন্য ব্যবহৃত হয়।",
    },
    {
      q: "Q31: Pure Component কী?",
      a: "Pure Component shallow comparison ব্যবহার করে props/state না বদলালে re-render হয় না।",
    },
    {
      q: "Q32: React Testing Library এর মূল philosophy কী?",
      a: "Testing Library user-centric test লিখতে বলে। UI কিভাবে behave করে সেটি test করা হয়, implementation detail নয়।",
    },
    {
      q: "Q33: Jest কী?",
      a: "Jest হলো JavaScript testing framework যা unit, integration এবং snapshot testing এর জন্য ব্যবহৃত হয়।",
    },
    {
      q: "Q34: useLayoutEffect বনাম useEffect?",
      a: "useLayoutEffect DOM update হওয়ার সাথে সাথেই চলে। useEffect asynchronous ভাবে চলে।",
    },
    {
      q: "Q35: React এ key না দিলে কী হয়?",
      a: "Key না থাকলে React list item efficiently update করতে পারে না, ফলে re-render problem হয়।",
    },
    {
      q: "Q36: Tree Shaking কী?",
      a: "Tree Shaking unused code remove করে bundle size ছোট করে। React build tools (Webpack) এটি support করে।",
    },
    {
      q: "Q37: React Hook Rules কী?",
      a: "Hook শুধুমাত্র functional component বা custom hook এর ভিতরে call করা যাবে। Loop, condition এর ভিতরে নয়।",
    },
    {
      q: "Q38: PropTypes এর কাজ কী?",
      a: "PropTypes component এর props type validate করতে ব্যবহৃত হয়।",
    },
    {
      q: "Q39: React এ Strict Equality Check কিভাবে কাজ করে?",
      a: "React shallow comparison করে। reference type (object/array) নতুন হলে re-render হয়।",
    },
    {
      q: "Q40: React.lazy এর কাজ কী?",
      a: "React.lazy dynamic import এর মাধ্যমে component load করতে দেয়। Suspense এর সাথে fallback UI দেখায়।",
    },
    {
      q: "Q41: Suspense boundary এর কাজ কী?",
      a: "Suspense boundary loading বা error handle করে asynchronous UI এর জন্য।",
    },
    {
      q: "Q42: React এ batching কী?",
      a: "একাধিক state update একসাথে group করে re-render কমানোকে batching বলে। React 18+ এ automatic batching আছে।",
    },
    {
      q: "Q43: Forward Ref কী?",
      a: "Forward Ref parent থেকে child component এ ref pass করতে দেয়।",
    },
    {
      q: "Q44: Controlled form এর সুবিধা কী?",
      a: "Controlled form predictable, validation সহজ হয়, এবং state এর সাথে sync থাকে।",
    },
    {
      q: "Q45: Hydration mismatch কী?",
      a: "Server render এবং client render আলাদা হলে hydration mismatch error হয়।",
    },
    {
      q: "Q46: React Router v7 এ নতুন কী?",
      a: "React Router v7 React 19 support করে, data APIs, lazy route support এসেছে।",
    },
    {
      q: "Q47: Next.js এর সুবিধা কী?",
      a: "Next.js SSR, SSG, API routes, built-in optimization support করে। React এর উপর production framework।",
    },
    {
      q: "Q48: useReducer Hook এর ব্যবহার?",
      a: "useReducer complex state management এর জন্য ব্যবহৃত হয়। Redux এর মতো reducer logic handle করতে পারে।",
    },
    {
      q: "Q49: React এ State Immutability কেন জরুরি?",
      a: "State mutate করলে React change detect করতে পারে না। Immutable update করলে re-render ঠিকভাবে কাজ করে।",
    },
    {
      q: "Q50: React এ System Design এ কী কী ভাবতে হবে?",
      a: "Component structure, state management strategy, performance optimization, caching, scalability, accessibility, এবং deployment strategy system design এ গুরুত্বপূর্ণ।",
    },
  ];


const Module17 = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold">
          📌 Module 17: Interview Preparation
        </h1>
        <p className="text-lg mt-2">
          👉 Goal: চাকরির প্রস্তুতি (React Developer Interview)
        </p>
      </div>
      {/* Theory Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          📖 React Theory
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Hooks:</strong> React-এর ফাংশনাল কম্পোনেন্টে state এবং
            lifecycle ব্যবহারের উপায়।
          </li>
          <li>
            <strong>Virtual DOM:</strong> DOM manipulation দ্রুত করার জন্য React
            এর optimized representation of DOM।
          </li>
          <li>
            <strong>Context vs Redux:</strong> Context ছোট/mid-level state
            management এর জন্য, Redux বড় ও জটিল state flow এর জন্য।
          </li>
        </ul>
      </div>
      {/* Performance Optimization */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          ⚡ Performance Optimization Q&A
        </h2>
        <p className="text-gray-700 mb-3">
          React অ্যাপ্লিকেশন দ্রুত করার জন্য কিছু কৌশল:
        </p>
        <ul className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>React.memo ব্যবহার করে অপ্রয়োজনীয় re-render আটকানো।</li>
          <li>
            useMemo ও useCallback দিয়ে expensive calculation optimize করা।
          </li>
          <li>Lazy loading এবং Code Splitting ব্যবহার।</li>
          <li>React DevTools দিয়ে Performance profile করা।</li>
        </ul>
      </div>
      {/* System Design */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🏗️ Frontend System Design
        </h2>
        <p className="text-gray-700 mb-3">
          React System Design Interview এ যেসব টপিক আসে:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Component Architecture (Atomic Design, Reusability)</li>
          <li>State Management Strategy (Context vs Redux vs Zustand)</li>
          <li>Scalable Folder Structure</li>
          <li>Authentication & Authorization Flow</li>
          <li>Performance & Security Best Practices</li>
        </ul>
      </div>
      {/* Interview Q&A */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          🎯 50+ React Interview Questions & Answers
        </h2>

        <div className="space-y-6">
          {/* Example Q&A */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q1: React এ Virtual DOM কিভাবে কাজ করে?
            </p>
            <p className="text-gray-700 mt-1">
              Virtual DOM হলো একটি lightweight copy of real DOM. যখন state বা
              props change হয়, React একটি নতুন Virtual DOM tree তৈরি করে, তারপর
              diffing algorithm ব্যবহার করে পরিবর্তন খুঁজে বের করে এবং শুধুমাত্র
              সেই অংশ real DOM এ update করে। এতে performance অনেক দ্রুত হয়।
            </p>
          </div>

          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q2: Context API এর Limitations কী?
            </p>
            <p className="text-gray-700 mt-1">
              Context ছোট scale এ ভালো কাজ করে কিন্তু global state অনেক বড় হলে
              performance problem হয়। কারণ context update হলে context ব্যবহার
              করা সব component re-render হয়। এর সমাধান হলো Redux বা অন্য state
              management লাইব্রেরি।
            </p>
          </div>

          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q3: React এ Memoization এর ব্যবহার?
            </p>
            <p className="text-gray-700 mt-1">
              Memoization (React.memo, useMemo, useCallback) ব্যবহার করে আমরা
              expensive computation বা function reference প্রতি render এ নতুন না
              হয় তা নিশ্চিত করি। এতে performance বাড়ে।
            </p>
          </div>

          {/* এখানে ৫০+ QnA loop করে যোগ করা যাবে */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q4: Redux এ Middleware এর ভূমিকা কী?
            </p>
            <p className="text-gray-700 mt-1">
              Redux Middleware action dispatch এবং reducer এর মাঝে বসে। এটি side
              effects (যেমন API call, async logic) handle করতে ব্যবহৃত হয়। যেমন
              redux-thunk বা redux-saga।
            </p>
          </div>

          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q5: React 19 এর নতুন কী কী feature এসেছে?
            </p>
            <p className="text-gray-700 mt-1">
              React 19 এ এসেছে Actions API, নতুন Hooks, improved server
              components, async rendering এর আরও ভালো সাপোর্ট।
            </p>
          </div>
        </div>
      </div>
      {/* Interview Q&A */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          🎯 20+ React Interview Questions & Answers
        </h2>
        <div className="space-y-6">
          {/* Q1 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q1: React এ Virtual DOM কিভাবে কাজ করে?
            </p>
            <p className="text-gray-700 mt-1">
              Virtual DOM হলো একটি lightweight copy of real DOM. যখন state বা
              props change হয়, React একটি নতুন Virtual DOM tree তৈরি করে, তারপর
              diffing algorithm ব্যবহার করে পরিবর্তন খুঁজে বের করে এবং শুধুমাত্র
              সেই অংশ real DOM এ update করে। এতে performance অনেক দ্রুত হয়।
            </p>
          </div>
          {/* Q2 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q2: Context API এর Limitations কী?
            </p>
            <p className="text-gray-700 mt-1">
              Context ছোট scale এ ভালো কাজ করে কিন্তু global state অনেক বড় হলে
              performance problem হয়। কারণ context update হলে context ব্যবহার
              করা সব component re-render হয়। এর সমাধান হলো Redux বা অন্য state
              management লাইব্রেরি।
            </p>
          </div>
          {/* Q3 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q3: React এ Memoization এর ব্যবহার?
            </p>
            <p className="text-gray-700 mt-1">
              Memoization (React.memo, useMemo, useCallback) ব্যবহার করে আমরা
              expensive computation বা function reference প্রতি render এ নতুন না
              হয় তা নিশ্চিত করি। এতে performance বাড়ে।
            </p>
          </div>
          {/* Q4 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q4: Redux এ Middleware এর ভূমিকা কী?
            </p>
            <p className="text-gray-700 mt-1">
              Redux Middleware action dispatch এবং reducer এর মাঝে বসে। এটি side
              effects (যেমন API call, async logic) handle করতে ব্যবহৃত হয়। যেমন
              redux-thunk বা redux-saga।
            </p>
          </div>
          {/* Q5 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q5: React 19 এর নতুন কী কী feature এসেছে?
            </p>
            <p className="text-gray-700 mt-1">
              React 19 এ এসেছে Actions API, নতুন Hooks, improved server
              components, async rendering এর আরও ভালো সাপোর্ট।
            </p>
          </div>
          {/* Q6 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q6: useEffect এবং useLayoutEffect এর মধ্যে পার্থক্য কী?
            </p>
            <p className="text-gray-700 mt-1">
              useEffect asynchronous ভাবে কাজ করে, DOM update এর পরে run হয়।
              অন্যদিকে useLayoutEffect synchronous, DOM update হওয়ার সাথে সাথেই
              run হয়। UI flicker আটকাতে useLayoutEffect ব্যবহার করা হয়।
            </p>
          </div>
          {/* Q7 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q7: Controlled এবং Uncontrolled component এর পার্থক্য কী?
            </p>
            <p className="text-gray-700 mt-1">
              Controlled component এ form data React state দ্বারা নিয়ন্ত্রিত হয়।
              Uncontrolled component এ data DOM এর ভিতরেই থাকে এবং ref দিয়ে
              access করা হয়।
            </p>
          </div>
          {/* Q8 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q8: React এ key prop কেন ব্যবহার করা হয়?
            </p>
            <p className="text-gray-700 mt-1">
              key prop React কে জানায় কোন item update/insert/delete হয়েছে। এর
              ফলে list rendering efficient হয় এবং অপ্রয়োজনীয় re-render হয় না।
            </p>
          </div>
          {/* Q9 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q9: Prop drilling কী এবং এর সমাধান কী?
            </p>
            <p className="text-gray-700 mt-1">
              যখন একটি prop parent থেকে child হয়ে অনেক deep component এ পাঠাতে
              হয়, তখন তাকে prop drilling বলে। এর সমাধান হলো Context API বা state
              management লাইব্রেরি ব্যবহার।
            </p>
          </div>
          {/* Q10 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q10: React Fragment এর ব্যবহার কী?
            </p>
            <p className="text-gray-700 mt-1">
              Fragment ব্যবহার করে আমরা multiple element return করতে পারি
              wrapper div ছাড়া। &lt;&gt;...&lt;/&gt; হলো Fragment এর shorthand।
            </p>
          </div>
          {/* Q11 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q11: React এ Error Boundary কী?
            </p>
            <p className="text-gray-700 mt-1">
              Error Boundary হলো এমন একটি React component যা তার child component
              tree তে runtime error ধরতে পারে এবং fallback UI দেখাতে পারে।
            </p>
          </div>
          {/* Q12 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q12: useReducer কেন ব্যবহার করা হয়?
            </p>
            <p className="text-gray-700 mt-1">
              useReducer জটিল state logic handle করতে useState এর বিকল্প। এটি
              reducer function ব্যবহার করে state update করে।
            </p>
          </div>
          {/* Q13 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q13: React Router এ dynamic routing কিভাবে কাজ করে?
            </p>
            <p className="text-gray-700 mt-1">
              React Router এ path parameter (যেমন: /post/:id) define করা যায়।
              তারপর useParams hook দিয়ে সেই dynamic parameter access করা হয়।
            </p>
          </div>
          {/* Q14 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q14: React এ HOC (Higher Order Component) কী?
            </p>
            <p className="text-gray-700 mt-1">
              HOC হলো একটি function যা একটি component কে input হিসেবে নিয়ে নতুন
              enhanced component return করে। যেমন authentication wrapper।
            </p>
          </div>
          {/* Q15 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q15: React এ Reconciliation প্রক্রিয়া কী?
            </p>
            <p className="text-gray-700 mt-1">
              Reconciliation হলো Virtual DOM এর সাথে previous Virtual DOM
              compare করে পরিবর্তিত node গুলো real DOM এ update করার প্রক্রিয়া।
            </p>
          </div>
          {/* Q16 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q16: React DevTools এর ব্যবহার কী?
            </p>
            <p className="text-gray-700 mt-1">
              React DevTools Chrome/Firefox extension যা দিয়ে component tree,
              props, state, performance profile করা যায়।
            </p>
          </div>
          {/* Q17 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q17: Suspense এবং React.lazy এর ভূমিকা কী?
            </p>
            <p className="text-gray-700 mt-1">
              React.lazy দিয়ে আমরা component lazy-load করতে পারি এবং Suspense
              fallback UI দেখায় যতক্ষণ না component লোড হয়।
            </p>
          </div>
          {/* Q18 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q18: useRef hook এর প্রধান ব্যবহার কী?
            </p>
            <p className="text-gray-700 mt-1">
              useRef mutable value store করতে বা DOM element direct reference
              পেতে ব্যবহৃত হয়। উদাহরণ: input focus করা।
            </p>
          </div>
          {/* Q19 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q19: React এ hydration কী?
            </p>
            <p className="text-gray-700 mt-1">
              Hydration হলো server-rendered HTML এর সাথে React client-side
              rendering attach করার প্রক্রিয়া। এটি SSR এ ব্যবহৃত হয়।
            </p>
          </div>
          {/* Q20 */}
          <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
            <p className="font-semibold text-gray-800">
              Q20: React এ CSR, SSR এবং SSG এর মধ্যে পার্থক্য কী?
            </p>
            <p className="text-gray-700 mt-1">
              CSR (Client-Side Rendering) এ সবকিছু ব্রাউজারে render হয়। SSR
              (Server-Side Rendering) এ সার্ভার থেকে HTML পাঠানো হয়। SSG (Static
              Site Generation) এ build time এ static HTML তৈরি হয়। Next.js এ
              তিনটিই সাপোর্ট করে।
            </p> 
          </div> 
        </div> 
      </div> 
      <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        🎯 50+ React Interview Questions & Answers
      </h2>

      <div className="space-y-6">
        {qaData.map((item, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-xl bg-gray-50"
          >
            <p className="font-semibold text-gray-800">{item.q}</p>
            <p className="text-gray-700 mt-1">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
      {/* Mock Interview Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🎤 Mock Interview Preparation
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>নিজের CV এর সব Project ভালোভাবে revise করুন।</li>
          <li>একটি Counter বা Todo App live কোড করতে Practice করুন।</li>
          <li>Behavioral Questions এর জন্য STAR method ব্যবহার করুন।</li>
          <li>
            System design question এ component architecture clear করে বলুন।
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Module17;
