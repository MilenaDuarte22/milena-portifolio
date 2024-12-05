import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import marketsite from "../assets/marketsite.png";
import design from "../assets/design.png";
import web from "../assets/web.png";
import keyboard from "../assets/keyboard.png";
import "../css/Header.scss";

const Header = () => {
  const imgArray = [marketsite, design, web, keyboard];
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [imgArray.length]);

  return (
    <section className="header__section" id="home">
      <div className="header__container">
        <div className="header__text">
          <div className="header__hello">Hello, </div>
          <div className="header__sentence">
            <Typewriter
              options={{
                strings: [
                  "I am Milena :)",
                  "I am a Web Designer",
                  "I am a Web Developer",
                  "I am a FullStack Developer",
                  "Welcome to my website!",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                pauseFor: 2000,
              }}
            />
          </div>
        </div>
        <div className="header__bubble"></div>
        <div className="header__img">
          <img
            src={imgArray[imgIndex]}
            alt="Rotating images"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="topBlur"></div>
        <div className="bottomBlur"></div>
      </div>
      <div className="header__icon">
        <p className="header__descript">Scroll down</p>
        <i className="uil uil-arrow-down"></i>
      </div>
    </section>
  );
};

export default Header;
