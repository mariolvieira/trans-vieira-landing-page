import { useEffect, useState } from "react";
import { images } from "./ImagesList";
import styles from "./styles.module.css";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const nextIndex = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  const previousIndex = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchEnd - touchStart;
    const ifSwipeToLeft = distance < -minSwipeDistance;
    const ifSwipeToRight = distance > minSwipeDistance;

    if (ifSwipeToRight) {
      previousIndex();
    } else if (ifSwipeToLeft) {
      nextIndex();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => nextIndex(), 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div id="home" className={styles.carouselContainer}>
      <div
        className={styles.carouselViewport}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button
          className={`${styles.arrowButton} ${styles.left}`}
          onClick={previousIndex}
        >
          &#10094;
        </button>
        <div className={styles.carouselSlider}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              Segurança, conforto e
              <br />
              <span className={styles.span}>tranquilidade</span>
              <br />
              para sua viagem
            </h1>
          </div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Slide ${index}`}
              className={`${styles.carouselImage} ${index === currentIndex ? styles.visible : ""}`}
            />
          ))}
        </div>
        <button
          className={`${styles.arrowButton} ${styles.right}`}
          onClick={nextIndex}
        >
          &#10095;
        </button>
      </div>

      <div className={styles.indicators}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.point} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
