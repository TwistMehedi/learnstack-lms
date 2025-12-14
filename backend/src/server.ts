import express from "express";
import { config } from "./config/config";

const app = express();
const port = config.port;

app.use(express.json());
app.use(express.urlencoded());


app.listen((port), ()=>{
    console.log(`Server runing is port number ${port}`)
});