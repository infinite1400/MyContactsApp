import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from "./config/dbConnection.js";
connectDb();
import contactRouter from "./routes/contactRoutes.js";
import userRoutes from "./routes/userRoutes.js";
// import errorHandler from './middleware/errorHandler.js'
const PORT=process.env.PORT || 5000;
const app=express();
app.use(cors());
app.use(express.json());
app.use('/api/contacts',contactRouter)
app.use('/api/users',userRoutes);
// app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
})