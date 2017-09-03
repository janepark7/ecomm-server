import "./checkoutForm.scss";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { submitOrder } from "actions/checkout";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class CheckoutForm extends Component {
	constructor(props) {
		super(props); {
			this.state = {
				Name: "",
				Address: "",
				City: "",
				State: "",
				Zipcode: "",
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
		const { cart, cartTotal } = this.props;
		this.props.submitOrder(this.state);
	}

	render() {
		const { Name, Address, ZipCode, City, State, value  } = this.state;
		const { error, orderSuccess, orderFail, cart, cartTotal } = this.props;

		let message;

		if (orderSuccess) {
			message = (<div className="OrderSuccess">
				<Link to= "/list">
				 <p>
					Your Order Was Successfully Placed! Continue Shopping.
					</p>
				</Link>
			</div>);
		}

		if (orderFail) {
			message = <div className="OrderFail"> { error } </div>;
		}


    	return (
    	<div className="checkout-form">
				<div className="cust-form">
					<h1>Checkout Time</h1>
					<form onSubmit={this._handleSubmit}>
						<div className="cust-name">
							<label className="name">Name:</label>
							<input type="text" name="Name" onChange={this._handleChange} required/>
						</div>
						<div className="cust-address">
							<label className="address">Address:</label>
							<input type="text" name="Address" onChange={this._handleChange} required/>
						</div>
						<div className="cust-city">
							<label className="city">City:</label>
							<input type="text" name="City" onChange={this._handleChange} required/>
						</div>
						<div className="cust-state">
							<label className="state">State:</label>
							<input type="text" name="State" onChange={this._handleChange} required/>
						</div>
						<div className="cust-zip">
							<label className="zipcode">Zipcode:</label>
							<input type="text" name="Zipcode" onChange={this._handleChange} required/>
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

CheckoutForm.propTypes = {
	error: PropTypes.string,
	orderSuccess: PropTypes.bool,
	orderFailure: PropTypes.bool,
	cart: PropTypes.arrayOf(PropTypes.shape({
		product: PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			category: PropTypes.string,
			description: PropTypes.string,
			rating: PropTypes.number,
			price: PropTypes.string,
		}),
	})),
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
	cartTotal: PropTypes.number,
};

function mapStateToProps(state, props) {
	return {
		error: state.checkout.error,
		orderSuccess: state.checkout.orderSuccess,
		orderFail: state.checkout.orderFail,
		cart: state.cart.cart,
		cartTotal: state.cart.cartTotal,
	};
}


export default connect(mapStateToProps, { submitOrder }) (CheckoutForm);
