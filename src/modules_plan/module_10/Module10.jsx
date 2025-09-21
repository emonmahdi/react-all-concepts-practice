 

const Module10 = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <h1 className="text-2xl font-bold text-blue-600">
        📌 Module 10: State Management Beyond Context
      </h1>
      <p className="text-gray-700">
        👉 Goal: বড় স্কেলের অ্যাপ্লিকেশনে state management শিখা
      </p>

      {/* Context Limitations */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">
          1. Context API Limitations
        </h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>Performance Issue → context value পরিবর্তন হলে সব child re-render হয়।</li>
          <li>Complexity → nested context ব্যবহার করলে কোড জটিল হয়ে যায়।</li>
          <li>Debugging Problem → dev tools এ track করা কঠিন।</li>
          <li>Async Data Handling কঠিন।</li>
        </ul>
      </section>

      {/* Redux Toolkit Basics */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">
          2. Redux Toolkit Basics
        </h2>
        <p className="text-gray-700">
          Redux Toolkit হলো Redux এর modern official library। এটাতে কম boilerplate
          কোডে store, reducer, action, thunk manage করা যায়।
        </p>

        <pre className="bg-black text-green-400 text-sm p-3 rounded mt-3 overflow-x-auto">
{`// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;`}
        </pre>
      </section>

      {/* Async Thunk */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">
          3. Async Calls with Redux Thunk
        </h2>
        <p className="text-gray-700">
          Redux Thunk asynchronous কাজ (API call) করার সুযোগ দেয়।
        </p>

        <pre className="bg-black text-green-400 text-sm p-3 rounded mt-3 overflow-x-auto">
{`// productsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
});

const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.status = "loading"; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;`}
        </pre>
      </section>

      {/* Interview Questions */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">
          🎯 Interview Questions & Answers
        </h2>
        <div className="space-y-4 mt-2">
          <div>
            <p className="font-semibold text-gray-800">Q1: Context API এর limitation কী?</p>
            <p className="text-gray-700">
              Ans: Performance issue, nested context problem, debugging কঠিন, async state
              handle করতে অসুবিধা।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Q2: Redux Toolkit কেন ব্যবহার করবো?</p>
            <p className="text-gray-700">
              Ans: এটা Redux এর official, কম boilerplate, সহজ slice, thunk, devtools integration
              দেয়।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q3: Redux এ dispatch আর selector এর কাজ কী?
            </p>
            <p className="text-gray-700">
              Ans: dispatch → action store এ পাঠায়, selector → state পড়তে ব্যবহার হয়।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Q4: Redux Thunk কেন দরকার?</p>
            <p className="text-gray-700">
              Ans: asynchronous কাজ (API call, timeout, async logic) করার জন্য।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q5: Redux আর Context API তুলনা করলে কোন ক্ষেত্রে Redux ব্যবহার করবো?
            </p>
            <p className="text-gray-700">
              Ans: বড় স্কেল অ্যাপ, multiple async API state (loading, error, success) handle, এবং
              debugging/devtools দরকার হলে Redux ব্যবহার করবো।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Q6: Redux এ middleware এর ভূমিকা কী?</p>
            <p className="text-gray-700">
              Ans: Middleware হলো dispatch আর reducer এর মাঝখানে বসে, side-effect (API call,
              logging, authentication) handle করে।
            </p>
          </div>
        </div>
      </section>

      {/* Problem Solving QnA */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">
          🧩 Problem Solving Q&A
        </h2>
        <div className="space-y-4 mt-2">
          <div>
            <p className="font-semibold text-gray-800">
              Q1: Redux এ state update করলে UI কেন সাথে সাথে আপডেট হয়?
            </p>
            <p className="text-gray-700">
              Ans: কারণ Redux store immutable update করে এবং React-Redux connect হয়ে UI কে re-render
              করায়।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q2: যদি API থেকে error আসে, সেটা কিভাবে handle করবে Redux Toolkit এ?
            </p>
            <p className="text-gray-700">
              Ans: createAsyncThunk এর rejected case ব্যবহার করে state.error এ message রাখা হয় এবং UI তে দেখানো হয়।
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Q3: Redux state খুব বড় হয়ে গেলে performance optimization কিভাবে করবে?
            </p>
            <p className="text-gray-700">
              Ans: state normalize করা, selector memoization (reselect ব্যবহার করে) করা এবং slice
              structure maintain করা।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Module10;
