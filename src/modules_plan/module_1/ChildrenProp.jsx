import Button from "./Button";

const ChildrenProp = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg max-w-3xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-purple-700 mb-4 text-center">
        🌟 Children Prop
      </h1>

      {/* Definition */}
      <div className="mb-6 text-gray-700 space-y-3">
        <h3 className="text-lg leading-relaxed">
          <span className="font-semibold">Children Prop</span> হলো React এ একটা
          special prop, যেটা দিয়ে আমরা একটা component এর ভিতরে অন্য element /
          component পাঠাতে পারি।
        </h3>
        <h4 className="italic text-gray-600">
          👉 এটা মূলত component কে আরও{" "}
          <span className="font-semibold text-purple-600">
            flexible এবং reusable
          </span>{" "}
          করে তোলে।
        </h4>
      </div>

      {/* Rules */}
      <div className="mb-6 bg-white rounded-xl shadow p-5 border-l-4 border-purple-400">
        <h2 className="text-xl font-bold text-purple-700 mb-3">
          ✅ Children Prop এর গুরুত্বপূর্ণ Rules
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <code className="bg-gray-100 px-1 rounded">props.children</code> এর
            মাধ্যমে access করা হয়।
          </li>
          <li>
            Children যেকোনো কিছু হতে পারে: text, element, component, এমনকি
            fragment।
          </li>
          <li>
            Children props use করলে component design হয়{" "}
            <span className="font-semibold">wrapper component</span> এর মতো।
          </li>
        </ul>
      </div>

      {/* Example Button */}
      <div className="text-center mb-6">
        <Button>Children Props</Button>
      </div>

      {/* Key Takeaways */}
      <div className="bg-white rounded-xl shadow p-5 border-l-4 border-green-400">
        <h2 className="text-xl font-bold text-green-700 mb-3">
          📌 Key Takeaways about Children Prop
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Children হলো React এর <span className="font-semibold">built-in</span>{" "}
            prop।
          </li>
          <li>
            Component কে <span className="font-semibold">flexible wrapper</span>{" "}
            বানাতে use করা হয়।
          </li>
          <li>
            Children এর মাধ্যমে আমরা{" "}
            <span className="font-semibold">nested component</span> design করতে
            পারি।
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChildrenProp;
