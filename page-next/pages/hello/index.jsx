import { useState, useEffect } from 'react';

export default function HydrationExample() {
  const [count, setCount] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHydrated(true);
    }, 1000); //  delay 1 second

    return () => clearTimeout(timer); 
  }, []); 

  return (
    <div >
      <h1>Hydration Beispiel</h1>
      <button
        
        onClick={() => setCount(count + 1)}
        style={{ visibility: hydrated ? 'visible' : 'hidden' }}
      >
        Click me! Count: {count}
      </button>
    </div>
  );
}