import React, { useState } from 'react';

const useCount = (initialValue = 0, interval = 1) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + interval);
  const decrement = () => setCount(count - interval);

  return [count, increment, decrement];
};

export default function Counter({ user }) {
  const [count, increment, decrement] = useCount(0, 3);

  return (
    <div style={{ borderColor: 'red' }} className='component'>
      <h5>{user}&apos;s count:</h5>
      <div>The count is {count}</div>
      <button data-testid='incButton' onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
