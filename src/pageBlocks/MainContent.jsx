import React,{createElement as e,useState,useEffect} from 'react';
import { Container } from 'react-bootstrap';
import profiler from "./dataFactory.js";

export default function MainContent(props) {
  var [Profiles, setProfiles] = useState([]);
  
  function getProfiles() {
    profiler().then(data => {
      return setProfiles({
        suppliers: data.suppliers,
        customers: data.customers
      });
    })
  }
  useEffect(()=>{getProfiles()},[])
  let content = require('./pages/' + props.children + '.jsx').default;
	return (
		<Container fluid className="mx-0 p-0">
		{ Profiles && !Array.isArray(Profiles) && props.children == 'catalog' && e(content, {
		  suppliers: Profiles.suppliers}) }
		{ Profiles && !Array.isArray(Profiles) && props.children == 'home' && e(content, {
		  suppliers: [...Profiles.suppliers,...Profiles.suppliers],
		  customers: [...Profiles.customers,...Profiles.customers] })}
		{ props.children == 'home' || props.children == 'catalog' || e(content, null) }
		</Container>
	)
}
