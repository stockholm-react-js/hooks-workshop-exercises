import React from 'react';

function useCounter(initialCount) {
  /*
   * This could be implemented with useState
   **/

  return {
    count: initialCount,
    increment: () => {},
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
