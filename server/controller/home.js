import asyncHandler from "express-async-handler";
/**
 * @description gets the home page. For testing purposes
 * @method GET
 * @route http://localhost:8080/home
 * @access private
 * @param {Express.Request<{}, any, any, Express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {Express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const getHome = asyncHandler(async function(req, res) {
    // throw new Error("what in the world?")
  res.status(200).json({
    message: "This is the home page!",
  });
  // res.status(200).json(await userRepo.UserRepo.getUsers());
  res.end();
});

/**
 * @description sets data in the home page, which typically may be user authentication
 * @method `POST`
 * @route http://localhost:8080/home
 * @access private
 * @param {Express.Request<{}, any, any, Express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {Express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const setHome = asyncHandler(async function(req, res) {
  console.log(req.body);
  if (req.body.text) {
    res.status(201).json({
      message: `Data for was created`,
    });
    res.end();
  } else {
    res.status(400);
    throw new Error(
      "Request is not recognised as an internal command or external directive"
    );
  }
});

/**
 * @description updates data in the home page, which typically may be user authentication
 * @method PUT
 * @route http://localhost:8080/home/id
 * @access private
 * @param {Express.Request<{}, any, any, Express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {Express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const updateHome = asyncHandler(async function(req, res) {
  // console.log(req.body);
  // res.status(201).json({
  //   message: `Data for ${req.params.id} was updated`,
  // });
  // res.end();
  res.status(400);
  throw new Error("Cannot update home");
});
/**
 * @description deletes data in the home page, which typically may be user authentication
 * @method DELETE
 * @route http://localhost:8080/home/id
 * @access private
 * @param {Express.Request<{}, any, any, Express.QueryString.ParsedQs, Record<string, any>>} req the request made to this server
 * @param {Express.Response<any, Record<string, any>, number>} res The response from this server
 */
export const deleteHome = asyncHandler(async function(req, res) {
  // console.log(req.body);
  // res.status(201).json({
  //   message: `Data for ${req.params.id} was deleted!`,
  // });
  // res.end();
  res.status(400)
  throw new Error("Cannot delete home")
})
