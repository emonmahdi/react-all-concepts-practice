/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// ✅ Theme Context
const ThemeContext = createContext();

// ✅ Auth Context
const AuthContext = createContext();

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

// ✅ Theme Toggle Component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`p-5 rounded-2xl shadow text-center ${
        theme === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-white"
      }`}
    >
      <h2 className="text-xl font-semibold mb-2">🎨 Theme Toggle</h2>
      <p className="mb-3">Current Theme: {theme}</p>
      <Button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </Button>
    </div>
  );
};

// ✅ User Profile Component
const UserProfile = () => {
  const { user, login, logout } = useContext(AuthContext);
  return (
    <div className="p-5 bg-white rounded-2xl shadow text-center border">
      <h2 className="text-xl font-semibold mb-2">👤 User Auth Context</h2>
      {user ? (
        <div>
          <p className="mb-2">
            Welcome, <span className="font-semibold">{user.name}</span> 🎉
          </p>
          <Button variant="danger" onClick={logout}>
            Logout
          </Button>
        </div>
      ) : (
        <Button onClick={() => login({ name: "Emon Mahdi" })}>Login</Button>
      )}
    </div>
  );
};

const Module6 = () => {
  // ✅ Theme Context Logic
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // ✅ Auth Context Logic
  const [user, setUser] = useState(null);
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider value={{ user, login, logout }}>
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* Module Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white p-6 rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold">📌 Module 6: Context API</h1>
            <p className="mt-2 text-lg">👉 Goal: Prop Drilling problem solve</p>
          </div>

          {/* Topics Section */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-5 bg-white rounded-2xl shadow border">
              <h2 className="text-xl font-semibold mb-2">
                🔹 createContext & useContext
              </h2>
              <p className="text-gray-700">
                Context API এর মাধ্যমে global data শেয়ার করা যায় prop drilling
                ছাড়া। <code>createContext</code> দিয়ে context তৈরি হয় আর{" "}
                <code>useContext</code> দিয়ে তা consume করা হয়।
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl shadow border">
              <h2 className="text-xl font-semibold mb-2">🔹 Provider/Consumer</h2>
              <p className="text-gray-700">
                Provider component data provide করে এবং child component গুলো{" "}
                Consumer (বা useContext) এর মাধ্যমে সেই data ব্যবহার করে।
              </p>
            </div>
          </div>

          {/* Theme Toggle Example */}
          <ThemeToggle />

          {/* Auth Example */}
          <UserProfile />

          {/* Practice Tasks */}
          <div className="p-5 bg-purple-50 rounded-2xl border border-purple-200">
            <h2 className="text-xl font-semibold mb-3">📝 Practice Task:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>একটা Theme Toggle App বানাও (Light/Dark mode সহ)</li>
              <li>User Login Context implement করো</li>
            </ul>
          </div>
        </div>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Module6;
