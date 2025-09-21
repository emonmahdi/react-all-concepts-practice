import React, { useState, useEffect, Component, useRef } from "react";
import ReactDOM from "react-dom";

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  class Boundary extends Component<{ children: React.ReactNode }, { hasError: boolean }> {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
      return { hasError: true };
    }
    componentDidCatch(error: any, info: any) {
      console.error("Error caught by boundary:", error, info);
    }
    render() {
      if (this.state.hasError) {
        return <h2 className="text-red-600">কিছু ভুল হয়েছে!</h2>;
      }
      return this.props.children;
    }
  }
  return <Boundary>{children}</Boundary>;
};

// ✅ Custom Hook (useFetch)
const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

// ✅ Portal Component (Modal)
const Modal: React.FC<{ onClose: () => void }> = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        {children}
        <button onClick={onClose} className="mt-4 px-3 py-1 bg-red-500 text-white rounded">
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

const Module13 = () => {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/1");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📌 Module 13: Real-world Features</h1>

      {/* Error Boundaries */}
      <section className="p-4 border rounded-xl bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 Error Boundaries</h2>
        <p>React এ <b>Error Boundary</b> কম্পোনেন্ট রানটাইম error ধরতে পারে এবং UI ভেঙে যাওয়া থেকে বাঁচায়।</p>
        <ErrorBoundary>
          <BrokenComponent />
        </ErrorBoundary>
      </section>

      {/* Custom Hook */}
      <section className="p-4 border rounded-xl bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 Custom Hook (useFetch)</h2>
        {loading ? <p>Loading...</p> : <p>{data?.title}</p>}
      </section>

      {/* Portal */}
      <section className="p-4 border rounded-xl bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 Portal (Modal)</h2>
        <button
          onClick={() => setShowModal(true)}
          className="px-3 py-2 bg-blue-600 text-white rounded"
        >
          Show Modal
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <h3 className="text-lg font-semibold">আমি Portal দিয়ে বানানো Modal 🚀</h3>
          </Modal>
        )}
      </section>

      {/* Fragments & Strict Mode */}
      <section className="p-4 border rounded-xl bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 Fragments & Strict Mode</h2>
        <p>
          <b>Fragments</b> → DOM এ extra div না বানিয়ে একাধিক element wrap করার জন্য ব্যবহার হয়। <br />
          <b>StrictMode</b> → React development mode এ extra checks করে।
        </p>
        <>
          <p>এই লাইন ফ্র্যাগমেন্ট দিয়ে wrap করা হয়েছে।</p>
          <p>DOM এ বাড়তি div তৈরি হয়নি।</p>
        </>
      </section>

      {/* React 19 Features */}
      <section className="p-4 border rounded-xl bg-gray-50">
        <h2 className="text-xl font-semibold">🔹 React 19 Features</h2>
        <ul className="list-disc pl-6">
          <li><b>Actions API</b> – form submissions সহজে handle করার জন্য।</li>
          <li><b>New Hooks</b> – useOptimistic, useFormStatus ইত্যাদি।</li>
          <li><b>Server Components</b> – server side rendering আরও efficient।</li>
        </ul>
      </section>

      {/* Interview Q&A */}
      <section className="p-4 border rounded-xl bg-yellow-50">
        <h2 className="text-xl font-semibold">🎯 Interview Q&A</h2>

        <p><b>Q:</b> Error Boundary কেন দরকার?</p>
        <p><b>A:</b> Runtime error এ UI ক্রাশ না করে graceful fallback দেয়।</p>

        <p><b>Q:</b> Portal এর use case কী?</p>
        <p><b>A:</b> Modal, Tooltip, Dropdown → যেখানে DOM tree এর বাইরে render করতে হয়।</p>

        <p><b>Q:</b> Custom Hook কবে লিখতে হয়?</p>
        <p><b>A:</b> যখন একটি logic বারবার reuse করতে হবে।</p>

        <p><b>Q:</b> React Fragment এর সুবিধা কী?</p>
        <p><b>A:</b> DOM এ extra wrapper না বানিয়ে multiple element group করা যায়।</p>

        <p><b>Q:</b> React 19 এর নতুন features কী কী?</p>
        <p><b>A:</b> Actions API, নতুন hooks (useOptimistic), improved Server Components।</p>
      </section>
    </div>
  );
};

// Dummy Broken Component to test ErrorBoundary
const BrokenComponent = () => {
  throw new Error("কিছু একটা গণ্ডগোল হয়েছে!");
};

export default Module13;
