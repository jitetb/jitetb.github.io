import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { usePapaParse } from 'react-papaparse';

import Navigation from './pageBlocks/Navigation.jsx';

// Human readable data source
// https://docs.google.com/spreadsheets/d/e/2PACX-1vSNVzKXaej44S0TCZOf3kk5dn708yQh4cmzgSgE5bqloM8cpejujkIaWEM_HwUofh3RxuHc__-qyy76/pubhtm

const suppliers_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSNVzKXaej44S0TCZOf3kk5dn708yQh4cmzgSgE5bqloM8cpejujkIaWEM_HwUofh3RxuHc__-qyy76/pub?gid=0&single=true&output=tsv",
	customers_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSNVzKXaej44S0TCZOf3kk5dn708yQh4cmzgSgE5bqloM8cpejujkIaWEM_HwUofh3RxuHc__-qyy76/pub?gid=504983115&single=true&output=tsv";

export default function App(props) {
	const { readRemoteFile } = usePapaParse();
	let [getSuppliers, setSuppliers] = useState([]),
		[getCustomers, setCustomers] = useState([]);
	useEffect(() => {
		let supplierMetaData, customerMetaData;

		readRemoteFile(customers_url, {
			complete: results => {
				setCustomers(results.data.filter(data => data.removed == 'FALSE'))
				console.log('Customers done!')
			}, header: true
		})

		readRemoteFile(suppliers_url, {
			complete: results => {
				setSuppliers(results.data.filter(data => data.removed == 'FALSE'))
				console.log('Suppliers done!')
			}, header: true
		})
	}, [customers_url, suppliers_url])
	return (
		<>
			<Navigation routes={props.routes} />
			<Container fluid className="mx-0 p-0">
				<Outlet context={[getSuppliers, getCustomers]} />
			</Container>
		</>
	)
}