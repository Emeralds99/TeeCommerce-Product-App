const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

const Information = mongoose.model("Information", infoSchema);

module.exports = Information;
