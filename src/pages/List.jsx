import "./List.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class List extends Component {

	render() {
		return (
			<div className="Items">
				<h1>Watch This</h1>
				<ul className="Item-List">
					{PRODUCTS.map((product, index) =>{
						return (
							<li className="Watch-type">
								<Link to= {`/item/${index}`}>
									<li key={product.name}></li>
									<li><img className="Watch-img"
													src={product.images[0].small}
												/>
									</li>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
export default List;
