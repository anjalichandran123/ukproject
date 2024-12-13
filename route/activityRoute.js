// routes/activityRoutes.js
import express from "express";
import { 
     startWork,
     submitNurseSignature,
    }from "../controller/activityController.js";

const activityroute = express.Router();

activityroute.post("/startWork",startWork);
activityroute.post("/submitNurseSignature",submitNurseSignature);


export default activityroute;