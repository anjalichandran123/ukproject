import { registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    getTotalWorkingDaysWithDetails,
    // ---------------------------------------------------
    setUserActive,
    // getUserAssignedWork,
    // submitNurseSignature,
} from "../controller/userController.js";

import express from "express"
const userroute=express.Router();

userroute.post("/userregister",registerUser);
userroute.post("/userlogin",loginUser);
userroute.post("/userlogout",logoutUser);
userroute.get("/:userId/getUserProfile",getUserProfile);
userroute.get("/:userId/getTotalWorkingDaysWithDetails",getTotalWorkingDaysWithDetails);

// --------------------------------------------------------------------------------------------------------------
userroute.post("/setUserActive",setUserActive);
// userroute.get("/:userId/getUserAssignedWork",getUserAssignedWork);
// userroute.get("/:userId/startWork",startWork);
// userroute.post("/submitNurseSignature",submitNurseSignature);


export default userroute;