import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
const loginService = (username) =>
  User.findOne({ username: username }).select("+password");

const generateToken = (id) =>
  jwt.sign({ id }, process.env.SECRET_JWT, { expiresIn: 7200 });

export default { loginService, generateToken };
