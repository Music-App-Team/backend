import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check exist email in user table or not
    const user = await User.findOne({ email });

    // if not found send error 401 , return ...
    if (!user)
      return res
        .status(401)
        .send({ message: "username or password incorrect" });

    // if found check password is equal or not
    const passwordMatch = await bcrypt.compare(password, user.password);

    // if not equal :send error 401 , return ...
    if (!passwordMatch)
      return res
        .status(401)
        .send({ message: "username or password incorrect" });

    // if equal send token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.send({
      token: token,
      userInfo: {
        image: user.image,
        email: user.email,
        fullName: user.firstName + " " + user.lastName,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: "server error",
      error: e.message,
    });
  }
};
export const signup = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).send({ message: "email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    user = await user.save();

    res.send({
      message: "sign up successfully",
    });
  } catch (e) {
    res.status(500).send({
      message: "server error",
      error: e.message,
    });
  }
};
