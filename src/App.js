import { useState } from "react";
import RangeSlider from "react-range-slider-input";
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

  console.log(step);

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
        <input
          type="range"
          value={step}
          max={10}
          min={1}
          onChange={(s) => setStep(Number(s.target.value))}
        />
      </div>
      <div className="counter">
        <button onClick={handleMinusCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={handlePlusCount}>+</button>
      </div>

      <div className="counter2">
        <p>
          {provideDateString()} {dateProvider(count)}
        </p>
        {count !== 0 || step !== 1 ? (
          <button
            style={{ width: "80px", height: "20px" }}
            onClick={() => {
              setCount(0);
              setStep(1);
            }}
          >
            Reset
          </button>
        ) : (
          ""
        )}{" "}
      </div>
    </div>
  );
}

export default App;
