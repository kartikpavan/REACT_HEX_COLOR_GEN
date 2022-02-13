import React, { useState } from "react";
import SingleColor from "./singleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <section className="form">
        <h1>Generate Color : </h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="#eb4034"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button>Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hex={color.hex}
            ></SingleColor>
          );
        })}
      </section>
    </>
  );
}

export default App;
