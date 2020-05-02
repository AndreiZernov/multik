import React from "react";
import Logos from "../components/Logos";

const Footer = () => {
  let data = new Date();
  return (
    <footer>
      <p>
        &copy; Copyright {data.getFullYear()}, Artem Zuev. All Rights Reserved
      </p>
      <Logos />
    </footer>
  );
};

export default Footer;
