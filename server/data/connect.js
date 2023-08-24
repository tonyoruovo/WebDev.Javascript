import connection from "userdb/connection.js";
import mongoose from "mongoose";

const Builder = connection.ConnStringBuilder;

const b = new Builder()
  .setTimeOutMS(50000)
  .setIsDirect(true)
  .setDB("accounts")
  .setConnection(27017, "127.0.0.1")
  .setAuth("mathaid2", "password")
  .build();
const connect = async function () {
  mongoose.connect(b);
};

export default connect;
