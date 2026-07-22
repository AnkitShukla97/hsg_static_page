import About from "./component/About/About";
import CenterSlider from "./component/CenterSlider/CenterSlider";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import TopBannerSlider from "./component/TopBannerSlider/TopBannerSlider";

import Slider1 from "./assets/slider1.jpg";
import Slider2 from "./assets/slider2.jpg";
import Slider3 from "./assets/slider3.jpg";

// Center Slide Items
const imgSlider = [
  {
    sliderImg: Slider1,
    title: "Slider 1",
  },
  {
    sliderImg: Slider2,
    title: "Slider 2",
  },
  {
    sliderImg: Slider3,
    title: "Slider 3",
  },
  {
    sliderImg: Slider2,
    title: "Slider 4",
  },
];
function App() {
  return (
    <>
      <Header />
      <TopBannerSlider />
      <About />
      <CenterSlider items={imgSlider} />
      <Footer />
    </>
  );
}

export default App;
