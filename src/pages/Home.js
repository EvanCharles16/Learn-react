import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Home;
