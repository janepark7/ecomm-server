// import PRODUCTS from "json/products.json";

const INITIAL_STATE = {
	cart: [],
	cartTotal: 0,
};

export default function cartReducer(state = INITIAL_STATE, action) {
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
			error: action.error,
		};

	case "SUBMIT_ORDER_SUCCESS":
		return {
			...state,
			cart: [],
			cartTotal: 0,
		};

	default:
		return state;
	}
}
