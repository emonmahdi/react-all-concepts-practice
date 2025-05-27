/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useState } from 'react';

// Child component
const ChildComponent = React.memo(({ count }) => {
  console.log('Child rendered');
  return <div>Count: {count}</div>;
});

// Parent component
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setName(name === 'John' ? 'Jane' : 'John')}>
        Toggle Name
      </button>
      <ChildComponent count={count} />
    </div>
  );
};

export default ParentComponent;
