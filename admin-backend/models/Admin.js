const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },  // Added phone field
    password: { type: String, required: true } // Not hashed (for now)
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);
