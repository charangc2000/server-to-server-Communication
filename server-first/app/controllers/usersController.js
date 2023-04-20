const User = require("../models/user.js");
const axios = require("axios");

const userController = {};

userController.list = (req, res) => {
  User.find()
    .then((User) => {
      res.json(User);
    })
    .catch((err) => {
      res.json(err);
    });
};

userController.show = (req, res) => {
  const code = req.params.code;
  User.findOne({ code: code })
    .then((user) => {
      if (user) {
        let userData = user;
        const id = user.id;
        axios
          .get(`http://localhost:3088/api/details/${id}`)
          .then((response) => {
            let formData = { ...userData._doc, ...response.data };
            res.json(formData);
          })
          .catch((err) => {
            res.json(err.message);
          });
      } else {
        res.json({ error: "user not found" });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

userController.create = (req, res) => {
  const body = req.body;
  const user = new User(body);
  user
    .save()
    .then((user) => {
      formData = {
        userId: user._id,
        age: body.age,
        city: body.city,
      };
      axios
        .post("http://localhost:3088/api/details", formData)
        .then((response) => {
          res.json(response.data);
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = userController;
