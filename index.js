const fs = require('fs');

const XLSX = require('xlsx');

class Service {
  constructor({ Name, Title, Redirect, Slug, Query }) {
    this.Name = Name;
    this.Title = Title || Name;
    this.Redirect = Redirect || null;
    this.Slug = Slug || this.slugify(Name);
    this.Query = Query || this.querify(Name);
  }

  slugify(name) {
    return name
    .toLowerCase()
    .replace(/[^\w ]+/g,'')
    .replace(/ +/g,'-'); 
  }

  querify(name) {
    return `ServicesProvided/any (x: x eq '${name}')`;
  }
};

const wb = XLSX.readFile('data.xlsx');
const services = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
const serviceClasses = services.filter(({ Exclude }) => !Exclude).map((service) => new Service(service));
fs.writeFileSync('data.json', JSON.stringify({ value: serviceClasses }));
