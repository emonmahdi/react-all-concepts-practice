/* eslint-disable react/prop-types */
import  { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  NavLink,
  Navigate,
} from "react-router";

/* Dummy Pages */
const Home = () => <h2 className="text-xl font-bold text-green-600">🏠 Home Page</h2>;
const About = () => <h2 className="text-xl font-bold text-purple-600">ℹ️ About Page</h2>;
const Post = () => <h2 className="text-xl font-bold text-blue-600">📝 Blog Post Page</h2>;
const Dashboard = () => <h2 className="text-xl font-bold text-red-600">📊 Dashboard (Protected)</h2>;

/* Protected Route Component */
const ProtectedRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/" replace />;
};

const Module9 = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl space-y-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-indigo-700">📌 Module 9: Routing</h1>
      <p className="text-gray-600">👉 Goal: Multi-page App তৈরি করা React Router ব্যবহার করে।</p>

      {/* Definitions */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold text-indigo-600">📖 ডিফিনিশন:</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><b>React Router v7:</b> React 19 এর জন্য অফিসিয়াল রাউটিং লাইব্রেরি।</li>
          <li><b>Route:</b> নির্দিষ্ট path এর জন্য কোন কম্পোনেন্ট render করবে তা নির্ধারণ করে।</li>
          <li><b>Link/NavLink:</b> SPA এর মধ্যে পেজ নেভিগেশনের জন্য ব্যবহৃত হয়।</li>
          <li><b>Dynamic Route:</b> URL এর ভ্যালু অনুযায়ী ভিন্ন কনটেন্ট দেখানো হয়।</li>
          <li><b>Protected Route:</b> লগইন ছাড়া ইউজার যেন Dashboard এর মত পেজে ঢুকতে না পারে।</li>
        </ul>
      </div>

      {/* Router Example */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold text-indigo-600">🛣️ Routing Example</h2>
        <Router>
          {/* Navbar */}
          <nav className="flex space-x-6 p-3 bg-indigo-600 text-white rounded-lg">
            <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold underline" : ""}>About</NavLink>
            <NavLink to="/post" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Post</NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Dashboard</NavLink>
          </nav>

          {/* Auth Button */}
          <div className="mt-4">
            <button
              onClick={() => setIsAuth(!isAuth)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              {isAuth ? "Logout" : "Login"}
            </button>
          </div>

          {/* Routes */}
          <div className="mt-6 p-4 border rounded-lg bg-gray-50">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/post" element={<Post />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute isAuth={isAuth}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </div>

      {/* Interview Questions */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold text-indigo-600">🎯 ইন্টারভিউ প্রশ্ন & উত্তর</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            <b>Q:</b> React Router কেন ব্যবহার করি?  
            <br />
            <b>A:</b> Single Page Application (SPA) এ পেজ রিফ্রেশ না করে multi-page experience দেয়।
          </p>
          <p>
            <b>Q:</b> Route আর NavLink এর মধ্যে পার্থক্য কী?  
            <br />
            <b>A:</b> Route কোন path এ কোন component render হবে সেটি বলে। NavLink active হলে extra class যোগ হয় (active state)।
          </p>
          <p>
            <b>Q:</b> Protected Route কীভাবে কাজ করে?  
            <br />
            <b>A:</b> শর্তসাপেক্ষে (যেমন লগইন) কোন component দেখানো হয়, না হলে অন্য path এ redirect করা হয়।
          </p>
          <p>
            <b>Q:</b> Common Problem – রাউট কাজ করছে না, সমাধান কী?  
            <br />
            <b>A:</b> React Router সঠিক version install করা হয়েছে কিনা (react-router-dom v7), এবং Routes এর ভেতরে Route ব্যবহার করা হয়েছে কিনা চেক করতে হবে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Module9;
