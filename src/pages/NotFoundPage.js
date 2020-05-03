import React from "react";
import { Link } from "react-router-dom";
import { TimelineMax } from "gsap";

const NotFoundPage = () => {
  new TimelineMax().fromTo(
    ".info",
    1,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  );
  return (
    <div className="page info">
      <div style={{ textAlign: "center" }}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/"> Back to Main Page</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
