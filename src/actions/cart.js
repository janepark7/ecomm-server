export function addCart(item) {
  return (dispatch) => {
    if (item) {
      dispatch ({
        type: "ADD_ITEM",
        item,
        itemId: item.id,
    });
  }
  else {
    dispatch({
      type: "FAIL_ADD_ITEM",
      error: "CAN NOT ADD TO CART!",
      });
    }
  };
}
