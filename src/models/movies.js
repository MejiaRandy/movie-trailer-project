import { Schema,model } from "mongoose";

const movieSchema = new Schema({
    titulo:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    ano: {
        type: String,
        required: true,
        trim: true
    },
    director:{
        type: String,
        required: true,
        trim: true
    },
    actores:{
        type: String,
        required: true,
        trim: true
    },
    resena:{
        type: String,
        required: true,
        trim: true
    },
    imagen:{
        type: String,
        required: true,
        trim: true
    },
    link:{
        type: String,
        required: true,
        trim: true
    },
    done:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
    versionKey: false
})

export default model('Movie', movieSchema)