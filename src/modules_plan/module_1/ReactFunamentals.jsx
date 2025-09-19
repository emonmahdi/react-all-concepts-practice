import ChildrenProp from "./ChildrenProp";
import Greeting from "./Greetings";
import JSXExample from "./JSX";

const ReactFundamentals = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        🔹 React কি? কেন শিখব?
      </h1>

      {/* Description */}
      <p className="text-gray-700 mb-4">
        React হলো <span className="font-semibold">JavaScript লাইব্রেরি</span>,
        ইউজার ইন্টারফেস বানানোর জন্য।
      </p>

      {/* Features */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        📌 মূল বৈশিষ্ট্য:
      </h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
        <li>⚛ Component-based (ছোট ছোট অংশে কোড ভাগ করা যায়)</li>
        <li>⚡ Virtual DOM (ফাস্ট রেন্ডারিং)</li>
        <li>♻ Reusable UI (একটা কম্পোনেন্ট বারবার ব্যবহার করা যায়)</li>
      </ul>

      {/* React 19 Updates */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        🚀 React 19 নতুন আপডেট:
      </h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
        <li>📝 Actions API (form ও async কাজ সহজ করার জন্য)</li>
        <li>🔄 useOptimistic Hook (optimistic UI update)</li>
        <li>🌐 Server Components ডিফল্ট সাপোর্ট</li>
        <li>⚡ আরও দ্রুত পারফরম্যান্স</li>
      </ul>

      {/* Interview Q&A */}
      <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          🎯 ইন্টারভিউ প্রশ্ন:
        </h2>
        <p className="text-gray-700">
          <span className="font-semibold">Q:</span> React কেন ব্যবহার করবো?
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">A:</span> কোড রিইউজ করা যায়, UI দ্রুত
          রেন্ডার হয়, বড় অ্যাপ্লিকেশন মেইনটেইন করা সহজ।
        </p>
      </div>
      <JSXExample />
      <Greeting name={"Emon"} age={28} />
      <ChildrenProp />
    </div>
  );
};

export default ReactFundamentals;
