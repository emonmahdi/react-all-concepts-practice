import React, { useState } from "react";

/* -------------------
   E-COMMERCE APP DEMO
------------------- */
const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Headphones", price: 100 },
];

const ECommerceApp = () => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-4 border rounded bg-gray-50 space-y-3">
      <h3 className="font-semibold text-lg">🛒 E-Commerce Demo</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id} className="flex justify-between">
            {p.name} - ${p.price}
            <button
              onClick={() => addToCart(p)}
              className="px-2 py-1 bg-blue-600 text-white rounded"
            >
              Add
            </button>
          </li>
        ))}
      </ul>
      <p className="font-semibold">Cart Items: {cart.length}</p>
      <p>Total: ${total}</p>
    </div>
  );
};

/* -------------------
   BLOG APP DEMO
------------------- */
const BlogApp = () => {
  const [posts, setPosts] = useState<string[]>([]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost.trim()) {
      setPosts([...posts, newPost]);
      setNewPost("");
    }
  };

  return (
    <div className="p-4 border rounded bg-gray-50 space-y-3">
      <h3 className="font-semibold text-lg">✍️ Blog App Demo</h3>
      <input
        type="text"
        value={newPost}
        placeholder="Write post..."
        onChange={(e) => setNewPost(e.target.value)}
        className="border px-2 py-1 rounded w-full"
      />
      <button
        onClick={addPost}
        className="px-3 py-1 bg-green-600 text-white rounded"
      >
        Add Post
      </button>
      <ul className="list-disc pl-6">
        {posts.map((post, idx) => (
          <li key={idx}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

/* -------------------
   TASK MANAGER DEMO
------------------- */
const TaskManager = () => {
  const [tasks, setTasks] = useState<{ id: number; title: string; status: string }[]>([
    { id: 1, title: "Design UI", status: "todo" },
    { id: 2, title: "Build API", status: "in-progress" },
  ]);

  const moveTask = (id: number, status: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {["todo", "in-progress", "done"].map((col) => (
        <div key={col} className="p-4 border rounded bg-gray-50">
          <h4 className="font-semibold capitalize">{col}</h4>
          {tasks
            .filter((t) => t.status === col)
            .map((task) => (
              <div key={task.id} className="flex justify-between items-center">
                <span>{task.title}</span>
                <select
                  value={task.status}
                  onChange={(e) => moveTask(task.id, e.target.value)}
                  className="border rounded px-1"
                >
                  <option value="todo">Todo</option>
                  <option value="in-progress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

const Module16 = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📌 Module 16: Final Projects</h1>

      {/* E-commerce App */}
      <section className="p-4 border rounded bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 E-commerce App</h2>
        <p>
          একটি production-ready e-commerce app এ থাকে product listing, cart, authentication, checkout।
        </p>
        <ECommerceApp />
      </section>

      {/* Blog App */}
      <section className="p-4 border rounded bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 Blog App</h2>
        <p>
          Blog App এ সাধারণত CRUD operations (Create, Read, Update, Delete), Authentication, এবং
          Comment system থাকে।
        </p>
        <BlogApp />
      </section>

      {/* Task Manager */}
      <section className="p-4 border rounded bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 Task Manager</h2>
        <p>
          Kanban board style Task Manager → user tasks কে drag/drop বা status change করে manage করে।
        </p>
        <TaskManager />
      </section>

      {/* Practice Task */}
      <section className="p-4 border rounded bg-green-50">
        <h2 className="text-xl font-semibold">📝 Practice Task</h2>
        <ul className="list-disc pl-6">
          <li>E-commerce: JWT auth + checkout system implement করো।</li>
          <li>Blog: CRUD + user comments যোগ করো।</li>
          <li>Task Manager: drag-and-drop library (react-beautiful-dnd) দিয়ে উন্নত kanban বানাও।</li>
        </ul>
      </section>

      {/* Interview Q&A */}
      <section className="p-4 border rounded bg-yellow-50">
        <h2 className="text-xl font-semibold">🎯 Interview Q&A</h2>

        <p><b>Q:</b> E-commerce app এর সবচেয়ে critical অংশ কী?</p>
        <p><b>A:</b> Authentication, secure payment integration, এবং cart management।</p>

        <p><b>Q:</b> Blog app এ CRUD কিভাবে কাজ করে?</p>
        <p><b>A:</b> Create → নতুন post add, Read → সব post view, Update → post edit, Delete → post remove।</p>

        <p><b>Q:</b> Kanban style task manager এর মূল সুবিধা কী?</p>
        <p><b>A:</b> Visual workflow management → project progress সহজে track করা যায়।</p>

        <p><b>Q:</b> Critical: এই projects গুলো deploy করলে কীভাবে scalability নিশ্চিত করবে?</p>
        <p><b>A:</b> Backend কে microservices আকারে ভাগ করা, caching (Redis), এবং cloud hosting (AWS/Vercel) ব্যবহার করা।</p>
      </section>
    </div>
  );
};

export default Module16;
