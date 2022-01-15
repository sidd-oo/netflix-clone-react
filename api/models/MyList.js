const mongoose = require("mongoose");

const MyListSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    content: { type: Array },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MyList", MyListSchema);
