import express from "express";
import { 
     startWork,
     submitNurseSignature,
    getUserAssignedWork
    }from "../controller/activityController.js";

const activityroute = express.Router();

activityroute.post("/startWork",startWork);
activityroute.post("/submitNurseSignature",submitNurseSignature);
activityroute.get("/:userId/getUserAssignedWork",getUserAssignedWork);

export default activityroute;