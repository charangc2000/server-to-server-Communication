const Detail = require("../models/detail.js");

const detailController = {};

detailController.show = (req, res) => {
  const id = req.params.userId;
  Detail.findOne({ userId: id })
    .then((Detail) => {
      res.json(Detail);
    })
    .catch((err) => {
      res.json(err);
    });
};

detailController.create = (req, res) => {
  const body = req.body;
  const detail = new Detail(body);
  detail
    .save()
    .then((detail) => {
      res.json(detail);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = detailController;
