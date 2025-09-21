import React, { useState, useEffect } from "react";

// ✅ REST API Example
const PostList = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;
  return (
    <ul className="list-disc pl-6">
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

// ✅ JWT Auth Example
const AuthDemo = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = async () => {
    // Normally, you'll call backend API
    const fakeToken = "jwt-token-123";
    localStorage.setItem("token", fakeToken);
    setToken(fakeToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="p-4 border rounded bg-gray-50 space-y-2">
      <h3 className="font-semibold">JWT Auth Demo</h3>
      {token ? (
        <>
          <p>✅ Logged in with token: {token}</p>
          <button onClick={handleLogout} className="px-3 py-1 bg-red-500 text-white rounded">
            Logout
          </button>
        </>
      ) : (
        <button onClick={handleLogin} className="px-3 py-1 bg-green-600 text-white rounded">
          Login
        </button>
      )}
    </div>
  );
};

const Module15 = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📌 Module 15: Next Level</h1>

      {/* REST API Integration */}
      <section className="p-4 border rounded bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 REST API Integration</h2>
        <p>
          REST API হলো client ↔ server data exchange করার জনপ্রিয় পদ্ধতি। React এ সাধারণত{" "}
          <code>fetch</code> বা <code>axios</code> ব্যবহার করা হয়।
        </p>
        <PostList />
        <pre className="bg-black text-white p-2 rounded mt-2 text-sm overflow-x-auto">
{`useEffect(() => {
  fetch("/api/posts")
    .then(res => res.json())
    .then(data => setPosts(data));
}, []);`}
        </pre>
      </section>

      {/* GraphQL Basics */}
      <section className="p-4 border rounded bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 GraphQL Basics</h2>
        <p>
          GraphQL হলো query language যেখানে client নির্দিষ্ট করে বলে দেয় সে কোন data চায়। REST এর মত
          fixed endpoints নয়।
        </p>
        <pre className="bg-black text-white p-2 rounded mt-2 text-sm overflow-x-auto">
{`query {
  user(id: "1") {
    name
    email
  }
}`}
        </pre>
        <p>👉 এখানে শুধু user এর name ও email field ফেচ করা হবে।</p>
      </section>

      {/* Authentication */}
      <section className="p-4 border rounded bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 Authentication (JWT, OAuth)</h2>
        <p>
          <b>JWT (JSON Web Token)</b> → token ভিত্তিক auth system, যেখানে client কে একটি signed token
          দেওয়া হয়। <br />
          <b>OAuth</b> → third-party login (Google, GitHub, Facebook ইত্যাদি)। নিরাপদ এবং widely used।
        </p>
        <AuthDemo />
      </section>

      {/* Deployment */}
      <section className="p-4 border rounded bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 Deployment</h2>
        <p>
          React / Next.js project deploy করার জন্য সবচেয়ে জনপ্রিয় প্ল্যাটফর্ম হলো{" "}
          <b>Vercel</b> (Next.js এর জন্য optimized) এবং <b>Netlify</b> (CI/CD + Jamstack ready)। শুধু
          GitHub repo connect করলেই CI/CD deploy হয়।
        </p>
      </section>

      {/* Practice Task */}
      <section className="p-4 border rounded bg-green-50">
        <h2 className="text-xl font-semibold">📝 Practice Task</h2>
        <ul className="list-disc pl-6">
          <li>JWT ব্যবহার করে simple Auth System বানাও।</li>
          <li>Blog App বানিয়ে Vercel এ deploy করো।</li>
        </ul>
      </section>

      {/* Interview Q&A */}
      <section className="p-4 border rounded bg-yellow-50">
        <h2 className="text-xl font-semibold">🎯 Interview Q&A</h2>

        <p><b>Q:</b> REST আর GraphQL এর মধ্যে পার্থক্য কী?</p>
        <p><b>A:</b> REST এ fixed endpoints থাকে। GraphQL এ flexible query system থাকে যেখানে client ঠিক করে কোন data লাগবে।</p>

        <p><b>Q:</b> JWT কিভাবে কাজ করে?</p>
        <p><b>A:</b> Login করলে server থেকে signed token পাওয়া যায়। Client সেই token localStorage/cookie তে রাখে এবং পরবর্তী request এ server verify করে।</p>

        <p><b>Q:</b> OAuth কেন দরকার?</p>
        <p><b>A:</b> User কে third-party identity provider (Google, GitHub) দিয়ে authenticate করা যায়। এটা user-friendly এবং নিরাপদ।</p>

        <p><b>Q:</b> React App কিভাবে deploy করবে?</p>
        <p><b>A:</b> Vercel/Netlify এ GitHub repo connect করলে automatic build + deploy হয়ে যায়।</p>

        <p><b>Q:</b> Critical: JWT token কোথায় store করা উচিত? কেন?</p>
        <p><b>A:</b> HttpOnly cookie সবচেয়ে নিরাপদ কারণ localStorage এ রাখলে XSS attack এর শিকার হতে পারে।</p>
      </section>
    </div>
  );
};

export default Module15;
