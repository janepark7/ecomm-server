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
					{PRODUCTS.map((item, index) => {
						return (
							<li className="Watch-type">
								<Link key={item.id}
									to= {`/item/${item.id}`}>
										<li key={item.name}></li>
									<li>
												<img className="Watch-img"
													src={item.images[0].small}
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
