const { User } = require("../model/User");

exports.createUser = async (req, res) => {
  const newuser = new User(req.body);
  try {
    const doc = await newuser.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    if (!user) {
      res.status(401).json({ message: "no Such User Email" });
    } else if (user.password === req.body.password) {
      res
        .status(201)
        .json({
          id: user.id,
          email: user.email,
          name: user.name,
          addresses: user.addresses,
        });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
