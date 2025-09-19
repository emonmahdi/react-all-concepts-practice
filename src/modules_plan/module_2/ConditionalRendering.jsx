import { useState } from "react";

 

const ConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <>
      <h2>Conditional Rendering: </h2>
      <p>শর্ত অনুযায়ী UI দেখানোকে Conditional Rendering বলে। <br />
      React এ আমরা if/else, ternary (? :) অথবা && ব্যবহার করতে পারি।</p>
      <div className="p-6 bg-yellow-100 rounded-xl shadow-md text-center">
        {isLoggedIn ? (
          <h2 className="text-green-600 font-bold">Welcome back! 🎉</h2>
        ) : (
          <h2 className="text-red-600 font-bold">Please log in ❌</h2>
        )}
  
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
        >
          Toggle Login
        </button>
      </div>
      </>
    );
  };

export default ConditionalRendering