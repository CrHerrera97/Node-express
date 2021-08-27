const express = require("express");

const router = express.Router();

const Personal = require("../models/personal");

router.get("/",async (req,res) => {
    try{
        const arrayPersonalDB = await Personal.find();
        console.log(arrayPersonalDB)

        res.render("personal",{
            arrayPersonal : arrayPersonalDB
        })
    } catch(error){
        console.log(error)
    }
})

module.exports = router;