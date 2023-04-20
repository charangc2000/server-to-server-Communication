const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const detailSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const Detail = mongoose.model("Detail", detailSchema);

module.exports = Detail;
