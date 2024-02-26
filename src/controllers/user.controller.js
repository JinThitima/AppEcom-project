const User = require("../models/user.model");

exports.getUser = (req, res) => {
  User.find().then((result) => {
    res.status(200).json({
      msg: "Search OK",
      data: result,
    });
  });
};

exports.getUserById = (req, res) => {
  User.findById(req.params.id).then((result) => {
    res.status(200).json({
      msg: "Search OK",
      data: result,
    });
  });
};

exports.createUser = async (req, res) => {
  //เพิ่ม foodmenu
  try {
    let user = new User({
      name: req.body.name,
      lastname: req.body.lastname,
      address: req.body.address,
      sex: req.body.sex,
      email: req.body.email,
      tel: req.body.tel,
      password: req.body.password
    });
    let createUser = await user.save();
    res.status(200).json({
      msg: "Add a Product complete.",
      data: createUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error,
    });
  }
};

exports.updateUser = (req, res) => {
  let user = {
    name: req.body.name,
    lastname: req.body.lastname,
    address: req.body.address,
    sex: req.body.sex,
    email: req.body.email,
    tel: req.body.tel,
    password: req.body.password,
  };
  User.findByIdAndUpdate(req.params.id, user).then((result) => {
    // findById อีกครั้งเพื่อเอา data ใหม่
    User.findById(req.params.id).then((result) => {
      res.status(200).json({
        msg: "OK",
        data: result,
      });
    });
  });
};

exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id).then((result) => {
    res.status(200).json({
      msg: `User id ${req.params.id} is deleted.`,
    });
  });
};
