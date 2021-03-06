//con babel config
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fileupload from 'express-fileupload';
import history from 'connect-history-api-fallback';
import path from 'path';

const app = express();

app. set('port',process.env.PORT||3000);

//middlewares
app.use(morgan('tiny'));
app.use(cors());//permite acceder a nuestro servidior desd eotros dominios
app.use(express.json());//para que nuestor servidor envie y reciba json
app.use(express.urlencoded({extended:true}));//para recibir rutas y url
app.use(fileupload({useTempFiles:true})); //para los Archivos
app.use(history());
app.use(express.static(path.join(__dirname,'public')));

//Routes
app.use('/',require("./router/auth.router"));
app.use("/clientes", require("./router/clientes.router"));
app.use("/vehiculos", require("./router/vehiculos.router"));


app.listen(app.get('port'),()=>{
    console.log('server on port '+app.get('port'));
});