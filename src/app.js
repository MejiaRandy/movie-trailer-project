import express from 'express';
import indexRoutes from './routes/index.routes'
import exphbs from 'express-handlebars'
import path from 'path'
import { create } from 'express-handlebars';
import mongoose from 'mongoose';
import  morgan  from "morgan";

const app = express();
app.use(express.json());

//es para quitar la advertencia en la consola de mongoose
mongoose.set('strictQuery', true);

//esta es la direccion de la carpera de la vista de la pagina
app.set('views', path.join(__dirname, '/views'));
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/img', express.static(path.join(__dirname, 'public/img')))
app.use('/js', express.static(path.join(__dirname, 'public/js')))

//esta es la conguracion del motor de hbs
var hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
})

//aqui metemos la configuracion al motor handlebars
app.engine(".hbs",hbs.engine);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//aqui seteamos el motor de handlebars
app.set("view engine", ".hbs");

//aqui tenemos todas las rutas del app importados desde otro archivo
app.use(indexRoutes);

export default app;