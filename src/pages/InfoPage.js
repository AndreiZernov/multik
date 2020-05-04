import React from "react";
import { useDataItems } from "../context/dataItems-context";
import { useHistory, useRouteMatch } from "react-router-dom";

const InfoPage = () => {
  const { info } = useDataItems();
  const history = useHistory();
  let { url } = useRouteMatch();
  let topic = url.split("/")[2].split("-")[0].toUpperCase().replace("_", " ");

  let data = info.filter((item) => item.title.toUpperCase() === topic)[0];
  return (
    <div className="info">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <img
        className="btn-back"
        src={require("../assets/photos.png")}
        onClick={() => history.goBack()}
        alt="Go back"
      />
    </div>
  );
};

export default InfoPage;
