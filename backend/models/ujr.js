const mongoose=require('mongoose');
const loginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    token: { type: String },
})

const Ujr=new mongoose.model("Ujr",loginSchema);
module.exports=Ujr;