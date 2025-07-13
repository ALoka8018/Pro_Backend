import mongoose from "mongoose";

import {DB_NAME} from "./constants.js";
import express from "express";



(async () => {
  try {
   await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
  } catch (e) {
    console.log("Error connecting to MongoDB", e);
  }
})();
