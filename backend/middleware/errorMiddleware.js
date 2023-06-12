// * By using "err" as argument in this errorHandler and app.use(errorHandler) in server.js
// * We overwrite the default express.js errorHandler with this custom one
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  // * We overwrite the error handler from text/HTML to a JavaScript object with res.json()
  // * By default "stack" gives more information and we only use it in development mode
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { errorHandler };
