const mongoose = require('mongoose')

const permissionSchema = new mongoose.Schema({
    name : {type:String},
    userId: {type:String},
    
    userEdit : {type:Boolean},
    userDelete : {type:Boolean},
    userView : {type:Boolean},

    clientEdit : {type:Boolean},
    clientDelete : {type:Boolean},
    clientView : {type:Boolean},
})


const permission =   mongoose.model('permission',permissionSchema);

module.exports  = permission