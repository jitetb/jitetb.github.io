import React, { Component } from 'react';
//import 'bootstrap/dist/js/bootstrap.min.js';

export default class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navbar_is_collapsed: true
		}
	}
	toggleNavCollapse() {
		this.setState({
			navbar_is_collapsed: this.state.navbar_is_collapsed ? false : true
		});
	}
	render() {
		var internal_links = this.props.routes.map(
			({ title }, idx) => (
				<button
					key={'anchor' + title}
					className="nav-link"
					onClick={() => {
						this.props.changeRoute(idx);
						this.toggleNavCollapse();
						}
					}>
					{title}
				</button>
			));
		return (

			<nav className="navbar custom-expand navbar-light bg-light">
				<div className="container">
					<span className="navbar-brand">
						<img src="favicon.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
					JITETB
				</span>
					<button className="navbar-toggler" type="button" onClick={this.toggleNavCollapse.bind(this)}>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className={this.state.navbar_is_collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show"}>
						<nav className="navbar-nav nav-pills pt-3">
							{internal_links}
							<a className="nav-link"
								href="https://forms.gle/Hvs7o597eUcurnhq8">
								Get Price
						</a>
						</nav>
					</div>
				</div>
			</nav>

		)
	}
}
