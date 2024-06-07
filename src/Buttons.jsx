import React, { useEffect } from "react";
import styles from "./Buttons.module.css";

const Buttons = ({ change }) => {
  const buttons = [
    "+",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "/",
    "0",
    "=",
    "C",
    ".",
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (buttons.includes(key)) {
        change(key);
      } else if (key === "Enter") {
        change("=");
      } else if (key === "Backspace") {
        change("C");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [change, buttons]);

  return (
    <div className={styles.buttoncontainer}>
      {buttons.map((button) => (
        <button
          onClick={() => change(button)}
          key={button}
          className={`${styles.button} ${
            ["+", "-", "*", "/"].includes(button) ? styles["ope-but"] : ""
          }`}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
