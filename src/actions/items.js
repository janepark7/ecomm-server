// import PRODUCTS from "json/products.json";
import API from "util/api";

export function getAll() {

  return (dispatch) => {

		dispatch({ type: "LOADING_ITEMS" });

		API.get("/items").then((res) => {
		}).then((res) =>{
				if (res.data) {
					dispatch({
						type: "ITEMS_GET_ALL",
						items: res.data.items,
					});
				}
				else {
					dispatch({
						type: "ITEMS_LOAD_FAILURE",
						error: "Unable to find that item",
					});
				}
			}).catch(() => {
				dispatch({
					type: "ITEMS_LOAD_FAILURE",
					error: "Something went wrong, refresh page!",
				});
			});
	};
}

export function getOne(itemId) {
	return (dispatch) => {
		dispatch({ type: "ITEMS_LOADING"});

		API.get(`/items/${itemId}`, {
			args: {
				item: itemId,
			},
		}).then((res) => {
			if (res.data) {
				console.log("actions/item; getOne(),  res.data.item: ",res.data.item);
				dispatch({
					type: "ITEM_GET_ONE",
					activeItem: res.data.item,
				});
			} else {
				console.log(res.error);
				dispatch({
					type: "ITEM_FAILURE",
					error: res.error,
				});
			}
		}).catch((error) => {
			dispatch({
				type: "ITEMS_FAILURE",
				error: "Something went wrong, please refresh page",
			});
		});
	};
}
