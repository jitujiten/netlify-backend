const passport = require("passport");

exports.IsAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitiZeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGY0NTg2YWVlYTBiMjJjZjcyN2QxZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk5Njk1MzQwfQ.y6J3PCd-Lzdx7Rd2iVcUFBVO_bp8V_BLjvn8Tk7H4gg";
  return token;
};
