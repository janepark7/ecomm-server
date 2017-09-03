// import PRODUCTS from "json/products.json";
import API from "util/api";

export function getAll() {
  return (dispatch) => {

		dispatch({ type: "ITEMS_LOADING" });

		API.get("/products").then((res) => {
				if (res.data) {
          console.log("actions/items; getAll()  res.data: ", res.data.products);
					dispatch({
						type: "ITEMS_GET_ALL",
						items: res.data.products,
					});
				}
				else {
					dispatch({
						type: "ITEMS_ERROR",
						error: "Unable to find that item",
					});
				}
			}).catch(() => {
				dispatch({
					type: "ITEMS_ERROR",
					error: "Something went wrong, refresh page!",
				});
			});
	};
}

export function getOne(itemId) {
	return (dispatch) => {
		dispatch({ type: "ITEMS_LOADING"});

		API.get(`/products/${itemId}`, {
			args: {
				item: itemId,
			},
		}).then((res) => {
			if (res.data) {
				console.log("actions/item; getOne(),  res.data.product: ",res.data.product);
				dispatch({
					type: "ITEM_GET_ONE",
					activeItem: res.data.product,
				});
			} else {
				console.log(res.error);
				dispatch({
					type: "ITEM_ERROR",
					error: res.error,
				});
			}
		}).catch((error) => {
			dispatch({
				type: "ITEMS_ERROR",
				error: "Something went wrong, please refresh page",
			});
		});
	};
}
