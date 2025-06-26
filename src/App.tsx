import { useState } from 'react';
import './App.css';
import { ExampleButton } from './stories/atoms/ExampleButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Hello Counter: {count}</p>
      <ExampleButton
        label={'Increment!'}
        onClick={() => setCount(count + 1)}
        size="large"
        primary
      />
    </>
  );
}

export default App;
