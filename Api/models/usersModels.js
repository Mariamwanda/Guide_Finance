import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    nom :{
        type: String,
        require:true,
    },
    email:{
        type: String,
        require:true,
    },
    entreprise:{
        type: String,
        require: true
    },
    motPasse : {
        type : String,
        require : true,
    },
    date : {
        type : Date,
    },
    select :{
      type : [String],
      require : true,
    } 
},
{
    timestamps : true,
}
)

export default model("users",userSchema);