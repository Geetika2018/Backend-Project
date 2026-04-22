import  express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";





const app = express();

//use method use for middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));


app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.static("public"));
app.use(cookieParser());



// all the routes will come here (import)

import userRouter from "./routes/user.routes.js";



//routes declaration 

//using the middleware for the routes " app.use() " method is used for middleware

app.use("/users", userRouter);


export default app;