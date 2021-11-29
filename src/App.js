import React, { Component } from 'react';
import Navigation from './pageBlocks/Navigation.jsx';
import MainContent from './pageBlocks/MainContent.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const pages = [
	{
		title: 'Home',
		id: 'home'
	},
	{
		title: 'About',
		id: 'about'
	},
	{
		title: 'News',
		id: 'news'
	},
	{
		title: 'Catalogue',
		id: 'catalog'
	},
	{
		title: 'Contact',
		id: 'contact'
	},
].map(page => {
	page['content'] = require('./pageBlocks/pages/' + page.id + '.jsx').default;
	return page;
});

const routes = pages.map(
	({ title }) => ({ title: title })
)

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contentKey: 1
		}
	}
	UpdateContent(currentContentKey) {
		this.setState({
			contentKey: currentContentKey
		})
	}
	render() {
		let content = pages[this.state.contentKey].content;
		return (
			<React.Fragment>
				<Navigation routes={routes} changeRoute={this.UpdateContent.bind(this)} />
				<MainContent content={content} />
			</React.Fragment>
		)
	}
}
