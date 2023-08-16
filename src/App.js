import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("0");
  const [expression, setExpression] = useState(""); // Track the full expression
  const [animateTitle, setAnimateTitle] = useState(true);

  const handleButtonClick = (value) => {
    if (value === "c") {
      setInput("0");
      setExpression("");
    } else if (value === "<") {
      setInput(input.slice(0, -1) || "0");
      setExpression(expression.slice(0, -1));
    } else if (value === "%") {
      const valueAsNumber = parseFloat(input);
      const percentage = (valueAsNumber / 100).toString();
      setInput(percentage);
      setExpression(percentage);
    } else if (value === "=") {
      try {
        const result = eval(expression);
        setInput(result.toString());
        setExpression("");
      } catch (error) {
        setInput("Error");
        setExpression("");
      }
    } else {
      setInput(input === "0" ? value : input + value);
      setExpression(expression + value);
    }
  };

  useEffect(() => {
    if (animateTitle) {
      animateText();
      setAnimateTitle(false);
    }
  }, [animateTitle]);

  const animateText = () => {
    const title = document.querySelector(".title");
    if (title) {
      const text = title.innerText;
      title.innerText = "";
      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          title.innerText += text[i];
        }, i * 500);
      }
    }
  };


  return (
    <>
       <h1 className="title">CALCULATOR</h1>
      
      <div className="container">
    
        <div className="calc">
          <h1 id="input">{input}</h1>

          <div className="buttons">
            <button
              className="operator-button"
              onClick={() => handleButtonClick("c")}
            >
              C
            </button>
            <button
              className="operator-button"
              onClick={() => handleButtonClick("<")}
            >
              &lt;
            </button>
            <button
              className="operator-button"
              onClick={() => handleButtonClick("%")}
            >
              %
            </button>
            <button
              className="operator-button"
              onClick={() => handleButtonClick("/")}
            >
              /
            </button>
          </div>
          <div className="buttons">
            <button
              className="normal-button"
              onClick={() => handleButtonClick("7")}
            >
              7
            </button>
            <button
              className="normal-button"
              onClick={() => handleButtonClick("8")}
            >
              8
            </button>
            <button
              className="normal-button"
              onClick={() => handleButtonClick("9")}
            >
              9
            </button>
            <button
              className="operator-button"
              onClick={() => handleButtonClick("*")}
            >
              *
            </button>
          </div>
          <div className="buttons">
            <button
              className="normal-button"
              onClick={() => handleButtonClick("4")}
            >
              4
            </button>
            <button
              className="normal-button"
              onClick={() => handleButtonClick("5")}
            >
              5
            </button>
            <button
              className="normal-button"
              onClick={() => handleButtonClick("6")}
            >
              6
            </button>
            <button
              className="operator-button"
              onClick={() => handleButtonClick("-")}
            >
              -
            </button>
          </div>
          <div className="buttons ">
            <button
              className="normal-button"
              onClick={() => handleButtonClick("1")}
            >
              1
            </button>
            <button
              className="normal-button"
              onClick={() => handleButtonClick("2")}
            >
              2
            </button>
            <button
              className="normal-button"
              onClick={() => handleButtonClick("3")}
            >
              3
            </button>
            <button
              className="operator-button"
              onClick={() => handleButtonClick("+")}
            >
              +
            </button>
          </div>
          <div className="buttons">
            <button
              className="zero-button"
              onClick={() => handleButtonClick("=")}
            >
              =
            </button>
            <button
              className="normal-button"
              onClick={() => handleButtonClick("0")}
            >
              0
            </button>
            <button
              className="normal-button"
              onClick={() => handleButtonClick(".")}
            >
              .
            </button>
            {/* <button className="operator-button "style={centerButtonStyle} onClick={() => handleButtonClick("=")}>
              =
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
