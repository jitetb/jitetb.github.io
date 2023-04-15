/*
= Human readable data source =
https://docs.google.com/spreadsheets/d/e/2PACX-1vSNVzKXaej44S0TCZOf3kk5dn708yQh4cmzgSgE5bqloM8cpejujkIaWEM_HwUofh3RxuHc__-qyy76/pubhtm
*/

const suppliers_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSNVzKXaej44S0TCZOf3kk5dn708yQh4cmzgSgE5bqloM8cpejujkIaWEM_HwUofh3RxuHc__-qyy76/pub?gid=0&single=true&output=csv",
	customers_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSNVzKXaej44S0TCZOf3kk5dn708yQh4cmzgSgE5bqloM8cpejujkIaWEM_HwUofh3RxuHc__-qyy76/pub?gid=504983115&single=true&output=csv";

async function csvFetch(url) {
	let dataSource = await fetch(url, {
		methods: {
			'content-type': 'text/csv;charset=utf-8'
		}
	})
		.then(response => response.text())
		.then(rawData => rawData.split((/\r?\n|\r/)));
	let metaData = dataSource.slice(0, 1)[0].split(','),
		dataSet = dataSource.slice(1).map(elt => elt.split(',').reduce((acc, curr, i) => {
			acc[metaData[i]] = curr;
			return acc;
		}, {})),
		cleanDataSet = dataSet.filter(p => p["removed"] != "TRUE");
	// split to convert csv into array
	// reduce to convert array into json
	// console.debug(metaData);
	return cleanDataSet;
	// return formatedData;
}

export default async function profiler() {
	let supplier_data = await csvFetch(suppliers_url),
		customer_data = await csvFetch(customers_url);

	return {
		"suppliers": supplier_data,
		"customers": customer_data
	}
}
