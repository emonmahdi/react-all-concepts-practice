/* eslint-disable react/prop-types */
import { useState } from "react";
import Card2 from "./Component_Composition/Card2";

// ✅ Reusable Button
const Button = ({ children, onClick, variant = "primary" }) => {
  const base =
    "px-4 py-2 rounded-lg font-medium transition duration-200 focus:outline-none";
  const styles = {
    primary: "bg-indigo-500 text-white hover:bg-indigo-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
};

// ✅ Reusable Card
const Card = ({ title, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-5 border">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

// ✅ Reusable Modal
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
      <div className="bg-white rounded-2xl shadow-lg w-96 p-6 relative">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

const Module4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Module Header */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold">
          📌 Module 4: Component Composition & Reusability
        </h1>
        <p className="mt-2 text-lg">👉 Goal: Reusable component বানানো</p>
      </div>

      {/* Topics Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="🔹 Component Composition">
          <p className="text-gray-700">
            ছোট ছোট components মিলিয়ে বড় component বানানোকে{" "}
            <span className="font-semibold">Component Composition</span> বলে।
          </p>
        </Card>

        <Card title="🔹 Default Props">
          <p className="text-gray-700">
            যদি কোনো prop না পাঠানো হয়, তবে default মান set করার জন্য{" "}
            <span className="font-semibold">default props</span> ব্যবহার করা হয়।
          </p>
        </Card>

        <Card title="🔹 Reusable Button">
          <div className="flex gap-2 mt-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </Card>

        <Card title="🔹 Reusable Modal">
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Reusable Modal"
          >
            <p className="text-gray-700">
              এই Modal টি Reusable — যেকোনো content এখানে দেখানো যাবে।
            </p>
          </Modal>
        </Card>
      </div>

      {/* Practice Tasks */}
      <div className="p-5 bg-orange-50 rounded-2xl border border-orange-200">
        <h2 className="text-xl font-semibold mb-3">📝 Practice Task:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Reusable Button বানাও (primary, secondary, danger styles সহ)</li>
          <li>Modal component বানাও (open/close system সহ)</li>
        </ul>
      </div>
    </div>

    <Card2>
        <h2>Card Title</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quam dignissimos molestias ut porro eius consequuntur amet. Voluptatibus, asperiores dolorum?</p>
    </Card2>
    </>
  );
};

export default Module4;
