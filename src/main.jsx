import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom"
import App from './App.jsx'
import './index.css'

import Catalog from './pageBlocks/pages/catalog.jsx';
import Home from './pageBlocks/pages/home.jsx';
import About from './pageBlocks/pages/about.jsx';
import Contact from './pageBlocks/pages/contact.jsx';
import News from './pageBlocks/pages/news.jsx';

import Navigation from './pageBlocks/Navigation.jsx';

const routes = [
	{
		element: <Home />,
		path: 'home'
	},
	{
		element: <About />,
		path: 'about'
	},
	{
		element: <News />,
		path: 'news'
	},
	{
		element: <Catalog />,
		path: 'catalog'
	},
	{
		element: <Contact />,
		path: 'contact'
	},
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App routes={routes.map(({path}) => path)}/>,
    children: [
		{
			index: true,
			element: <Navigate to='home' />
		},
		...routes]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
