import date from "date-and-time";
import { useState } from "react";
const dateProvider = (counter) => {
  const todayString = new Date().toLocaleDateString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Convert the formatted string back to a Date object
  const today = new Date(todayString);

  // Add one day to the date
  today.setDate(today.getDate() + counter);

  return today.toDateString();
};
function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handlePlusCount = () => {
    setCount((c) => {
      return c + step;
    });
  };
  const handleMinusCount = () => {
    setCount((c) => {
      return c - step;
    });
  };
  const handlePlusStep = () => {
    setStep((s) => {
      return s + 1;
    });
  };
  const handleMinusStep = () => {
    setStep((s) => {
      return s - 1;
    });
  };

  const provideDateString = () => {
    if (count === 0) {
      return `Today is`;
    } else if (count > 0) {
      return `${count} days from today`;
    } else if (count < 0) {
      return `${count} days ago was`;
    }
  };

  return (
    <div>
      <div className="counter">
        <button onClick={handleMinusStep}>-</button>
        <p>Step: {step} </p>
        <button onClick={handlePlusStep}>+</button>
      </div>
      <div className="counter">
        <button onClick={handleMinusCount}>-</button>
        <p>Count: {count} </p>
        <button onClick={handlePlusCount}>+</button>
      </div>

      <p>
        {provideDateString()} {dateProvider(count)}
      </p>
    </div>
  );
}

export default App;
