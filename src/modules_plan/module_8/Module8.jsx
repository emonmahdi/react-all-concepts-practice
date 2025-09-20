import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

const Module8 = () => {
  // Controlled Form State
  const [controlledData, setControlledData] = useState({
    name: "",
    email: "",
  });

  const handleControlledChange = (e) => {
    setControlledData({ ...controlledData, [e.target.name]: e.target.value });
  };

  // Uncontrolled Form (useRef)
  const uncontrolledRef = useRef();

  // React Hook Form (Validation)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("✅ React Hook Form Data:", data);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl shadow-xl space-y-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-indigo-700">
        📌 Module 8: Forms & Validation
      </h1>
      <p className="text-gray-600">
        👉 Goal: React এ ফর্ম কন্ট্রোল, ভ্যালিডেশন ও বেস্ট প্র্যাকটিস শেখা।
      </p>

      {/* Definitions */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold text-indigo-600">📖 ডিফিনিশন:</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <b>Controlled Form:</b> ফর্ম ডেটা React state দ্বারা কন্ট্রোল করা হয়।
          </li>
          <li>
            <b>Uncontrolled Form:</b> ফর্ম ডেটা DOM এর মাধ্যমে (useRef দিয়ে)
            ম্যানেজ করা হয়।
          </li>
          <li>
            <b>Validation:</b> ইউজারের ইনপুট যাচাই করার প্রক্রিয়া, ম্যানুয়ালি বা
            লাইব্রেরি (React Hook Form, Yup) দিয়ে।
          </li>
        </ul>
      </div>

      {/* Controlled Form Example */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold text-indigo-600">
          📝 Controlled Form
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            value={controlledData.name}
            onChange={handleControlledChange}
            placeholder="Enter your name"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={controlledData.email}
            onChange={handleControlledChange}
            placeholder="Enter your email"
            className="w-full p-2 border rounded-lg"
          />
        </form>
        <p className="text-sm text-gray-600">
          👉 State এ ডেটা সেভ হয়:{" "}
          <span className="font-mono text-indigo-600">
            {JSON.stringify(controlledData)}
          </span>
        </p>
      </div>

      {/* Uncontrolled Form Example */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold text-indigo-600">
          🎯 Uncontrolled Form (useRef)
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Uncontrolled Input: ${uncontrolledRef.current.value}`);
          }}
          className="space-y-4"
        >
          <input
            type="text"
            ref={uncontrolledRef}
            placeholder="Type something..."
            className="w-full p-2 border rounded-lg"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>

      {/* React Hook Form Example */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold text-indigo-600">
          ✅ React Hook Form (Validation সহ)
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
            className="w-full p-2 border rounded-lg"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
            })}
            className="w-full p-2 border rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Register
          </button>
        </form>
      </div>

      {/* Interview Questions */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold text-indigo-600">
          🎯 ইন্টারভিউ প্রশ্ন & উত্তর
        </h2>
        <div className="space-y-3 text-gray-700">
          <p>
            <b>Q:</b> Controlled এবং Uncontrolled form এর মধ্যে পার্থক্য কী?
            <br />
            <b>A:</b> Controlled form state দ্বারা নিয়ন্ত্রিত হয়, Uncontrolled form
            DOM (ref) দিয়ে হ্যান্ডেল হয়।
          </p>
          <p>
            <b>Q:</b> React Hook Form এর সুবিধা কী?
            <br />
            <b>A:</b> কম কোডে, পারফরম্যান্স ফ্রেন্ডলি, সহজ ভ্যালিডেশন ও
            এরর-হ্যান্ডলিং।
          </p>
          <p>
            <b>Q:</b> Form validation এর জন্য কোন কোন লাইব্রেরি জনপ্রিয়?
            <br />
            <b>A:</b> React Hook Form, Formik, Yup, Zod।
          </p>
          <p>
            <b>Q:</b> Common problem – form submit করলে পুরো পেজ রিফ্রেশ হয়ে যায়,
            সমাধান কী?
            <br />
            <b>A:</b> `onSubmit` ইভেন্টে `e.preventDefault()` ব্যবহার করতে হবে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Module8;
