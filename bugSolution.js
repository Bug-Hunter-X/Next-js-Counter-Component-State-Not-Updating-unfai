```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>My Next.js App</h1>
      <p>This is a test paragraph.</p>      
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
import { useState } from 'react';

function MyComponent(){
  const [count,setCount] = useState(0);
  
  const handleClick = () =>{
    setCount(prevCount => prevCount + 1);
  }
  
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
```