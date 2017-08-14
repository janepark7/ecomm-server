import "./Cart.scss";
import React, { Component } from "react";

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: {},
			cart: [],
		};
	}

	addToCart(){
	 	const cart = [...this.state.cart];
		console.log(cart);
	}


	render() {
		return (
			<div>
				<h1>This is your Cart!</h1>
			</div>
		);
	}
}

export default Cart;
