import cookieParser from "cookie-parser";
import cors from "cors";
import express  from "express";

const app= express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(cookieParser());

//import routes

import userRouter from "./routes/user.routes.js"
import complaintRouter from "./routes/complaint.routes.js";

app.use("/api/users", userRouter);
app.use("/api/complaint", complaintRouter);



export default app;