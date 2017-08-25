import "./Item.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOne } from "actions/items";
import { addCart } from "actions/cart";

class Item extends Component {
	constructor(props) {
		super(props);
		console.log(props.match.params.itemId);
		const item = PRODUCTS.find(watch => watch.id === this.props.match.params.itemId);
		this.state = {item};
	}
	componentDidMount() {
		this.props.getOne(this.props.itemId);
	}

	_handleClick = () => {
		alert("LETS ADD SOME WATCHES");
		this.props.addCart(this.state.item);
		// console.log(this._handleClick.bind(this));
	}

	render() {
		console.log(this.props.params);
		const { isLoading, error } = this.props;
		return (
			<div className="watches">
				<h1 className="name">{this.state.item.name}</h1>
				<div className="item-image">
					<img className="item-num1" src={this.state.item.images[1].small} />
					<img className="item-num2" src={this.state.item.images[0].small} />
					<img className="item-num3" src={this.state.item.images[2].small} />
				</div>
				<h2 className="description">{this.state.item.description}</h2>
				<div className="cost">$ {this.state.item.price}</div>
				<button className="price"
					value={this.state.item.price}
					onClick={this._handleClick.bind(this)}>BUY ME</button>

			</div>
		);
	}
}

Item.propTypes = {

};

function mapStateToProps(state, props) {
    return {
        item: state.item.items,
        itemIds: state.item.itemIds,
    };
}



export default connect(mapStateToProps, { getOne, addCart })(Item);
