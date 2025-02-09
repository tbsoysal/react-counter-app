import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = (x: '+'|'-'|0) => {
    switch (x) {
      case '+':
        setCounter(counter+1);
        break;
      case '-':
        setCounter(counter-1);
        break;
      case 0:
        setCounter(0);
        break;
    }
  }
  
  return (
  <>
    <h1>Counter App</h1>
    <div className="counterContainer">
      <h2 id="counterNumber">{counter}</h2>
      <div className="buttonsContainer">
        <button className="minusBtn" onClick={() => handleClick('-')}>-</button>
        <button className="plusBtn" onClick={() => handleClick('+')}>+</button>
      </div>
      <button className="resetBtn" onClick={() => handleClick(0)}>reset</button>
    </div>
  </>
  )
}

export default App;
