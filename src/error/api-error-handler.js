function apiErrorHandler(err, req, res, next) {
  
  if(err.isBoom) 
    return res.status(err.output.statusCode).json(err.output.payload);
  
  console.error(err);
  
  return res.status(500).json({ message: 'Something went wrong' });
}

module.exports = apiErrorHandler;
