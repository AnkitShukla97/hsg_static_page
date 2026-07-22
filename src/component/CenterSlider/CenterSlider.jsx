import { useState, useEffect } from "react";

import Next from "../../assets/arrowNext.png";
import Prev from "../../assets/arrowPrev.png";
import "./CenterSlider.css";

const CenterSlider = ({ items = [] }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth <= 768 ? 1 : 3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Reset active index if item count changes
  useEffect(() => {
    setActiveIndex(0);
  }, [items.length]);

  if (items.length === 0) {
    return null;
  }

  // desktop center slide is middle of 3
  const sideCount = Math.floor(visibleCount / 2);

  // Build loop list with clones of items
  const loopItems = [
    ...items.slice(-sideCount),
    ...items,
    ...items.slice(0, sideCount),
  ];

  // Index inside loopItems that should sit in the center
  const loopIndex = activeIndex + sideCount;

  // Move to previous slide
  const goPrev = () => {
    if (isMoving) return;
    setIsMoving(true);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsMoving(false), 400);
  };

  // Move to next slide
  const goNext = () => {
    if (isMoving) return;
    setIsMoving(true);
    setActiveIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsMoving(false), 400);
  };

  return (
    <div className="bottomSlider">
      <h2>Lorem ipsum dolor</h2>

      <div className="container">
        <div
          className="bottom_slider_main"
          style={{
            transform: `translateX(calc(50% - ${loopIndex * (100 / visibleCount)}% - ${100 / visibleCount / 2}%))`,
          }}
        >
          {loopItems.map((slide, index) => (
            <div
              className={`bottom_slide ${index === loopIndex ? "active" : ""}`}
              key={index}
            >
              <div className="bottom_slide_content">
                <img
                  src={slide.sliderImg}
                  alt={slide.title}
                  title={slide.title}
                  width="100%"
                  height="100%"
                />
                <p>{slide.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slider_nav">
          <button
            className="nav prev"
            onClick={goPrev}
            aria-label="Previous slide"
          >
            <img src={Prev} alt="Previous slide" title="Previous slide" />
          </button>
          <button className="nav next" onClick={goNext} aria-label="Next slide">
            <img src={Next} alt="Next slide" title="Next slide" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenterSlider;
