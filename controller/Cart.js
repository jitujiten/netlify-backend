const { Cart } = require("../model/Cart");

exports.addToCart = async (req, res) => {
  const {id}=req.user;
  const cartItem = new Cart({...req.body,user:id});
  try {
    const doc = await cartItem.save();
    const result=await doc.populate('product')
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};



exports.fetchCartByUser = async (req, res) => {
const {id}=req.user;
  try {
    const doc = await Cart.find({user:id}).populate('user').populate('product');
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};


exports.updateCart = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Cart.findByIdAndUpdate(id,req.body,{new:true});
    const result=await doc.populate('product');
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteCart = async (req, res) => {
    try {
      const id = req.params.id;
      const doc = await Cart.findByIdAndDelete(id);
      res.status(201).json(doc);
    } catch (err) {
      res.status(400).json(err);
    }
  };
