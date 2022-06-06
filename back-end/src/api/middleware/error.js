const midErr = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json(err.message);
  }
  return res.status(501).json('Internal Server Error');
};

module.exports = { midErr };