import "./Cart.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cartTotal: 0,
			showCheckout: false,
			item: {},
		};
	}

	addCart(){
	 	const cart = [...this.state.cart];
		console.log(cart);
	}

	render() {
		const { cart, cartTotal } = this.props;
		let sum = 0;
		if (cartTotal > 0) {
			return (
				<div className="cart-items">
					<h1>Shopping Cart</h1>
					{cart.forEach((item) => {
						return sum += parseInt(item.price);
						return (
							<ul>
								<img className="cart-img" src={item.images[0].small}/>
								{item.name}
								{item.price}
							</ul>
						);
					})}
					<p className="Cart-Total-Items">Quantity: {cartTotal}</p>
					<p className="Cart-Total-Cost">total: ${sum}</p>

					<Link to="/Checkout">
						<button className="checkout">PROCEED TO CHECKOUT</button>
					</Link>
				</div>
			);
		} else {
			return(
				<div className="cart-empty">
					<p className="empty-message">Cart is empty!</p>
					<Link to="/List">
						<p className="link-shopping">Shop For Watches!</p>
					</Link>
				</div>
			);
		}
	}
}
	Cart.propTypes = {
	cartTotal: PropTypes.number,
	cart: PropTypes.arrayOf(PropTypes.shape({
		product: PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			description: PropTypes.string,
			price: PropTypes.string,

			images: PropTypes.arrayOf(PropTypes.shape({
				0: PropTypes.shape({
					original: PropTypes.string,
					small: PropTypes.string,
					medium: PropTypes.string,
					large: PropTypes.string,
				}),
				1: PropTypes.shape({
					original: PropTypes.string,
					small: PropTypes.string,
					medium: PropTypes.string,
					large: PropTypes.string,
				}),
				2: PropTypes.shape({
					original: PropTypes.string,
					small: PropTypes.string,
					medium: PropTypes.string,
					large: PropTypes.string,
				}),
			})),
		}),
	})),

};

function mapStateToProps(state, props) {
	return {
		cart: state.cart.cart,
		cartIds: state.cart.cartId,
	};
}

export default connect(mapStateToProps)(Cart);
