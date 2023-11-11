const { User } = require("../model/User");

exports.fetchUserById = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await User.findById(id);

    res
      .status(201)
      .json({
        id: user.id,
        addresses: user.addresses,
        email: user.email,
        orders: user.orders,
        role: user.role,
      });
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
