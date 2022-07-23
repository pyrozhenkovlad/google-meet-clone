const { Schema, model } = require("mongoose");

const ImageSchema = new Schema({
  imageUrl: { type: String, required: true },
  id : { type: String , required: true , unique:true}
});

module.exports = model("Image", ImageSchema);
