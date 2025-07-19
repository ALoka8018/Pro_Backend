import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/dbConnection.js";
const app = express();
dotenv.config({ path: "../.env" });

connectDB()
  .then(()=>{
    app.listen(process.env.PORT || 8000,()=>{console.log("server started on port number ",process.env.PORT);
    })
  })
  .catch((e) => {
    console.log("error while connection with database");
  });
