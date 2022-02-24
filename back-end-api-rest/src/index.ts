import express,{Application,Response,Request} from "express";
import {connect} from "./database"

import morgan from "morgan";
// manejador de rutas
import { Router } from "express";
// crea el servidor
const app:Application = express();
//Un middleware es el software que brinda servicios y funciones comunes.
//Generalmente, se encarga de la gestión de los datos, los servicios de 
//aplicaciones, la mensajería, la autenticación y la gestión de las API.
//Morgan es un Middleware de nivel de solicitud HTTP(muestra informacion de los request)
app.use(morgan("dev"))
app.use(express.json());
// rutas del servidor
const router = Router();

// router.route("/").get(async (req,res) => {
//    const conn = await connect();
//    const cargos = await conn.query("SELECT * FROM empleado");
//    const empleados =  res.json(cargos[0]);  
//    return res.json(empleados)
// });

// app.use("/empleado",router);
app.get("/",(req:Request,res:Response) => {
   res.json("Bienvenido al sitio web")
   //res.render("inicio.html")
})
app.get("/cargo",async (req:Request,res:Response) => {
     const conn = await connect();
     const cargos = await conn.query("SELECT * FROM empleado");
     res.json(cargos[0]);
     ;
})
app.get("/departamento",(req:Request,res:Response) => {
    res.send("Departamentos de la empresa")
})
// levanto el servidor
app.listen(3000,()=>{
    console.log("servidor ejecuntando en el port 3000");
}); 


