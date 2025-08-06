import { useState } from "react";
import styles from "./ImageSlider.module.css";

const images = [
  { id: 1, url: "./images/image1.avif" },
  { id: 2, url: "./images/image2.avif" },
  { id: 3, url: "./images/image3.avif" },
  { id: 4, url: "./images/image4.avif" },
  { id: 5, url: "./images/image5.avif" },
  { id: 6, url: "./images/image6.avif" },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  function handleClickNext() {
    setCurrent(current + 1 >= images.length ? 0 : current + 1);
  }

  function handleClickPrevious() {
    setCurrent(current - 1 < 0 ? images.length - 1 : current - 1);
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Image Slider</h3>
      <div className={styles.sliderContainer}>
        <div className={styles.currentImageContainer}>
          {images.map((image, idx) => (
            <img
              key={`image-${idx}`}
              src={image.url}
              className={`${styles.image} ${
                current !== idx ? styles.hide : ""
              }`}
            />
          ))}
        </div>
        <div className={styles.arrowContainer}>
          <span onClick={handleClickPrevious} className={styles.arrowIcon}>
            &lt;
          </span>
          <span onClick={handleClickNext} className={styles.arrowIcon}>
            &gt;
          </span>
        </div>
        <div className={styles.circleDirectionContainer}>
          {images.map((image, idx) => (
            <div
              onClick={() => setCurrent(idx)}
              key={`circle-icon-${idx}`}
              className={`${styles.circleIcon} ${
                current === idx ? styles.activeCircleIcon : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
