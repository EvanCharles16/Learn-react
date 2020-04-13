import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="contact" id="contact">

        <div className="contactTitle">
            <h1>Contact Me</h1>
        </div>

        <div className="social-media-icon">
          <a href="#"><i className="fa fa-facebook fa-4x"></i></a>
          <a href="#"><i className="fa fa-whatsapp fa-4x"></i></a>
          <a href="#"><i className="fa fa-twitter fa-4x"></i></a>
          <a href="#"><i className="fa fa-youtube fa-4x"></i></a>
        </div>

        <div class="footer">
            <a href="#">&copy; Designed By Me 2020</a>
        </div>
      </div>
    );
  }
}

export default Footer;
