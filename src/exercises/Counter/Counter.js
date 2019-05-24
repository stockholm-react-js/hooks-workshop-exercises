import React, { useState } from 'react';

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  return {
    count: count,
    increment: () => setCount(prevCount => prevCount + 1),
  };
}

function Counter() {
  const { count, increment } = useCounter(1);
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
