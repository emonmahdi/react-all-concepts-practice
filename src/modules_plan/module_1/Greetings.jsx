/* eslint-disable react/prop-types */
 
  
  const Greeting  = ({ name, age }) => {
    return (
      <div className="p-4 bg-purple-100 rounded-xl shadow text-center">
        <h2 className="text-xl font-bold text-purple-700">
          Hello, {name}! 👋
        </h2>
        <p className="text-gray-600">You are {age} years old.</p>
      </div>
    );
  };
  
  export default Greeting;
  