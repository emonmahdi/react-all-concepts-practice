

const JSXExample= () => {
  const name = "Emon";
  const isLoggedIn = true;

  return (
    <div className="p-6 bg-blue-100 rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">
        JSX - JavaScript XML
      </h2>

      {/* Example: Expression in JSX */}
      <p className="text-gray-700 mb-2">Hello, {name}! 👋</p>

      {/* Example: Conditional Rendering */}
      {isLoggedIn ? (
        <p className="text-green-600 font-semibold">You are logged in ✅</p>
      ) : (
        <p className="text-red-600 font-semibold">Please log in ❌</p>
      )}

      {/* Example: Using className instead of class */}
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        onClick={() => alert("Button Clicked!")}
      >
        Click Me
      </button>
    </div>
  );
};

export default JSXExample;
