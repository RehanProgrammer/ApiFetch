const express = require("express");
const router = express.Router();
const axios = require('axios');

/*router.get("/", (req, res) => {
  //console.log("i am reading this");
  res.send("Hello there");
});*/

router.get('/',(req,res)=>{
    //console.log(req.query);
    //for now just set the name to a fixed name and later we decide
    let BrewerName = req.query.brewer;
    axios.get('https://api.openbrewerydb.org/breweries?by_name='+ BrewerName)
    .then((response) =>{
        //console.log(response.data);
        res.json(response.data);
    })
    .catch(err =>{
        console.error(err)
    })
   
});

/*router.post('/',(req,res) => {

    console.log(req.body);
})*/

module.exports = router;
