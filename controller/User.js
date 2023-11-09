const { User } = require("../model/User");

exports.fetchUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await User.findById(id, "name email ProfileUrl role addresses");
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
