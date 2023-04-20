const mongoose = require("mongoose");

const configureDb = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect("mongodb://127.0.0.1:27017/ums-second2023")
    .then(() => {
      console.log("dont worry your db successfully connected");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = configureDb;
