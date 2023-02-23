import { config } from "../config";

const jwt = require("jsonwebtoken");

export const authenticateJwt = (req, res, next) => {
  try {
    const bearerHeader = req.headers.authorization;
    if (!bearerHeader) {
      res.status(401).json({ message: "No authorization" });
    }

    const token = bearerHeader.split(" ")[1];
    const decoded = jwt.verify(token, config.authentication.tokenSecret);

    req.userData = {
      decoded: decoded
    };

    next();
  } catch (error) {
    res.status(401).json({ message: "No authorization" });
  }
};