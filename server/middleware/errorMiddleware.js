// Catches errors passed via next(err)
exports.errorHandler = (err, req, res, next) => {
  console.error(err);
  const status = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(status).json({
    message: err.message,
    // stack trace only in non-production
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
  });
};
