import User from "../models/User.model.js";

export const userServiceCreate = (body) => User.create(body);

export const userServiceFindById = (id) => User.findById(id);

export const userServiceDelete = (id) => User.findByIdAndRemove(id);
