import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 border rounded-xl bg-gray-50 space-y-3">
      <h2 className="text-lg font-semibold">Counter: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-green-600 text-white rounded"
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="px-3 py-1 bg-red-600 text-white rounded ml-2"
      >
        Decrement
      </button>
    </div>
  );
};

const Form = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("নাম লিখতে হবে!");
    } else {
      setError("");
      alert(`Form Submitted: ${name}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-xl bg-gray-50 space-y-3">
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
        className="border px-2 py-1 rounded w-full"
      />
      {error && <p className="text-red-600">{error}</p>}
      <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">
        Submit
      </button>
    </form>
  );
};

const Module14 = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📌 Module 14: Testing in React</h1>

      {/* Jest & React Testing Library */}
      <section className="p-4 border rounded-xl bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 Jest & React Testing Library</h2>
        <p>
          React Testing Library (RTL) হলো React component টেস্ট করার সবচেয়ে জনপ্রিয় লাইব্রেরি। Jest হলো
          JavaScript testing framework যেটা assertions, mocks, coverage report দেয়।
        </p>
      </section>

      {/* Unit Testing */}
      <section className="p-4 border rounded-xl bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 Unit Testing</h2>
        <p>
          Unit Testing → ছোট ছোট ফাংশন বা component কে আলাদাভাবে টেস্ট করা।
        </p>
        <Counter />
        <pre className="bg-black text-white p-2 rounded mt-2 text-sm overflow-x-auto">
{`// Counter.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
});`}
        </pre>
      </section>

      {/* Integration Testing */}
      <section className="p-4 border rounded-xl bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 Integration Testing</h2>
        <p>
          Integration Testing → একাধিক component একসাথে কাজ করছে কিনা সেটি পরীক্ষা করা।
        </p>
        <Form />
        <pre className="bg-black text-white p-2 rounded mt-2 text-sm overflow-x-auto">
{`// Form.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

test("shows error when submitting empty input", () => {
  render(<Form />);
  fireEvent.click(screen.getByText("Submit"));
  expect(screen.getByText("নাম লিখতে হবে!")).toBeInTheDocument();
});`}
        </pre>
      </section>

      {/* Interview Q&A */}
      <section className="p-4 border rounded-xl bg-yellow-50">
        <h2 className="text-xl font-semibold">🎯 Interview Q&A</h2>

        <p><b>Q:</b> Unit test আর integration test এর মধ্যে পার্থক্য কী?</p>
        <p><b>A:</b> Unit test → ছোট ফাংশন/component আলাদা করে টেস্ট। Integration test → একাধিক কম্পোনেন্ট একসাথে কাজ করছে কিনা যাচাই।</p>

        <p><b>Q:</b> React Testing Library এর মূল philosophy কী?</p>
        <p><b>A:</b> "Test components the way users use them" → DOM interaction, text rendering ইত্যাদি simulate করে।</p>

        <p><b>Q:</b> Jest কেন ব্যবহার করা হয়?</p>
        <p><b>A:</b> Jest দিয়ে test runner, mocking, assertions, coverage সব একসাথে করা যায়।</p>

        <p><b>Q:</b> Critical: কিভাবে asynchronous API call test করবে?</p>
        <p><b>A:</b> `findBy...` query ব্যবহার করে async element এর জন্য wait করতে হবে। Example:
        {` await screen.findByText(/data loaded/i)`}</p>

        <p><b>Q:</b> Snapshot testing কী?</p>
        <p><b>A:</b> Snapshot testing এ component এর UI কে snapshot আকারে save করে রাখা হয়। ভবিষ্যতে পরিবর্তন হলে সেটা compare করা যায়।</p>
      </section>
    </div>
  );
};

export default Module14;
