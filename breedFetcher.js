const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const bre = breedName.slice(0, 3);
  request(`https://api.thecatapi.com/v1/breeds/search?q=${bre}`, (error, response, body) => {
    if (error) return callback(error, null);

    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(error, null);
      return;
    } else {
      let objDescription = data[0].description;
      callback(null, objDescription);
    }

  });
};

module.exports = { fetchBreedDescription };

