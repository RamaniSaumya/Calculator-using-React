import styles from "./App.module.css";
import Display from "./Display";
import Buttons from "./Buttons";
import { useState } from "react";
function App() {
  let [calval, setVal] = useState("");

  const addbutt = (button) => {
    console.log(button);

    if (button === "C") {
      setVal("");
    } else if (button === "=") {
      const expr = calval;
      let newexpr = eval(expr);
      setVal(newexpr);
    } else {
      let temp = calval + button;
      setVal(temp);
    }
  };

  return (
    <div className={styles.calculator}>
      <h2 className={styles.h2}>This is the calculator....</h2>
      <Display displayCon={calval}> </Display>
      <Buttons change={addbutt}></Buttons>
    </div>
  );
}

export default App;
