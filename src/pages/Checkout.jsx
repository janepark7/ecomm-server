import React, { Component } from "react";
import CheckoutForm from "../components/CheckoutForm";

import { connect } from "redux-thunk";

class Checkout extends Component {
	render() {
		return (
			<CheckoutForm/>
		);
	}
}


export default Checkout;
