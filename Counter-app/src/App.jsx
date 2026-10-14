import { useState } from "react";
import "./App.css";

function App() {
  // Initialize count state with 0
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="counter-card">
        <h1>React Counter App</h1>

        <div className="count-display">
          {count}
        </div>

        <div className="button-container">
          <button onClick={increment}>
            Increment
          </button>

          <button onClick={decrement}>
            Decrement
          </button>

          <button onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;