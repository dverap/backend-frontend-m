"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const morgan_1 = __importDefault(require("morgan"));
// manejador de rutas
const express_2 = require("express");
// crea el servidor
const app = (0, express_1.default)();
//Un middleware es el software que brinda servicios y funciones comunes.
//Generalmente, se encarga de la gestión de los datos, los servicios de 
//aplicaciones, la mensajería, la autenticación y la gestión de las API.
//Morgan es un Middleware de nivel de solicitud HTTP(muestra informacion de los request)
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
// rutas del servidor
const router = (0, express_2.Router)();
// router.route("/").get(async (req,res) => {
//    const conn = await connect();
//    const cargos = await conn.query("SELECT * FROM empleado");
//    const empleados =  res.json(cargos[0]);  
//    return res.json(empleados)
// });
// app.use("/empleado",router);
app.get("/", (req, res) => {
    res.json("Bienvenido al sitio web");
    //res.render("inicio.html")
});
app.get("/cargo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield (0, database_1.connect)();
    const cargos = yield conn.query("SELECT * FROM empleado");
    res.json(cargos[0]);
    ;
}));
app.get("/departamento", (req, res) => {
    res.send("Departamentos de la empresa");
});
// levanto el servidor
app.listen(3000, () => {
    console.log("servidor ejecuntando en el port 3000");
});
