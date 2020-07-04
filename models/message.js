const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  username: { type: String, required: true },
  email: String,
  message:{type:String, required:true},
  date: { type: Date, default: Date.now },
});

const Message  = mongoose.model("Message", MessageSchema);

module.exports = Message;
