import {
  userServiceCreate,
  userServiceDelete,
} from "../services/User.services.js";

const create = async (req, res) => {
  try {
    const { name, username, email, password, otp } = req.body;
    req.createdAt = new Date();

    if (!name || !username || !email || !password || !otp) {
      res.status(400).send({ message: "Preencha todos os campos" });
    }

    if (otp != "70297") {
      return res.status(400).send({ message: "Invalid Token Acess" });
    }

    const user = await userServiceCreate(req.body);

    if (!user) {
      res.status(400).send({ message: "User not created" });
    }

    res.status(201).send({ message: "User created" });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({ message: "User not found" });
    }

    const userDeleted = await userServiceDelete(id);

    if (!userDeleted) {
      return res.status(400).send({ message: "User not found" });
    }

    return res.send({ message: "User deleted sucessfuly" });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

export default { create, deleteUser };
