const mongoose=require('mongoose');
// const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    adderss:{
        type:String,
        required:true
    },
    adharCardNumber:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['voter', 'admin'],
        default:'voter'
    },
    isVoted:{
        type: Boolean,
        default:false
    }
});

const User=mongoose.model('User',userSchema);
module.exports=User;
