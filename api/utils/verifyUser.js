import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
 
  const token = req.cookies.access_token;
 
  if (!token) {
    return next(errorHandler(401, "Unauthriozed User"));
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
    if (error) {
      return next(errorHandler(401, "Unauthriozed User"));
    }
    req.user = user;
    next();
  });
};
