import { errorHandler } from "../utils/error.js";
import User from "./../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
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
  // checking if the any user exist with the same name;
  const userName = await User.findOne({ username: username });
  if (userName) {
    //return res.status(403).json("A user is already exist with this email");
    next(errorHandler(403, "A user is already exist with this User Name"));
  }
  // checking if the any user exist with the same email id ;
  const userEmail = await User.findOne({ email: email });
  if (userEmail) {
    //return res.status(403).json("A user is already exist with this email");
    next(
      errorHandler(
        403,
        "A user is already exist with this email , Please try with a different email id"
      )
    );
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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    next(errorHandler(400, "All field are required"));
  }
  try {
    const validUser = await User.findOne({ email: email });
    if (!validUser) {
      return next(errorHandler(404, "User Not Found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Enter a Valid password"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "24h",
    });
    //setting token to browser cookies.
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(validUser);
  } catch (error) {
    next(error);
  }
};