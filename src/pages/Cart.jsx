import "./Cart.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import cart from "reducers/cart.js";

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: {},
		};
	}

	addCart(){
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

				<Link to="/Checkout">
					<button className="checkout">PROCEED TO CHECKOUT</button>
				</Link>
			</div>
		);
	}
}

Cart.propTypes = {

};

function mapStateToProps(state, props) {
    return {
        cart: state.cart.cart,
        cartIds: state.cart.cartId,
    };
}

export default connect(mapStateToProps, {  })(Cart);
