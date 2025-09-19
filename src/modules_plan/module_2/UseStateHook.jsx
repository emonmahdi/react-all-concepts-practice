import { useState } from "react"

 

const UseStateHook = () => {
    const [count, setCount] = useState(0)
  return (
    <div className="border-2 border-blue-700 p-8">
        <h2>useStateHook</h2>
        <p>useState হলো React এর একটা Hook, যেটা component এর ভিতরে state (data) ম্যানেজ করার জন্য ব্যবহার হয়। State পরিবর্তন হলে React component re-render করে।</p>

        <div className="p-6 bg-blue-100 rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Counter: {count}
      </h2>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>

    </div>
  )
}

export default UseStateHook