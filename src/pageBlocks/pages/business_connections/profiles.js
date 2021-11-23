/* title: "Our Principals" */
var suppliers = [
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
var customers = [
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
      "image" : "DGDP.png",
      "title" : "DGDP",
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
/*
function bind_image_resource(partner, image_repo){
    partner.image = image_repo(`./${partner.image}`).default;
    return partner;
}
*/
//const suppliers_image_repo = require.context("./suppliers/", false);
//const customers_image_repo = require.context("./customers/", false);
suppliers = suppliers.map(partner => {
  partner["image"] = require("./suppliers/" + partner["image"]);
  return partner;
});
customers = customers.map(partner => {
  partner["image"] = require("./customers/" + partner["image"]);
  return partner;
});

export const Profiles = {
  suppliers: suppliers,
  customers: customers
}

