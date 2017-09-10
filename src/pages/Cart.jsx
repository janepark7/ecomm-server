import "./Cart.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Cart extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		cartTotal: 0,
	// 		showCheckout: false,
	// 		item: {},
	// 	};
	// }
	//
	// addCart(){
	//  	const cart = [...this.state.cart];
	// 	console.log(cart);
	// }

	render() {
		const { cart, addCart } = this.props;

		const cartTotal = cart.reduce(function(prev, item){
			return prev + parseFloat(item.price);
		},0);

		if (cartTotal > 0) {
			return(
				<div className="cart">
					{cart.map((item)=> {
						return (
							<div className="cart-item">
								<h1 className="cart-item-name">{item.name}</h1>
								<img src={item.images[0].small} className="cart-item-image" />
								<h2 className="cart-item-price">${item.price}</h2>
							</div>
						);
					})}
					<div className="cart-info">
						<p className="cart-total-item">Total Items: {addCart}</p>
						<p className="cart-total-price">Total Price: ${cartTotal}</p>
					</div>
					<Link to="/Checkout">
						<button className="checkout-button">Check Items Out</button>
					</Link>
					<p>
						<Link to="/Items">
							<button className="add-items">Add More Items</button>
						</Link>
					</p>
				</div>
			);
		} else {
				return(
					<div className="empty-cart">
						<p className="empty-cart">Your Cart Is Currently Empty!</p>
							<Link to="/List">
								<p className="shopping-link">Let's Continue Shopping....</p>
							</Link>
					</div>
			);
		}
	}
}


// 		let sum = 0;
// 		if (cartTotal > 0) {
// 			return (
// 				<div className="cart-items">
// 					<h1>Shopping Cart</h1>
// 					{cart.forEach((item) => {
// 						return sum += parseInt(item.price);
// 						return (
// 							<ul>
// 								<img className="cart-img" src={item.images[0].small}/>
// 								{item.name}
// 								{item.price}
// 							</ul>
// 						);
// 					})}
// 					<p className="Cart-Total-Items">Quantity: {cartTotal}</p>
// 					<p className="Cart-Total-Cost">total: ${sum}</p>
//
// 					<Link to="/Checkout">
// 						<button className="checkout">PROCEED TO CHECKOUT</button>
// 					</Link>
// 				</div>
// 			);
// 		} else {
// 			return(
// 				<div className="cart-empty">
// 					<p className="empty-message">Cart is empty!</p>
// 					<Link to="/List">
// 						<p className="link-shopping">Shop For Watches!</p>
// 					</Link>
// 				</div>
// 			);
// 		}
// 	}
// }

function mapStateToProps(state, props) {
	return {
		cart: state.cart.cart,
		cartIds: state.cart.cartId,
	};
}

export default connect(mapStateToProps)(Cart);
