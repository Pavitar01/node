module.exports = {
  reqfilter: (req, res, next) => {
    if (req.query.age > 0) {
      next();
    } else {
      res.send("please provide age");
    }
  },
};
