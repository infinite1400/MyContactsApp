import mongoose from "mongoose";
import pkg from 'mongoose'
const {connection}=pkg;
const connectDb = () => mongoose.connect(process.env.CONNECTION_STRING, { dbName: "My_Contacts_Backend" }).then(() => {
    console.log(`Database Connected at Address ${connection.host} and Database Name is ${connection.name}`)
}).catch((error) => {
    console.log(error)
    process.exit(1);
})
export default connectDb