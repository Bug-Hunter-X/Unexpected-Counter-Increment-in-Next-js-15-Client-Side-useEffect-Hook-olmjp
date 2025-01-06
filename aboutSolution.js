```javascript
// pages/aboutSolution.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let interval;
    if (typeof window !== 'undefined') {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      setIntervalId(interval);
    }
    return () => {
      if(intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>The count is: {count}</p>
    </div>
  );
}
```