import "./Item.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOne } from "actions/items";
import { addCart } from "actions/cart";

class Item extends Component {
	// constructor(props) {
	// 	super(props);
	// 	console.log(props.match.params.itemId);
	// 	const item = item.find(product => product.id === this.props.match.params.itemId);
	// 	this.state = {item};
	// 	console.log(item, "LLLLLLLLLLL");
	// }
	componentDidMount() {
		this.props.getOne(this.props.itemId);
	}

	_handleClick = (item) => {
		this.props.addCart(this.props.item);
		// console.log(this._handleClick.bind(this));
	}

	render() {
		// console.log(this.props.params);
		const { item, cart, getOne } = this.props;
		if (!item) {
			 return null;
		 }
		 else {
		// console.log(PRODUCTS[this.state.itemId].name);

		 return (
			 <div className="item">
				 {/* <h1>{this.state.itemId}</h1> */}
				 <h1 className = "watch-name">{item.name}</h1>
				 	<div className = "item-image">
				 		{item.images.map((item) => {
				 			return ([
					 			<img src = {item.small} className="watch-img"/>,
					 ]);
			  })}
					</div>
					<div className = "text">
				 		<p className = "description">{item.description}</p>
				 			<h1>{item.price}</h1>
							<button className="price"
										value={item.price}
										onClick={this._handleClick}>BUY ME</button>
			 		</div>
			 		</div>
			);
		}
	}
}

function mapStateToProps(state, props) {
	const { activeItem, error } = state.item;
	return {
		itemId: props.match.params.itemId,
		item: activeItem,
		error,
		cart: state.cart,
		cartTotal: state.cart,
	};
}

export default connect(mapStateToProps, { getOne, addCart })(Item);
		// return (
		// 	<div className="watches">
		// 		<h1 className="name">{this.state.item.name}</h1>
		// 		<div className="item-image">
		// 			<img className="item-num1" src={item.image.small} />
		// 			<img className="item-num2" src={item.image.small} />
		// 			<img className="item-num3" src={item.image.small} />
		// 		</div>
		// 		<h2 className="description">{this.state.item.description}</h2>
		// 		<div className="cost">$ {this.state.item.price}</div>
		// 		<button className="price"
		// 			value={this.state.item.price}
		// 			onClick={this._handleClick.bind(this)}>BUY ME</button>
		//
		// 	</div>
		// );
// 	}
// }

// Item.propTypes = {
//
// };
//
// function mapStateToProps(state, props) {
//     return {
//         item: state.item.items,
//         itemIds: state.item.itemIds,
//     };
// }



// export default connect(mapStateToProps, { getOne, addCart })(Item);
