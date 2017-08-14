import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PRODUCTS from "json/products.json";
import Navigation from "components/Navigation";
import Home from "pages/Home";
import List from "pages/List";
import Item from "pages/Item";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import Success from "pages/Success";
import FourOhFour from "pages/404";

class App extends React.Component {
	state = {
		items: PRODUCTS,
		cart: [],
		cartTotal: 0,
	};

	_getItem = (itemId) => {
		return this.state.items.reduce((prev, item) => {
			return item.id === itemId ? item : prev;
		});
	}

	addToCart = (itemId) => {
		const { cart, items } = this.state;
		this.setState({
			cart: [
				...cart,
				this._getItem(itemId),
			],
			cartTotal: cart.length+1,
		});
	};


	render() {
		const { items, cart, cartTotal } = this.state;
		return (
			<BrowserRouter>

				<div className="navbar">

					<Navigation totalCart={this.state.cartTotal}/>
					<Switch>
						<Route exact path = "/" component={Home} />
						<Route exact path = "/List" render= {(props) => {
							return (
								<List items ={items}
								/>
							);
						}}/>

						<Route exact path = "/item/:itemId" render={(props) => {
							return (
								<Item
									item = {this._getItem(props.match.params.itemId)}
									addToCart = {this._addToCart}
								/>
							);
						}}/>

						<Route exact path = "/Cart"
							render = {(props) => {
								return (
									<Cart cart = {cart} />
								);
							}}
						/>

						<Route exact path = "/Checkout" component={Checkout} />
						<Route exact path = "/Success" component={Success} />
						<Route exact path= "*" component={FourOhFour} />
					</Switch>
				</div>
			</BrowserRouter>

		);
	}
}

export default App;
