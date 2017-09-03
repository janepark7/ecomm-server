import { combineReducers } from "redux";
import item from "./item";
import cart from "./cart";
import checkout from "./checkout";

export default combineReducers({ item, cart, checkout });
