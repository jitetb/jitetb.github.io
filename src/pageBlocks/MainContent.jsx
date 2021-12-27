import React,{createElement as e,useState,useEffect} from 'react';
import { Container } from 'react-bootstrap';


export default function MainContent(props) {
  var [Profiles, setProfiles] = useState([]);
  function absoluteImageSource(dataSet,dataType,dataSource) {
    return dataSet[dataType].filter(p=>!p.removed).map(p=>{
      p.image = dataSource + dataType + '/' + p.image;
      return p;
    });
  }
  function getProfiles() {
    const url = "https://jitetb.github.io/assets/";
    fetch(url + "profiles.json", {
      headers : {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      }
    }).then(response => response.json()).then(data => {
      const suppliers = absoluteImageSource(data,'suppliers',url);
      const customers = absoluteImageSource(data,'customers',url);
      return setProfiles({
        suppliers: suppliers,
        customers: customers
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
