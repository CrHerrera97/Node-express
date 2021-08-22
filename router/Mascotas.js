const express = require("express");

const router = express.Router();

router.get('/',(req,res)=>{
    res.render("mascotas",{
        arrayMascotas:[
            {id: 'asd', nombre: 'rex', descripcion: 'rex descripcion'},
            {id: 'dsa', nombre: 'juan', descripcion: 'juan descripcion'},
        ]
    })
})

module.exports = router;