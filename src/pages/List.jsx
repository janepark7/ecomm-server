import "./List.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAll } from "actions/items";
import { connect } from "react-redux";

class List extends Component {
	componentDidMount() {
		this.props.getAll();
	}

	render() {
		const { items } = this.props;
		console.log(items);
		return (
			<div className="Items">
				<h1>Watch This</h1>
				<div className="Item-List">
					{items.map((item, index) => {
						return (
							<p>
								<div className="Watch-type">
									<Link key={item.id}
										to= {`/item/${item.id}`}>
										<h3>{item.name}</h3>
										<img className="Watch-img"
											src={item.image.small}/>
									</Link>
								</div>
							</p>
						);
					})}
				</div>
			</div>
		);
	}
}
function mapStateToProps(state, props) {
	return {
		items: state.item.items,
	};
}
export default connect(mapStateToProps, { getAll }) (List);
