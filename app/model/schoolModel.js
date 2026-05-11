import mongoose from "mongoose";

const schoolSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    msg: {
        type: String,
        require: true,
    },
});



const schoolModel = mongoose.model('student', schoolSchema);

export default schoolModel;