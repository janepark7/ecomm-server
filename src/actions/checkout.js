import API from "util/api";

export function submitOrder(order) {

	return (dispatch, getStore) => {
		const { cart } = getStore().cart;
		const itemIds = cart.map(function(item){
			return item.id;
		});
		dispatch({
			type: "SUBMIT_ORDER_START",
		});
		console.log(itemIds);
		API.post("/orders", {
			args: {
				name: order.name,
				address: order.address,
				city: order.city,
				state: order.state,
				zipcode: order.zipcode,
				products: itemIds,
			},
		})
			.then((res) => {
				if (res.data) {
					dispatch({
						type: "SUBMIT_ORDER_SUCCESS",
						data: res.data,
						order,
					});
				}
				else {
					dispatch({
						type: "SUBMIT_ORDER_FAILURE",
						error: res.error.message,
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: "SUBMIT_ORDER_FAILURE",
					error: "Something went wrong, refresh the page!",
				});
			});
	};
}
