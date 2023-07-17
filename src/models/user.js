import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
});
mongoose.model = {};
export const User = mongoose.model("User", schema);
