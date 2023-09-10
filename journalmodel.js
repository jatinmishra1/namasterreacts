const mongoose=require("mongoose");
const journalSchema=new mongoose.Schema({
    item:{type:String},
    status:{type:String},
    size:{
        h:{type:String},
        w:{type:String},
        uom:{type:String}
    },
    instock:[
        {
            warehouse:{type:String},
            quantity:{type:Number}
        }
    ]
})

const journalModel=mongoose.model('journaltest',journalSchema);
module.exports=journalModel