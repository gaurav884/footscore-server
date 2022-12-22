const dotenv = require("dotenv").config();
const express = require('express');
const router = express.Router();
var axios = require("axios").default;
const app = express();



router.post("/update-teams", (req, res) => {

  var options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
    params: { league: `${req.body.id}`, season: '2022' },
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY
    }
  };

  axios.request(options).then(function (response) {
  

    res.json(JSON.stringify(response.data.response));

  }).catch(function (error) {
    console.error(error);
  });
});


router.post("/find-team", (req, res) => {


  var options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
    params: { league: req.body.leagueid, season: '2022', team: req.body.teamid },
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY
    }
  };

  axios.request(options).then(function (response) {


    res.json(JSON.stringify(response.data.response));

  }).catch(function (error) {
    console.error(error);
  });
});

router.post("/find-player", (req, res) => {

  var options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/players',
    params: { team: req.body.teamid, league: req.body.leagueid, season: '2022', search: req.body.name },
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY
    }
  };

    axios.request(options).then(function (response) {
    
      if(response.data.response.length==0){
        return res.status(422).json(JSON.stringify({error: "Please refine your search"}))
      }
   
      res.json(JSON.stringify(response.data.response[0]));

  }).catch(function (error) {
    console.error(error);
  });
});

module.exports = router;