import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function Navigation({ routes, changeRoute }) {
	var internal_links = routes.map(
		({ title }, idx) => (
			<button
				key={'anchor' + title}
				className="nav-link"
				onClick={() => changeRoute(idx)}>
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
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Navigation Menu">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
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
