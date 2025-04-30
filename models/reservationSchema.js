import mongoose from "mongoose";
import validator from "validator";


const reserveSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name must contain at least 3 characters! "],
        maxLength: [30, "First Name cannot exceed from 30 characters! "]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name must contain at least 3 characters! "],
        maxLength: [30, "Last Name cannot exceed from 30 characters! "],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone number must contain 11 digits! "],
        maxLength: [11, "Phone number must contain 11 digits!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reserveSchema);

