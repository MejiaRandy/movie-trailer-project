import { Schema,model } from "mongoose";

const loginSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        unique: true,
        trim: true
    }
},{
        timestamps: true,
        versionKey:false
    })

export default model('login', loginSchema)