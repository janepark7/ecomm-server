import "./List.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class List extends Component {

	render() {
		return (
			<div className="Items">
				<h1>Watch This</h1>
				<div className="Item-List">
					{PRODUCTS.map((item, index) => {
						return (
							<p>
								<div className="Watch-type">
									<Link key={item.id}
										to= {`/item/${item.id}`}>

										<h3>{item.name}</h3>
										<img className="Watch-img"
											src={item.images[0].small}/>
									</Link>
								</div>
							</p>
						);
					})}
				</div>
			</div>
		);
	}
}
export default List;
