
const mongoose  = require("config/mongodb").mongoose;
const ImageSchema = new mongoose.Schema({
    url:{type:String,default: "",required: true},
})
const Image = mongoose.model("Image",ImageSchema)
module.exports = Image; 