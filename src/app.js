import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import { DB_NAME } from "./constants.js";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({limit: "8kb"}));
app.use(express.urlencoded({extended: true, limit: "8kb"}));
app.use(express.static(""));
app.use(cookieParser());
