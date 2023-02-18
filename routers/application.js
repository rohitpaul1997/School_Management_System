const express = require("express");


//creatinng router
const router = express.Router();


router.get('/',async function(req, res){
    res.send("hello");
})

module.exports  = router