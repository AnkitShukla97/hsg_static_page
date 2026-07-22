import AboutImg from "../../assets/aboutImg.jpg";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
import Icon4 from "../../assets/icon4.png";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about_main">
          <div className="about_sec_1">
            <h2>
              Sed ut unde <span>perspiciatis</span> omnis iste natus{" "}
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <button>Read More</button>
          </div>
          <div className="about_sec_2">
            <img
              src={AboutImg}
              alt="About Image"
              title="About Image"
              width="100%"
              height="100%"
            />
          </div>
          <div className="about_sec_3">
            <ul>
              <li>
                <img
                  src={Icon1}
                  alt="Icon"
                  title="Icon"
                  width="100%"
                  height="100%"
                />
                <h3>
                  20<small>%</small>
                </h3>
                <p>Lorem Ipsum</p>
              </li>
              <li>
                <img
                  src={Icon2}
                  alt="Icon"
                  title="Icon"
                  width="100%"
                  height="100%"
                />
                <h3>
                  1.5<small>M</small>
                </h3>
                <p>Lorem Ipsum</p>
              </li>
              <li>
                <img
                  src={Icon3}
                  alt="Icon"
                  title="Icon"
                  width="100%"
                  height="100%"
                />
                <h3>
                  15<small>+</small>
                </h3>
                <p>simply dummy text</p>
              </li>
              <li>
                <img
                  src={Icon4}
                  alt="Icon"
                  title="Icon"
                  width="100%"
                  height="100%"
                />
                <h3>
                  50<small>+</small>
                </h3>
                <p>simply dummy text</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
