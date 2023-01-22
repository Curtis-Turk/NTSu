import jwt from "jsonwebtoken";

export default function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(404).json({ message: "No Token provided" });
  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) return res.status(400).json({ message: "Auth Expired" });
    req.user = user;
    next();
  });
}
