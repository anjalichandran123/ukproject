import express from "express";
import {
  register,
  login,
  getAllUsers ,
  logoutAdmin,
  admitUser,
  getAllUsersWorkingDaysWithDetails,
  getUnadmittedUsers,
  assignLocationToActiveUser
  // -----------------------------------------------
  // getActiveUsers,
  // assignLocationToActiveUser,
} from "../controller/adminController.js";

const route = express.Router();

route.post("/register", register);
route.post("/login", login);
route.get("/getAllUsers",getAllUsers);
route.post("/logout",logoutAdmin);
route.post("/admitUser",admitUser);
route.get("/getAllUsersWorkingDaysWithDetails",getAllUsersWorkingDaysWithDetails);
route.get("/getUnadmittedUsers",getUnadmittedUsers);
route.post("/assignLocationToActiveUser",assignLocationToActiveUser);

// ----------------------------------------------------------------------------------------------
// route.get("/:userId/getActiveUsers",getActiveUsers);
// route.post("/assignLocationToActiveUser",assignLocationToActiveUser);



export default route;