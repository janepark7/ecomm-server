import "./Item.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Item extends Component {
	constructor(props) {
		super(props);
	}

	_handleClick = (itemId) => {
		this.props.addToCart(this.props.item.id);
	}

	render() {
		const { item } = this.props;
		return (
			<div className="watches">
				<h1 className="name">{item.name}</h1>
				<div className="item-image">
					<img className="item-num1" src={item.images[1].small} />
					<img className="item-num2" src={item.images[0].small} />
					<img className="item-num3" src={item.images[2].small} />
				</div>
				<h2 className="description">{item.description}</h2>
				<div className="cost">
					<button className="price"
						value={item.id}
						onClick={this._handleClick}>BUY ME</button>
				</div>
			</div>
		);
	}
}

export default Item;
