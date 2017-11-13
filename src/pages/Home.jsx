import "./Home.scss";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PRODUCTS from "json/products.json";

class Home extends Component {
	render() {
		return (
			<div className="watch-body">
					<h1>WATCH THIS</h1>

					<div className="intro">
						Welcome to <b>WATCH THIS</b>. This site will fulfill all of your stylish watch needs!
						A wide range from mens, womens, and of course we didn't forget the kids. Now it's time
						to get shopping needs done!
					</div>
					
						<div className="watch-gallery" id="type">
						{PRODUCTS.map((item, index) => {
							return (<img className="Watch-img"
								src={item.images[0].medium}/>
							);
						})}
			 	</div>

			</div>
		);
	}
};

export default Home;
