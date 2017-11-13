import "./CheckoutForm.scss";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { submitOrder } from "actions/checkout";
import { Link } from "react-router-dom";

class CheckoutForm extends Component {
	constructor(props) {
		super(props); {
			this.state = {
				name: "",
				address: "",
				city: "",
				state: "",
				zipcode: 0,
				error: null,
			};
		}
	}

	_handleChange = (ev) => {
		this.setState({
			[ev.target.name]: [ev.target.value].toString() });
	}

	_handleSubmit = (ev) => {
		ev.preventDefault();
		const { cart, allCartItems } = this.props;
		this.props.submitOrder(this.state);
	}

	render() {
		const { name, address, zipcode, city, state, value  } = this.state;
		const { error, orderSuccess, orderFail, cart, cartTotal } = this.props;

		let message;

		if (orderSuccess) {
			message = (<div className="OrderSuccess">
				<Link to= "/Success">
				 <p>
					Yay! Your order was SUCCESSFULLY placed!
					</p>
				</Link>
			</div>);
		}

		if (orderFail) {
			message = <div className="OrderFail"> { error } </div>;
		}

    	return (
    	<div className="checkout-form">
					<h1>Checkout Time</h1>
						<div className="cust-form">
					<form onSubmit={this._handleSubmit}>
						<div className="cust-name">
							<label className="name">Full Name: </label>
							<input type="text" name="name" onChange={this._handleChange} required/>
						</div>
						<div className="cust-address">
							<label className="address">Address: </label>
							<input type="text" name="address" onChange={this._handleChange} required/>
						</div>
						<div className="cust-city">
							<label className="city">City: </label>
							<input type="text" name="city" onChange={this._handleChange} required/>
						</div>
						<div className="cust-state">
							<label className="state">State: </label>
							<input type="text" name="state" onChange={this._handleChange} required/>
						</div>
						<div className="cust-zip">
							<label className="zipcode">Zipcode: </label>
							<input type="text" name="zipcode" onChange={this._handleChange} required/>
						</div>
						<div className="confirm-order">
						<button type="submit" onSubmit={this._handleSubmit}>
							CONFIRM YOUR ORDER</button>
						</div>
						<div className="checkout-message">
					  { message }
				 		</div>
					</form>
				</div>
			</div>
		);
	}
}


function mapStateToProps(state, props) {
	return {
		error: state.checkout.error,
		orderSuccess: state.checkout.orderSuccess,
		orderFail: state.checkout.orderFail,
		cart: state.cart.cart,
		allCartItems: state.cart.allCartItems,
	};
}


export default connect(mapStateToProps, { submitOrder }) (CheckoutForm);
