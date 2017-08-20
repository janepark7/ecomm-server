import "./Cart.scss";
import React, { Component } from "react";

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: {},
		};
	}

	addToCart(){
	 	const cart = [...this.state.cart];
		console.log(cart);
	}


	render() {
		const { cart, cartTotal } = this.props;
		let sum = 0;
		return (
			<div className="cart-items">
				<h1>Shopping Cart</h1>
				{cart.map((item)=> {
					sum = sum + parseInt(item.price);
					return (
						<ul>
							<img className="cart-img" src={item.images[0].small}/>
							{item.name}
							{item.price}
						</ul>
					);
				})}
			<p>Quantity: {cartTotal}</p>
			<p>total: ${sum}</p>
			</div>
		);
	}
}

export default Cart;
