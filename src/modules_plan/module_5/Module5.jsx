import { useEffect, useState } from "react";

const Module5 = () => {
  const [time, setTime] = useState(new Date());
  const [user, setUser] = useState(null);

  // ✅ Live Clock (with cleanup)
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  // ✅ Fetch GitHub user data
  useEffect(() => {
    fetch("https://api.github.com/users/octocat")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Module Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold">📌 Module 5: useEffect & Lifecycle</h1>
        <p className="mt-2 text-lg">👉 Goal: Side effects handle করা</p>
      </div>

      {/* Topics Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* useEffect Basics */}
        <div className="p-5 bg-white rounded-2xl shadow border">
          <h2 className="text-xl font-semibold mb-2">🔹 useEffect Basics</h2>
          <p className="text-gray-700">
            useEffect hook হলো React এর lifecycle manage করার জন্য। এটি render
            এর পর execute হয়।
          </p>
        </div>

        {/* Dependency Array */}
        <div className="p-5 bg-white rounded-2xl shadow border">
          <h2 className="text-xl font-semibold mb-2">🔹 Dependency Array</h2>
          <p className="text-gray-700">
            Dependency array এর মাধ্যমে নির্দিষ্ট state বা prop change হলে
            useEffect চালানো হয়। [] মানে শুধু প্রথমবার render এ চলবে।
          </p>
        </div>

        {/* Cleanup Function */}
        <div className="p-5 bg-white rounded-2xl shadow border">
          <h2 className="text-xl font-semibold mb-2">🔹 Cleanup Function</h2>
          <p className="text-gray-700">
            useEffect এর return function কে cleanup function বলে। Component
            unmount বা dependency change হলে এটি execute হয়।
          </p>
        </div>

        {/* API Calls */}
        <div className="p-5 bg-white rounded-2xl shadow border">
          <h2 className="text-xl font-semibold mb-2">🔹 API Calls</h2>
          <p className="text-gray-700">
            useEffect ব্যবহার করে আমরা fetch বা axios এর মাধ্যমে API call করতে
            পারি এবং data load করতে পারি।
          </p>
        </div>
      </div>

      {/* Live Clock */}
      <div className="p-5 bg-white rounded-2xl shadow border text-center">
        <h2 className="text-xl font-semibold mb-2">⏰ Live Clock</h2>
        <p className="text-2xl font-mono text-teal-600">{time.toLocaleTimeString()}</p>
        <p className="text-gray-500 mt-2">(Cleanup সহ কাজ করছে)</p>
      </div>

      {/* GitHub User Profile */}
      <div className="p-5 bg-white rounded-2xl shadow border">
        <h2 className="text-xl font-semibold mb-4">🐙 GitHub User Profile</h2>
        {user ? (
          <div className="flex items-center gap-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <h3 className="font-bold text-lg">{user.name}</h3>
              <p className="text-gray-600">@{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-teal-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Loading user...</p>
        )}
      </div>

      {/* Practice Tasks */}
      <div className="p-5 bg-cyan-50 rounded-2xl border border-cyan-200">
        <h2 className="text-xl font-semibold mb-3">📝 Practice Task:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>GitHub API থেকে user data fetch করে profile দেখাও</li>
          <li>Live clock বানাও, cleanup function সহ</li>
        </ul>
      </div>
    </div>
  );
};

export default Module5;
