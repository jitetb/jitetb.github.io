import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Catalog from "./pages/catalog.jsx";
import Contact from "./pages/contact.jsx";
import News from "./pages/news.jsx";
const e = React.createElement;
const pages = [
  {
    "name" : "Home",
    "path" : "/"
  },
  {
    "name" : "About",
    "path" : "/about"
  },
  {
    "name" : "Catalogue",
    "path" : "/catalog"
  },
  {
    "name" : "News",
    "path" : "/news"
  },
  {
    "name" : "Contact",
    "path" : "/contact"
  }
];

/* "title": "Our Principals" */
let suppliers = [
	{
		"image" : "fujihd.png",
		"link" : "https://www.fujihd.com/",
		"title": "FujiHD",
		"catalog": "1cOJQPO-7G5xd_drjQrm--lWeYmdS6UuJ"
	},
	{
		"image" : "movilift.png",
		"link" : "https://www.movilift.com/",
		"title": "Movi Lift",
		"catalog": "1e8aAu1kpqoK3aLEGweEfXT4me-AFKfHt"
	},
	{
		"image" : "srl.png",
		"link" : "https://www.srlelevator.com/",
		"title": "SRL",
		"catalog": "133qlDgHkSi0ad6yyFktuzOT_KefcrLzn"
	},
	{
		"image" : "xiwei.png",
		"link" : "https://www.xiweielevator.com/",
		"title": "XIWEI",
		"catalog": "1i1qfJqBYbv63VhmQCOgwhxd02YUPv3wE"
	},
	{
		"image" : "hasasansor.png",
		"link" : "https://www.hasasansor.com.tr/",
		"title": "HAS Elevator",
		"catalog": "1r5EoDXaIxul-hqm1_wMyGKfIbHEgaGtL"
	}
];

/* title: "Our Clients" */
let customers = [
	{
		"image" : "world-bank.svg",
		"title" : "World Bank",
		"link" : "https://www.worldbank.org/en/country/bangladesh"
	},
	{
		"image" : "BGMEA.png",
		"title" : "BGMEA",
		"link" : "https://www.bgmea.com.bd/"
	},
	{
		"image" : "Bashundhara-city.png",
		"title" : "Bashundhara City",
		"link" : "http://www.bashundhara-city.com/"
	},
	{
		"image" : "DOHS.png",
		"title" : "DGDP.png",
		"link" : "https://dgdp.gov.bd/"
	},
	{
		"image" : "DOHS.png",
		"title" : "DOHS",
		"link" : "http://www.dohsbaridhara.com/"
	},
	{
		"image" : "uttara_11.png",
		"title" : "Uttara Sector 11 Kallyan Samity",
		"link" : "https://www.facebook.com/Uttara-11no-Sector-Kallyan-Samity-1590375364591003/"
	},
	{
		"image" : "uttara_14.png",
		"title" : "Uttara Sector 14",
		"link" : "https://www.facebook.com/groups/686404912058826/"
	}
];

const suppliers_image_repo = require.context("./resources/suppliers/", true);
const customers_image_repo = require.context("./resources/customers/", true);
function bind_image_resource(partner, image_repo){
	partner.image = image_repo(`./${partner.image}`).default;
	return partner;
}
suppliers = suppliers.map(
	partner => bind_image_resource(partner, suppliers_image_repo)
);
customers = customers.map(
	partner => bind_image_resource(partner, customers_image_repo)
);
function App(){
	/*
	return (<>
    	<Navigation pages={pages}/>
    	<Routes>
        	<Route path="/" element={<Home />} />
	        <Route path="/about" element={<About />} />
    	    <Route path="/catalog" element={<Catalog />} />
        	<Route path="/contact" element={<Contact />} />
	        <Route path="/news" element={<News />} />
    	</Routes>
    </>);
  */
	return e(React.Fragment, null,
		e(Navigation, { pages: pages }),
  		e(Routes, null,
  			e(Route, { path: "/", element: e(Home, 
	        	{ suppliers: suppliers, customers: customers })
    	  	}),
  			e(Route, { path: "/about", element: e(About, null) }),
	  		e(Route, { path: "/catalog", element: e(Catalog, 
    	    	{ suppliers: suppliers })
      		}),
	  		e(Route, { path: "/contact", element: e(Contact, null) }),
  			e(Route, { path: "/news", element: e(News, null) })
  		)
  	);
}
export default App;
