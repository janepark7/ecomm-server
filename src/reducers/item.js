const INITIAL_STATE = {
	activeItem: null,
	error: null,
};

export default function(state = INITIAL_STATE, action) {

	switch (action.type) {

	// Get All Items
	case "GET_ALL_ITEMS":
		return {
			...state,
			items: action.item,
		};

	// Get One Product
	case "GET_ONE_ITEM":
		return {
			...state,
			activeItem: action.item,
		};

		// Error cases
	case "ITEMS_ERROR":
		return {
			...state,
			isLoading: false,
			error: action.error,
		};

	default:
		return state;
	}
}
