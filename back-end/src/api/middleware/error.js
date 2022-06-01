const midErr = (err, req, res) => {
  console.error(err);
  return res.status(501).end();
};

module.exports = { midErr };