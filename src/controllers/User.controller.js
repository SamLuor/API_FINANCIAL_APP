import { userServiceCreate } from "../services/User.services.js";

const create = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    req.createdAt = new Date();

    if (!name || !username || !email || !password) {
      res.status(400).send({ message: "Preencha todos os campos" });
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

export default { create };
