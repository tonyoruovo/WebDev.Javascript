
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import origindb from "./data/models/origin.js";
import home from "./routes/home.js";
import users from "./routes/users.js";
import origin from "./routes/cors.js";
import signin from "./routes/signin.js";
import error from "./middleware/error.js";
import { error404 } from "./middleware/error.js";
import {connect as connectdb} from "userdb";

await connectdb()
  .then((m) => {
    console.log(`connected @ ${m.now()}`);
    // m.connection.db.collections().then((x) => {
    //   x.forEach((y) => {
    //     console.log(`dropping ${y.collectionName} in ${y.dbName}...`);
    //     try{
    //     y.dropIndexes()
    //     }catch(e){}
    //     try {
    //       y.drop({});
    //     } catch (e) {}
    //   });
    // });
    return m.connection;//.useDb(env.mongodb.db[1]);
  })
  .catch((e) => console.error("could not connect", e));
  
 const whiteList = [http://localhost:3000];
  
const corsOptions = {
	origin: function(origin, callback) {
		if(whiteList.indexOf(origin) > -1)
			callback(null, true);
		else {
			const o = origindb.find({origin}).exec()
			if(o.origin === origin)
				callback(null, true);
			else callback(new Error("Unknown origin"));
		}
	}
}
  
const app = express();// initialises express
app.use(cors(corsOption));
app.use(express.urlencoded({ extended: false }));
// specifies a parser for payloads. This parser only parses
// json payloads. To parse text we may add "application/text"
// any other media-type not available here will be rejected by our
// server
app.use(bodyParser.json());
app.use(bodyParser.text());
//app.use(express.json({type: ["application/json", "text/json"]}));
//app.use(express.json({type: ["application/json", "text/json"]}));
//app.use(express.text({ defaultCharset: "utf-8" }));

app.use("/home", home);
app.use("/", home);
app.use("/signin", signin);
app.use("/login", signin);
app.use("/users", users);
app.use("/cors", origin);
app.use(error404);
app.use(error);

app.listen(8080, () =>
console.log("\u20AF: Hello world! Jesus Christ is my Lord")
);
