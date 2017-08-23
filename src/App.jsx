import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PRODUCTS from "json/products.json";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Navigation from "components/Navigation";
import reducers from "./reducers";
import Home from "pages/Home";
import List from "pages/List";
import Item from "pages/Item";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import Success from "pages/Success";
import FourOhFour from "pages/404";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
	// state = {
	// 	items: PRODUCTS,
	// 	cart: [],
	// 	cartTotal: 0,
	// 	error: null,
	// };
	//
	// _getItem = (itemId) => {
	// 	return this.state.items.find(item => {
	// 		return item.id === itemId;
	// 	});
	// }
	//
	// _addCart = (itemId) => {
	// 	const { items, cart } = this.state;
	// 	this.setState({
	// 		cart: [
	// 			...cart,
	// 			this._getItem(itemId),
	// 		],
	// 		cartTotal: cart.length + 1,
	// 	});
	// }

	render() {
		// const { items, cart, cartTotal } = this.state;
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div className="navbar">
						<Navigation/>
						<Switch>
							<Route exact path = "/" component={Home} />
							<Route exact path = "/List" component={List} />
							<Route exact path = "/Success" component={Success} />
							<Route exact path = "/Cart" component={Cart}/>
							<Route exact path = "/Checkout" component={Checkout} />
							<Route exact path = "/Success" component={Success}/>
							<Route exact path= "*" component={FourOhFour} />
						</Switch>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
