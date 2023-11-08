const { Category } = require("../model/Category");

exports.createCategory = async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const doc = await newCategory.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchAllCategory = async (req, res) => {
  try {
    const docs = await Category.find({}).exec();
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
};
