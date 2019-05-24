import React, { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({ x: window.innerWidth, y: window.innerHeight })
    useEffect(() => {
      const handleResize = () => { setSize({ x: window.innerWidth, y: window.innerHeight  }) };

      window.addEventListener('resize', handleResize);

      return () => { window.removeEventListener('resize', handleResize) };
  }, [setSize])

  return size;
}

function WindowSize() {
  const { x, y } = useWindowSize();
  return (
    <div>
      The current window size is: {x}x{y}
    </div>
  );
}

export default WindowSize;
