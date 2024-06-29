const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name : {type:String},
    email : {type:String},
    password : {type:String},
    age : {type:String},
    contact : {type:String},

    userEdit : {
            type:Boolean,
            default:false
        },
        userDelete : {type:Boolean,
        default:false},
        userView : {type:Boolean,
        default: false},

        clientEdit:{
            type:Boolean,
            default: true,
           },
        clientDelete:{
        type:Boolean,
        default: true,
    },
    clientView:{
        type:Boolean,
        default: true,
  },
    
})


const customer =   mongoose.model('customer',customerSchema);

module.exports  = customer