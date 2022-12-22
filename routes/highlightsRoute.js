const express = require('express');
const router = express.Router();
var axios = require("axios").default;
const dotenv = require("dotenv").config();

let items;

var options = {
    method: 'GET',
    url: 'https://free-football-soccer-videos.p.rapidapi.com/',
    headers: {
        'x-rapidapi-host':'free-football-soccer-videos.p.rapidapi.com',
        'x-rapidapi-key': process.env.API_KEY
    }
};

axios.request(options).then(function (response) {
    
    items = (response.data);
    ArrangingData(items);

}).catch(function (error) {
    console.error(error);
});



function ArrangingData(items) {
    items = items.filter(data => {
        if (data.competition.id <= 15 && data.competition.id >= 10) {
            return true;
        }
    })

}


router.get("/jkdsfbdsfgbhe945ytioenbgi834", (req, res) => {
    res.send(items)

})


module.exports = router;
