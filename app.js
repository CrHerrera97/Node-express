/* node puro (node vanilla)

const http = require("http");

const server = http.createServer((req, res) => {
 
    res.end("primero v1")

})
const puerto = 3000;
server.listen(puerto, () => { 
    console.log("segundo calaeb")
})
*/

//ahora con express

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//motor de plantillas

app.set("view engine","ejs");

app.set('views',__dirname + '/views');

app.use(express.static(__dirname+"/public"))

//rutas de la web
app.use("/",require("./router/RutasWeb"));

app.use("/mascotas",require("./router/Mascotas"));

app.use((req, res ,next) =>{
    res.status(404).render("404",{
        titulo: "404",
        descripcion: "titulo del sitio web not found!"
    });
})  

//el usar el ___dirname hará que ubique la carpeta raiz donde tenemos alojado nuestro proyecto
app.listen(port,()=>{
    console.log("servidor a su servicio en el puerto",port)
})