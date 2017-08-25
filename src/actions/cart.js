
export function addCart(item, cartTotal) {
  return (dispatch) => {

		if (item) {
			console.log(item);
			dispatch({
				type: "ADD_TO_CART",
				item,

				type: "TOTAL_CART",
				cartTotal,
			});
		}
		else {
			dispatch({
				type: "NOT_AN_ITEM",
				error: "Cannot add to cart",
			});
		}
	};
}
