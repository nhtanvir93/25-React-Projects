import { useState } from "react";
import styles from "./RandomColor.module.css";

const hexChars = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const RandomColor = () => {
  const [isHex, setIsHex] = useState(false);
  const [hexCode, setHexCode] = useState("#000000");
  const [rgbCode, setRgbCode] = useState("rgb(0,0,0)");

  function getRandomNumber(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomRgbColorCode() {
    let currentRgbCodes = [];

    while (true) {
      currentRgbCodes = [];

      for (let i = 0; i < 3; i++) currentRgbCodes.push(getRandomNumber(255));

      if (`rgb(${currentRgbCodes.join(",")}\)` !== rgbCode) break;
    }

    return `rgb(${currentRgbCodes.join(",")}\)`;
  }

  function getRandomHexColorCode() {
    let currentHexCode;

    while (true) {
      currentHexCode = "#";

      for (let i = 0; i < 6; i++)
        currentHexCode += hexChars[getRandomNumber(15)];

      if (currentHexCode !== hexCode) break;
    }

    return currentHexCode;
  }

  function handleRandomColorApply() {
    const colorMode = getRandomNumber(10, 1);

    if (colorMode % 2 === 0) {
      setIsHex(true);
      handleHexApply();
    } else {
      setIsHex(false);
      handleRgbApply();
    }
  }

  function handleRgbApply() {
    setIsHex(false);
    setRgbCode(getRandomRgbColorCode());
  }

  function handleHexApply() {
    setIsHex(true);
    setHexCode(getRandomHexColorCode());
  }

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: isHex ? `${hexCode}` : rgbCode }}
    >
      <div className={styles.btnContainer}>
        <button
          type="button"
          className={[styles.applyColorBtn, styles.applyHexColorBtn].join(" ")}
          onClick={handleHexApply}
        >
          Apply Random Hex Color
        </button>
        <button
          type="button"
          className={[styles.applyColorBtn, styles.applyRgbColorBtn].join(" ")}
          onClick={handleRgbApply}
        >
          Apply Random RGB Color
        </button>
        <button
          type="button"
          className={styles.applyColorBtn}
          onClick={handleRandomColorApply}
        >
          Apply Random Color
        </button>
      </div>
      <div className={styles.colorModeTitleContainer}>
        <h3 className={styles.colorModeTitle}>
          {isHex ? "HEX Color" : "RGB Color"}
        </h3>
      </div>
      <div className={styles.colorCodeTitleContainer}>
        <h3 className={styles.colorCodeTitle}>{isHex ? hexCode : rgbCode}</h3>
      </div>
    </div>
  );
};

export default RandomColor;
