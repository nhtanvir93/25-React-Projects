import { RefObject, useRef } from "react";
import styles from "./style.module.css";

const Scrolling = () => {
  const fifthDiv = useRef<HTMLElement>(null);
  const seventhDiv = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToFifthDiv = () => {
    if (fifthDiv.current) {
      fifthDiv.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const scrollToSeventhDiv = () => {
    if (seventhDiv.current) {
      seventhDiv.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Scrolling</h3>
      <button type="button" className={styles.btn} onClick={scrollToBottom}>
        Scroll to Bottom
      </button>
      <button type="button" className={styles.btn} onClick={scrollToFifthDiv}>
        Scroll to Box 5
      </button>
      <div className={styles.box}>
        <h3 className={styles.boxHeader}>Box 1</h3>
      </div>
      <div className={styles.box}>
        <h3 className={styles.boxHeader}>Box 2</h3>
      </div>
      <div className={styles.box}>
        <h3 className={styles.boxHeader}>Box 3</h3>
      </div>
      <div className={styles.box}>
        <h3 className={styles.boxHeader}>Box 4</h3>
      </div>
      <div className={styles.box} ref={fifthDiv as RefObject<HTMLDivElement>}>
        <h3 className={styles.boxHeader}>Box 5</h3>
      </div>
      <div className={styles.box}>
        <h3 className={styles.boxHeader}>Box 6</h3>
      </div>
      <div className={styles.box} ref={seventhDiv as RefObject<HTMLDivElement>}>
        <h3 className={styles.boxHeader}>Box 7</h3>
      </div>
      <div className={styles.box}>
        <h3 className={styles.boxHeader}>Box 8</h3>
      </div>
      <div className={styles.box}>
        <h3 className={styles.boxHeader}>Box 9</h3>
      </div>
      <div className={styles.box}>
        <h3 className={styles.boxHeader}>Box 10</h3>
      </div>
      <button type="button" className={styles.btn} onClick={scrollToSeventhDiv}>
        Scroll to Box 7
      </button>
      <button type="button" className={styles.btn} onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
};

export default Scrolling;
