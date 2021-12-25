/* title: "Our Principals" */
var suppliers = [
  /* This entry is removed by marketing decisions
  {
    "image": "fujihd.png",
    "link": "https://www.fujihd.com/",
    "title": "FujiHD",
    "catalog": "1cOJQPO-7G5xd_drjQrm--lWeYmdS6UuJ"
  },
  */
  {
    "image": "modun-express.png",
    "link": "http://en.mdunks.com/",
    "title": "Suzhou Modun Express",
    "catalog": "1uNDVR2GkzinF0O250uBTz4YJu3z_KQ8k"
  },
  {
    "image": "movilift.png",
    "link": "https://www.movilift.com/",
    "title": "Movi Lift",
    "catalog": "1e8aAu1kpqoK3aLEGweEfXT4me-AFKfHt"
  },
  /* This entry is removed by marketing decisions
  {
    "image": "srl.png",
    "link": "https://www.srlelevator.com/",
    "title": "SRL",
    "catalog": "133qlDgHkSi0ad6yyFktuzOT_KefcrLzn"
  },
  */
  /* This entry is removed by marketing decisions
  {
    "image": "xiwei.png",
    "link": "https://www.xiweielevator.com/",
    "title": "XIWEI",
    "catalog": "1i1qfJqBYbv63VhmQCOgwhxd02YUPv3wE"
  },
  */
  {
    "image": "hasasansor.png",
    "link": "https://www.hasasansor.com.tr/",
    "title": "HAS Elevator",
    "catalog": "1xkZBResNuiRhy1tg7dFJhSrC0X-Hjzf4"
  },
  {
    "image": "vitalasansor.png",
    "link": "https://www.vitalasansor.com",
    "title": "VITAL Elevator",
    "catalog": "1eqqKYMmwHZ_MV6D5QHDOin2BLQozMxhz"
  },
  {
    "image": "suxan.png",
    "link": "https://www.sselift.com",
    "title": "SUXAN Elevator",
    "catalog": "1H0Ra4Ok4AzrnOWBZ0x_tf95KGtH07CCj"
  }
];

/* title: "Our Clients" */
var customers = [
  {
    "image": "world-bank.svg",
    "title": "World Bank",
    "link": "https://www.worldbank.org/en/country/bangladesh"
  },
  {
    "image": "BGMEA.png",
    "title": "BGMEA",
    "link": "https://www.bgmea.com.bd/"
  },
  {
    "image": "Bashundhara-city.png",
    "title": "Bashundhara City",
    "link": "http://www.bashundhara-city.com/"
  },
  {
    "image": "mirpur-dohs.png",
    "title": "Mirpur DOHS",
    "link": "https://web.archive.org/web/20170813011127/http://mirpurdohs.net.bd/"
  },
  /* This entry is removed by marketing decisions
  {
    "image": "DGDP.png",
    "title": "DGDP",
    "link": "https://dgdp.gov.bd/"
  },
  */
  {
    "image": "DOHS.png",
    "title": "DOHS Baridhara",
    "link": "http://www.dohsbaridhara.com/"
  }//,
  /* This entry is removed by marketing decisions
  {
    "image": "uttara-11.png",
    "title": "Uttara Sector 11 Kallyan Samity",
    "link": "https://www.facebook.com/Uttara-11no-Sector-Kallyan-Samity-1590375364591003/"
  },
  */
  /* This entry is removed by marketing decisions
  {
    "image": "uttara-14.png",
    "title": "Uttara Sector 14",
    "link": "https://www.facebook.com/groups/686404912058826/"
  }
  */
];
/*
function bind_image_resource(partner, image_repo){
    partner.image = image_repo(`./${partner.image}`).default;
    return partner;
}
const suppliers_image_repo = require.context("./suppliers/", false);
const customers_image_repo = require.context("./customers/", false);
*/
suppliers = suppliers.map(partner => {
  partner["image"] = require("./suppliers/" + partner["image"]);
  partner["catalog"] = `https://drive.google.com/file/d/${partner["catalog"]}/view?usp=sharing`;
  return partner;
});
customers = customers.map(partner => {
  partner["image"] = require("./customers/" + partner["image"]);
  return partner;
});

export { suppliers, customers }
export default Object.assign({
  suppliers: suppliers,
  customers: customers
})

