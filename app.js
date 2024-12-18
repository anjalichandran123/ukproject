import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./route/adminRoute.js";
import userroute from "./route/userRoute.js";
import activityroute from "./route/activityRoute.js";
import session from "express-session";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("database connected successfully");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));



app.get("/", (req, res) => {
  res.send("Hello From database");
});


// app.use(
//   session({
//     secret: "16f2e9c07b5d49e2a7a39d5bc4adcb8854fd6a9012c7e34eac8d8470b6f5fa32", // Replace with a secure random string
//     resave: false, // Prevent resaving session if no changes
//     saveUninitialized: true, // Save uninitialized sessions
//     cookie: { secure: false }, // Use secure: true in production with HTTPS
//   })
// );


app.use("/api/admin", route);
app.use("/api/user",userroute);
app.use("/api/user",activityroute);
app.use("/api/admin",activityroute);

