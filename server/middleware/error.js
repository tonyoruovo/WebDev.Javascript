/**
 * Error middleware for when route was not found. It instantiates an `Error` object with a `404 Page not found` message,
 * attaches a `statCode` field to it, assigns `404` to that field and calls `next(err)`
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 * @param {NextFunction} next the the next middleware in the chain
 */
export async function error404(req, res, next) {
  const er = new Error("404 Page not found");
  er.statusCode = 404;
  next(er);
}
/**
 * Default error handler that properly assigns the response status as well as the stack message for debugging
 * @param {Error} err the error to be handled
 * @param {express.Request<{}, any, any, express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {express.Response<any, Record<string, any>, number>} res The response from this server
 * @param {NextFunction} next the the next middleware in the chain
 * @returns { NextFunction } call the `return next()`
 */
export default function handler(err, req, res, next) {
  if (err) {
	 console.log("an error occured");
	console.log(err);
    res.status(err.statusCode ? err.statusCode : 500).json({
      message: err.message,
      stack: err.stack,
    });
  }
  return next();
}

/**
 * Adds a statusCode field to the error object with a value of `400` and throws the error
 * @param {Error} err a pre-configured error object
 * @returns {never}
 * @throws {Error} when this function returns
 */
export function handleBadRequest(err) {
  err.statusCode = 400;
  throw err;
}

/**
 * Adds a statusCode field to the error object with a value of `401` and throws the error
 * @param {Error} err a pre-configured error object
 * @returns {never}
 * @throws {Error} when this function returns
 */
export function handleNotAuthourised(err) {
  err.statusCode = 401;
  throw err;
}
