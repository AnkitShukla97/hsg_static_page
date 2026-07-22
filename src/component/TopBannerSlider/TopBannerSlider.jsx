import { useState } from "react";
import TopBanner from "../../assets/sec1_banner.jpg";
import "./TopBannerSlider.css";

// top banner item array
const slides = [
  {
    id: 1,
    title: (
      <>
        LOREM <span>IPSUM TITLE</span>
      </>
    ),
    button: "Explore",
  },
  {
    id: 2,
    title: (
      <>
        LOREM 2<span>IPSUM TITLE 2</span>
      </>
    ),
    button: "Shop",
  },
];

const TopBannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // banner background image - will also add on item array for different banner on slide
  const bannerStyle = {
    backgroundImage: `url(${TopBanner})`,
  };

  return (
    <div className="top_Section">
      <div className="banner_slider_main">
        <div
          className="banner_slider_div"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="banner_slider" style={bannerStyle}>
              <div className="container">
                <div className="banner_text_content">
                  <h2>{slide.title}</h2>
                  <button>{slide.button}</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider_controls">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`slider_control${index === activeIndex ? " active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBannerSlider;
