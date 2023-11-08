const { Brand } = require("../model/Brand");

exports.createBrand = async (req, res) => {
  const newBrand = new Brand(req.body);
  try {
    const doc = await newBrand.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchAllBrand = async (req, res) => {
  try {
    const docs = await Brand.find({}).exec();
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
};
