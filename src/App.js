import React from 'react';
import Navigation from './pageBlocks/Navigation.jsx';
import MainContent from './pageBlocks/MainContent.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
	let [Content, setContent] = React.useState(0);
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
		({title}) => ({title: title})
	)
	return (
	<React.Fragment>
		<Navigation routes={routes} UpdateContext={setContent}/>
		<MainContent content={pages[Content].content}/>
	</React.Fragment>
	)
}
