const mongoose= require('mongoose')

const User =new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    LName:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    
    attendenceArrary:[
        {
        type:String ,
        default: 0
    }
],
dateOfAtten:[{type:String,default:0}]

},
{collection:'User-data'}
)

const model = mongoose.model('UserData',User)
module.exports= model