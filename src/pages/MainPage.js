import React from "react";
import MainSlide from "../components/MainSlide";
import MainHero from "../components/MainHero";
import Footer from "../components/Footer";
import { useDataItems } from "../context/dataItems-context";
import "bootstrap/dist/css/bootstrap.min.css";

const MainPage = () => {
  const { photos, heroPhotos, smallPhotos } = useDataItems();
  return (
    <div className="page">
      <MainHero data={heroPhotos} />
      <MainSlide name="portrait" data={smallPhotos.smallPortrait} />
      <MainSlide name="conceptual" data={smallPhotos.smallConceptual} />
      <MainSlide name="still_life" data={smallPhotos.smallStill_life} />
      <MainSlide name="candid" data={smallPhotos.smallCandid} />
      <MainSlide name="urban" data={smallPhotos.smallUrban} />
      <MainSlide name="video" data={photos.video} />
      <Footer />
    </div>
  );
};

export default MainPage;
