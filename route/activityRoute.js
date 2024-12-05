// routes/activityRoutes.js
import express from "express";
import { setUserActive,
     getActiveUsers,
     assignLocationToActiveUser,
     getUserAssignedWork,
     startWork,
     submitNurseSignature,
     getTotalWorkingDays,
    

    }from "../controller/activityController.js";

const activityroute = express.Router();

activityroute.post("/setUserActive", setUserActive);
activityroute.get("/getActiveUsers", getActiveUsers);
activityroute.post("/assignLocationToActiveUser",assignLocationToActiveUser );
activityroute.get("/:userId/getUserAssignedWork",getUserAssignedWork);
activityroute.get("/:userId/startWork",startWork)
activityroute.post("/submitNurseSignature",submitNurseSignature);
activityroute.get("/:userId/getTotalWorkingDays",getTotalWorkingDays);

export default activityroute;