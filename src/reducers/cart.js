import PRODUCTS from "json/products.json";

const INITIAL_STATE = {
	cart: [],
	cartTotal: 0,
};

function cartReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "ADD_CART":
		return {
			cart: [...state.cart,
							action.item,
						],
						cartTotal: state.cartTotal + 1,
		};
//	For Errors

	case "NOT_AN_ITEM":
		return {
		...state,
		error: action. error,
		};
	default:
		return state;
	}
}

export default cartReducer;
