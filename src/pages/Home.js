import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Content from "../components/Content/Content";

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
