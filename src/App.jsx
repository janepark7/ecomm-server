import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import Navigation from "components/Navigation";
import reducers from "./reducers";
import Home from "pages/Home";
import List from "pages/List";
import Item from "pages/Item";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import Success from "pages/Success";
import FourOhFour from "pages/404";

const store = createStore(reducers, applyMiddleware(reduxThunk));

class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div className="navbar">
						<Navigation/>
						<Switch>
							<Route exact path = "/" component={Home} />
							<Route exact path = "/List" component={List}/>
							<Route exact path = "/item/:itemId" component={Item} />
							<Route exact path = "/Success" component={Success} />
							<Route exact path = "/Cart" component={Cart}/>
							<Route exact path = "/Checkout" component={Checkout} />
							<Route exact path= "*" component={FourOhFour} />
						</Switch>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
