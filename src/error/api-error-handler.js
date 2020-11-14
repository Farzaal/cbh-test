function apiErrorHandler(err, req, res, next) {

  console.error(err);

  return res.status(500).json({ message: 'Something went wrong' });

}

module.exports = apiErrorHandler;
