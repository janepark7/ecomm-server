import "./Item.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOne } from "actions/items";
import { addCart } from "actions/cart";

class Item extends Component {

	componentDidMount() {
		this.props.getOne(this.props.itemId);
	}

	_handleClick = (item) => {
		this.props.addCart(this.props.item);
		// console.log(this._handleClick.bind(this));
	}

	render() {
		// console.log(this.props.params);
		const { item, cart, getOne } = this.props;
		if (!item) {
			 return null;
		 }
		 else {
		// console.log(PRODUCTS[this.state.itemId].name);

		 return (
			 <div className="item">
				 {/* <h1>{this.state.itemId}</h1> */}
				 <h1 className = "watch-name">{item.name}</h1>
				 	<div className = "item-image">
				 		{item.images.map((item) => {
				 			return ([
					 			<img src = {item.small} className="watch-img"/>,
					 ]);
			  })}
					</div>
					<div className = "text">
				 		<p className = "description">{item.description}</p>
				 			<h1>$ {item.price}</h1>
							<button className="price"
										value={item.price}
										onClick={this._handleClick}>BUY ME</button>
			 		</div>
			 		</div>
			);
		}
	}
}

function mapStateToProps(state, props) {
	const { activeItem, error } = state.item;
	return {
		itemId: props.match.params.itemId,
		item: activeItem,
		error,
		cart: state.cart,
		cartTotal: state.cart,
	};
}

export default connect(mapStateToProps, { getOne, addCart })(Item);
