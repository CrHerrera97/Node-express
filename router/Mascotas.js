const express = require("express");

const router = express.Router();

const Mascota = require("../models/mascota");

router.get('/', async (req,res) => {

    try {
        const arrayMascotasDB = await Mascota.find();
        console.log(arrayMascotasDB)


        res.render("mascotas",{
            arrayMascotas : arrayMascotasDB
            //arrayMascotas:[
                //{id: 'asd', nombre: 'rex', descripcion: 'rex descripcion'},
                //{id: 'dsa', nombre: 'juan', descripcion: 'juan descripcion'},
            //]
        })

    } catch (error) {
        console.log(error)
        console.log("error en conectar la base de datos")
    }


})

module.exports = router;