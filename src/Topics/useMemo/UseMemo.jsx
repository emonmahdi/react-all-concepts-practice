import  { useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  // Expensive computation
  const expensiveCalculation = () => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  };
  return (
    <div>
        <h2>This is useMemo Example: </h2>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type something" />
      <h2>Result: {expensiveCalculation()}</h2>
    </div>
  )
}

export default UseMemo