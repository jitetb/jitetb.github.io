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
];

const routes = pages.map(
	({ title }) => ({ title: title })
)

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contentKey: 0
		}
	}
	UpdateContent(currentContentKey) {
		this.setState({
			contentKey: currentContentKey
		})
	}
	
	render() {
		return (
			<React.Fragment>
				<Navigation routes={routes} changeRoute={this.UpdateContent.bind(this)} />
				<MainContent>
				  {pages[this.state.contentKey].id}
				</MainContent>
			</React.Fragment>
		)
	}
}
