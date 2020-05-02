import React from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const Logos = ({ name }) => (
  <div className="logos">
    <div className="logos-wrap">
      <div>
        <img
          onClick={() =>
            window.open("https://urlgeni.us/instagram/multik", "_blank")
          }
          src={require("../assets/instagram.png")}
          alt="insagram"
        />
        {name === "about" && <span> www.instagram.com/_mltk_/</span>}
      </div>
      <div>
        <img
          onClick={() => window.open("mailto:zuevmultik@me.com", "_blank")}
          src={require("../assets/mail.png")}
          alt="mail"
        />
        {name === "about" && <span> zuevmultik@me.com</span>}
      </div>
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Popover>
            <Popover.Content>
              <img
                style={{ width: "15vh" }}
                src={require("../assets/qrcode.jpg")}
                alt="logo"
              />
            </Popover.Content>
          </Popover>
        }
      >
        <div>
          <img src={require("../assets/wechat.png")} alt="wechat" />
          {name === "about" && <span> zuev-multik</span>}
        </div>
      </OverlayTrigger>{" "}
      <div>
        <img
          onClick={() => window.open("https://is.gd/Sebcnp", "_blank")}
          src={require("../assets/whatsapp.png")}
          alt="whatsapp"
        />
        {name === "about" && <span> What's up: +8615618757295</span>}
      </div>
    </div>
  </div>
);

export default Logos;
