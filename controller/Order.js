const { Order } = require("../model/Order");

exports.CreateOrder = async (req, res) => {
  const OrderItem = new Order(req.body);
  try {
    const doc = await OrderItem.save();

    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchOrderByUser = async (req, res) => {
  const { user } = req.query;
  try {
    const doc = await Order.find({ user: user });
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Order.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Order.findByIdAndDelete(id);
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
