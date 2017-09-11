import "./Navigation.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navigation extends Component {
	render() {
		const { cartTotal } = this.props;
		const links = [{
			to: "/",
			text: "Home",
		}, {
			to: "/List",
			text: "List",
		}, {
			to: "/Cart",
			text: "Cart",
		}];

		return (
			<nav className="Nav">
				{links.map((link) => {
					return (
						<Link
							key={link.to}
							to={link.to}
							className="Nav-link"
							activeClassName="is-active"
							exact
						>
							{link.text}
						</Link>
					);
				})}
				<span className = "cartTotal">{ cartTotal }</span>
			</nav>
		);
	}
}
function mapStateToProps(state, props) {
	return {
		cartTotal: state.cart.cartTotal,
	};
}
export default connect(mapStateToProps) (Navigation);
