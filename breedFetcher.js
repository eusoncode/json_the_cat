const request = require('request');
const bre = process.argv.slice(2).slice(0, 3);

request(`https://api.thecatapi.com/v1/breeds/search?q=${bre}`, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`The Breed: "${bre}" specified is not found.`);
    } else {
      let objDescription = data[0].description;
      console.log(objDescription);
    }
  }
});