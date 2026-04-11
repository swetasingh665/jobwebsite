const adminCheck = (req, res, next) => {
  if (req.userId !== "ADMIN_USER_ID") {
    return res.status(403).send("Not authorized");
  }
  next();
};

module.exports = adminCheck;