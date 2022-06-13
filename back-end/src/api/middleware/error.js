const midErr = (err, _req, res, _next) => {
  console.log(err);
  if (err.status) {
    return res.status(err.status).json(err.message);
  }
  return res.status(501).json('Internal Server Error');
};

module.exports = { midErr };