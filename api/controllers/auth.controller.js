import { errorHandler } from "../utils/error.js";
import User from "./../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res, next) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    (username === "") | (email === "") ||
    password === ""
  ) {
    next(errorHandler(400, "All Fields are required"));
    //return res.status(400).json({ message: "All Fields are required" });
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  console.log("new user ", newUser);
  try {
    await newUser.save();
    res.json({ message: "SignUp successful !" });
  } catch (error) {
    next(error);
    // res.status(500).json({ message: error.message });
  }
};
