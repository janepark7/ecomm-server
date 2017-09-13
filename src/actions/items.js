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

export function getOne(productId) {
	return (dispatch) => {
		dispatch({ type: "ITEM_LOADING" });
		API.get(`/products/${productId}`).then((res) => {
			if (res.data) {
				dispatch({
					type: "ITEM_GET_ONE",
				 	item: res.data.product,
					itemId: res.data.product.id,
				});
			}
			else {
				dispatch({
					type: "ITEM_ERROR",
					error: "Cannot find that product!",
				});
			}
		})

			.catch((err) => {
				dispatch({
					type: "ITEM_ERROR",
					error: "Something went wrong. Refresh",
				});
			});
	};
}
