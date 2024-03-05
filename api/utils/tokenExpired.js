import jwt from "jsonwebtoken";
export const checkTokenExpiry = (req, res, next) => {
  const token = req.cookies.access_token;
  /* Retrieve the token from the request (e.g., req.cookies.access_token) */ if (
    !token
  ) {
    return res.status(401).json({ error: "Unauthorized - No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }

    const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds

    if (decodedToken.exp < currentTime) {
      // Token is expired
      return res.status(401).json({ error: "Unauthorized - Token expired" });
    }

    // Token is valid
    next();
  });
};

// Apply the middleware to routes that require authentication
