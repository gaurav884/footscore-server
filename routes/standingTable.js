const express = require('express');
const router = express.Router();
const app = express();
var axios = require("axios").default;
app.use(express.urlencoded({extended:false}));

app.use(express.json({limit:`1mb`}));




var items;



router.post("/skjdfh384yt89hiroshfg0d8hg" , (req, res) => {
    
    var options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
      params: {season: '2022', league: `${req.body.id}`},
      headers: {
        'x-rapidapi-host':`api-football-v1.p.rapidapi.com`,
        'x-rapidapi-key': process.env.API_KEY
      }
    };
    
    axios.request(options).then(function (response) {
       
        items = (JSON.stringify(response.data.response[0].league));
        res.json(items)
        
    }).catch(function (error) {
        console.error(error);
    });
});

module.exports = router;