import React, { useState } from "react";
import Counter from "./Counter.js";
import CounterHooks from "./CounterHooks.js";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("red");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <h1>Reg</h1>
      <Counter initialCount={0} />
      <h1>Hooks</h1>
      <CounterHooks initialCount={0} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          })
        }
      >
        Toggle Color
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
