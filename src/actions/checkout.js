import API from "util/api";

export function submit(user, cart) {

	return (dispatch) => {
		dispatch({
			type: "PENDING_ORDER",
		});
		console.log("actions/checkout; submit(user, cart)", user, cart);
		API.post("/orders", {
			type: {

			},
		});
	};
}
export function success() {

	return {
		type: "",
	};
}
export function validate() {

	return {
		type: "",

	};
}
