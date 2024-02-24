import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    name: {
        type: String,
        require: [true, "Please add the Contact name"],
    },
    email: {
        type: String,
        require: [true, "Please add the Contact email address"],
    },
    phone: {
        type: String,
        require: [true, "Please add the Contact phone number"],
    }
}, {
    timestamps: true //this will create createdAt and updatedAt field in our database 
});

const Contact = new mongoose.model("Contact", contactSchema);
export default Contact;