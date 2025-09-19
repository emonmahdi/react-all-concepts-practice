import { useState } from "react";

const EventExample = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    alert(`Hello, ${name || "Guest"} 👋`);
  };

  return (
    <div className="p-6 bg-purple-100 rounded-xl shadow-md text-center">
        <p>React এ DOM events (যেমন click, change, submit) handle করা হয় JSX attributes এর মাধ্যমে। Event handler function হিসেবে define করা হয়।</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        className="border p-2 rounded-lg mr-2"
      />
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        Greet
      </button>
    </div>
  );
};

export default EventExample;
