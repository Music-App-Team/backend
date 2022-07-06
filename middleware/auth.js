import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  try {
    const token = req.headers.token;
    const user = jwt.decode(token);
    if (user) {
      req.user = user;
      next();
    } else res.status(401).send({ message: "access denied" });
  } catch (err) {
    res.status(401).send({ message: "access denied" });
  }
};
