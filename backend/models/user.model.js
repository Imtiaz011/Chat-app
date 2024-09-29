import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    fullname:{
        type:String,
        required: true,
    }
}, { timestamps: true });

const User = mongoose.model("UserSchema", userSchema);
export default User;