const express = require('express');
const router  = express.Router();
var axios = require("axios").default;
const dotenv = require("dotenv").config();



var items;
var options = {
  method: 'GET',
  url: 'https://livescore-football.p.rapidapi.com/soccer/news-list',
  params: {page: '1'},
  headers: {
    'x-rapidapi-host':'livescore-football.p.rapidapi.com',
    'x-rapidapi-key': process.env.API_KEY
  }
};

axios.request(options).then(function (response) {
	items = (response.data);
    
    
}).catch(function (error) {
	console.error(error);
});




router.get("/skjdfbskjbfksjfbds32wjebrkwi3" , (req, res) => {
    res.send(items)
});


module.exports = router;