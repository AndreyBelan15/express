const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

  name: String,
  email: String,
  phone: String,
  message: String,
  created_at: Date,
  sendToMe: String,
  sendToUser: String
})

module.exports = mongoose.model("contact", contactSchema)