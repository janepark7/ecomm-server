import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
						<NavLink
							key={link.to}
							to={link.to}
							className="Nav-link"
							activeClassName="is-active"
							exact
						>
							{link.text}
						</NavLink>
					);
				})}
				<span className = "cartTotal">{ cartTotal }</span>
			</nav>
		);
	}
}

export default Navigation;
