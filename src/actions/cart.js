export function addCart(item) {
  return (dispatch) =>{

		if (item) {
			console.log(item);
			dispatch({
				type: "ADD_TO_CART",
				item,
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
