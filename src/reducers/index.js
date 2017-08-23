import { combineReducers } from "redux";
import item from "./item";
import list from "./list";
import cart from "./cart";
import checkout from "./checkout";

export default combineReducers({ item, list, cart, checkout });
