import React from 'react';

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
		<nav className="navbar navbar-light bg-light justify-content-end">
			<span className="mb-auto">
				<img src="favicon.svg" alt="jitetb logo" />
				<p className="h1 text-center text-uppercase">jitetb</p>
			</span>
			<nav className="nav nav-pills">
				{internal_links.slice(0, 3)}
			</nav>
			<nav className="nav nav-pills">
				{internal_links.slice(3)}
				<a className="nav-link"
					href="https://forms.gle/Hvs7o597eUcurnhq8">
					Get Price
			</a>
			</nav>
		</nav>
	)
}
