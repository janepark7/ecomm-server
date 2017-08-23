import PRODUCTS from "json/products.json";
import API from "util/api";

export function getAll() {
  	return {
    	type: "GET_ALL_ITEMS",
    	items: PRODUCTS,
	};
}
export function getOne(itemsId) {
	const items = PRODUCTS;
  	return (dispatch) => {
      	const foundItem = items.find((item) => item.id === itemsId);
      	return dispatch({
          	type: "GET_ONE_ITEM",
          	items: foundItem,
      	});
  	};
}
