import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
	CollapseNavbar() {
		this.setState({
			navbar_is_collapsed: false
		});
	}
	render() {
		var internal_links = this.props.routes.map(
			({ title, id }, idx) => (
				<Link
					key={'anchor' + title}
					className="nav-link"
					to={id}>
					{title}
				</Link>
			));
		return (

			<nav className="navbar custom-expand navbar-light bg-light">
				<div className="container">
					<span className="navbar-brand">
						<img src="/favicon.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
						JITETB
					</span>
					<button className="navbar-toggler" type="button" onClick={() => this.toggleNavCollapse()}>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className={this.state.navbar_is_collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show"}>
						<nav className="navbar-nav nav-pills pt-3">
							{internal_links}
							<a className="nav-link"
								href="form.html">
								Get Price
							</a>
						</nav>
					</div>
				</div>
			</nav>

		)
	}
}
