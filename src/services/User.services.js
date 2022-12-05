import User from "../models/User.model.js";

export const userServiceCreate = (body) => User.create(body);
