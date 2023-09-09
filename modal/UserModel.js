import mongoose from "mongoose";
import validator from "validator";

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    maxLength: 10,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
  },
});

//Export the model
const User = mongoose.model("User", userSchema);
export default User;
