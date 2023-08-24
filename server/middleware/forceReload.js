/**
 * A middleware for express that forces page reload for developmental
 * purposes only. For now this is completely useless as there is no way
 * to get the current browser, reload it and resend the request
 * @param {Express.Request<{}, any, any, Express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {Express.Response<any, Record<string, any>, number>} res The response from this server
 * @param {*} next The next middle ware to call in the middleware chain
 */
export default function forceReload(req, res, next) {
  console.log(req);
  // stuff has changed...
  // console.log(res);
  if (req.headers.referer) res.redirect(req.get("referer"));
  next();
}
