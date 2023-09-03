/*
= Human readable data source =
https://docs.google.com/spreadsheets/d/e/2PACX-1vSNVzKXaej44S0TCZOf3kk5dn708yQh4cmzgSgE5bqloM8cpejujkIaWEM_HwUofh3RxuHc__-qyy76/pubhtm
*/

import Papa from 'papaparse';

const suppliers_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSNVzKXaej44S0TCZOf3kk5dn708yQh4cmzgSgE5bqloM8cpejujkIaWEM_HwUofh3RxuHc__-qyy76/pub?gid=0&single=true&output=tsv",
    customers_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSNVzKXaej44S0TCZOf3kk5dn708yQh4cmzgSgE5bqloM8cpejujkIaWEM_HwUofh3RxuHc__-qyy76/pub?gid=504983115&single=true&output=tsv";

let metaData, suppliers_data = [], customers_data = [];
const suppliers_config = {
    download: true,
    step: function (row) {
        if (row.data[0] == 'FALSE') {
            let entry = {};
            for (let idx in metaData) {
                entry[metaData[idx]] = row.data[Number(idx) + 1]
            }
            suppliers_data.push(entry)
            return entry;
        }
        if (row.data[0] == 'removed') metaData = row.data.slice(1, row.data.length)
    },
    complete: function () {
        metaData = undefined;
    }
}
const customers_config = {
    download: true,
    step: function (row) {
        if (row.data[0] == 'FALSE') {
            let entry = {};
            for (let idx in metaData) {
                entry[metaData[idx]] = row.data[Number(idx) + 1]
            }
            customers_data.push(entry)
            return entry;
        }
        if (row.data[0] == 'removed') metaData = row.data.slice(1, row.data.length)
    },
    complete: function () {
        metaData = undefined;
    }
}

Papa.parse(suppliers_url, suppliers_config);
Papa.parse(customers_url, customers_config);

let data = {
    'suppliers': suppliers_data,
    'customers': customers_data
}
export default data;