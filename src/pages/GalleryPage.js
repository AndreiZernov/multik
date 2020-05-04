import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useDataItems } from "../context/dataItems-context";
import { TimelineMax } from "gsap";
import { Link, Switch, Route } from "react-router-dom";
import GalleryCarouselPage from "./GalleryCarouselPage";

const GalleryPage = () => {
  const { smallPhotos, photos } = useDataItems();
  let { url, path } = useRouteMatch();
  let topic = url.substring(1);
  let data =
    smallPhotos[`small${topic.replace(topic[0], topic[0].toUpperCase())}`];
  let videoData = photos[topic];

  new TimelineMax()
    .fromTo(".animatedLinks", 0.5, { opacity: 0 }, { opacity: 0 })
    .to(".animatedLinks", 0.5, { opacity: 1 });

  return (
    <div className="page">
      <Switch>
        <Route exact path={path}>
          <div className="gallery">
            <Link to={`${url}/${topic}-info`} className="info-icon">
              <img src={require("../assets/info.png")} alt="info" />
            </Link>
            <p className="gallery-title">
              {topic.toUpperCase().replace("_", " ")}
            </p>
            {topic !== "video"
              ? data.map((image, i) => (
                  <Link
                    key={i}
                    to={`${url}/${topic}-carousel-${i}`}
                    className="animatedLinks"
                  >
                    <img src={image} alt="photos" />
                  </Link>
                ))
              : videoData.map((link, i) => (
                  <video
                    key={i}
                    muted
                    controls
                    width="auto"
                    height="250"
                    onMouseOver={(event) => event.target.play()}
                    onMouseOut={(event) => event.target.pause()}
                    className="animatedLinks"
                  >
                    <source src={link} type="video/mp4" />
                    <source src={link} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                ))}
          </div>
        </Route>
        <Route path={`${path}/:topicId`}>
          <GalleryCarouselPage data={photos[topic]} />
        </Route>
      </Switch>
    </div>
  );
};

export default GalleryPage;
