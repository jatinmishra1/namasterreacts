const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
      money : {type : String},
      address : {type : String},
}
)

const mongodbmodel = mongoose.model('mongotest' , bookingSchema)

module.exports = mongodbmodel