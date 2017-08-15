import "./Item.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Item extends Component {
	constructor(props) {
		super(props);
	}

	_handleClick = (itemId) => {
		this.props.addCart(this.props.item.id);
	}

	render() {
		console.log(this.props.params);
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
				<div className="cost">$ {item.price}</div>
					<button className="price"
						value={item.price}
						onClick={this._handleClick}>BUY ME</button>
				</div>
		);
	}
}

export default Item;
