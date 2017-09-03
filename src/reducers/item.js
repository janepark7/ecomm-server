const INITIAL_STATE = {
	items: [],
	activeItem: null,
	error: null,
};

export default function(state = INITIAL_STATE, action) {

	switch (action.type) {

	// Get All Items
	case "ITEMS_GET_ALL":
		return {
			...state,
			items: action.items,
		};

	// Get One Product
	case "ITEM_GET_ONE":
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
