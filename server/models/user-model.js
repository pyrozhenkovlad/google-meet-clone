const { Schema, model }= require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true },
  avatarUrl: { type: String, required: true },
});

module.exports = model("User", UserSchema);
