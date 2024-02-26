const Order = require("../models/order.model");

exports.getOrder = (req, res) => {
  Order.find().then((result) => {
    res.status(200).json({
      msg: "Search OK",
      data: result,
    });
  });
};

exports.getOrderById = (req, res) => {
   Order.findById(req.params.id).then((result) => {
     res.status(200).json({
       msg: "Search OK",
       data: result,
     });
   });
};

exports.createOrder = async (req, res) => {
  //เพิ่ม foodmenu
  try {
    let order = new Order({
      name: req.body.name,
      lastname: req.body.lastname,
      address: req.body.address,
      email: req.body.email,
      tel: req.body.tel,
      items: req.body.items,
    });
    let createOrder = await order.save();
    res.status(200).json({
      msg: "Add a Order complete.",
      data: createOrder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error,
    });
  }
};

exports.updateOrder = (req, res) => {
  let order = {
    name: req.body.name,
    lastname: req.body.lastname,
    address: req.body.address,
    email: req.body.email,
    tel: req.body.tel,
    items: req.body.items,
  };
  User.findByIdAndUpdate(req.params.id, order).then((result) => {
    // findById อีกครั้งเพื่อเอา data ใหม่
    User.findById(req.params.id).then((result) => {
      res.status(200).json({
        msg: "OK",
        data: result,
      });
    });
  });
};

exports.deleteOrder = (req, res) => {
  Order.findByIdAndDelete(req.params.id).then((result) => {
    res.status(200).json({
      msg: `Order id ${req.params.id} is deleted.`,
    });
  });
};