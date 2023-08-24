import mongoose from "mongoose";

/**
 * The email schema for the mongoose database. The properties include:
 * - `_id` - the primary key of the schema which is a type of `Schema.Types.ObjectId`
 * - `email` - the email which is the intrinsic value of the schema. It is a type of `Schema.Types.String`
 * - `verified` - a `Schema.Type.String` value that tell whether the email has been verified
 * - `createdAt` - a time stamp value specifying when this value was created
 * - `updatedAt` - a time stamp value specifying when this value was last updated and saved
 */
const emailSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    email:{
		type: mongoose.Schema.Types.String,
		required: [true, "email must be present"],
		validate: {
			validator: function(v) {
				return v && v.length > 0 && v.indexOf("@") > -1;
			},
			message: function(props) {return `${props.value} is not a valid email`;}
		},
		unique: true,
	},
    verified: {
		type: mongoose.Schema.Types.Boolean,
		default: false
	},
  },
  { timestamps: true }
);

/**
 * The email model for the mongoose database. The properties include:
 * - `_id` - the primary key of the schema which is a type of `Schema.Types.ObjectId`
 * - `email` - the email which is the intrinsic value of the schema. It is a type of `Schema.Types.String`
 * - `verified` - a `Schema.Type.String` value that tell whether the email has been verified
 * - `createdAt` - a time stamp value specifying when this value was created
 * - `updatedAt` - a time stamp value specifying when this value was last updated and saved
 */
export const Email = mongoose.model("Email", emailSchema);

/**
 * The phone schema for the mongoose database. The properties include:
 * - `_id` - the primary key of the schema which is a type of `Schema.Types.ObjectId`
 * - `phoneType` - the type of phone number that this is. valid values include `["work", "home", "mobile"]`
 * - `phoneNumber` - the actual phone number which is a type of `Schema.Types.ObjectId`
 * - `verified` - a `Schema.Type.String` value that tell whether the phone number has been verified
 * - `createdAt` - a time stamp value specifying when this value was created
 * - `updatedAt` - a time stamp value specifying when this value was last updated and saved
 */
const phoneSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    phoneType: {
      type: String,
      enum: ["work", "home", "mobile"],
    },
    phoneNumber: {
		type: mongoose.Schema.Types.String,
		validate: {
			validator: function(v){return /^[+]?[0-9]{1,3}0?[0-9]{10}$/.test(v);},
			message: function(props){return "invalid phone number";}
		},
		required: [true, "phone number must be avalable"],
		unique: true
	},
    verified: {
		type: mongoose.Schema.Types.Boolean,
		default: false
	},
  },
  { timestamps: true }
);
/**
 * The phone model for the mongoose database. The properties include:
 * - `_id` - the primary key of the schema which is a type of `Schema.Types.ObjectId`
 * - `phoneType` - the type of phone number that this is. valid values include `["work", "home", "mobile"]`
 * - `phoneNumber` - the actual phone number which is a type of `Schema.Types.ObjectId`
 * - `verified` - a `Schema.Type.String` value that tell whether the phone number has been verified
 * - `createdAt` - a time stamp value specifying when this value was created
 * - `updatedAt` - a time stamp value specifying when this value was last updated and saved
 */
export const Phone = mongoose.model("Phone", phoneSchema);

/**
 * The account schema for the mongoose database.
 */
//Needs date of birth and gender
const accountSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Email",
      unique: true,
      required: true
    },
    phone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Phone",
      unique: true,
      required: true
    },
    password: {
      //will be null if provider is valid
      type: String,
    },
    full_name: {
      type: String,
      required: true,
    },
    photos: {
      //Array of file names
      type: [String],
    },
    gender: {
      type: String,
      enum: ["male","female","other"]
    },
	dob: {
		type: Date
	},
	address: {
		type: String,
	},
	address2: {
		type: String
	},
	postal: {
		type: String
	},
    provider: {
      //Facebook, twitter, google
      type: String,
      // required: true,
    },
    providerId: {
      //FacebookId, twitterId, googleId
      type: String,
      // required: true,
      unique: true,
    },
    accessToken: {
      //FacebookAccessToken, twitterAccessToken, googleAccessToken
      type: String,
    },
    refreshToken: {
      //oath
      type: String,
    },
    accessTokenSecret: {
      //twitterAccessTokenSecret
      type: String,
    },
  },
  {
    timestamps: true, //Adds a 'createdAt' and a 'updatedAt'
	virtuals: {
		firstName: {
			get() {
				return this.full_name.split("|")[1];
			}
		},
		title: { get() { return this.full_name.split("|")[0]; } },
		surname: { get() { return this.full_name.split("|")[3]; } },
		otherNames: { get() { return this.full_name.split("|")[2].split(","); } },
	}
  }
);

/**
 * The administrators schema for the mongoose database.
 */
const adminSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    immutable: true,
  },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    immutable: true,
  },
  passcode: {
    type: mongoose.Schema.Types.String,
    required: true,
  }
}, {
  timestamps: true
})

/**
 * The account schema for the mongoose database. The properties include:
 * - `_id` - the primary key of the schema which is a type of `Schema.Types.ObjectId`
 * - `username` - the username which is a type of `Schema.Types.String`
 * - `password` - the password which is a type of `Schema.Types.String`
 * - `email` - the email which is a type of email model and actual uses the `Email` model as a reference during population
 * - `phone` - the phone which is a type of phone model and actual uses the `Phone` model as a reference during population
 * - `full_name` - the full_name which is a type of `Schema.Types.String`.This is in the form `Title`|`first name`|`Other names separated by comma`|`surname`
 * - `photos` - the photos which is a type of `Schema.Types.String` array where each item is either a file or a http url
 * - `gender` - the gender which is a type of `Schema.Types.String` with one of 3 possible values `male`, `female` and `other`
 * - `dob` - the date-of-birth which is a type of `Schema.Types.Date`
 * - `address` - the primary address of the user which is a type of `Schema.Types.String`
 * - `address2` - the secondary address of the user which is a type of `Schema.Types.String`
 * - `postal` - the postal number of the user as a type of `Schema.Types.String`
 * - `provider` - the provider which is a type of `Schema.Types.String`. This is the authentication provider in the case of external authentication.
 * - `providerId` - the providerId which is a type of `Schema.Types.String`. This is always required for external auth.
 * - `accessToken` - the accessToken which is a type of `Schema.Types.String`. This is always required for external auth.
 * - `refreshToken` - the refreshToken which is a type of `Schema.Types.String`. This is always required for Oauth2.0 (Google).
 * - `accessTokenSecret` - the accessTokenSecret which is a type of `Schema.Types.String`. This is always required for Twitter auth.
 * - `createdAt` - a time stamp value specifying when this value was created
 * - `updatedAt` - a time stamp value specifying when this value was last updated and saved
 * External authentication is when a user is not authenticated in this server but through a provider such as Facebook, Twitter or Google.
 * When a user is authenticaticated this way, the password field will be `undefined` along with the `phone` and gender for some providers.
 */
const Account = mongoose.model("Account", accountSchema);
/** The properties include:
 * - `_id` - the primary key of the schema which is a type of `Schema.Types.ObjectId`
 * - `accountId` - the accountId which is a type of `Schema.Types.ObjectId`. This is the `_id` property which is used by the user in the `Account` database, but this cannot be referenced with `populate` method
 * - `passcode` - the passcode which is a type of `Schema.Types.String`
 * - `createdAt` - a time stamp value specifying when this value was created
 * - `updatedAt` - a time stamp value specifying when this value was last updated and saved
 */
const Administrators = mongoose.model("Administrators", adminSchema);
export default Account;
export {Administrators};
