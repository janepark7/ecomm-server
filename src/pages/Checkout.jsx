import "./Checkout.scss";
import React, { Component } from "react";

class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Name: "",
			Address: "",
			City: "",
			State: "",
			Zipcode: "",
			isValid: false,
		};
	}
	render() {
		const { cartTotal } = this.props;
		return (
			<div className="cust-form">
				<h1>Checkout Time</h1>
				<form action="/Success" method="post">
					<p>
						<label className="cust-name">
						Name:
							<input type="text" name="name" required/>
						</label>
					</p>
					<p>
						<label className="cust-address">
						Address:
							<input type="text" name="name" required/>
						</label>
					</p>
					<p>
						<label className="cust-city">
						City:
							<input type="text" name="name" required/>
						</label>
					</p>
					<p>
						<label className="cust-state">
						State:
							<input type="text" name="name" required/>
						</label>
					</p>
					<p>
						<label className="cust-zip">
						Zipcode:
							<input type="text" name="name" required/>
						</label>
					</p>
				</form>
				<p>
					<button type="submit" value="Submit">CONFIRM</button>
				</p>
			</div>
		);
	}
}

export default Checkout;
