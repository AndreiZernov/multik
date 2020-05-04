import React, { useRef, useEffect } from "react";
import { TimelineMax, TimelineLite } from "gsap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import ScrollMagic from "scrollmagic";
import Carousel from "react-bootstrap/Carousel";
const controller = new ScrollMagic.Controller();

const heroLinks = ["portrait", "conceptual", "still_life", "candid", "urban"];

const MainHero = ({ data }) => {
  const history = useHistory();
  const hero = useRef(null);

  const refreshPage = () => history.push("/");

  useEffect(() => {
    window.addEventListener("resize", refreshPage);
    return () => window.removeEventListener("resize", refreshPage);
  });

  useEffect(() => {
    new TimelineLite({ delay: 1 }).to("#title-bg", 2.5, { scaleX: 0 });
    new TimelineMax()
      .fromTo(
        ".hero-1, .hero-2, .hero-3, .hero-4, .hero-5",
        0.5,
        { opacity: 0, scale: 0.8 },
        { opacity: 0 }
      )
      .to(".hero-1, .hero-2, .hero-3, .hero-4, .hero-5", 0.5, {
        opacity: 1,
        scale: 1,
      });

    if (window.innerWidth > 768) {
      let tlHero = new TimelineMax({ paused: true }).to(".navbar", 1, {
        scale: 1,
      });

      new ScrollMagic.Scene({
        duration: 1000,
        triggerHook: 0,
        offset: -10,
        triggerElement: hero.current,
      })
        .setTween(tlHero.restart())
        .setPin(hero.current)
        .addTo(controller);
    }
  }, [hero]);

  return (
    <div div="main-hero" ref={hero}>
      <div className="navbar">
        <Link id="title" to="/about">
          ARTEM ZUEV
        </Link>
        <div id="title-bg" />
        {heroLinks.map((link) => (
          <a key={link} className="navbar-btn" href={`#${link}`}>
            {link.replace("_", " ")}
          </a>
        ))}
      </div>
      {window.innerWidth > 768 ? (
        <div
          className="hero"
          style={{
            backgroundColor: window.innerWidth > 768 ? "black" : "inherit",
          }}
        >
          {heroLinks.map((link, i) => (
            <Link
              to={link}
              key={i}
              style={{ backgroundImage: `url(${data[i]})` }}
              className={`hero-${i + 1}`}
            >
              <h5>{link.toUpperCase().replace("_", " ")}</h5>
            </Link>
          ))}
        </div>
      ) : (
        <Carousel>
          {heroLinks.map((link, i) => (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={data[i]} alt={link} />
              <Carousel.Caption>
                <Link className="h2" to={link}>
                  {link.toUpperCase().replace("_", " ")}
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default MainHero;
