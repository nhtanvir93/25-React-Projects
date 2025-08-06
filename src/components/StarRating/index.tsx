import { useState } from "react";
import styles from "./StarRating.module.css";

let count = 0;
const circles = Array.from({ length: 10 }, (index) => ++count);

const StarRating = () => {
  const [focused, setFocused] = useState(-1);
  const [rating, setRating] = useState(-1);

  return (
    <div className={styles.container}>
      <h3>Provide Rating</h3>
      <div className={styles.circleContainer}>
        {circles.map((_, idx) => (
          <div
            title={focused === idx ? (idx + 1).toString() : ""}
            key={`circle-` + idx}
            className={`${styles.circle} ${
              idx <= focused || idx <= rating ? styles.circleActive : ""
            }`}
            onMouseEnter={() => setFocused(idx)}
            onMouseLeave={() => setFocused(-1)}
            onClick={() => setRating(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
