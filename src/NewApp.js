import "./styles.css";
import React, { useState } from "react";
import NewButton from "./NewButton";
import { number, mathSymbol } from "./symbolLibrary";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";

function NewApp() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [mathOperator, setMathOperator] = useState("");
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const clearBtn = () => {
    setFirstNumber("");
    setSecondNumber("");
    setMathOperator("");
  };

  const numberBtn = (props) => {
    if (firstNumber.includes("0") && props === "0") {
      setFirstNumber("0");
      return;
    }
    if (secondNumber !== "" && mathOperator === "") return;
    if (number.includes(props) || props === ".") {
      const includeDot = firstNumber.includes(".") && props === ".";
      const isEmptyFieldAndDot = props === "." && firstNumber === "";

      if (includeDot || isEmptyFieldAndDot) {
        props = "";
      }

      setFirstNumber(firstNumber + props);
    }
  };

  const mathBtn = (props) => {
    const secondEmptyAndfirstFull = firstNumber !== "" && secondNumber === "";
    const firstEmptyAndSecondFull = secondNumber !== "" && firstNumber === "";

    if (firstNumber && secondNumber && mathOperator !== "") {
      getResult();
      setMathOperator(props);
      return;
    }
    if (secondEmptyAndfirstFull || firstEmptyAndSecondFull) {
      setMathOperator(props);
    }
    if (firstNumber === "") {
      return;
    }
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const getResult = () => {
    let one = firstNumber ? parseFloat(firstNumber) : 0;
    let two = secondNumber ? parseFloat(secondNumber) : 0;
    switch (mathOperator) {
      case "/":
        one = two / one;
        break;
      case "x":
        one = one * two;
        break;
      case "+":
        one = one + two;
        break;
      case "-":
        one = two - one;
        break;

      // no default
    }

    const result = (Math.round(one * 1000) / 1000).toString();

    if (firstNumber && mathOperator !== "") {
      setFirstNumber("");
      setSecondNumber(result);
    } else {
      setFirstNumber(result);
      setSecondNumber("");
    }
    setMathOperator("");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <div className="Switch">
          <button className="button Switch" onClick={switchTheme}>
            Switch Theme
          </button>
        </div>
        <div className="container">
          <div className="result">
            <p className="out">{secondNumber}</p>
            <p className="opr">{mathOperator}</p>
            <p className="num">{firstNumber || "0"}</p>
          </div>

          <div className="buttons">
            <NewButton
              className={"button BtnC"}
              i={"C"}
              tapNumber={clearBtn}
              key={"C"}
            />
            <div className="number">
              {number.map((item) => (
                <NewButton
                  className={`buttonNum n${item}`}
                  i={item}
                  tapNumber={numberBtn}
                  key={item}
                />
              ))}
              <NewButton
                className={"buttonNum sep"}
                i={"."}
                tapNumber={numberBtn}
                key={"."}
              />
              <NewButton
                className={"button getResult"}
                i={"="}
                tapNumber={getResult}
                key={"="}
              />
            </div>
            <div className="mathSym">
              {mathSymbol.map((item) => (
                <NewButton
                  className={"button"}
                  i={item}
                  tapNumber={mathBtn}
                  key={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default NewApp;
